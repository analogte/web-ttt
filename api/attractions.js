// API Proxy for TAT Attractions
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
    const { numberOfResult = 6, pagenumber = 1, categorycodes = 'ATTRACTION' } = req.query;
    const lang = req.headers['accept-language'] || 'th';

    const url = new URL('https://tatapi.tourismthailand.org/tatapi/v5/attraction');
    url.searchParams.set('numberOfResult', numberOfResult);
    url.searchParams.set('pagenumber', pagenumber);
    if (categorycodes) url.searchParams.set('categorycodes', categorycodes);

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
    console.error('Attractions API Error:', error);
    return res.status(500).json({ error: 'Failed to fetch attractions' });
  }
}
