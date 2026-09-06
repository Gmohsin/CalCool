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
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#download" className="hover:text-indigo-600 transition">
            Download
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>
          <Link href="#privacy" className="hover:text-indigo-600 transition">
            Privacy
          </Link>
        </div>
      </nav>
    </div>
  );
}
