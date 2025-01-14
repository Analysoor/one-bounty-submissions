import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Analytics } from '@vercel/analytics/react';
import { Ga4Init } from '@/components/analytics'

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	//themeColor: [
	//	{ media: "(prefers-color-scheme: light)", color: "white" },
	//	{ media: "(prefers-color-scheme: dark)", color: "black" },
	//],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>

			<Ga4Init/>
			<Analytics/>
			<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
						</main>
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://twitter.com/TimortUnchained"
								title="Timort Unchained"
							>
								<span className="text-default-600">Made by</span>
								<p className="text-primary">@TimortUnchained</p>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
