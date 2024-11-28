'use server';

import { redirect } from 'next/navigation'

export const shareMeal = async (formData: FormData) => {
	const meal = {
		title: formData.get('title'),
		summery: formData.get('summery'),
		instructions: formData.get('instructions'),
		creator: formData.get('name'),
		email: formData.get('email'),
		image: formData.get('image'),
	};

	console.log(meal);
	redirect('/meals')
};
