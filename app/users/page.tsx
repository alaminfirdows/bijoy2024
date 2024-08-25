'use client';

import { useEffect, useState } from 'react';
import { Table, Typography, message } from 'antd';
import { getUsers } from '@/services/users';

const { Title } = Typography;

interface User {
	id: number;
	name: string;
	phone: string;
	email: string;
	address: {
		city: string;
	};
}

const UsersPage = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await getUsers();
				setUsers(data);
			} catch (error) {
				message.error('Failed to fetch users');
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const columns = [
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Phone',
			dataIndex: 'phone',
			key: 'phone',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: 'City',
			dataIndex: ['address', 'city'],
			key: 'city',
		},
	];

	return (
		<div style={{ padding: '20px' }}>
			<Title level={2}>Users</Title>
			<Table<User>
				columns={columns}
				dataSource={users}
				rowKey='id'
				loading={loading}
				pagination={{ pageSize: 5 }}
			/>
		</div>
	);
};

export default UsersPage;
