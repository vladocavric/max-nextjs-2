import { Suspense } from 'react';
import Link from 'next/link';

import Meals from '../../components/meals/meals';

import styles from './page.module.css';

const MealsPage = async () => {
	return (
		<>
			<header className={styles.header}>
				<h1>
					Delicious meals, created{' '}
					<span className={styles.highlight}>by you</span>
				</h1>
				<p>
					Choose your favorite recipe and cook it yourself. It is easy
					and fun
				</p>
				<p className={styles.cta}>
					<Link href='meals/share'>Share your favorite recipe</Link>{' '}
				</p>
			</header>
			<main className={styles.main}>
				<Suspense
					fallback={
						<div className={styles.loading}>Fetching meals...</div>
					}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
};

export default MealsPage;
