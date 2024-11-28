import Database from 'better-sqlite3';
import path from 'path';
import slugify from 'slugify';
import xss from 'xss';

const dbPath = path.resolve(process.cwd(), 'meals.db');
const db = new Database(dbPath);

export default db;

export function getMeal(slug) {
	return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export const saveMeal = (meal) => {
	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);
};
