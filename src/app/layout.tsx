import type { Metadata } from "next";
import "./globals.css";

import { Kanit, Nunito_Sans } from "next/font/google";

const header_font = Kanit({ subsets: ["latin"], weight: "600", variable: "--font-header", display: 'swap' });
const main_font = Nunito_Sans({ subsets: ["latin"], weight: ["200", "400", "700", "800", "1000"], variable: "--font-main", display: 'swap' });

export const metadata: Metadata = {
	title: "Made By Coffee",
	description: "A piping hot indie company",
  icons: "/logo_icon.ico"
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
    <html className={`${header_font.variable} ${main_font.className} `} lang="en">
			<body>{children}</body>		
		</html>
	);
}
