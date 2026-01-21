// API Proxy for TAT Hotels/Accommodation
// Hides API key from frontend

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept-Language');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const TAT_API_KEY = process.env.TAT_API_KEY;
  if (!TAT_API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const { numberOfResult = 6 } = req.query;
    const lang = req.headers['accept-language'] || 'th';

    const url = new URL('https://tatapi.tourismthailand.org/tatapi/v5/accommodation');
    url.searchParams.set('numberOfResult', numberOfResult);

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${TAT_API_KEY}`,
        'Accept-Language': lang === 'zh' ? 'zh-cn' : lang,
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`TAT API error: ${response.status}`);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Hotels API Error:', error);
    return res.status(500).json({ error: 'Failed to fetch hotels' });
  }
}
