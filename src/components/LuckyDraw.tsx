import { ArrowLeft, Gift, Sparkles, Star, X } from 'lucide-react';
import { useState, useRef } from 'react';
import { BottomNav } from './BottomNav';

interface LuckyDrawProps {
    onBackToHome: () => void;
    onFavoritesClick: () => void;
    onProfileClick: () => void;
    onChatBotClick: () => void;
}

interface Reward {
    id: number;
    type: 'voucher' | 'tryagain';
    discount?: number;
    restaurant?: string;
    code?: string;
    color: string;
    label: string;
}

const rewards: Reward[] = [
    { id: 0, type: 'voucher', discount: 20, restaurant: 'La Terrasse Restaurant', code: 'LUCKY20', color: '#9333EA', label: '20%' },
    { id: 1, type: 'tryagain', color: '#6B7280', label: 'Try Again' },
    { id: 2, type: 'voucher', discount: 10, restaurant: 'The Garden Cafe', code: 'LUCKY10', color: '#10B981', label: '10%' },
    { id: 3, type: 'voucher', discount: 5, restaurant: 'Any Restaurant', code: 'LUCKY5', color: '#3B82F6', label: '5%' },
    { id: 4, type: 'voucher', discount: 15, restaurant: 'Sunset Lounge', code: 'LUCKY15', color: '#F59E0B', label: '15%' },
    { id: 5, type: 'tryagain', color: '#6B7280', label: 'Good Luck' },
];

