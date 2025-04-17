import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const grotesk = Host_Grotesk({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Seridan Partners",
	description: "Seridan Partners Attorneys",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${grotesk.variable} font-grotesk antialiased`}>
				<NextTopLoader
					color="#ffde59"
					shadow="0 0 10px #ffde59,0 0 5px #ffde59"
				/>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
