import type { Metadata } from "next";
import { Inter, Roboto, Abel } from "next/font/google";
import "./globals.css";

const abel_font = Abel({ subsets: ["latin"], weight: '400'} )

export const metadata: Metadata = {
	title: "Made By Coffee",
	description: "The hottest company",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={abel_font.className}>{children}</body>
		</html>
	);
}
