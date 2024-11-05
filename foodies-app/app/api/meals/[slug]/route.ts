import db from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

// export const GET = async (req: NextRequest, res: NextResponse) => {
//     console.log('alo bre')
//     // try {
//     //     // Get the slug from the request URL
//     //     const { searchParams } = new URL(req.url);
//     //     const mealSlug = searchParams.get('slug');

//     //     // Ensure the slug exists in the query
//     //     if (!mealSlug) {
//     //         return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
//     //     }

//     //     // Query the database for the meal with the specified slug
//     //     const stmt = db.prepare('SELECT * FROM meals WHERE slug = ?');
//     //     const meal = stmt.get(mealSlug);

//     //     // If the meal is not found, return a 404 response
//     //     if (!meal) {
//     //         return NextResponse.json({ error: 'Meal not found' }, { status: 404 });
//     //     }

//     //     // Return the meal data as JSON
//     //     return NextResponse.json(meal);
//     // } catch (error) {
//     //     console.error('Error fetching meal:', error);
//     //     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//     // }
// }

export async function GET(req: NextRequest) {

    const sp = req.nextUrl.pathname;
    console.log('mealSlug:', sp)

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