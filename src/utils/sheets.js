import { auth as googleAuth, sheets as googleSheets } from '@googleapis/sheets';

export const getGoogleSheetsData = async ranges => {
	const {
		GOOGLE_SHEETS_PRIVATE_KEY,
		GOOGLE_SHEETS_CLIENT_EMAIL,
		GOOGLE_SHEETS_SPREADSHEET_ID,
		GOOGLE_SHEETS_CLIENT_ID,
		GOOGLE_SHEETS_PROJECT_ID,
	} = process.env;

	const auth = await googleAuth.getClient({
		projectId: GOOGLE_SHEETS_PROJECT_ID,
		credentials: {
			type: 'service_account',
			private_key: GOOGLE_SHEETS_PRIVATE_KEY,
			client_email: GOOGLE_SHEETS_CLIENT_EMAIL,
			client_id: GOOGLE_SHEETS_CLIENT_ID,
			token_url: 'https://oauth2.googleapis.com/token',
			universe_domain: 'googleapis.com',
		},
		scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
	});

	const sheets = googleSheets({ version: 'v4', auth });

	const { data } = await sheets.spreadsheets.values.batchGet({
		spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
		ranges: ranges,
	});

	return data.valueRanges;
};

export const mapDataToLinks = ({ key, data, max }) => {
	const links = [];
	for (let i = 1; i <= max; i++) {
		const labelKey = `${key}_${i}_label`;
		const linkKey = `${key}_${i}_link`;

		if (data[linkKey])
			links.push({
				label: data[labelKey],
				link: data[linkKey],
			});
	}

	return links;
};
