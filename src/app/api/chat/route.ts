import { NextRequest, NextResponse } from 'next/server';

const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;

const SYSTEM_PROMPT = `Bạn là một hướng dẫn viên du lịch AI chuyên về thành phố Đà Lạt. Tên của bạn là "Snap D Assistant".

Nhiệm vụ của bạn:
- Tư vấn các địa điểm du lịch nổi bật, quán cafe, nhà hàng, khách sạn ở Đà Lạt
- Gợi ý lịch trình tham quan phù hợp với nhu cầu người dùng
- Cung cấp thông tin về giá cả, thời gian mở cửa, độ đông đúc
- Đưa ra tips du lịch hữu ích cho Đà Lạt

Phong cách trả lời:
- Thân thiện, nhiệt tình và hữu ích
- Trả lời ngắn gọn, súc tích nhưng đầy đủ thông tin
- Sử dụng emoji phù hợp để tạo sự sinh động
- Có thể trả lời bằng tiếng Việt hoặc tiếng Anh tùy theo ngôn ngữ người dùng sử dụng
- Luôn đề xuất 2-4 gợi ý tiếp theo để người dùng có thể hỏi thêm

Một số địa điểm nổi bật ở Đà Lạt mà bạn có thể gợi ý:
- Hồ Xuân Hương - địa điểm check-in kinh điển
- Vườn hoa Đà Lạt - rực rỡ sắc màu
- Thác Prenn - thác nước đẹp gần trung tâm
- Đỉnh Langbiang - leo núi ngắm cảnh
- Hồ Tuyền Lâm - picnic và chụp ảnh
- Các quán cafe view đẹp: Pinewood Garden Cafe, Fog & Brew
- Nhà hàng: Dalat Claypot Kitchen, Highland Hotpot & BBQ
- Khách sạn: Dalat Eco Hotel, Pine Hill Boutique`;

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
            const aiResponse = data.choices[0]?.message?.content || 'Xin lỗi, tôi không thể trả lời câu hỏi này.';

            // Extract related questions as suggestions
            const suggestions = data.related_questions?.slice(0, 4) || [];

            return NextResponse.json({
                response: aiResponse,
                suggestions: suggestions.length > 0 ? suggestions : [
                    'Địa điểm nổi bật',
                    'Quán cafe đẹp',
                    'Nhà hàng ngon',
                    'Lịch trình 1 ngày'
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
