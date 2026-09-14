"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ROUTES } from "../app/routs";

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/75 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        {/* Logo */}
        <Link
          href={ROUTES.HOME}
          className={`font-bold text-indigo-600 transition-all duration-300 ${
            scrolled ? "text-xl" : "text-2xl"
          }`}
        >
          CalCool
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <Link
            href="#features"
            className="hover:text-indigo-600 transition-colors"
          >
            Features
          </Link>

          <Link
            href="#contact"
            className="hover:text-indigo-600 transition-colors"
          >
            Contact
          </Link>

          <Link
            href="#privacy"
            className="hover:text-indigo-600 transition-colors"
          >
            Privacy
          </Link>

          {/* Download Dropdown */}
          <div className="relative group">
            <button className="hover:text-indigo-600 transition-colors">
              Download
            </button>

            <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-50">
              <div className="w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                <Link
                  href="#download"
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-50 hover:text-indigo-600 transition"
                >
                  Download App
                </Link>

                <Link
                  href="/pdf/CalCool-privacy-policy.pdf"
                  download="CalCool-Privacy-Policy.pdf"
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-50 hover:text-indigo-600 transition"
                >
                  Privacy Policy PDF
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
