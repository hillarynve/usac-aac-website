
export async function fetchNewsletter() {
  const apiKey = process.env.SHEETSON_API_KEY;
  const spreadsheetId = process.env.SHEETSON_SPREADSHEET_ID;

  if (!apiKey || !spreadsheetId) {
    throw new Error(
      "Missing Sheetson environment variables. Check .env.local."
    );
  }

 const response = await fetch(
  `https://api.sheetson.com/v2/sheets/newsletter?no-cache=true&t=${Date.now()}`,
  {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "X-Spreadsheet-Id": spreadsheetId,
    },
    cache: "no-store",
  }
);

  if (!response.ok) {
    throw new Error(
      `Sheetson request failed: ${response.status} ${await response.text()}`
    );
  }

  const data = await response.json();
  return data.results;
}

