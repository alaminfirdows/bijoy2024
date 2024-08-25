import Link from 'next/link';

export default function Header() {
	return (
		<div className='mb-2 border-b py-3'>
			<ul className='inline-flex space-x-6'>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/users'>Users</Link>
				</li>
			</ul>
		</div>
	);
}
