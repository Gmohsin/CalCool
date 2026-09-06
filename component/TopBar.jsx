"use client";
import Link from "next/link";
import React from "react";
import { ROUTES } from "../app/routs";

export default function TopBar() {
  return (
    <div>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center border-b border-slate-100">
        <Link href={ROUTES.HOME} className="text-2xl font-bold text-indigo-600">
          CalCool
        </Link>

        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <Link href="#features" className="hover:text-indigo-600 transition">
            Features
          </Link>

          {/* Download Dropdown */}
          <div className="relative group">
            <button className="hover:text-indigo-600 transition">
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

          <Link href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </Link>

          <Link href="#privacy" className="hover:text-indigo-600 transition">
            Privacy
          </Link>
        </div>
      </nav>
    </div>
  );
}
