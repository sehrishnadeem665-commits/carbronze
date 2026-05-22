'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let data: any;
      try {
        data = await response.json();
      } catch (jsonError) {
        const text = await response.text();
        throw new Error(
          text
            ? `Server returned invalid response: ${text.slice(0, 200)}`
            : 'Server returned invalid response.'
        );
      }

      if (!response.ok) {
        throw new Error(data?.error || 'Unable to submit contact message.');
      }

      setSubmitted(true);
    } catch (submitError: any) {
      setError(
        submitError?.message?.includes('Unexpected token')
          ? 'Server returned an unexpected response. Please try again or check the live API logs.'
          : submitError?.message || 'Submission failed.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-slate-800 mb-6">
            <MessageSquare className="w-4 h-4 text-emerald-300" />
            <span className="text-sm text-emerald-200 font-medium">Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
            Contact <span className="gradient-text">Our Support Team</span>
          </h1>
          <p className="text-white max-w-xl mx-auto">
            Questions about a scan, report, or subscription? Drop us a line and we&apos;ll get back to you promptly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="space-y-4">
            {[
              { icon: Mail, label: 'Email Us', value: 'info@carbronze.com' },
              { icon: Phone, label: 'Phone Number', value: '+447555979712' },
              {
                icon: MapPin, label: 'Office', value: 'SIU OFFICES, 4-6 GREATOREX STREET LONDON UNITED KINGDOM E1 5NF' },
              { icon: Clock, label: 'Availability', value: 'Mon–Fri, 9:00 AM – 6:00 PM' },
].map((item, i) => (
                  <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="p-5 rounded-xl glass border border-slate-800 shadow-[0_20px_80px_rgba(0,0,0,0.45)] flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-900/80 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-emerald-300" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-1">{item.label}</p>
                      <p className="text-sm text-slate-100 font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
          </div>

          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-8 rounded-2xl glass border border-slate-800 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(event) => setFormData((prev) => ({ ...prev, firstName: event.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                        placeholder="Jordan"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(event) => setFormData((prev) => ({ ...prev, lastName: event.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                        placeholder="Lee"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                      placeholder="jordan@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Topic</label>
                    <select
                      value={formData.subject}
                      onChange={(event) => setFormData((prev) => ({ ...prev, subject: event.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    >
                      <option value="general">General Enquiry</option>
                      <option value="report">Help With a Report</option>
                      <option value="enterprise">Enterprise Pricing</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Your Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  {error && <p className="text-sm text-emerald-300">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-slate-700 text-white-950 font-semibold transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              ) : (
                <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12 glass border border-slate-800 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                  <div className="w-16 h-16 rounded-full bg-slate-900/80 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-emerald-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Message Received</h3>
                  <p className="text-slate-300 text-sm">A member of our team will respond within one working day.</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}