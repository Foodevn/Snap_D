import React from 'react';
import { MapPin, Mail, Phone, Youtube, Twitter, Facebook, Instagram, ChevronDown, ChevronUp } from 'lucide-react';

export function Footer() {
  const [openSection, setOpenSection] = React.useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-8 sm:py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-12 xl:gap-16">
          {/* Brand Section - Desktop */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="./logo-snap-d.png" alt="logo" className='w-40' />
            </div>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.
            </p>
            <div className="flex gap-3 mb-6">
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
            <p className="text-gray-400 text-xs">
              © 2025 <span className="text-orange-500">Vipin_uidesigns</span>. All Rights Reserved
            </p>
          </div>

          {/* Discover Section */}
          <div>
            <h3 className="text-gray-800 mb-4">Discover</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">
                  Tours
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">
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
                <MapPin size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-800 text-sm block">Address :</span>
                  <span className="text-gray-500 text-sm">Lorem</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-800 text-sm block">Email :</span>
                  <a href="mailto:xyz@mail.com" className="text-gray-500 text-sm hover:text-orange-500 transition-colors">
                    xyz@mail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-800 text-sm block">Phone :</span>
                  <a href="tel:0002220222" className="text-gray-500 text-sm hover:text-orange-500 transition-colors">
                    0002220222
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          {/* Brand Section - Mobile */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 justify-center sm:justify-start">
              <span className="text-orange-500 italic text-xl sm:text-2xl" style={{ fontWeight: 'bold' }}>
                Snap
              </span>
              <span className="text-gray-800 text-xl sm:text-2xl" style={{ fontWeight: 'bold' }}>
                -BL
              </span>
              <span className="text-xl sm:text-2xl">🏛️</span>
            </div>
            <p className="text-gray-600 text-sm mb-4 text-center sm:text-left max-w-xs mx-auto sm:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
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

          {/* Mobile Accordion Sections */}
          <div className="sm:hidden space-y-3 mb-6">
            {/* Discover Section */}
            <div className="border-b border-gray-300">
              <button
                onClick={() => toggleSection('discover')}
                className="w-full flex items-center justify-between py-3 text-gray-800"
              >
                <span>Discover</span>
                {openSection === 'discover' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openSection === 'discover' && (
                <ul className="pb-3 space-y-2 pl-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors block py-1">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors block py-1">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors block py-1">
                      Tours
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* Quick Links Section */}
            <div className="border-b border-gray-300">
              <button
                onClick={() => toggleSection('quicklinks')}
                className="w-full flex items-center justify-between py-3 text-gray-800"
              >
                <span>Quick Links</span>
                {openSection === 'quicklinks' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openSection === 'quicklinks' && (
                <ul className="pb-3 space-y-2 pl-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors block py-1">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors block py-1">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors block py-1">
                      Register
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* Contact Section */}
            <div className="border-b border-gray-300">
              <button
                onClick={() => toggleSection('contact')}
                className="w-full flex items-center justify-between py-3 text-gray-800"
              >
                <span>Contact</span>
                {openSection === 'contact' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openSection === 'contact' && (
                <ul className="pb-3 space-y-3 pl-2">
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
                    <a href="tel:0002220222" className="text-gray-600 text-sm hover:text-orange-500 transition-colors">
                      0002220222
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Tablet Grid Layout (sm to lg) */}
          <div className="hidden sm:grid sm:grid-cols-3 lg:hidden gap-6 sm:gap-8 mb-6 sm:mb-8">
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
                  <a href="tel:0002220222" className="text-gray-600 text-sm hover:text-orange-500 transition-colors">
                    0002220222
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright - Mobile/Tablet */}
          <div className="pt-4 sm:pt-6 border-t border-gray-300 text-center">
            <p className="text-gray-600 text-xs sm:text-sm">
              © 2025 <span className="text-orange-500">Vipin_uidesigns</span>. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}