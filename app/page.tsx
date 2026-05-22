'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Scan, FileText, Wrench, TrendingUp, Upload, Cpu, Eye, Lock, ArrowRight, Car, Activity, ChartBar as BarChart3, Brain, ShieldCheck, Users, ThumbsUp, Clock, CircleCheck as CheckCircle2, Zap } from 'lucide-react';

const FEATURES = [
  { icon: Scan, title: 'Intelligent Damage Analysis', desc: 'Share photos of your vehicle and our AI identifies scratches, dents, rust, wear, and other visible defects with reliable accuracy.' },
  { icon: BarChart3, title: 'Simple Health Score', desc: 'Receive an easy-to-read 0–100 rating that summarizes your vehicle\'s overall condition in seconds.' },
  { icon: FileText, title: 'Full AI Inspection Report', desc: 'Download a professional report covering findings, severity ratings, repair advice, and recommended next steps.' },
  { icon: Activity, title: 'Real-Time Scan Updates', desc: 'Watch your scan progress live as problems are detected, highlighted, and explained on screen.' },
  { icon: Wrench, title: 'Estimated Repair Costs', desc: 'Review realistic cost ranges for fixes based on what was found and how your vehicle currently looks.' },
  { icon: TrendingUp, title: 'Preventive Maintenance Alerts', desc: 'Catch developing issues before they worsen so you can service your car before costs pile up.' },
];

const STEPS = [
  { num: '01', icon: Upload, title: 'Upload Your Photos', desc: 'Take sharp shots of the front, rear, sides, interior, and engine bay so our AI gets the clearest view possible.' },
  { num: '02', icon: Cpu, title: 'AI Reviews Every Angle', desc: 'Our system inspects each image for damage, wear, corrosion, and anything that affects vehicle health.' },
  { num: '03', icon: Eye, title: 'Preview Your Results', desc: 'See the first batch of findings with confidence levels and severity grades for every issue detected.' },
  { num: '04', icon: Lock, title: 'Get the Complete Report', desc: 'Open the full breakdown with detailed findings, repair suggestions, and a thorough condition overview.' },
];

const TRUST_STATS = [
  { icon: ThumbsUp, value: '99%', label: 'Satisfaction Rate Among Users' },
  { icon: Car, value: '150+', label: 'Vehicles Inspected Daily' },
  { icon: Users, value: '5,000+', label: 'Drivers Using the Platform' },
  { icon: Clock, value: '2min', label: 'Typical Time to Your Report' },
];

const FLOATING_LABELS = [
  { text: 'Front Bumper Scratch Detected', severity: 'Medium', x: '10%', y: '25%' },
  { text: 'Tire Wear Level: High', severity: 'High', x: '75%', y: '20%' },
  { text: 'Paint Condition: Excellent', severity: 'Low', x: '65%', y: '70%' },
  { text: 'Engine Bay: No Issues', severity: 'Low', x: '15%', y: '72%' },
];

