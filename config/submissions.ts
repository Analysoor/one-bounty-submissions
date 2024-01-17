export type Submission = {
  name?: string,
  description: string,
  authorGithub: string,
  authorTwitter?: string,
  artPiecesUrl: string[]
}

export const submissions: Submission[] = [
  {
    name: 'Fractaloom',
    description: 'A friend of mine working in web3 asked me to create some arts, so spent some spare time to it. I chose to create geometric art as it offers an effective means to produce distinct individual artworks within a large collection. I utilised the blockhashPickedNumber to select the color palettes and slot to manage the randomness of mathematical transformations applied to geometric shapes. This idea of doing mathematical transformations was inspired by the blockchain hashing transformations.',
    authorGithub: 'Fractaloom',
    artPiecesUrl: ['/submissions/Fractaloom/1.jpg', '/submissions/Fractaloom/2.jpg', '/submissions/Fractaloom/3.jpg', '/submissions/Fractaloom/4.jpg']
  },
  {
    name: 'clouds',
    description: 'This submission is called clouds it utilizes the parentslot and blocktime for the walk algorithm. The colors are currently chosen by using the last digit of the blockheight, but I will play around more with the incorporation of the data in the generation.',
    authorGithub: 'kub811',
    artPiecesUrl: ['/submissions/clouds/1.png', '/submissions/clouds/2.png', '/submissions/clouds/3.png', '/submissions/clouds/4.png']
  },
  {
    name: 'The power of one',
    description: 'Twitter username: ＠vfEHV4x9G30yLi3\n' +
      '\n' +
      'Title of the Work\n' +
      'The power of one\n' +
      '\n' +
      'Description of the Work\n' +
      'As a fan of One NFT, I\'ve always been fascinated by the eyes in the One avatar. They are cool and mysterious, like a galaxy in the night sky, illuminating everyone on the blockchain. Thus, this piece was born.\n' +
      'The dataset I used primarily consists of \'slot\' and \'blockhashPickedNumber\'. Usually, the slot has nine digits, which I transformed into RGB values to serve as the main conditions affecting the color. The \'blockhashPickedNumber\' influences the complexity and brilliance of the graphics. Each stroke represents the encounters and collisions of One holders within the blockchain, eventually weaving together into a grand NFT project. With different \'blockhashPickedNumber\', this work can have countless variations (definitely more than 10,000), sometimes resembling an eye, sometimes the paths of Atlantis, and sometimes a galaxy…\n' +
      'Let\'s play together!\n' +
      '\n' +
      'Language Used\n' +
      'P5.js',
    authorGithub: 'aa89150706',
    authorTwitter: 'vfEHV4x9G30yLi3',
    artPiecesUrl: ['/submissions/ThePowerOfOne/1.mp4', '/submissions/ThePowerOfOne/2.jpg', '/submissions/ThePowerOfOne/3.jpg', '/submissions/ThePowerOfOne/4.jpg', '/submissions/ThePowerOfOne/5.jpg', '/submissions/ThePowerOfOne/6.jpg']
  },
  {
    name: 'Digital hand print',
    description: 'I read on Twitter that we can submit more than 1 proposal so I am going to submit 3 proposals in total. This one is in the same style of the previous one but it \'s more of a unique \'digital hand print\' if AI and Blockchain would have a relationship.\n\nThe core of the project lies in its ability to transform this data into visual elements. The blockhash is used to derive a color scheme, influencing the hues and shades of the particles in the artwork. The blockhashPickedNumber and slot values influence the density and movement of these particles, ensuring that each piece of art is a unique representation of the blockchain data it\'s derived from.',
    authorGithub: 'macovei009',
    artPiecesUrl: ['/submissions/DigitalHandPrint/1.png', '/submissions/DigitalHandPrint/2.png', '/submissions/DigitalHandPrint/3.png', '/submissions/DigitalHandPrint/4.png', '/submissions/DigitalHandPrint/5.png', '/submissions/DigitalHandPrint/6.png']
  },
  {
    name: 'Gidon',
    description: 'I have created a generative art piece which is my first submission. I based this artwork on my previous work, but updated the data using the dataset provided. I used data from hash nft_mint and blockhash for the radius, and for the custom random function I used data from inblock_program. Additionally, I used the dataset count as an additional multiplier for visual generation.\n' +
      '\n' +
      'all code using p5js.',
    authorGithub: 'irvanrahadhian',
    artPiecesUrl: ['/submissions/Gidon/1.mov', '/submissions/Gidon/2.png', '/submissions/Gidon/3.png', '/submissions/Gidon/4.png']
  },
  {
    name: 'PAINT PENDULUM',
    description: 'PAINT PENDULUM\n' +
      '\n' +
      '(written with p5js)\n' +
      '\n' +
      'After hearing about the one art bounty and its guidelines to create generative art inspired by AI and blockchain, I thought for a while and decided to tackle the challenge and create generative art algorithm named PAINT PENDULUM\n' +
      'Why? Because I believe AI is getting better and better at becoming one with the real world. Same goes with blockchain – we are trying to make it mainstream and user friendly.\n' +
      'Pendulum painting takes advantage of physics, which is the science that amongst other things describes mechanical behaviour of our world.\n' +
      'Based on this, I decided to merge the real world with what is becoming part of our every day and created the digital version of pendulum painting.\n' +
      '\n' +
      'I started with modelling the physics of spherical pendulum. Then I added custom brush, so the paint trace looks more realistic compared to computer generated vertex, but does not look as perfect, which emphasizes the connection between our digital future and our current world.\n' +
      '\n' +
      'Each art piece generated from this algorithm depends on the block data. Block hash is being used as the random generator’s seed; average fee influences the colour.\n' +
      'Amount of successful and failed transactions dictate the shape of paint trace on the canvas.\n' +
      'Successful transactions with most and least fees dictate amount of layers, failed transactions with most and least fees influence how zoomed the paint trace is.\n' +
      '\n' +
      'Here are 5 example renders created by PAINT PENDULUM algorithm:',
    authorGithub: 'DominikkMaximus',
    artPiecesUrl: ['/submissions/PaintPendulum/1.png', '/submissions/PaintPendulum/2.png', '/submissions/PaintPendulum/3.png', '/submissions/PaintPendulum/4.png', '/submissions/PaintPendulum/5.png']
  },
  {
    name: 'mathorboard',
    description: 'Hey everyone, Solana OG here👋 IRL, I’m a computational research scientist focused on machine learning. I like to think of all of my generative work as a collaboration between my machine and me. Here is my take on ONE, coded with p5js:\n' +
      '\n' +
      'I started with the mental image of a motherboard as my inspiration. A motherboard is the central circuit within a computer, and the idea itself sort of acts as the motherboard of this algorithm. The different components of a motherboard serve different purposes for the circuit, just as the different shapes that compose the pieces evoke different feelings.\n' +
      '\n' +
      'The overlapping of shapes represents the way that distinct pieces of data are integrated in a computational model. For example, a natural language processor like ChatGPT uses learned relationships between words to dictate attention and ultimately lead to a focused output. These relationships can be represented in a 2D vector space as distance.\n' +
      '\n' +
      'From a random sampling of transactions, the first character of a blockhash determines how many groups of shapes there are in the piece and where they are placed. The sum of all characters (assigned numbers by alphabet order) in the blockhash determines color (including background, number of colors in the piece, and order of colors used). These two properties dictate the overall look and feel of the piece, similar to how a block describes the general functionality and sequence of blockchain events.\n' +
      '\n' +
      'The vote authority keypair and its sum determines the amount and size of vertical and horizontal glitch. The vote authority must handle many transactions, and the movement that the glitch creates represents this high-speed demand. It shows the challenges of receiving a bombardment of inputs, just like a vote authority, and just like us humans living in this age of big data with more information than we know how to process.\n' +
      '\n' +
      'Overall, the collection is unified in its color scheme, making it a cohesive ONE whole: it could depict one community, one transaction, one set of mint s(as is the case here), one idea, one network, one blockchain.\n' +
      '\n' +
      'I had so much fun reflecting on the prompt and collaborating with my computer to make the final product. Here are a sampling of five outputs, (originally 4000x4000 px, but scaled down for posting).\n' +
      '\n' +
      'I also posted a thread similar to this post on Twitter with a few more outputs if you are curious: https://x.com/subaruimpreza09/status/1746967587462791240?s=20',
    authorGithub: 'subaruimpreza09',
    authorTwitter: 'subaruimpreza09',
    artPiecesUrl: ['/submissions/motherboard/1.png', '/submissions/motherboard/2.png', '/submissions/motherboard/3.png', '/submissions/motherboard/4.png', '/submissions/motherboard/5.png']
  },
  {
    name: 'KLER',
    description: 'SHE/HER\n' +
      'KLER\n' +
      'Twitter https://x.com/kler_btc\nIn the vibrant digital ecosystem of the Solana blockchain, each transaction and minting event is more than a mere exchange—it\'s the potential for creation. From this potential arises "ONE_SQLANA," With the tick = 0001 a generative art piece that is as much an artifact of technology as it is a work of art. Showcasing the ability of fair mints in the current botting Meta.This unique piece draws its life from a specific block within Solana\'s ledger, encapsulating its essence and history in visual form.\n' +
      '\n' +
      'The artwork\'s genesis is anchored in the "slot" — a specific block where the NFT was minted, representing a precise timestamp within the blockchain. The "blockhash," a cryptographic signature of the block, provides a complex palette of data, translated into the the rhythm of its design.\n' +
      '\n' +
      'The resulting image is a constellation of dots, each one a pixelated echo of the block\'s activity. The chosen blockhashPickedNumber, steers the density of the pattern, creating a harmonious balance between simplicity and complexity. This number, seemingly small, is pivotal in crafting the visual representation of the block\'s singular moment in time.\n' +
      '\n' +
      'As "ONE_SQLANA" emerges from the data, it does more than capture a block\'s essence; it tells the story of a particular slice of blockchain life—a story of commerce, lending, swapping, and financing, all within the decentralized world of Solana that lies within that block transaction . And at the heart of this story is the "winning_tx," a transaction that stands out,A winner is born = 1 successful mint ,its significance immortalized in the artwork\'s core, a beacon within the generative dance of dots and light.\n' +
      '\n' +
      'The visual output of "ONE_SQLANA" indeed seems to be a direct representation of the provided blockchain data and the code. Each concentric circle of dots and hues within the artwork symbolizes the unique data elements sourced from the Solana blockchain:\n' +
      '\n' +
      '    The "blockhash" dictates the color scheme of the artwork, with each set of 6 characters translated into vibrant hues, saturations, and brightness values, creating a rich tapestry of colors that define the piece\'s overall aesthetic.\n' +
      '    The "blockhashPickedNumber" influences the number of primary circles, adding a layered complexity to the art, indicating a higher level of intricacy within the piece.\n' +
      '    The "slot" number subtly modulates the density and distribution of the dots, suggesting a connection between the moment the NFT was minted and the visual density of the pattern.The ability for circles connecting depicts IT’s Neural Capabilities.\n' +
      '\n' +
      'The code itself is designed to bring these elements together, using p5.js functions to interpret and manifest the blockchain data into a generative art form. The overlayText function places the collection\'s name and the Ticker and a NFT\'s sequence number prominently, honoring the individuality of the piece within the series.\n' +
      '\n' +
      'This artwork is a tribute to the blockchain\'s power to encode not just data, but beauty; not just transactions, but stories. It is a reminder of the intricate dance between form and function, art and algorithm, and the ever-present human desire to find meaning in the numbers that shape our digital world.',
    authorGithub: 'linobaby',
    authorTwitter: 'kler_btc',
    artPiecesUrl: ['/submissions/KLER/1.png', '/submissions/KLER/2.png', '/submissions/KLER/3.png', '/submissions/KLER/4.png']
  },
  {
    name: 'ONE City 🌆',
    description: 'ONE City 🌆\n' +
      '\n' +
      'Imagine ONE City as a digital artwork where each building tells a unique story about blockchain transactions. The design of every building is determined by specific details from NFTs.\n' +
      '\n' +
      'Think of the NFT_mint address as a special code that shapes the look of each building. It\'s like a blueprint that influences the way the buildings stand and how they\'re put together.\n' +
      '\n' +
      'Now, picture colorful waterfalls flowing down these buildings. The length and appearance of these waterfalls are decided by the slot number of each NFT. This number brings a lively and dynamic vibe to the city, making it feel alive and connected.\n' +
      '\n' +
      'Some buildings in the city stand out with vibrant colors. These special ones are winners, marked by winning_tx data. It\'s like a signature or a colorful paint stroke that makes these buildings pop.\n' +
      '\n' +
      'Besides, we also have blockhash and blockhashPickedNumber adding extra details. They\'re like ingredients that make the city even more interesting and full of depth. Check out the ONE City arts below:\n' +
      '\n' +
      'These generative arts are created using p5.js.',
    authorGithub: 'Sharvinm05',
    artPiecesUrl: ['/submissions/ONECity/1.png', '/submissions/ONECity/2.png', '/submissions/ONECity/3.png', '/submissions/ONECity/4.png', '/submissions/ONECity/5.png']
  },
  {
    name: 'the first 25 transaction',
    description: 'Text is generated from the first 25 transaction signatures in the block.\n' +
      '\n' +
      'In this way data unique to that block is encoded directly into the art.\n' +
      '\n' +
      'Color schemes are generated from the block hash.\n' +
      '\n' +
      'Wanted something minimalist with variety that will still look decent even as a tiny NFT marketplace preview pic.\n' +
      '\n' +
      'Hope you enjoy',
    authorGithub: 'lostintime101',
    artPiecesUrl: ['/submissions/TheFirst25Transaction/1.gif', '/submissions/TheFirst25Transaction/2.gif', '/submissions/TheFirst25Transaction/3.gif', '/submissions/TheFirst25Transaction/4.gif']
  },
  {
    name: 'Introspection',
    description: 'Introduction\n' +
      '\n' +
      'I am excited to present my first proposal for ONE made with React and Three.JS named Introspection.\n' +
      'My concept revolves around mixing data visualization in a clean and pleasing way.\n' +
      'Block art should in my opinion use has much data available from the block and transaction(s) that made the NFT come alive.\n' +
      'It is to my knowledge the only attempt to have a proper visualization of a block on Solana, and maybe from any chain.\n' +
      '\n' +
      'Below, I outline the key features of this and most of my next proposals.\n' +
      'Key Features and Goals\n' +
      '\n' +
      '    Everything has a meaning. From the width, height, depth of each block (one block = one transaction), to their colors.\n' +
      '    Their size depends on the token volume within the transaction, the byte size of the transaction and the number of instructions it contains.\n' +
      '    Blue blocks represents the mint attempts, and in some blocks it gets quite crazy, the green block is the transaction who won the mint, a black block is a transaction that was rejected/errored out. The blocks are arranged using a packing algorithm\n' +
      '    Square Format: Each piece will be designed in a square format, ensuring uniformity and compatibility across various display platforms.\n' +
      '    Visibility at a Distance: Careful consideration will be given to the composition and color contrast, ensuring each artwork maintains its appeal even when viewed from a distance.\n' +
      '    Rarity Factors: Rarity will be derived from a combination of elements such as block ID, metadata, transactions, if the block ID is prime numbers or perfect numbers which are both related and use in cryptography.\n' +
      '    Chaos and Uniqueness: The generation process is crafted to produce chaos/randomness, creating a collection of 10,000 unique pieces. The randomness may be driven by various transactions or block inputs.\n' +
      '    Evaluation of Uniqueness: To assess the uniqueness of the generative system, each of my submissions has been simulated on more than 100 pieces. This is based on the principle that a good sample size for a collection of 10,000 is about 70 samples, as per Qualtrics\' guidelines on sample size.\n' +
      '    Dark and White Modes: The pieces will be in dark or white modes, to make sure that collectors can collect the pieces that can look good in a white or dark environment/website.\n' +
      '    Animated 3D View: An animated 3D view option will be available.\n' +
      '    Color Palettes: The artworks will feature multiple color palettes, inspired by famous movies, artists, and the Solana ecosystem. Special palettes are available based on specific conditions.\n',
    authorGithub: 'QTimort',
    authorTwitter: 'TimortUnchained',
    artPiecesUrl: ['/submissions/Introspection/0.png', '/submissions/Introspection/1.png', '/submissions/Introspection/2.png', '/submissions/Introspection/3.png', '/submissions/Introspection/4.png', '/submissions/Introspection/5.png', '/submissions/Introspection/6.png', '/submissions/Introspection/7.png']
  },
  {
    name: 'ONE_BIT',
    description: 'Introduction\n' +
      '\n' +
      'This will be my second proposal for ONE made using p5.js named ONE_BIT.\n' +
      'My concept revolves around using the transactions contained within the block where the NFT was minted and display each transaction in a very minimalistic and clean way.\n' +
      'Key Features and Goals\n' +
      '\n' +
      '    Please check my first proposal regarding the key features and goals as they are similar within all my proposals.\n' +
      '    The algorithm uses perlin noise and transaction information to display interesting shapes and colors.\n' +
      '    This proposal comes in dark mode only.\n',
    authorGithub: 'QTimort',
    authorTwitter: 'TimortUnchained',
    artPiecesUrl: ['/submissions/ONE_BIT/1.png', '/submissions/ONE_BIT/2.png', '/submissions/ONE_BIT/3.png', '/submissions/ONE_BIT/4.png', '/submissions/ONE_BIT/5.png', '/submissions/ONE_BIT/6.png', '/submissions/ONE_BIT/7.png']
  },
  {
    name: '0xFADED',
    description: 'Introduction\n' +
      '\n' +
      'This will be my third proposal for ONE made using p5.js named 0xFADED. A reference to the hexagonal shape and hexadecimal.\n' +
      'My concept revolves around using various information about the block to tweak a recursive hexagon rendering algorithm which contains many hexagon within ONE single root hexagon.\n' +
      'The feel is clean and modern while allowing many interesting patterns and shapes.\n' +
      'Key Features and Goals\n' +
      '\n' +
      '    Please check my first proposal regarding the key features and goals as they are similar within all my proposals.\n',
    authorGithub: 'QTimort',
    authorTwitter: 'TimortUnchained',
    artPiecesUrl: ['/submissions/0xFADED/1.png', '/submissions/0xFADED/2.png', '/submissions/0xFADED/3.png', '/submissions/0xFADED/4.png', '/submissions/0xFADED/5.png', '/submissions/0xFADED/6.png', '/submissions/0xFADED/7.png']
  },
  {
    name: 'TxVortex',
    description: 'Introduction\n' +
      '\n' +
      'This will be my Sixth proposal for ONE made using p5.js named TxVortex. A reference to how the block transactions affects the fluid simulation.\n' +
      'My concept revolves around using a fluid simulation to display shades of color while also directing the direction and shape of the objects on the field.\n' +
      'There can be a square, rhombus (diamond), line, triangle, or all at once which creates interesting gapes, patterns or noise.\n' +
      'Key Features and Goals\n' +
      '\n' +
      '    Please check my first proposal regarding the key features and goals as they are similar within all my proposals.',
    authorGithub: 'QTimort',
    authorTwitter: 'TimortUnchained',
    artPiecesUrl: ['/submissions/TxVortex/1.png', '/submissions/TxVortex/2.png', '/submissions/TxVortex/3.png', '/submissions/TxVortex/4.png', '/submissions/TxVortex/5.png', '/submissions/TxVortex/6.png', '/submissions/TxVortex/7.png', '/submissions/TxVortex/8.png']
  },
  {
    name: 'Tapis',
    description: 'I am pleased to present my seventh and final proposal for ONE, crafted using p5.js and titled Tapis. The name \'Tapis\', which translates to \'carpet\' in English, is a nod to the linear shapes and patterns that resemble intricate tilework and patterns founds on oriental carpet. This proposal represents an evolution from my previous work. Unlike earlier iterations where fluid simulations were used to generate colors and direct numerous objects, in Tapis we explore a new dimension. Here, the strength of the fluid\'s flow force determines the size and dynamics of curves, which gracefully trace the movement of the fluid field.\n' +
      '\n' +
      'This concept is inspired by the renowned Fidenza generative art collection, yet it brings a fresh patterns that gracefully unfold along curves. This technique not only adds depth to the visual experience but also pays homage to the classic Fidenza style, reimagining it through Tapis.\n' +
      'Only a limited number of palette are showcased to make the reveal process more mysterious and\n' +
      'Key Features and Goals\n' +
      '\n' +
      '    Please check my first proposal regarding the key features and goals as they are similar within all my proposals.',
    authorGithub: 'QTimort',
    authorTwitter: 'TimortUnchained',
    artPiecesUrl: ['/submissions/Tapis/1.png', '/submissions/Tapis/2.png', '/submissions/Tapis/3.png', '/submissions/Tapis/4.png', '/submissions/Tapis/5.png', '/submissions/Tapis/6.png']
  },
  {
    name: 'simplicity is the key',
    description: 'I believe simplicity is the key. I have used blockhash,slot and blockhashpicked number to generate a not so random imagery. See below my work',
    authorGithub: 'kevmau5',
    artPiecesUrl: ['/submissions/SimplicityIsTheKey/1.png', '/submissions/SimplicityIsTheKey/2.png', '/submissions/SimplicityIsTheKey/3.png', '/submissions/SimplicityIsTheKey/4.png', '/submissions/SimplicityIsTheKey/5.png']
  },
  {
    name: '',
    description: 'In my submission I wanted to focus more on the art side and I wanted every NFT in the collection to look as unique and different as possible with beautiful and eye catching color palettes, for this I made a total of 7 patterns/traits . I also wanted to give representation to some of the top NFT collection on Solana blockchain, so i also made 1/1 honories for these collection. So a total of 8 traits/patterns. I have provided 3 sample images for each trait and 1 sample image for a mad lad honory below.\n' +
      '\n' +
      'I have used Python and P5.js to generate this artwork. Each NFT is generated from the block hash. the Patterns and the color palette are chosen based on the block hash of the NFT to generate this artwork. I also added the block hash from which the NFT was derived from, on the top of the NFT . I have also included a flow chart in the end below for all the patterns/traits. ( for easy to read/see)',
    authorGithub: 'goujou-o',
    artPiecesUrl: ['/submissions/goujou-o/1.png', '/submissions/goujou-o/2.png', '/submissions/goujou-o/3.png', '/submissions/goujou-o/4.png', '/submissions/goujou-o/5.png', '/submissions/goujou-o/6.png', '/submissions/goujou-o/7.png', '/submissions/goujou-o/8.png', '/submissions/goujou-o/9.png', '/submissions/goujou-o/10.png', '/submissions/goujou-o/11.png', '/submissions/goujou-o/12.png', '/submissions/goujou-o/13.png', '/submissions/goujou-o/14.png', '/submissions/goujou-o/15.png', '/submissions/goujou-o/16.png', '/submissions/goujou-o/17.png', '/submissions/goujou-o/18.png', '/submissions/goujou-o/19.png', '/submissions/goujou-o/20.png', '/submissions/goujou-o/21.png', '/submissions/goujou-o/22.png']
  },
  {
    name: 'The Block Theory',
    description: 'The Block Theory | ONE collection\n' +
      'This collection is based on three simple pillars:\n' +
      '\n' +
      '    Maintain simple figures that can be easily recognised\n' +
      '    Color Theory, in order to enhance the sentimental value of each piece\n' +
      '    Use math sequences & numbers properties to finalise the artwork\n' +
      '\n' +
      'Algorithm for art generation is written in p5js\n' +
      '\n' +
      'Each painting is made of simple squares that recall the idea of blockchain and the computational power of AI.\n' +
      '\n' +
      'In order to achieve a lot of variability and maintain the property of NFTs collection, which includes rarities, I have compiled a list of traits that change based on the blockchain data analysed.\n' +
      '\n' +
      'In particular, below you can find an example of metadata for a specific NFT and the finalised picture.\n' +
      '\n' +
      '    Color Theory: Black (each blockhashPickedNumber has its own color associated dividing the collection I 9 “sub collections” of emotions/feelings/perception as this is subjective to the collector feelings generated by each piece)\n' +
      '    Identity: Odd, this define the orientation of the lines, vertical in this case\n' +
      '    Fibonacci: 4, this defines the number of lines present in the artwork (from 2 to 6) this number is extracted from the slot value and counts the fibonacci numbers present in all the combination of numbers generated by that slot\n' +
      '    Complexity: 3, determines the amount of squares per line (12 in this case) extracted by the in_block_programs elements\n' +
      '    Density: Low, determines a multiplier applicated to the number of squares and has a value of 1.618 (Golden Ratio) when the value is High, extracted from blockhash\n' +
      '    Dimension: 2, determines the smaller a square can be and its extracted from a in_block_programs iteration and ranges from 2 to 10\n' +
      '    Emptiness: 20%, determines the amount of not filled squares based on an iteration of the full_block_data string\n' +
      '    Squares\' coordinates are randomised, but hashed from the nft_mint string\n' +
      '    The subCanva where shapes are drawn is roughly 2.718 (Euler Number) smaller than the whole canva\n' +
      '\n' +
      'Below you can find an example of a final NFT which respect the metadata example of above as well as 3 other different iteration of the same color to show how rarity affects the NFTs.',
    authorGithub: 'realunknownmasow',
    artPiecesUrl: ['/submissions/TheBlockTheory/1.png', '/submissions/TheBlockTheory/2.png', '/submissions/TheBlockTheory/3.png', '/submissions/TheBlockTheory/4.png', '/submissions/TheBlockTheory/5.png']
  },
  {
    name: 'Harmony in Blocks',
    description: 'Harmony in Blocks\n' +
      '\n' +
      'This art piece I created is all about blending blockchain vibes with a touch of AI. Imagine it as our visual journey into the ONE collection. What\'s cool is that each block you see, those circles and lines – has its own unique style and rhythm, specifically tailored to its NFT_mint address.\n' +
      '\n' +
      'Design Concept:\n' +
      '\n' +
      'Think of it like a playlist, but for blocks. Each one has its own beat, groove, and design that\'s kind of like a signature move. All based on the NFT_mint address it represents. It\'s like giving each block its own personality.\n' +
      '\n' +
      'NFT Data Integration:\n' +
      '\n' +
      'The winning_tx value? It\'s like the behind-the-scenes DJ that decides the color scheme and gives a little flair to each block. So, each NFT has this special code that adds a unique touch to the overall look – your digital fingerprint on the canvas.\n' +
      '\n' +
      'Defi Swaps Exploration:\n' +
      '\n' +
      'The vertical lines in the art below are like doors to the world of decentralized finance. Each one represents a different exchange – "orca," "jupiter," "meteora," and "raydium." It\'s a way to peek into the financial side of things in the blockchain world.\n' +
      '\n' +
      'Borders and Boundaries:\n' +
      '\n' +
      'Okay, breaking it down – the lines and circles don\'t stick to the usual borders. It\'s not a mistake; it\'s intentional. It\'s showing that your NFT isn\'t confined to any limits. It\'s a statement about the freedom and flexibility of blockchain tech.\n' +
      '\n' +
      'It\'s like turning your NFT data block into your personalized playlist.',
    authorGithub: 'Macstar-x',
    artPiecesUrl: ['/submissions/HarmonyInBlocks/1.png', '/submissions/HarmonyInBlocks/2.png', '/submissions/HarmonyInBlocks/3.png', '/submissions/HarmonyInBlocks/4.png', '/submissions/HarmonyInBlocks/5.png']
  },
  {
    name: 'letters and numbers',
    description: 'Each letter, crafted from letters and numbers pulled straight from a hash code, dances and shimmers in a symphony of motion.\n' +
      'Imagine this:\n' +
      'This isn\'t just a logo. It\'s a living, breathing expression of your brand\'s individuality.\n' +
      'Here\'s how this p5.js code makes it happen:\n' +
      '\n' +
      '    Your Hash Code, Your Palette:\n' +
      '        Every animation is born from a unique hash code, unlocking a limitless spectrum of color combinations.\n' +
      '        No two animations are alike, ensuring each NFT stands out with a truly one-of-a-kind visual identity.\n' +
      '    Code Meets Creativity:\n' +
      '        The letters and numbers from your hash code weave themselves seamlessly into the word "ONE," creating a captivating visual interplay.\n' +
      '        The animation breathes life into your NFT, transforming it from a static image into an engaging, dynamic experience.\n' +
      '        The NFT that real degens always desired!\n',
    authorGithub: 'nauseousboy',
    artPiecesUrl: ['/submissions/LettersAndNumbers/1.mp4', '/submissions/LettersAndNumbers/2.mp4', '/submissions/LettersAndNumbers/3.mp4', '/submissions/LettersAndNumbers/4.mp4', '/submissions/LettersAndNumbers/5.mp4']
  },
  {
    name: 'ONE Diamond',
    description: 'Theme: ONE Diamond\n' +
      'Author: @bigpaperhand // Twitter',
    authorGithub: 'bigpaperhand',
    authorTwitter: 'bigpaperhand',
    artPiecesUrl: ['/submissions/ONEDiamond/1.jpg', '/submissions/ONEDiamond/2.jpg', '/submissions/ONEDiamond/3.jpg', '/submissions/ONEDiamond/4.jpg']
  },
  {
    name: 'SOLARIS',
    description: 'SOLARIS is a generative data sculpture representing data flow through nodes of blockchain and is based on the sequence of transactions in the block, with each new transaction giving a new direction to the data flow. Data sculpture is adorned with various views on block and transactions data and elements of the data sculpture in a generative layout.\n' +
      '\n' +
      'Prototype is built in TouchDesigner using custom python glsl builder, ready to be deployed with p5/webgl.\n' +
      '\n' +
      'Creators: orkhan.art & rybnfx',
    authorGithub: 'orkhanart',
    authorTwitter: 'orkhan_art',
    artPiecesUrl: ['/submissions/SOLARIS/1.mp4', '/submissions/SOLARIS/2.mp4', '/submissions/SOLARIS/3.mp4', '/submissions/SOLARIS/4.mp4', '/submissions/SOLARIS/5.mp4', '/submissions/SOLARIS/6.mp4', '/submissions/SOLARIS/7.mp4', '/submissions/SOLARIS/8.mp4', '/submissions/SOLARIS/9.mp4', '/submissions/SOLARIS/10.mp4']
  },
  {
    name: 'Planet ONE',
    description: 'Proposal 1 Planet ONE\n Concept & thoughts\n' +
      'The prevailing trend in inscriptions and SPL20 tokens deployed on the Solana blockchain highlights a lack of uniqueness. Each mint and token lacks individuality. What sets ONE apart is its distinctive mint mechanism designed to combat sniping bots, and there\'s no better way to convey this vision than through generative arts. Initially, each NFT shares a common setting - a planet at the center surrounded by celestial space. This serves as the canvas for the mint data of ONE, where stars and meteors are generated using the "blockhashpickednumber," scattering across the canvas. With every mint, each ONE holder possesses their own unique Planet ONE.',
    authorGithub: 'lancelotcq',
    artPiecesUrl: ['/submissions/PlanetONE/1.png', '/submissions/PlanetONE/2.png', '/submissions/PlanetONE/3.png', '/submissions/PlanetONE/4.png', '/submissions/PlanetONE/5.png']
  },
  {
    name: 'Dynamic Flowing Sphere ONE',
    description: 'Proposal 2 Dynamic Flowing Sphere ONE\nConcept & thoughts\n' +
      'The second concept aims to transform the solid form into a fluid state, shaping patterns that flow in a circular direction. In this sense, it maintains the appearance of a sphere, with fluid elements loosely binding together through spiral movement. The patterns and variations represent the same blockchain data, ensuring that every minted ONE retains a collective outlook while remaining exclusively unique.\n' +
      '\n' +
      'To ensure a fair launch and strong community consensus there is but ONE method among the millions tokens and NFT deployment :)',
    authorGithub: 'lancelotcq',
    artPiecesUrl: ['/submissions/DynamicFlowingSphereONE/1.png', '/submissions/DynamicFlowingSphereONE/2.png', '/submissions/DynamicFlowingSphereONE/3.png', '/submissions/DynamicFlowingSphereONE/4.png', '/submissions/DynamicFlowingSphereONE/5.png']
  },
  {
    name: 'Michelangelo',
    description: 'The art depends on the artist. With this thought I invite you to dive deep into my idea of ONE. When first reading the bounty description, I started thinking about the connection between AI and Blockchain and the purpose of art in all this entanglement. I started with a few sketches and I just couldn t let this idea slip. I present you the creation of ONE - inspired by the Michelangelo famous fresque , this generative art underlay the almost touch between AI and blockchain creating a new dimension of possibilities. Using the data from each and each block every piece is different, using unique color pallete and dimensions of flowkeys through generative art. All NFTs have in common the undying truth that ONE is born at the intersection of the 2 ruling powers and it’s a unique trait reserved to this Collection only.\n' +
      '\n' +
      'Well, I haven\'t slept for 4 days and I wish I had more time to polish it but it is what it is.\n' +
      '\n' +
      'The background is uniquely generated by blockhash and the colour pallete by slot. Every piece is unique and telling a story about the block it was minted in.',
    authorGithub: 'macovei009',
    artPiecesUrl: ['/submissions/Michelangelo/1.png', '/submissions/Michelangelo/2.png', '/submissions/Michelangelo/3.png', '/submissions/Michelangelo/4.png', '/submissions/Michelangelo/5.png']
  },
  {
    name: 'Astros',
    description: 'Title: Astros',
    authorGithub: 'DaniloCostaUX',
    artPiecesUrl: ['/submissions/Astros/1.jpg', '/submissions/Astros/2.jpg', '/submissions/Astros/3.jpg', '/submissions/Astros/4.jpg', '/submissions/Astros/5.jpg']
  }
]

const template =   {
  name: '',
  description: '',
  authorGithub: '',
  artPiecesUrl: ['/submissions/bla/1.png']
}
