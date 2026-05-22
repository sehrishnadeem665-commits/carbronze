import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-20 bg-slate-950 text-slate-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_35%)]" />
          <div className="relative z-10 px-6 py-16 sm:px-10 lg:px-14">
            <p className="text-sm text-emerald-300 uppercase tracking-[0.3em] mb-4">Privacy Policy</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Privacy Policy for Car Bronze
            </h1>
            <p className="max-w-3xl text-slate-300 text-lg leading-8">
              We respect your privacy and are committed to protecting your personal information.
            </p>
            <p className="mt-6 text-sm text-slate-500">Effective Date: May 22, 2026</p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <p className="text-slate-300 leading-7 mb-4">
              We may collect the following information to deliver and improve our services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>Name</li>
              <li>Email address</li>
              <li>Billing information</li>
              <li>Device and browser information</li>
              <li>Usage analytics</li>
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300 leading-7">
              <li>Provide our services</li>
              <li>Process payments</li>
              <li>Improve the user experience</li>
              <li>Send support and account-related emails</li>
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">Payment Processing</h2>
            <p className="text-slate-300 leading-7">
              Payments are securely processed through third-party providers including Freemius, Stripe, and PayPal. We do not store your credit card information.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
            <p className="text-slate-300 leading-7">
              Our website may use cookies to improve functionality and analytics.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300 leading-7">
              <li>Google Analytics</li>
              <li>Freemius</li>
              <li>Cloudflare</li>
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">Data Protection</h2>
            <p className="text-slate-300 leading-7">
              We take reasonable measures to protect your information from unauthorized access.
            </p>
          </article>
        </div>

        <div className="mt-12 rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
          <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
          <p className="text-slate-300 leading-7">
            You may request access to your data, correction of your data, or deletion of your data.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-white mb-3">Contact</h3>
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
