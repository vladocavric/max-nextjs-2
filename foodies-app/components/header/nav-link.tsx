'use client';
import Link from 'next/link';
import styles from './nav-link.module.css';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, label }: { href: string; label: string }) => {
	const path = usePathname();
	return (
		<Link
			href={href}
			className={
				path.startsWith(href)
					? `${styles.active} ${styles.link}`
					: styles.link
			}>
			{label}
		</Link>
	);
};

export default NavLink;
