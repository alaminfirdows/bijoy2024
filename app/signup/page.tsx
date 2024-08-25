'use client';

import { Button, Form, Input, Typography } from 'antd';
import { RuleObject } from 'antd/es/form';
import { StoreValue } from 'antd/es/form/interface';

const { Title } = Typography;

const SignupPage = () => {
	const [form] = Form.useForm();

	const validatePassword = (_: RuleObject, value: StoreValue) => {
		if (value && value.length >= 8) {
			return Promise.resolve();
		}
		return Promise.reject(
			new Error('Password must be at least 8 characters long')
		);
	};

	const validateConfirmPassword = (_: RuleObject, value: StoreValue) => {
		if (value && value === form.getFieldValue('password')) {
			return Promise.resolve();
		}
		return Promise.reject(new Error('Passwords do not match'));
	};

	return (
		<div style={{ maxWidth: '400px', margin: '50px auto' }}>
			<Title level={2}>Sign Up</Title>
			<Form
				form={form}
				layout='vertical'
				name='signupForm'
				onFinish={(values) => console.log('Form Values:', values)}>
				<Form.Item
					label='Fullname'
					name='fullname'
					rules={[{ required: true, message: 'Please enter your fullname' }]}>
					<Input placeholder='Enter your fullname' />
				</Form.Item>

				<Form.Item
					label='Email'
					name='email'
					rules={[
						{ required: true, message: 'Please enter your email' },
						{ type: 'email', message: 'Please enter a valid email' },
					]}>
					<Input placeholder='Enter your email' />
				</Form.Item>

				<Form.Item
					label='Zip code'
					name='zipcode'
					rules={[
						{ required: true, message: 'Please enter your zip code' },
						{
							type: 'number',
							message: 'Zip code must be a number',
							transform: (value) => Number(value),
						},
					]}>
					<Input placeholder='Enter your zip code' />
				</Form.Item>

				<Form.Item
					label='Password'
					name='password'
					rules={[
						{ required: true, message: 'Please enter your password' },
						{ validator: validatePassword },
					]}>
					<Input.Password placeholder='Enter your password' />
				</Form.Item>

				<Form.Item
					label='Confirm Password'
					name='confirmPassword'
					dependencies={['password']}
					rules={[
						{ required: true, message: 'Please confirm your password' },
						{ validator: validateConfirmPassword },
					]}>
					<Input.Password placeholder='Confirm your password' />
				</Form.Item>

				<Form.Item>
					<Button type='primary' htmlType='submit' block>
						Sign Up
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default SignupPage;
