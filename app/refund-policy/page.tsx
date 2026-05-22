import React from 'react';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen pt-20 bg-slate-950 text-slate-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(128,147,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_35%)]" />
          <div className="relative z-10 px-6 py-16 sm:px-10 lg:px-14">
            <p className="text-sm text-emerald-300 uppercase tracking-[0.3em] mb-4">Refund Policy</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Refund Policy for Car Bronze
            </h1>
            <p className="max-w-3xl text-slate-300 text-lg leading-8">
              At Car Bronze, customer satisfaction is important to us. If you are not happy with your purchase, we will help you with a refund request.
            </p>
            <p className="mt-6 text-sm text-slate-500">Effective Date: May 22, 2026</p>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">30-Day Money Back Guarantee</h2>
            <p className="text-slate-300 leading-7">
              If you are not satisfied with your purchase, you may request a full refund within 30 days of purchase.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">Eligibility</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300 leading-7">
              <li>First-time purchases only</li>
              <li>Requests made within 30 days of purchase</li>
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">Refunds Do Not Apply To</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300 leading-7">
              <li>Renewals</li>
              <li>Upgrades</li>
              <li>Custom services</li>
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">Refund Process</h2>
            <p className="text-slate-300 leading-7">
              To request a refund, contact our support team at info@carbronze.com. Refunds are usually processed within 5–10 business days.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-slate-800 bg-slate-900/85 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
            <p className="text-slate-300 leading-7">
              NEXLIFY LABS LTD<br />
              Email: info@carbronze.com
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}
