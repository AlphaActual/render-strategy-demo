"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scrolling to contact section when page loads with hash
  useEffect(() => {
    if (window.location.hash === "#contact" && pathname === "/") {
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside or on nav links
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle contact navigation
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname === "/") {
      // If on home page, just scroll to contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home page and then scroll to contact
      router.push("/#contact");
    }

    closeMobileMenu();
  };

  // Navigation items
  const navigationItems = [
    { name: "Home", href: "/", current: false },
    { name: "Blog", href: "/blog", current: false },
    { name: "About", href: "/about", current: false },
    {
      name: "Contact",
      href: "#contact",
      current: false,
      onClick: handleContactClick,
    },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-primary10 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-primary100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
              onClick={closeMobileMenu}
            >
              Next.js CSR mode
            </Link>
          </div>
          {/* Desktop Navigation */}{" "}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) =>
                item.name === "Contact" ? (
                  <button
                    key={item.name}
                    onClick={item.onClick}
                    className="text-primary80 hover:text-primary100 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-primary05 rounded-lg"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-primary80 hover:text-primary100 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-primary05 rounded-lg"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <button className="group inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-primary80 hover:text-primary100 hover:bg-primary05 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={
                isMobileMenuOpen ? "Close main menu" : "Open main menu"
              }
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                /* Close icon */
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Full Screen Mobile Menu */}
        <div
          id="mobile-menu"
          className={`fixed inset-0 z-50 md:hidden h-dvh transition-all duration-500 ease-out ${
            isMobileMenuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
          role="dialog"
          tabIndex={0}
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          onClick={closeMobileMenu}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              closeMobileMenu();
            }
            // Allow closing with Enter or Space for accessibility
            if (
              (e.key === "Enter" || e.key === " ") &&
              e.target === e.currentTarget
            ) {
              closeMobileMenu();
            }
          }}
        >
          {/* Menu Content with backdrop and blur */}
          <div
            className="fixed inset-0 h-dvh flex flex-col bg-white/95 backdrop-blur-lg"
            role="presentation"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              // Allow closing with Escape from inner div as well
              if (e.key === "Escape") {
                closeMobileMenu();
              }
            }}
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
              <h2
                id="mobile-menu-title"
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Menu
              </h2>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-full hover:bg-black/10 transition-all duration-300 hover:rotate-90"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 flex flex-col justify-center px-8 py-12">
              {" "}
              <nav className="space-y-8" aria-label="Mobile navigation">
                {navigationItems.map((item, index) =>
                  item.name === "Contact" ? (
                    <button
                      key={item.name}
                      onClick={item.onClick}
                      className={`group block text-3xl font-semibold text-gray-700 hover:text-blue-600 transition-all duration-500 ${
                        index === 1 ? "delay-150" : ""
                      } ${index === 2 ? "delay-300" : ""} ${
                        index === 3 ? "delay-500" : ""
                      } ${
                        isMobileMenuOpen
                          ? "translate-x-0 opacity-100"
                          : "translate-x-10 opacity-0"
                      }`}
                    >
                      <span className="flex items-center group-hover:translate-x-2 transition-all duration-300">
                        {item.name}
                        <svg
                          className="ml-4 h-6 w-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                      <div className="h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 w-0 group-hover:w-full transition-all duration-500 mt-2"></div>
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`group block text-3xl font-semibold text-gray-700 hover:text-blue-600 transition-all duration-500 ${
                        index === 1 ? "delay-150" : ""
                      } ${index === 2 ? "delay-300" : ""} ${
                        index === 3 ? "delay-500" : ""
                      } ${
                        isMobileMenuOpen
                          ? "translate-x-0 opacity-100"
                          : "translate-x-10 opacity-0"
                      }`}
                    >
                      <span className="flex items-center group-hover:translate-x-2 transition-all duration-300">
                        {item.name}
                        <svg
                          className="ml-4 h-6 w-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                      <div className="h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 w-0 group-hover:w-full transition-all duration-500 mt-2"></div>
                    </Link>
                  )
                )}
              </nav>
              {/* Call to Action Button */}
              <div className="mt-16">
                <button
                  onClick={closeMobileMenu}
                  className="group w-full max-w-sm mx-auto flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
                >
                  <span>Get Started</span>
                  <svg
                    className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>              {/* Footer */}
              <div className="p-6 border-t border-gray-200/50">
                <p className="text-center text-sm text-gray-500">
                  © 2025 Next.js CSR Demo. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
