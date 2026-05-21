import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm text-brand-600 uppercase tracking-[0.2em]">
            Privacy Policy
          </p>

          <h1 className="text-4xl font-semibold text-gray-900">
            How Car Bronze Handles Your Data
          </h1>

          <p className="text-base text-gray-600">
            A transparent overview of the data we collect, why we collect it, and how we keep it secure.
          </p>

          <p className="text-sm text-gray-500">Last Updated: 31 March 2026</p>
        </div>

        <section className="prose prose-slate max-w-none text-gray-700">
          <p>
            Car Bronze is committed to safeguarding your privacy.
            This policy describes the data we collect, how we use it, and how we protect it while delivering vehicle condition reports.
          </p>

          <h2>Key Points</h2>
          <ul>
            <li>We collect only the data necessary to generate your report.</li>
            <li>We do not sell or trade your personal information.</li>
          </ul>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Car Bronze is not intended for users under 18. We do not knowingly collect personal information from minors.
          </p>

          <h2>Your Rights</h2>
          <p>
            Where applicable, you may request access to, correction of, or deletion of your personal information.
          </p>

          <h2>Contact Us</h2>
          <p>
            Car Bronze<br />
            Email: support@carreaders.ai<br />
            Website: https://carreaders.ai
          </p>
          <p>
            This Privacy Policy is effective as of 1 January 2026.
          </p>
        </section>
      </div>
    </main>
  );
}