FROM node:18


# Set the working directory in the container
WORKDIR /app


# Add an argument for the .env.local file
ARG ENV_LOCAL

# Copy the package.json, package-lock.json, and yarn.lock files
COPY package*.json yarn.lock ./

# Install the dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the application files
COPY . .

# Create a .env.local file from the build argument
RUN echo "$ENV_LOCAL" > .env

# Build the Next.js app
RUN yarn build

# Expose the server port
EXPOSE 3000

# Start the Next.js app
CMD ["yarn", "start"]

