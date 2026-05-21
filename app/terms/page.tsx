import React from 'react';

export default function TermsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm text-brand-600 uppercase tracking-[0.2em]">
            Terms &amp; Conditions
          </p>

          <h1 className="text-4xl font-semibold text-gray-900">
            Website Terms of Use
          </h1>

          <p className="text-base text-gray-600">
            The terms that apply when you use Car Bronze for vehicle condition analysis.
          </p>

          <p className="text-sm text-gray-500">Last Updated: March 31st, 2026</p>
        </div>

        <section className="prose prose-slate max-w-none text-gray-700">
          <p>
            Car Bronze delivers vehicle inspection summaries and condition reports using automated analysis.
            By using this website, you agree to these Terms of Use.
          </p>

          <h2>1. Acceptance</h2>
          <p>By accessing Car Bronze, you accept these terms and agree to use the service responsibly.</p>

          <h2>2. Our Service</h2>
          <p>
            Car Bronze uses images to produce a vehicle condition overview. The results are informational and not a replacement for a physical inspection.
          </p>

          <h2>4. User Responsibilities</h2>
          <ul>
            <li>Provide accurate information</li>
            <li>Use the service lawfully and respectfully</li>
            <li>Do not redistribute reports without proper authorization</li>
          </ul>

          <h2>5. Report Accuracy Disclaimer</h2>
          <p>
            The report is generated using AI analysis and may not always perfectly reflect every detail of a physical inspection.
          </p>

          <h2>6. Contact Information</h2>
          <p>
            Car Bronze<br />
            Email: support@carreaders.ai<br />
            Website: https://carreaders.ai
          </p>
        </section>
      </div>
    </main>
  );
}