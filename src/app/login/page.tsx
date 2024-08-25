'use client';

import { Button, Card, Form, Typography } from 'antd';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const { Title } = Typography;

const LoginPage = () => {
	const { data: session } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session) {
			router.push('/');
		}
	}, [session, router]);

	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Card style={{ width: 300, textAlign: 'center' }}>
				<Title level={3}>Login</Title>
				<Form layout='vertical'>
					<Form.Item>
						<Button type='primary' onClick={() => signIn('google')} block>
							Sign in with Google
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};

export default LoginPage;
