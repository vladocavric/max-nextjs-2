import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
type Props = {
	mealsSlug: string;
};

const MealSinglePage = async ({ params }: { params: Props }) => {
	const { mealsSlug } = await params;
	const url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/meals/${mealsSlug}`;
	// console.log(url);
	// const res = await fetch(url);
	// const meal = await res.json();
	// console.log(meal);
	return (
		<div></div>
		// <>
		// 	<header className={styles.header}>
		// 		<div className={styles.image}>
		// 			<Image fill />
		// 		</div>
		// 		<div className={styles.headerText}>
		// 			<h1>Title</h1>
		// 			<p className={styles.creator}>
		// 				by <a href={`mailto:${'email'}`}>name</a>
		// 			</p>
		// 			<p className={styles.summery}>summery</p>
		// 		</div>
		// 	</header>
		// 	<main>
		// 		<p
		// 			className={styles.instructions}
		// 			dangerouslySetInnerHTML={{ __html: '...' }}></p>
		// 	</main>
		// 	<h1>MealSinglePage</h1>
		// 	{mealsSlug}
		// 	<Link href={'/'}>Go Home</Link>
		// </>
	);
};

export default MealSinglePage;
