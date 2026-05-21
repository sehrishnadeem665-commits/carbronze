'use client';

import { motion } from 'framer-motion';
import { Brain, Shield, Target, Users, Globe, Cpu, ChartBar as BarChart3 } from 'lucide-react';

const VALUES = [
  { icon: Brain, title: 'AI at the Core', desc: 'Machine learning transforms ordinary vehicle photos into clear, practical condition insights you can use right away.' },
  { icon: Shield, title: 'Reliable Results', desc: 'Our detection models are engineered for steady performance, dependable output, and ongoing improvement with every scan.' },
  { icon: Target, title: 'Reports That Guide You', desc: 'Each report focuses on what matters most — what to repair next — rather than overwhelming you with jargon.' },
  { icon: Users, title: 'Built for Drivers', desc: 'Shaped by automotive experts and AI engineers who understand what car owners actually need on the road.' },
];

const TEAM = [
  { name: 'Dr. Sarah Mitchell', role: 'Chief AI Officer', desc: 'Ex-Tesla AI researcher with over a decade of experience in computer vision and automotive intelligence.' },
  { name: 'James Hartley', role: 'Head of Automotive', desc: 'Two decades of hands-on work in vehicle engineering and professional inspection standards.' },
  { name: 'Dr. Wei Zhang', role: 'Lead ML Engineer', desc: 'Focuses on deep learning systems that assess vehicle condition from image data.' },
  { name: 'Emma Richardson', role: 'Product Director', desc: 'Formerly led product strategy for enterprise-scale vehicle software platforms.' },
];

const METRICS = [
  { value: '50K+', label: 'Health Scans Delivered' },
  { value: '95%', label: 'Detection Precision' },
  { value: '2M+', label: 'Images Processed' },
  { value: '4.9/5', label: 'Average User Rating' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-slate-950 text-slate-100">
      <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_20%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-slate-800 mb-6">
              <Globe className="w-4 h-4 text-emerald-300" />
              <span className="text-sm text-emerald-200 font-medium">Our Story</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
              Smarter Vehicle Checks Through <span className="gradient-text">Modern AI</span>
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Car Bronze converts everyday vehicle photos into fast, reliable health reports powered by AI and real inspection expertise.
              We combine smart automation with hands-on automotive knowledge so every driver can make informed decisions with confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-24">
            {METRICS.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center p-6 rounded-2xl glass border border-slate-800 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                <div className="text-3xl font-bold text-emerald-200">{m.value}</div>
                <div className="text-sm text-slate-400 mt-1">{m.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Our Core <span className="gradient-text">Principles</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {VALUES.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl glass border border-slate-800 shadow-[0_20px_80px_rgba(0,0,0,0.45)] hover:shadow-[0_24px_90px_rgba(14,165,233,0.18)] transition-all card-shine">
                <div className="w-10 h-10 rounded-lg bg-slate-900/80 border border-emerald-400/20 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-emerald-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-400">{v.desc}</p>
              </motion.div>
            ))}
          </div>


        </div>
      </section>
    </div>
  );
}