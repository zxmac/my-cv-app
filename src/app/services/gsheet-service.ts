async function get(sheetId: string, apiKey: string) {
    const url = `${process.env.NEXT_PUBLIC_GSHEET_API}v4/spreadsheets/${sheetId}/values:batchGet?ranges=Sheet1&key=${apiKey}`;
    const response = await fetch(url)
    if (!response.ok) { // Check for HTTP errors (e.g., 404, 500)
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

export const GSheetService = { get };