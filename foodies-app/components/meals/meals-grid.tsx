import MealItem from './meal-item';
import styles from './meals-grid.module.css';

type Meal = {
	id: string;
	title: string;
	slug: string;
	image: string;
	summary: string;
	creator: string;
};
const MealsGrid = ({ meals }: { meals: Meal[] }) => {
	return (
		<ul className={styles.meals}>
			{(meals || []).map((meal: Meal) => (
				<li key={meal.id}>
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	);
};

export default MealsGrid;
