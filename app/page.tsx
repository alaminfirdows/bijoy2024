'use client';

import Header from '@/components/header';
import { Button } from 'antd';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
	const { data: session, status } = useSession();

	const router = useRouter();

	useEffect(() => {
		if (status === 'unauthenticated') {
			router.push('/login');
		}
	}, [status, router]);

	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	return (
		<div className='max-w-4xl mx-auto py-6'>
			<Header />

			<div className='border rounded flex items-center justify-between p-6'>
				<div>Welcome, {session?.user?.name}!</div>

				<div>
					<Button onClick={async () => signOut()}>Logout</Button>
				</div>
			</div>
		</div>
	);
}
