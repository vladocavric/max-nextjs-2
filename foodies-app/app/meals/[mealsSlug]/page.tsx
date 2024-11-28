import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { getMeal } from '@/lib/db';
import { notFound } from 'next/navigation';
type Props = {
	mealsSlug: string;
};

const MealSinglePage = async ({ params }: { params: Props }) => {
	const { mealsSlug } = await params;
	const meal = getMeal(mealsSlug);
	if (!meal) {
		notFound();
	}
	let { title, image, summary, instructions, creator, creator_email } = meal;

	instructions = instructions.replace(/\n/g, '<br />');
	return (
		<>
			<header className={styles.header}>
				<div className={styles.image}>
					<Image src={image} fill alt={title} />
				</div>
				<div className={styles.headerText}>
					<h1>{title}</h1>
					<p className={styles.creator}>
						by <a href={`mailto:${creator_email}`}>{creator}</a>
					</p>
					<p className={styles.summery}>{summary}</p>
				</div>
			</header>
			<main>
				<p
					className={styles.instructions}
					dangerouslySetInnerHTML={{ __html: instructions }}></p>
			</main>
		</>
	);
};

export default MealSinglePage;
