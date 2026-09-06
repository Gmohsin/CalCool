import Link from "next/link";

export default function PrivacyPolicy({ id }) {
  return (
    <main id={id} className="min-h-screen text-slate-800 bg-white antialiased">
      <section className="max-w-4xl mx-auto px-6 py-16 shadow-xl my-10 rounded-2xl">
        <div className="max-w-none">
          <h1 className="text-4xl font-bold text-indigo-600">Privacy Policy</h1>

          <p className="text-slate-500 mt-2">
            <strong>Last updated:</strong> September 6, 2026
          </p>

          <div className="h-px bg-slate-200 my-6" />

          <p className="text-slate-700 leading-relaxed mt-3">
            CalCool is a calculator application designed to provide calculation,
            calculation history, PDF export, and related features.
          </p>

          <h2 className="text-2xl font-bold text-indigo-600 mt-10 mb-4">
            1. Information
          </h2>

          <p className="text-slate-700 leading-relaxed">
            CalCool does not require you to create an account or provide
            personal information such as your name, address, phone number, or
            email address in order to use the calculator.
          </p>

          <p className="text-slate-700 leading-relaxed mt-3">
            The App may store certain information locally on your device, such
            as:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-1 text-slate-700">
            <li>Calculation history</li>
            <li>Calculator settings and preferences</li>
            <li>
              Other information necessary to provide the App&apos;s features
            </li>
          </ul>

          <p className="text-slate-700 leading-relaxed mt-3">
            This locally stored information is not intentionally transmitted to
            our servers by CalCool.
          </p>

          <h2 className="text-2xl font-bold text-indigo-600 mt-10 mb-4">
            2. Calculation History
          </h2>

          <p className="text-slate-700 leading-relaxed">
            CalCool may save your calculation history on your device so that you
            can view or recall previous calculations. Calculation history is
            stored locally on your device and is not intentionally collected or
            uploaded by us. You can remove your calculation history through the
            App&apos;s available controls.
          </p>

          <h2 className="text-2xl font-bold text-indigo-600 mt-10 mb-4">
            3. PDF Export
          </h2>

          <p className="text-slate-700 leading-relaxed">
            CalCool may allow you to export calculations or reports as PDF
            files. When you use the PDF export feature, the resulting file may
            be saved to a location on your device that you select. CalCool does
            not intentionally upload your exported PDF files to our servers.
          </p>

          <h2 className="text-2xl font-bold text-indigo-600 mt-10 mb-4">
            4. Advertising
          </h2>

          <p className="text-slate-700 leading-relaxed">
            CalCool may display advertisements provided by third-party
            advertising services, including <strong>Google AdMob</strong>.
            Third-party advertising providers may collect and process certain
            information from your device, such as advertising identifiers,
            device information, approximate location information, and
            information about interactions with advertisements, in accordance
            with their own privacy policies.
          </p>

          <h2 className="text-2xl font-bold text-indigo-600 mt-10 mb-4">
            5. In-App Purchases
          </h2>

          <p className="text-slate-700 leading-relaxed">
            CalCool may offer an optional <strong>Remove Ads</strong> purchase.
            Purchases are processed through Google Play. CalCool does not
            receive or store your full payment card, bank account, or other
            payment credentials.
          </p>

          <h2 className="text-2xl font-bold text-indigo-600 mt-10 mb-4">
            6. Third-Party Services
          </h2>

          <p className="text-slate-700 leading-relaxed">
            CalCool may use third-party services necessary to provide certain
            functionality, including advertising and in-app purchases. These
            services may process information according to their own privacy
            policies. Relevant services may include Google Play Services, Google
            Play Billing, and Google AdMob.
          </p>

          <h2 className="text-2xl font-bold text-indigo-600 mt-10 mb-4">
            7. Data Security
          </h2>

          <p className="text-slate-700 leading-relaxed">
            We take reasonable measures to protect information handled by the
            App. However, no method of electronic storage or transmission is
            completely secure.
          </p>

          <h2 className="text-2xl font-bold text-indigo-600 mt-10 mb-4">
            8. Children&apos;s Privacy
          </h2>

          <p className="text-slate-700 leading-relaxed">
            CalCool is not specifically directed toward children under the age
            of 13. We do not knowingly collect personal information directly
            from children.
          </p>

          <h2 className="text-2xl font-bold text-indigo-600 mt-10 mb-4">
            9. Data Retention
          </h2>

          <p className="text-slate-700 leading-relaxed">
            Information stored locally by CalCool remains on your device until
            it is deleted through the App or uninstalled. Third-party services
            may retain information per their policies.
          </p>

          <h2 className="text-2xl font-bold text-indigo-600 mt-10 mb-4">
            10. Your Choices
          </h2>

          <p className="text-slate-700 leading-relaxed">
            You may delete calculation history, change settings, uninstall the
            App, purchase the Remove Ads feature, or manage advertising and
            privacy settings through your Android/Google account.
          </p>

          <h2 className="text-2xl font-bold text-indigo-600 mt-10 mb-4">
            11. Changes to This Privacy Policy
          </h2>

          <p className="text-slate-700 leading-relaxed">
            We may update this Privacy Policy from time to time. The &quot;Last
            updated&quot; date will be changed accordingly.
          </p>

          <h2 className="text-2xl font-bold text-indigo-600 mt-10 mb-4">
            12. Contact Us
          </h2>

          <p className="text-slate-700 leading-relaxed">
            If you have questions, concerns, or requests regarding this Privacy
            Policy or CalCool, please{" "}
            <Link href="#contact" className="font-bold text-indigo-600">
              contact{" "}
            </Link>
            us at:
          </p>

          <h2 className="text-2xl font-bold text-indigo-600 mt-10 mb-4">
            13. Acceptance
          </h2>

          <p className="text-slate-700 leading-relaxed">
            By using CalCool, you acknowledge that you have read and understood
            this Privacy Policy.
          </p>

          <div className="mt-12 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
            <p className="text-sm text-slate-600 flex items-center gap-2">
              <span className="text-xl">🔒</span>
              <span>
                CalCool respects your privacy. Your calculations and locally
                stored app data remain on your device.
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
