'use client';

import { useSession } from 'next-auth/react';

export default function Home() {
	const { data: session, status } = useSession();

	return (
		<div>
			<h1>Home</h1>
			<p>Session: {JSON.stringify(session)}</p>
			<p>Status: {status}</p>
		</div>
	);
}
