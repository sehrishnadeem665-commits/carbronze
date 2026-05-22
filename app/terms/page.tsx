import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20 bg-slate-950 text-slate-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_30%)]" />
          <div className="relative z-10 px-6 py-16 sm:px-10 lg:px-14">
            <p className="text-sm text-emerald-300 uppercase tracking-[0.3em] mb-4">Terms &amp; Conditions</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Terms and Conditions for Car Bronze
            </h1>
            <p className="max-w-3xl text-slate-300 text-lg leading-8">
              These terms govern your use of Car Bronze, operated by NEXLIFY LABS LTD. They explain how our services may be used and the responsibilities of both parties.
            </p>
            <p className="mt-6 text-sm text-slate-500">Effective Date: May 22, 2026</p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">Acceptance</h2>
            <p className="text-slate-300 leading-7">
              By using our website or services, you agree to these Terms. If you do not agree with any part of these Terms, please do not use Car Bronze.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">License</h2>
            <p className="text-slate-300 leading-7">
              We grant you a non-exclusive, non-transferable license to access and use our software and services for your personal or business needs in accordance with these Terms.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">Restrictions</h2>
            <ul className="space-y-3 text-slate-300 leading-7 list-disc list-inside">
              <li>You may not resell our products or services.</li>
              <li>You may not reverse engineer or attempt to extract source code from our software.</li>
              <li>You must not use our services for any illegal activities.</li>
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">Payments</h2>
            <p className="text-slate-300 leading-7">
              All payments are processed securely through trusted third-party providers, including Freemius, Stripe, and PayPal.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
            <p className="text-slate-300 leading-7">
              All branding, software, content, and intellectual property related to Car Bronze are owned by NEXLIFY LABS LTD.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
            <p className="text-slate-300 leading-7">
              NEXLIFY LABS LTD is not liable for indirect, incidental, or consequential damages arising from use of our services.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">Changes</h2>
            <p className="text-slate-300 leading-7">
              We may update these Terms at any time without prior notice. Continued use of the service after changes indicates acceptance of the updated Terms.
            </p>
          </article>
        </div>

        <div className="mt-12 rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
          <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
          <p className="text-slate-300 leading-7">
            NEXLIFY LABS LTD<br />
            Email: info@carbronze.com<br />
            Website: https://carbronze.com
          </p>
        </div>
      </main>
    </div>
  );
}
