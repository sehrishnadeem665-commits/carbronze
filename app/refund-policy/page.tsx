import React from 'react';

export default function RefundPolicyPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm text-brand-600 uppercase tracking-[0.2em]">
            Refund Policy
          </p>
          <h1 className="text-4xl font-semibold text-gray-900">
            14-Day Digital Report Refund Policy
          </h1>
          <p className="text-base text-gray-600">
            How refund requests are handled for Car Bronze report purchases.
          </p>
          <p className="text-sm text-gray-500">Last Updated: January 2026</p>
        </div>

        <section className="prose prose-slate max-w-none text-gray-700">
          <p>
            Car Bronze offers a refund window for digital inspection reports purchased through this site.
          </p>

          <h2>Eligibility</h2>
          <p>
            Refunds may be requested within 14 days of purchase when the report does not meet your expectations.
          </p>

          <h2>Refund Process</h2>
          <p>
            Send a refund request including your order details and the reason for your request. Our support team will review it and respond quickly.
          </p>

          <h2>Contact</h2>
          <p>
            Email: support@carreaders.ai
          </p>
        </section>
      </div>
    </main>
  );
}