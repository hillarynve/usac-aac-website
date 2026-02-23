const USE_LIVE_API =
  process.env.NEXT_PUBLIC_USE_LIVE_API === "true"

const BASE_URL =
  "https://sheet2api.com/v1/sHL6TLUUR46V/usac-aac-website-backend-data"

export async function fetchSheet(tabName: string) {
  // Development: use local mock data
  if (!USE_LIVE_API) {
    try {
      const data = await import(`./mock/${tabName}.json`)
      return data.default
    } catch (error) {
      throw new Error(
        `Mock data for "${tabName}" not found in /lib/mock/`
      )
    }
  }

  console.log("Using LIVE Sheets API")

  // Production: fetch from Sheets2API
  const res = await fetch(`${BASE_URL}/${tabName}`, {
    next: { revalidate: 10 } // 24 hours
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch sheet: ${tabName}`)
  }

  return res.json()
}
