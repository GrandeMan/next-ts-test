import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

const links = [
	{ href: "/", label: "Home" },
	{ href: "/docs", label: "Docs" },
	{ href: "/todos", label: "Todos" },
];

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header className="flex justify-between items-center p-4 bg-gray-800 text-white">
					<h1 className="sr-only">{metadata.title}</h1>
					<nav>
						<ul className="flex items-center">
							{links.map((link) => (
								<li key={link.href}>
									<Link href={link.href}>{link.label}</Link>
								</li>
							))}
						</ul>
					</nav>
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
