import Link from "next/link";
import { MapPin, Facebook, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-gray-50">
            <div className="container px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* About */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <MapPin className="h-6 w-6 text-blue-600" />
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Snap D
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Nền tảng khám phá và đánh giá địa điểm du lịch tại Đà Lạt.
                            Chia sẻ trải nghiệm và khám phá những điểm đến tuyệt vời.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-blue-600">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-blue-600">
                                <Instagram className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Khám phá</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/explore" className="text-muted-foreground hover:text-foreground">
                                    Tất cả địa điểm
                                </Link>
                            </li>
                            <li>
                                <Link href="/explore?category=cafe" className="text-muted-foreground hover:text-foreground">
                                    Cafe & Đồ uống
                                </Link>
                            </li>
                            <li>
                                <Link href="/explore?category=am-thuc" className="text-muted-foreground hover:text-foreground">
                                    Ẩm thực
                                </Link>
                            </li>
                            <li>
                                <Link href="/explore?category=thac-nuoc" className="text-muted-foreground hover:text-foreground">
                                    Thiên nhiên
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Tài nguyên</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                                    Về chúng tôi
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className="text-muted-foreground hover:text-foreground">
                                    Sự kiện
                                </Link>
                            </li>
                            <li>
                                <Link href="/help" className="text-muted-foreground hover:text-foreground">
                                    Trợ giúp
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Liên hệ</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center space-x-2 text-muted-foreground">
                                <Mail className="h-4 w-4" />
                                <span>contact@snapd.vn</span>
                            </li>
                            <li className="flex items-center space-x-2 text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                <span>+84 123 456 789</span>
                            </li>
                            <li className="flex items-center space-x-2 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>Đà Lạt, Lâm Đồng</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2025 Snap D. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
