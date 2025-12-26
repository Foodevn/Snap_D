import React from 'react';
import { MapPin, Mail, Phone, Youtube, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-orange-500 italic" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                Snap
              </span>
              <span className="text-gray-800" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                -BL
              </span>
              <span className="text-2xl">🏛️</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Discover Section */}
          <div>
            <h3 className="text-gray-800 mb-4">Discover</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">
                  Tours
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-gray-800 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600 text-sm">Lorem</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-orange-500 flex-shrink-0" />
                <a href="mailto:xyz@mail.com" className="text-gray-600 text-sm hover:text-orange-500 transition-colors">
                  xyz@mail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-orange-500 flex-shrink-0" />
                <a href="tel:00022200222" className="text-gray-600 text-sm hover:text-orange-500 transition-colors">
                  00022200222
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-300 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 <span className="text-orange-500">Vipin_uidesigns</span>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
