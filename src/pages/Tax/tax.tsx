"use client"
import Head from 'next/head';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const serviceCategories = [
  {
    title: 'Direct Taxation',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-blue-600"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12h8M8 16h8M8 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    points: [
      'ITR Filing (ITR-1 to ITR-7)',
      'Capital Gains Computation',
      'Advance Tax, TDS Compliance',
    ],
  },
  {
    title: 'Indirect Taxation (GST)',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-green-600"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    points: [
      'GST Registration, Returns, LUTs',
      'Reconciliation, Audit, Refunds',
    ],
  },
  {
    title: 'International Tax',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-purple-600"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2"/></svg>
    ),
    points: [
      'NRI Tax, DTAA Planning, Transfer Pricing',
    ],
  },
  {
    title: 'Assessments & Appeals',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-orange-600"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2"/></svg>
    ),
    points: [
      'Scrutiny Notices',
      'Show Cause Replies',
      'Representation at CIT(A), ITAT',
    ],
  },
];

const tools = [
  { name: 'Capital Gains Calculator', desc: 'Compute capital gains tax with ease.' },
  { name: 'Advance Tax Estimator', desc: 'Estimate your advance tax liability.' },
  { name: 'HRA & 80C Estimator', desc: 'Maximize your HRA and 80C deductions.' },
  { name: 'RCM Applicability Tool', desc: 'Check if RCM applies to your GST transactions.' },
];

const feeds = [
  { title: 'Budget Highlights', icon: '📊' },
  { title: 'CBDT/CBIC Notifications', icon: '📢' },
  { title: 'Case Law Digest', icon: '📚' },
];

export default function TaxPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Taxation Services | Perificio</title>
        <meta name="description" content="Central hub for all tax-related services: Direct, Indirect, NRI, TDS, Assessments. CA-reviewed, compliant, and accurate support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="w-full min-h-[60vh] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 text-center bg-gradient-to-b from-white to-blue-50">
          <div className="flex flex-col items-center gap-4">
            <svg width="80" height="80" fill="none" viewBox="0 0 80 80" className="mb-2"><circle cx="40" cy="40" r="38" stroke="#2563eb" strokeWidth="4" fill="#eff6ff"/><path d="M25 40h30M25 50h30M25 30h30" stroke="#2563eb" strokeWidth="4" strokeLinecap="round"/></svg>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Simplify Your Taxes</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">Get accurate, compliant, and CA-reviewed taxation support—direct and indirect.</p>
            <a href="#cta" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition">Talk to a Tax Expert</a>
          </div>
        </motion.section>

        {/* Service Categories */}
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-white border-t border-gray-100">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Service Categories</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((cat) => (
              <motion.div whileHover={{ scale: 1.04 }} key={cat.title} className="bg-blue-50 rounded-xl shadow-sm p-6 flex flex-col h-full border border-blue-100 items-center text-center transition">
                <div className="mb-3">{cat.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-blue-700">{cat.title}</h3>
                <ul className="space-y-2 text-gray-700">
                  {cat.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 justify-center">
                      <span className="text-blue-500">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tools Section */}
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-blue-50 border-t border-gray-100">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Tools & Calculators</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <motion.div whileHover={{ scale: 1.04 }} key={tool.name} className="bg-white rounded-xl shadow-sm p-6 flex flex-col h-full border border-blue-100 items-center text-center transition">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="mb-2 text-blue-600"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                <h3 className="text-lg font-bold mb-2 text-blue-700">{tool.name}</h3>
                <p className="text-gray-700">{tool.desc}</p>
                <button className="mt-4 bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition">Try Now</button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Legal/Update Feeds */}
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-white border-t border-gray-100">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">Legal & Update Feeds</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {feeds.map((feed) => (
              <motion.div whileHover={{ scale: 1.04 }} key={feed.title} className="bg-blue-50 rounded-xl shadow-sm p-6 flex flex-col h-full border border-blue-100 items-center text-center transition">
                <span className="text-3xl mb-2">{feed.icon}</span>
                <h3 className="text-lg font-bold text-blue-700">{feed.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Footer Section */}
        <motion.section id="cta" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-16 bg-gradient-to-b from-white to-blue-50">
          {/* Left: Content */}
          <form >
          <section>
          <div className="flex-1 flex flex-col justify-center items-start text-left max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Simplify Your Taxes</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">Get accurate, compliant, and CA-reviewed taxation support—direct and indirect.</p>
            <a href="#cta" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition">Talk to a Tax Expert</a>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 md:ml-8 w-full max-w-lg">
            <img src="/assets/Hero2.jpg" alt="Tax Hero" className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>
        </section>
        

        {submitted && <p className="text-green-600 font-medium mt-2">Thank you! We'll contact you soon.</p>}
          </form>
        </motion.section>
      </main>
    </>
  );
}
