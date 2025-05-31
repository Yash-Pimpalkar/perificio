import React from 'react';
import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink extends FooterLink {
  icon: string;
}

const Footer = () => {
  const companyLinks: FooterLink[] = [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' }
  ];

  const serviceLinks: FooterLink[] = [
    { label: 'Insurance', href: '/services/insurance' },
    { label: 'Tax', href: '/services/tax' },
    { label: 'Wealth', href: '/services/wealth' }
  ];

  const toolLinks: FooterLink[] = [
    { label: 'Calculators', href: '/tools/calculators' },
    { label: 'Estimators', href: '/tools/estimators' }
  ];

  const socialLinks: SocialLink[] = [
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: '🔗' },
    { label: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
    { label: 'Instagram', href: 'https://instagram.com', icon: '📸' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Links */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tool Links */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Tools</h3>
            <ul className="space-y-3">
              {toolLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">
                <a href="mailto:contact@perificio.com" className="hover:text-gray-900 transition-colors duration-200">
                  contact@perificio.com
                </a>
              </li>
              <li className="text-gray-600">
                <a href="tel:+919876543210" className="hover:text-gray-900 transition-colors duration-200">
                  +91 987 654 3210
                </a>
              </li>
              <li className="pt-2">
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Perificio. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex space-x-6">
              <Link 
                href="/privacy-policy"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
