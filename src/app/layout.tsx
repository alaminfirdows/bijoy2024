import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';
import 'antd/dist/reset.css';
import './globals.css';
import { getSession } from '@/auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Bijoy 2024',
	description: 'Welcome to Bangladesh 2.0',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await getSession();

	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers session={session}>{children}</Providers>
			</body>
		</html>
	);
}
