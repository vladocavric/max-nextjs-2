import Link from 'next/link';
import React from 'react';
import logoImage from '@/assets/logo.png';
import Community from '../../app/community/page';
import styles from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

const MainHeader = () => {
	const links = [
		{ label: 'Browse Meals', href: '/meals' },
		{ label: 'Community', href: '/community' },
	];
	return (
		<>
			<MainHeaderBackground />
			<header className={styles.header}>
				<Link href={'/'} className={styles.logo}>
					<Image
						src={logoImage}
						alt='a plate of food'
						priority
						width={160}
					/>
					next level food
				</Link>
				<nav className={styles.nav}>
					<ul>
						{links.map((link) => (
							<li key={link.href}>
								<NavLink {...link} />
							</li>
						))}
					</ul>
				</nav>
			</header>
		</>
	);
};

export default MainHeader;