export default function Home() {
  const featureSliderRef = useRef<HTMLDivElement | null>(null);
  const stepSliderRef = useRef<HTMLDivElement | null>(null);
  const [featureScrollPos, setFeatureScrollPos] = useState(0);
  const [stepScrollPos, setStepScrollPos] = useState(0);

  const scrollFeature = (direction: 'left' | 'right') => {
    if (!featureSliderRef.current) return;
    const container = featureSliderRef.current;
    const step = container.clientWidth * 0.8;
    const newPos = direction === 'left'
      ? Math.max(0, featureScrollPos - step)
      : Math.min(container.scrollWidth - container.clientWidth, featureScrollPos + step);
    container.scrollTo({ left: newPos, behavior: 'smooth' });
    setFeatureScrollPos(newPos);
  };

  const scrollStep = (direction: 'left' | 'right') => {
    if (!stepSliderRef.current) return;
    const container = stepSliderRef.current;
    const step = container.clientWidth * 0.8;
    const newPos = direction === 'left'
      ? Math.max(0, stepScrollPos - step)
      : Math.min(container.scrollWidth - container.clientWidth, stepScrollPos + step);
    container.scrollTo({ left: newPos, behavior: 'smooth' });
    setStepScrollPos(newPos);
  };

  useEffect(() => {
    const updateScrollPos = () => {
      if (featureSliderRef.current) {
        setFeatureScrollPos(featureSliderRef.current.scrollLeft);
      }
      if (stepSliderRef.current) {
        setStepScrollPos(stepSliderRef.current.scrollLeft);
      }
    };

    const autoScrollContainer = (container: HTMLDivElement | null, setScrollPos: (pos: number) => void) => {
      if (!container) return;
      const step = container.clientWidth * 0.8;
      const intervalId = window.setInterval(() => {
        const nextPosition = container.scrollLeft + step;
        if (nextPosition >= container.scrollWidth - container.clientWidth - 2) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
          setScrollPos(0);
        } else {
          container.scrollTo({ left: nextPosition, behavior: 'smooth' });
          setScrollPos(nextPosition);
        }
      }, 4000);
      return intervalId;
    };

    const featureContainer = featureSliderRef.current;
    const stepContainer = stepSliderRef.current;

    if (featureContainer) {
      featureContainer.addEventListener('scroll', updateScrollPos);
    }
    if (stepContainer) {
      stepContainer.addEventListener('scroll', updateScrollPos);
    }

    // Auto-scroll functionality
    const featureInterval = autoScrollContainer(featureSliderRef.current, setFeatureScrollPos);
    const stepInterval = autoScrollContainer(stepSliderRef.current, setStepScrollPos);

    return () => {
      if (featureContainer) {
        featureContainer.removeEventListener('scroll', updateScrollPos);
      }
      if (stepContainer) {
        stepContainer.removeEventListener('scroll', updateScrollPos);
      }
      if (featureInterval) window.clearInterval(featureInterval);
      if (stepInterval) window.clearInterval(stepInterval);
    };
  }, []);

  const whatsappPhone = '447555979712'; // Replace with your WhatsApp number in international format (no +)
  const whatsappText = 'Hi%2C%20I%27d%20like%20help%20with%20a%20vehicle%20health%20scan.';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero */}
      <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-950">

        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(101,76,79,0.16),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(101,76,79,0.08),transparent_40%)]" />

        {/* Blur Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-slate-800 shadow-[0_20px_80px_rgba(8,18,35,0.35)] mb-6">
                <Brain className="w-4 h-4 text-emerald-300" />

                <span className="text-sm text-slate-100 font-semibold">
                  Intelligent Vehicle Inspections
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 leading-[1.05] mb-6">

                See Your Vehicle&apos;s <br />

                <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                  Real Health
                </span>

                <br />

                In Just Minutes

              </h1>

              {/* Paragraph */}
              <p className="text-sm sm:text-base text-white max-w-xl leading-relaxed mb-8">
                Share images from every angle and get a quick AI report with clear repair guidance you can trust.
              </p>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-10 text-sm">

                <Link
                  href="/analysis"
                  className="group w-full px-4 py-3 rounded-2xl bg-red-600 text-white font-semibold transition-all shadow-[0_18px_70px_rgba(120,0,0,0.25)] hover:bg-red-700 flex items-center justify-center gap-2 text-center"
                >
                  Start Your Scan

                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/pricing"
                  className="w-full px-4 py-3 rounded-2xl glass border border-slate-800 text-white font-semibold hover:bg-slate-900/80 transition-all shadow-sm text-center"
                >
                  View Pricing
                </Link>

              </div>

              {/* Bottom Points */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 text-sm text-slate-300">

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>No signup required — begin right away</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Full results ready within minutes</span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Actionable repair tips you can follow immediately</span>
                </div>

              </div>

            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >

              {/* Main Card */}
              <div className="relative rounded-[24px] sm:rounded-[32px] border border-slate-800 bg-slate-950/80 backdrop-blur-xl overflow-hidden shadow-[0_30px_120px_rgba(0,0,0,0.55)]">

                {/* Top Bar */}
                <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between gap-2 p-3 sm:p-5">

                  <div className="flex items-center gap-1.5 sm:gap-2 px-2 py-1 sm:px-2.5 rounded-full glass border border-slate-800 shadow-sm flex-shrink-0">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] sm:text-xs font-semibold text-slate-100">
                      Scan Active
                    </span>
                  </div>

                  <div className="px-2 py-1 sm:px-2.5 rounded-full bg-slate-900/90 border border-emerald-400/20 text-[9px] sm:text-xs font-bold text-emerald-300 shadow-sm flex-shrink-0">
                    LIVE ANALYSIS
                  </div>

                </div>

                {/* Image Area */}
                <div className="relative aspect-[4/3] overflow-hidden">

                  {/* HD Car Image */}
                  <Image
                    src="/ai-2.jpg"
                    alt="Vehicle condition scan powered by AI"
                    fill
                    priority
                    className="object-cover"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                  {/* AI Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(101,76,79,0.18),transparent_60%)]" />

                  {/* Scan Line */}
                  <motion.div
                    className="absolute left-0 right-0 h-[2px] sm:h-[3px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_20px_rgba(101,76,79,0.8)]"
                    animate={{ top: ['10%', '90%', '10%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  />

                  {/* Detection Labels */}
                  {[
                    {
                      positionClass: 'top-[10%] right-[3%] sm:top-[24%] sm:right-[6%]',
                      text: 'Rust Risk: 12%',
                      bgClass: 'bg-yellow-500/90',
                      textClass: 'text-white',
                      widthClass: 'max-w-[42%] sm:max-w-[32%]',
                      iconClass: 'text-white',
                    },
                    {
                      positionClass: 'bottom-[10%] right-[3%] sm:bottom-[12%] sm:right-[8%]',
                      text: 'Engine: Healthy',
                      bgClass: 'bg-emerald-500/90',
                      textClass: 'text-white',
                      widthClass: 'max-w-[42%] sm:max-w-[32%]',
                      iconClass: 'text-white',
                    },
                  ].map((label, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, y: [0, -6, 0] }}
                      transition={{ duration: 3 + i, repeat: Infinity }}
                      className={`absolute ${label.positionClass} ${label.widthClass} flex px-2 py-1 rounded-2xl ${label.bgClass} ${label.textClass} backdrop-blur-md shadow-2xl text-[8px] sm:text-[10px] font-semibold border border-white/20 whitespace-nowrap`}
                    >
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Zap className={`w-2 h-2 sm:w-2.5 sm:h-2.5 flex-shrink-0 ${label.iconClass}`} />
                        {label.text}
                      </div>
                    </motion.div>
                  ))}

                  {/* AI Focus Points */}
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-[35%] left-[28%] w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full border-2 border-emerald-400 shadow-[0_0_20px_rgba(101,76,79,0.8)]"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute bottom-[30%] right-[24%] w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full border-2 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.8)]"
                  />

                </div>

                {/* Bottom Stats */}
                <div className="relative bg-slate-950/85 backdrop-blur-md border-t border-slate-800 p-3 sm:p-6">

                  <div className="grid grid-cols-3 gap-2 sm:gap-3">

                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-emerald-300">96%</div>
                      <div className="text-[9px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1 leading-tight">
                        Detection Accuracy
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-emerald-300">2m</div>
                      <div className="text-[9px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1 leading-tight">
                        Typical Scan Duration
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-slate-100">AI</div>
                      <div className="text-[9px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1 leading-tight">
                        AI-Powered Core
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>
        </div>
      </section>



      {/* Trust Stats */}
      <section className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900/70 border border-slate-800"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900/70 flex items-center justify-center shrink-0">
                  <stat.icon className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-100">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* AI Intelligence Section */}
      <section className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden">

        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(101,76,79,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(101,76,79,0.08),transparent_40%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 mb-6">
                <Brain className="w-4 h-4 text-emerald-300" />
                <span className="text-sm text-emerald-200 font-semibold">
                  Powered by Cutting-Edge AI
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-100 leading-tight mb-6">
                Next-Level <br />
                <span className="text-emerald-300">
                  Vehicle Inspections
                </span>
              </h2>

              {/* Description */}
              <p className="text-slate-300 text-[12px] lg:text-2xl leading-relaxed mb-8 max-w-xl">
                With computer vision and deep learning, we uncover hidden damage,
                paint flaws, and structural concerns straight from the photos you upload.
              </p>

              {/* Progress Stats */}
              <div className="space-y-6">

                {[
                  ['Damage Detection Accuracy', '96%'],
                  ['Analysis Confidence', '98%'],
                  ['Cost Estimate Reliability', '93%'],
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-200 text-sm font-medium">
                        {item[0]}
                      </span>

                      <span className="text-emerald-300 text-sm font-bold">
                        {item[1]}
                      </span>
                    </div>

                    <div className="h-2.5 rounded-full bg-slate-700 overflow-hidden">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: item[1] }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.2,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              {/* Main Card */}
              <div className="relative rounded-3xl border border-emerald-400/30 bg-slate-900/70 backdrop-blur-xl p-4 sm:p-8 overflow-hidden shadow-[0_10px_60px_rgba(8,18,35,0.35)]">

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-emerald-500/5" />

                {/* AI Circle */}
                <div className="relative flex items-center justify-center h-[280px] sm:h-[400px]">

                  {/* Outer Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute w-48 h-48 sm:w-72 sm:h-72 rounded-full border border-emerald-400/30"
                  />

                  {/* Middle Ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                    className="absolute w-36 h-36 sm:w-56 sm:h-56 rounded-full border border-emerald-400/30 border-dashed"
                  />

                  {/* Core */}
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 flex items-center justify-center shadow-[0_0_60px_rgba(101,76,79,0.35)]"
                  >
                    <Brain className="w-10 h-10 sm:w-16 sm:h-16 text-white" />
                  </motion.div>

                  {/* Floating Cards */}
                  {[
                    { top: '18%', right: '4%', text: 'Rust Risk: 12%' },
                    { bottom: '15%', left: '2%', text: 'Analysis Underway' },
                    { bottom: '10%', right: '4%', text: 'Engine: Healthy' },
                  ].map((card, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3 + i, repeat: Infinity }}
                      className="absolute px-2 py-1 sm:px-4 sm:py-2 rounded-xl bg-slate-900/70 border border-emerald-400/20 shadow-lg backdrop-blur-md text-xs sm:text-sm text-emerald-300 font-medium whitespace-nowrap"
                      style={card}
                    >
                      {card.text}
                    </motion.div>
                  ))}

                </div>

                {/* Bottom Status */}
                <div className="relative mt-4 flex items-center justify-between border-t border-emerald-400/20 pt-5">

                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                    <span className="text-slate-300 text-[10px] sm:text-sm font-medium">
                      AI Engine Active
                    </span>
                  </div>

                  <span className="text-emerald-300 font-mono text-[11px] sm:text-sm font-semibold">
                    STATUS: ACTIVE
                  </span>

                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
              Advanced <span className="gradient-text">Inspection Features</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Trained on extensive vehicle data, our AI delivers consistent, trustworthy condition assessments.
            </p>
          </motion.div>

          <div className="relative group">

            {/* Feature Slider */}
            <div
              ref={featureSliderRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 lg:pb-0 snap-x snap-mandatory scroll-smooth"
            >
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-shrink-0 w-[calc(100vw-2rem)] xs:w-[80vw] sm:w-[260px] lg:w-[280px] snap-center group p-5 sm:p-6 lg:p-7 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-400/40 transition-all duration-300 card-shine"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-900/70 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-slate-800 transition-colors">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-slate-100 mb-1.5 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Left Arrow — always visible on mobile, hover-only on desktop */}
            <button
              onClick={() => scrollFeature('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900/70 backdrop-blur-md border border-slate-800 shadow-lg flex items-center justify-center hover:bg-slate-900/80 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 z-10 disabled:opacity-30"
              disabled={featureScrollPos <= 0}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300 rotate-180" />
            </button>

            {/* Right Arrow — always visible on mobile, hover-only on desktop */}
            <button
              onClick={() => scrollFeature('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900/70 backdrop-blur-md border border-slate-800 shadow-lg flex items-center justify-center hover:bg-slate-900/80 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 z-10 disabled:opacity-30"
              disabled={featureScrollPos >= (featureSliderRef.current?.scrollWidth || 0) - (featureSliderRef.current?.clientWidth || 0)}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300" />
            </button>

          </div>

          {/* Mobile swipe hint */}
          <p className="mt-3 text-center text-[11px] text-slate-500 sm:hidden">Swipe to explore more</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden">

        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(101,76,79,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(101,76,79,0.08),transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/70 border border-emerald-400/20 backdrop-blur-md mb-5">
              <Cpu className="w-4 h-4 text-emerald-300" />
              <span className="text-sm font-semibold text-emerald-200">
                Straightforward Four-Step Flow
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
              Your Report in <span className="text-emerald-300">Four Simple Steps</span>
            </h2>

            <p className="text-slate-300 max-w-2xl mx-auto">
              From upload to download, we turn your photos into a clear, easy-to-read vehicle summary.
            </p>
          </motion.div>

          {/* Steps with Arrows */}
          <div className="relative group">
            <div ref={stepSliderRef} className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 lg:pb-0 px-4 sm:px-6 snap-x snap-mandatory">

              {/* Connecting Line (desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-300/40 via-emerald-200/30 to-emerald-300/40" />

              {STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex-shrink-0 w-[280px] sm:w-[300px] relative group snap-center"
                >

                  {/* Card */}
                  <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/70 backdrop-blur-md border border-emerald-400/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                    {/* Step Number */}
                    {/* <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold shadow-lg text-sm z-10">
                      {step.num}
                    </div> */}

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-slate-900/70 flex items-center justify-center mb-4 group-hover:bg-slate-800 transition">
                      <step.icon className="w-5 h-5 text-emerald-300" />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-lg font-semibold text-slate-100 mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-100/0 to-emerald-100/0 group-hover:from-emerald-100/30 group-hover:to-transparent transition-all duration-500" />

                  </div>

                  {/* Arrow connector */}
                  {i < 3 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-emerald-300" />
                    </div>
                  )}

                </motion.div>
              ))}
            </div>

            {/* Step Navigation Arrows */}
            <button
              onClick={() => scrollStep('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-slate-900/70 backdrop-blur-md border border-slate-800 shadow-lg flex items-center justify-center hover:bg-slate-900/80 transition-all opacity-0 group-hover:opacity-100 z-10"
              disabled={stepScrollPos <= 0}
            >
              <ArrowRight className="w-5 h-5 text-emerald-300 rotate-180" />
            </button>
            <button
              onClick={() => scrollStep('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-slate-900/70 backdrop-blur-md border border-slate-800 shadow-lg flex items-center justify-center hover:bg-slate-900/80 transition-all opacity-0 group-hover:opacity-100 z-10"
              disabled={stepScrollPos >= (stepSliderRef.current?.scrollWidth || 0) - (stepSliderRef.current?.clientWidth || 0)}
            >
              <ArrowRight className="w-5 h-5 text-emerald-300" />
            </button>
          </div>

        </div>
      </section>

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(101,76,79,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(101,76,79,0.08),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-slate-800 mb-6">
                <Brain className="w-4 h-4 text-emerald-300" />
                <span className="text-sm font-semibold text-emerald-200">
                  Intelligent Vehicle Diagnostics
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight mb-6">
                Quick AI
                <span className="text-emerald-300"> Vehicle Health Reports</span>
              </h1>

              <p className="text-white text-lg mb-8 leading-relaxed">
                Upload your photos and our AI flags issues, then returns simple, readable results in minutes.
              </p>

              <div className="grid grid-cols-2 gap-4">

                <Link
                  href="/analysis"
                  className="w-full px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition shadow-lg text-center"
                >
                  Start Scan
                </Link>

                <Link
                  href="/pricing"
                  className="w-full px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-100 text-sm font-semibold hover:bg-slate-900/80 transition text-center"
                >
                  View Plans
                </Link>

              </div>

              {/* small stats */}
              <div className="mt-8 flex gap-6 text-sm text-slate-300">
                <div>⚡ Reports in under 2 minutes</div>
                <div>🎯 Up to 96% detection accuracy</div>
                <div>🔒 Private, secure AI analysis</div>
              </div>

            </motion.div>

            {/* RIGHT VIDEO SECTION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >

              {/* Video Card */}
<div className="relative rounded-3xl overflow-hidden border border-emerald-400/20 shadow-2xl">

                <Image
                  src="/ai.jpg"
                  alt="Real-time AI vehicle health scan preview"
                  width={600}
                  height={420}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                {/* AI Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass text-emerald-300 text-xs font-semibold backdrop-blur-md">
                  LIVE VEHICLE SCAN
                </div>

                {/* Animated Scan Line */}
                <motion.div
                  className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-300 to-transparent"
                  animate={{ top: ["10%", "90%", "10%"] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                />

              </div>

              <div className="absolute -top-6 -left-6 px-4 py-2 glass border border-slate-800 rounded-xl shadow-md text-xs text-emerald-300 animate-bounce">
                Detecting Damage...
              </div>

              <div className="absolute bottom-6 -right-6 px-4 py-2 glass border border-slate-800 rounded-xl shadow-md text-xs text-emerald-300 animate-bounce">
                Scan in Progress
              </div>

            </motion.div>

          </div>

        </div>
      </section>
      <section className="py-20 lg:py-32 bg-slate-950 relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(101,76,79,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(101,76,79,0.08),transparent_50%)]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/70 border border-emerald-400/20 backdrop-blur-md mb-5">
              <Cpu className="w-4 h-4 text-emerald-300" />
              <span className="text-sm font-semibold text-emerald-200">
                Under the Hood
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-100">
              What Powers Our <span className="text-emerald-300">AI</span>
            </h2>

            <p className="text-slate-300 mt-4 max-w-xl mx-auto">
              Every photo moves through a multi-stage AI pipeline before your health report is ready.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l-2 border-emerald-400/30 pl-6 md:ml-6">

            {[
              {
                title: "Image Preparation",
                desc: "Uploaded photos are cleaned, optimized, and formatted so the AI model can read them accurately",
              },
              {
                title: "Visual Pattern Matching",
                desc: "The engine looks for scratches, surface marks, unusual textures, and signs of structural wear",
              },
              {
                title: "Severity Sorting",
                desc: "Each finding is ranked as low, medium, or high so you know what needs attention first",
              },
              {
                title: "Report Assembly",
                desc: "We compile repair estimates, risk warnings, and maintenance suggestions into one final document",
              },
            ].map((step, i) => (
              <div key={i} className="mb-10 lg:pl-6 pl-0 md:ml-6 relative">

                {/* Dot */}
                <div className="absolute -left-[33px] top-1 lg:-left-[57px] w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(120,0,0,0.6)] animate-pulse" />

                {/* Card */}
                <div className="p-6 rounded-2xl bg-slate-900/70 border border-emerald-400/20 backdrop-blur-md shadow-sm hover:shadow-lg transition-all">

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-slate-900/70 text-emerald-300 font-semibold">
                      Step {i + 1}
                    </span>

                    <div className="h-[1px] flex-1 bg-slate-700" />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-100 mb-1">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300">
                    {step.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* Bottom highlight */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900/70 border border-emerald-400/20 backdrop-blur-md whitespace-nowrap">
              <Zap className="w-4 h-4 text-emerald-300" />
              <span className="text-sm text-slate-200 font-medium">
                End-to-end AI inspection — fully automated from start to finish.
              </span>
            </div>
          </div>

        </div>
      </section>




      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to see how your car is really doing?
            </h2>
            <p className="text-white mb-8 max-w-xl mx-auto leading-relaxed">
              Send in your photos today and get a detailed AI health report with professional repair guidance.
            </p>
            <Link
              href="/analysis"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/75 text-emerald-200 font-semibold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl hover:bg-emerald-400/20"
            >
              <Car className="w-5 h-5" />
              Try a Free Scan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <a
        href={`https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${whatsappText}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full text-white transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
      >
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z"
              fill="#BFC8D0"
            />{" "}
            <path
              d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
              fill="url(#paint0_linear_87_7264)"
            />{" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z"
              fill="white"
            />{" "}
            <path
              d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z"
              fill="white"
            />{" "}
            <defs>
              {" "}
              <linearGradient
                id="paint0_linear_87_7264"
                x1="26.5"
                y1={7}
                x2={4}
                y2={28}
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop stopColor="#67C15E" /> <stop offset={1} stopColor="#67C15E" />{" "}
              </linearGradient>{" "}
            </defs>{" "}
          </g>
        </svg>

      </a>
    </div>
  );
}