export function LuckyDraw({ onBackToHome, onFavoritesClick, onProfileClick, onChatBotClick }: LuckyDrawProps) {
    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [reward, setReward] = useState<Reward | null>(null);
    const [showReward, setShowReward] = useState(false);
    const [showRules, setShowRules] = useState(false);
    const wheelRef = useRef<HTMLDivElement>(null);

    const handleSpin = () => {
        if (isSpinning) return;

        setIsSpinning(true);
        setShowReward(false);

        // Random reward
        const randomIndex = Math.floor(Math.random() * rewards.length);
        const selectedReward = rewards[randomIndex];

        // Calculate rotation
        const segmentAngle = 360 / rewards.length;
        const targetRotation = 360 * 5 + (360 - (randomIndex * segmentAngle + segmentAngle / 2)); // 5 full rotations + target

        setRotation(targetRotation);

        // Show reward after animation
        setTimeout(() => {
            setReward(selectedReward);
            setShowReward(true);
            setIsSpinning(false);
        }, 4000);
    };

    const handleReset = () => {
        setShowReward(false);
        setReward(null);
    };

    const handleClaimReward = () => {
        if (reward?.type === 'voucher') {
            alert(`Congratulations! You received a ${reward.discount}% discount voucher for ${reward.restaurant}!\nCode: ${reward.code}\n\nVoucher has been saved to your Profile.`);
        }
        handleReset();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] pb-24 lg:pb-8">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FAA935] to-[#E89820] text-white p-4 lg:p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-3 lg:mb-4">
                        <button
                            onClick={onBackToHome}
                            className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                        </button>
                        <button
                            onClick={() => setShowRules(true)}
                            className="px-3 py-1.5 lg:px-4 lg:py-2 bg-white/20 rounded-full text-sm lg:text-base hover:bg-white/30 transition-colors"
                        >
                            How to Play
                        </button>
                    </div>

                    <div className="flex items-center gap-2 lg:gap-3 mb-2">
                        <Gift className="w-7 h-7 lg:w-10 lg:h-10" />
                        <h1 className="text-2xl lg:text-4xl">Lucky Wheel</h1>
                    </div>
                    <p className="text-sm lg:text-base text-white/90">
                        Spin the wheel to win vouchers up to 20% off!
                    </p>
                </div>
            </div>

            {/* Rules Modal */}
            {showRules && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-6 lg:p-8 max-w-md w-full">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl lg:text-3xl">How to Play</h2>
                            <button
                                onClick={() => setShowRules(false)}
                                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-4 text-sm lg:text-base text-gray-700">
                            <div className="flex gap-3">
                                <div className="w-6 h-6 bg-[#FAA935] rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm">
                                    1
                                </div>
                                <p>Click the "SPIN" button to start spinning the wheel</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-6 h-6 bg-[#FAA935] rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm">
                                    2
                                </div>
                                <p>The wheel will spin and stop randomly</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-6 h-6 bg-[#FAA935] rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm">
                                    3
                                </div>
                                <p>Win discount vouchers from 5% to 20% for popular restaurants and cafes</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-6 h-6 bg-[#FAA935] rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm">
                                    4
                                </div>
                                <p>Vouchers will be saved to your Profile and can be used when booking</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-6 h-6 bg-[#FAA935] rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm">
                                    5
                                </div>
                                <p>You can spin unlimited times!</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowRules(false)}
                            className="w-full mt-6 bg-gradient-to-r from-[#FAA935] to-[#E89820] text-white py-4 rounded-2xl hover:shadow-lg transition-all"
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}

            {/* Reward Modal */}
            {showReward && reward && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-6 lg:p-8 max-w-md w-full relative overflow-hidden">
                        {/* Confetti Effect */}
                        {reward.type === 'voucher' && (
                            <div className="absolute inset-0 pointer-events-none">
                                {[...Array(20)].map((_, i) => (
                                    <Sparkles
                                        key={i}
                                        className="absolute text-[#FAA935] animate-ping"
                                        style={{
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                            animationDelay: `${Math.random() * 1}s`,
                                            animationDuration: `${1 + Math.random()}s`,
                                        }}
                                    />
                                ))}
                            </div>
                        )}

                        <div className="relative z-10">
                            <div className="text-center mb-6">
                                {reward.type === 'voucher' ? (
                                    <>
                                        <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#FAA935] to-[#E89820] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Gift className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                                        </div>
                                        <h2 className="text-2xl lg:text-3xl mb-2">Congratulations!</h2>
                                        <p className="text-base lg:text-lg text-gray-600">You won a prize</p>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Star className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                                        </div>
                                        <h2 className="text-2xl lg:text-3xl mb-2">Better luck next time!</h2>
                                        <p className="text-base lg:text-lg text-gray-600">Try again</p>
                                    </>
                                )}
                            </div>

                            {reward.type === 'voucher' && (
                                <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-6 lg:p-8 rounded-2xl text-white mb-6 transform hover:scale-105 transition-transform" style={{ background: `linear-gradient(to bottom right, ${reward.color}, ${reward.color}dd)` }}>
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <p className="text-sm lg:text-base opacity-90">Discount</p>
                                            <p className="text-4xl lg:text-5xl">{reward.discount}%</p>
                                        </div>
                                        <Gift className="w-12 h-12 lg:w-16 lg:h-16 opacity-80" />
                                    </div>
                                    <div className="border-t border-white/30 pt-4">
                                        <p className="text-sm lg:text-base opacity-90 mb-1">Valid at</p>
                                        <p className="text-lg lg:text-xl">{reward.restaurant}</p>
                                        <p className="text-xs lg:text-sm opacity-75 mt-2">Code: {reward.code}</p>
                                    </div>
                                </div>
                            )}

                            <div className="flex gap-3">
                                <button
                                    onClick={handleReset}
                                    className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl hover:bg-gray-200 transition-colors"
                                >
                                    Back
                                </button>
                                {reward.type === 'voucher' && (
                                    <button
                                        onClick={handleClaimReward}
                                        className="flex-1 bg-gradient-to-r from-[#FAA935] to-[#E89820] text-white py-4 rounded-2xl hover:shadow-lg transition-all"
                                    >
                                        Claim Reward
                                    </button>
                                )}
                                {reward.type === 'tryagain' && (
                                    <button
                                        onClick={handleReset}
                                        className="flex-1 bg-gradient-to-r from-[#FAA935] to-[#E89820] text-white py-4 rounded-2xl hover:shadow-lg transition-all"
                                    >
                                        Try Again
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-12">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 lg:gap-6 mb-6 lg:mb-10">
                    <div className="bg-white rounded-2xl p-3 lg:p-6 shadow-sm text-center">
                        <Gift className="w-7 h-7 lg:w-10 lg:h-10 text-[#FAA935] mx-auto mb-1 lg:mb-2" />
                        <p className="text-xl lg:text-3xl text-[#FAA935] mb-1">6</p>
                        <p className="text-xs lg:text-sm text-gray-600">Prizes</p>
                    </div>
                    <div className="bg-white rounded-2xl p-3 lg:p-6 shadow-sm text-center">
                        <Sparkles className="w-7 h-7 lg:w-10 lg:h-10 text-purple-500 mx-auto mb-1 lg:mb-2" />
                        <p className="text-xl lg:text-3xl text-purple-500 mb-1">20%</p>
                        <p className="text-xs lg:text-sm text-gray-600">Max Off</p>
                    </div>
                    <div className="bg-white rounded-2xl p-3 lg:p-6 shadow-sm text-center">
                        <Star className="w-7 h-7 lg:w-10 lg:h-10 text-yellow-500 mx-auto mb-1 lg:mb-2" />
                        <p className="text-xl lg:text-3xl text-yellow-500 mb-1">∞</p>
                        <p className="text-xs lg:text-sm text-gray-600">Free Play</p>
                    </div>
                </div>

                {/* Instruction */}
                <div className="text-center mb-6 lg:mb-10">
                    <h2 className="text-lg lg:text-2xl mb-1 lg:mb-2">
                        {isSpinning ? 'Spinning...' : 'Press the button to spin!'}
                    </h2>
                    <p className="text-sm lg:text-base text-gray-600 px-4">
                        {isSpinning ? 'The wheel is spinning, wait a moment!' : 'Click the "SPIN" button below to start'}
                    </p>
                </div>

                {/* Lucky Wheel */}
                <div className="relative max-w-md mx-auto mb-8 lg:mb-12">
                    {/* Pointer/Arrow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-red-500 drop-shadow-lg"></div>
                    </div>

                    {/* Wheel Container */}
                    <div className="relative aspect-square">
                        {/* Outer Ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl p-2 lg:p-3">
                            {/* Wheel */}
                            <div
                                ref={wheelRef}
                                className="w-full h-full rounded-full relative overflow-hidden transition-transform duration-[4000ms] ease-out bg-white"
                                style={{
                                    transform: `rotate(${rotation}deg)`,
                                    transitionTimingFunction: 'cubic-bezier(0.17, 0.67, 0.12, 0.99)'
                                }}
                            >
                                {/* SVG Wheel with proper segments */}
                                <svg viewBox="0 0 200 200" className="w-full h-full">
                                    {rewards.map((item, index) => {
                                        const segmentAngle = 360 / rewards.length;
                                        const startAngle = index * segmentAngle;
                                        const endAngle = startAngle + segmentAngle;

                                        // Convert to radians
                                        const startRad = (startAngle - 90) * Math.PI / 180;
                                        const endRad = (endAngle - 90) * Math.PI / 180;

                                        // Calculate path
                                        const x1 = 100 + 100 * Math.cos(startRad);
                                        const y1 = 100 + 100 * Math.sin(startRad);
                                        const x2 = 100 + 100 * Math.cos(endRad);
                                        const y2 = 100 + 100 * Math.sin(endRad);

                                        const pathData = `M 100 100 L ${x1} ${y1} A 100 100 0 0 1 ${x2} ${y2} Z`;

                                        // Text position (midpoint of the arc, about 70% from center)
                                        const midAngle = (startAngle + segmentAngle / 2 - 90) * Math.PI / 180;
                                        const textX = 100 + 65 * Math.cos(midAngle);
                                        const textY = 100 + 65 * Math.sin(midAngle);
                                        const textRotation = startAngle + segmentAngle / 2;

                                        return (
                                            <g key={item.id}>
                                                {/* Segment */}
                                                <path
                                                    d={pathData}
                                                    fill={item.color}
                                                    stroke="white"
                                                    strokeWidth="2"
                                                />
                                                {/* Text */}
                                                <text
                                                    x={textX}
                                                    y={textY}
                                                    fill="white"
                                                    fontSize="14"
                                                    fontWeight="bold"
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                    transform={`rotate(${textRotation}, ${textX}, ${textY})`}
                                                >
                                                    {item.label}
                                                </text>
                                            </g>
                                        );
                                    })}

                                    {/* Center white circle to cover the segments center */}
                                    <circle cx="100" cy="100" r="35" fill="white" />
                                </svg>
                            </div>
                        </div>

                        {/* Center Button */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <button
                                onClick={handleSpin}
                                disabled={isSpinning}
                                className={`w-20 h-20 lg:w-28 lg:h-28 rounded-full shadow-2xl flex flex-col items-center justify-center transition-all ${isSpinning
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-br from-[#FAA935] to-[#E89820] hover:scale-110 active:scale-95'
                                    }`}
                            >
                                <Gift className="w-8 h-8 lg:w-10 lg:h-10 text-white mb-1" />
                                <span className="text-white text-xs lg:text-sm whitespace-nowrap">
                                    {isSpinning ? 'Wait...' : 'SPIN'}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Popular Restaurants Section */}
                <div className="bg-white rounded-3xl p-4 lg:p-8 shadow-sm">
                    <h2 className="text-lg lg:text-2xl mb-3 lg:mb-4">Participating Restaurants</h2>
                    <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">
                        Vouchers can be used at the following locations:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
                        <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-gray-50 rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400"
                                alt="The Garden Cafe"
                                className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl object-cover"
                            />
                            <div>
                                <p className="text-sm lg:text-base">The Garden Cafe</p>
                                <p className="text-xs text-gray-500">Cafe & Brunch</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-gray-50 rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400"
                                alt="La Terrasse"
                                className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl object-cover"
                            />
                            <div>
                                <p className="text-sm lg:text-base">La Terrasse</p>
                                <p className="text-xs text-gray-500">Fine Dining</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-gray-50 rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400"
                                alt="Sunset Lounge"
                                className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl object-cover"
                            />
                            <div>
                                <p className="text-sm lg:text-base">Sunset Lounge</p>
                                <p className="text-xs text-gray-500">Bar & Restaurant</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation for Mobile */}
            <BottomNav
                currentView="luckydraw"
                onHomeClick={onBackToHome}
                onFavoritesClick={onFavoritesClick}
                onChatBotClick={onChatBotClick}
                onProfileClick={onProfileClick}
            />
        </div>
    );
}
