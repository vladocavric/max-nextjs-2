import db from '@/lib/db';

export async function GET(request) {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	try {
		const rows = db.prepare('SELECT * FROM meals').all();
		return new Response(JSON.stringify(rows), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ error: 'Database query failed' }),
			{
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			}
		);
	}
}
