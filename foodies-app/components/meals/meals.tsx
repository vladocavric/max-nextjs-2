import MealsGrid from '@/components/meals/meals-grid';

const Meals = async () => {
	const url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/meals`;
	const res = await fetch(url);
	const meals = await res.json();

	return <MealsGrid meals={meals} />;
};

export default Meals;
