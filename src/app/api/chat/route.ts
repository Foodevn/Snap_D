import { NextRequest, NextResponse } from 'next/server';

const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;

const SYSTEM_PROMPT = `You are an AI travel guide specializing in Da Lat city, Vietnam. Your name is "Snap D Assistant".

Your responsibilities:
- Recommend popular tourist attractions, cafes, restaurants, and hotels in Da Lat
- Suggest travel itineraries tailored to user preferences
- Provide information about prices, opening hours, and crowd levels
- Share useful travel tips for visiting Da Lat

Response style:
- Be friendly, enthusiastic, and helpful
- Keep answers concise yet informative
- Use appropriate emojis to make responses engaging
- ALWAYS respond in English regardless of the user's language
- Always suggest 2-4 follow-up questions for users to explore further

Notable places in Da Lat you can recommend:
- Xuan Huong Lake - iconic check-in spot
- Da Lat Flower Garden - vibrant and colorful
- Prenn Waterfall - beautiful waterfall near city center
- Langbiang Peak - hiking with scenic views
- Tuyen Lam Lake - perfect for picnics and photography
- Scenic cafes: Pinewood Garden Cafe, Fog & Brew
- Restaurants: Dalat Claypot Kitchen, Highland Hotpot & BBQ
- Hotels: Dalat Eco Hotel, Pine Hill Boutique`;

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();

        if (!PERPLEXITY_API_KEY) {
            return NextResponse.json(
                { error: 'Perplexity API key not configured' },
                { status: 500 }
            );
        }

        // Simple messages array - just system + user message
        const messages = [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: message }
        ];

        // Create AbortController for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 300000); // 30 second timeout

        try {
            const response = await fetch('https://api.perplexity.ai/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${PERPLEXITY_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'sonar',
                    messages: messages,
                    max_tokens: 1024,
                    temperature: 0.7
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                const errorData = await response.text();
                console.error('Perplexity API error:', response.status, errorData);
                return NextResponse.json(
                    { error: `Failed to get response from AI: ${response.status}`, details: errorData },
                    { status: response.status }
                );
            }

            const data = await response.json();
            const aiResponse = data.choices[0]?.message?.content || 'Sorry, I cannot answer this question.';

            // Extract related questions as suggestions
            const suggestions = data.related_questions?.slice(0, 4) || [];

            return NextResponse.json({
                response: aiResponse,
                suggestions: suggestions.length > 0 ? suggestions : [
                    'Popular places',
                    'Scenic cafes',
                    'Best restaurants',
                    '1-day itinerary'
                ]
            });
        } catch (fetchError: unknown) {
            clearTimeout(timeoutId);

            if (fetchError instanceof Error && fetchError.name === 'AbortError') {
                console.error('Request timeout');
                return NextResponse.json(
                    { error: 'Request timeout - please try again' },
                    { status: 408 }
                );
            }
            throw fetchError;
        }

    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
