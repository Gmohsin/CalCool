import Image from "next/image";
import PrivacyPolicy from "./PrivacyPolicy";

export default function Home() {
  return (
    <main className="text-slate-800 bg-white antialiased">
      {/* ====== HERO ====== */}
      <section className="bg-linear-to-br from-[#f9faff] to-[#eef2ff] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
          {/* left content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-xl lg:text-4xl font-bold leading-tight tracking-tight">
              SIMPLE. SMART. CALCOOL. <br />
            </h1>
            <h2 className="text-indigo-600 text-base lg:text-2xl font-bold leading-tight tracking-tight">
              A Calculator That Keeps You in Control.
            </h2>
            <p className="text-lg text-slate-600 max-w-lg">
              Calculate, review, edit, and keep track of your calculations with
              a clean, intuitive calculator built for everyday use.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#download"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-full shadow-lg shadow-indigo-200 transition flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.523 14.342a1.5 1.5 0 0 0-1.042-.415h-1.99a1.5 1.5 0 0 0-1.042.415l-2.303 2.25a1.5 1.5 0 0 0 0 2.121l2.303 2.25a1.5 1.5 0 0 0 1.042.415h1.99a1.5 1.5 0 0 0 1.042-.415l2.303-2.25a1.5 1.5 0 0 0 0-2.121l-2.303-2.25zM12 6.5a1.5 1.5 0 0 0-1.5 1.5v6.172l-1.146-1.146a1.5 1.5 0 0 0-2.121 2.121l3.5 3.5a1.5 1.5 0 0 0 2.121 0l3.5-3.5a1.5 1.5 0 0 0-2.121-2.121L13.5 14.172V8a1.5 1.5 0 0 0-1.5-1.5z" />
                </svg>
                Download on Google Play
              </a>
              <a
                href="#features"
                className="border border-slate-300 hover:border-indigo-400 text-slate-700 font-medium px-8 py-3 rounded-full transition"
              >
                Learn more
              </a>
            </div>
            <p className="text-sm text-slate-400 flex items-center gap-1">
              🔒 No account · local storage · private
            </p>
          </div>
          <Image
            src="/img1.webp"
            alt="img1"
            width={180}
            height={180}
            priority
            className="h-auto w-auto rounded-xl shadow-2xl"
          />
          <Image
            src="/img2.webp"
            alt="img1"
            width={180}
            height={180}
            priority
            className="h-auto w-auto rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* ====== FEATURES ====== */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="text-indigo-600 font-semibold text-sm tracking-widest">
            FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Everything you need in a tape calculator
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-3">
            History, PDF export, and a clean interface — all private on your
            device.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_30px_-10px_rgba(59,130,246,0.15)]">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl mb-5">
              📜
            </div>
            <h3 className="text-xl font-semibold">Calculation History</h3>
            <p className="text-slate-500 mt-2">
              Your tape is stored locally. Review, scroll, and reuse any
              previous entry.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_30px_-10px_rgba(59,130,246,0.15)]">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl mb-5">
              📄
            </div>
            <h3 className="text-xl font-semibold">PDF Export</h3>
            <p className="text-slate-500 mt-2">
              Export your calculations as a PDF — saved locally, never uploaded.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_30px_-10px_rgba(59,130,246,0.15)]">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-2xl mb-5">
              🚫
            </div>
            <h3 className="text-xl font-semibold">Remove Ads</h3>
            <p className="text-slate-500 mt-2">
              One-time in-app purchase to remove all ads and support
              development.
            </p>
          </div>
        </div>
      </section>

      {/* ====== CONTACT ====== */}
      <section
        id="contact"
        className="mx-auto px-40 py-16 bg-indigo-50/70 border-t border-slate-100"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold">Contact</h3>
            <p className="text-slate-500 mt-2">
              Questions, feedback, or privacy concerns? Reach out anytime.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-indigo-500 text-xl">📧</span>
                <span className="font-medium">mohsinabbas72@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-indigo-500 text-xl">👤</span>
                <span className="text-slate-600">Developer: MohsinDev</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <p className="text-slate-600 text-sm leading-relaxed">
              <span className="font-semibold">📍 Privacy first:</span> CalCool
              does not collect or upload your calculation history, PDF exports,
              or personal data. All information stays on your device.
              Third-party services (AdMob, Google Play) may process data per
              their policies.
            </p>
            <p className="text-slate-400 text-xs mt-4">
              Last updated: September 6, 2026
            </p>
          </div>
        </div>
      </section>

      <PrivacyPolicy id="privacy" />
    </main>
  );
}
