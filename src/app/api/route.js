import { NextResponse } from 'next/server';

import { getGoogleSheetsData } from '@utils/sheets';
import sheets from '@constants/sheets';

const sheetNames = Object.values(sheets);

const mapSheetToKeyValue = sheet =>
	sheet
		.slice(1) /* remove header row */
		.reduce((acc, curr) => ({ ...acc, [curr[0]]: curr[1] }), {});

const mapSheetsData = sheetsData =>
	sheetsData.reduce(
		(acc, curr, index) => ({
			...acc,
			[sheetNames[index]]: mapSheetToKeyValue(curr.values),
		}),
		{}
	);

export async function GET() {
	const range = `!B1:C100`;

	try {
		let sheetsData = await getGoogleSheetsData(
			sheetNames.map(sheet => sheet + range)
		);

		return NextResponse.json({ data: mapSheetsData(sheetsData) });
	} catch (ex) {
		return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
	}
}

export const dynamic = 'force-dynamic';
