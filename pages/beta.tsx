"use client";

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'motion/react';

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void }
  }
}

const YEAR = new Date().getFullYear();

const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring' as const, bounce: 0, duration: 0.8 } },
};

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    label: 'Free during the entire beta',
    body: 'No credit card. No trial clock. Full access to every feature while we build together.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    label: 'Get in before your classmates',
    body: 'Beta spots are limited. Students who join now will have weeks of deliberate practice before the rest of the cohort even hears about it.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    label: 'Your feedback shapes the product',
    body: 'We read every message. Beta students decide what gets built next — topic requests, question formats, solution styles.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    label: 'Real HSC questions from day one',
    body: 'Not dummy content. Full question banks across Standard, Advanced, Extension 1, and Extension 2 — with complete worked solutions.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    label: 'Lock in founding member pricing',
    body: "Beta students get a discounted rate for life when we launch paid plans. You'll never pay full price.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    label: 'Weak area tracking from your first session',
    body: "Every question you attempt is tracked by topic. By your second session, you'll already know exactly where to focus.",
  },
];

export default function BetaPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const scriptId = 'tally-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.onload = () => { if (window.Tally) window.Tally.loadEmbeds(); };
      document.head.appendChild(script);
    } else {
      if (window.Tally) window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Join the Beta — PracticePapers.io</title>
        <meta name="description" content="Get free early access to PracticePapers.io. HSC-quality maths questions, worked solutions, and weak area tracking — before everyone else." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          html { scroll-behavior: smooth; }
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #F8F7F5;
            color: #09090B;
            font-size: 16px;
            line-height: 1.65;
            -webkit-font-smoothing: antialiased;
          }

          /* NAV */
          .nav {
            position: sticky; top: 0; z-index: 100;
            background: rgba(248,247,245,0.9);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(0,0,0,0.06);
            padding: 0 40px;
          }
          .nav-inner {
            max-width: 1100px; margin: 0 auto;
            height: 64px; display: flex;
            align-items: center; justify-content: space-between;
          }
          .nav-logo {
            font-size: 18px; font-weight: 700;
            color: #09090B; text-decoration: none; letter-spacing: -0.03em;
          }
          .nav-back {
            font-size: 13px; color: #71717A; text-decoration: none;
            display: flex; align-items: center; gap: 6px; transition: color 0.15s;
          }
          .nav-back:hover { color: #09090B; }

          /* LAYOUT */
          .beta-page {
            min-height: 100vh;
            display: grid;
            grid-template-columns: 1fr 1fr;
            max-width: 1100px;
            margin: 0 auto;
            padding: 80px 40px 120px;
            gap: 80px;
            align-items: start;
          }

          /* LEFT COPY */
          .beta-eyebrow {
            font-size: 11px; font-weight: 600; letter-spacing: 0.12em;
            text-transform: uppercase; color: #4F46E5;
            margin-bottom: 20px; display: block;
          }
          .beta-headline {
            font-size: clamp(32px, 4vw, 52px);
            font-weight: 700; letter-spacing: -0.04em;
            line-height: 1.08; color: #09090B;
            margin-bottom: 20px;
          }
          .beta-sub {
            font-size: 17px; color: #3F3F46;
            line-height: 1.75; margin-bottom: 56px;
            max-width: 480px;
          }

          /* BENEFITS */
          .benefits-list {
            display: flex; flex-direction: column; gap: 28px;
          }
          .benefit-item {
            display: flex; gap: 16px; align-items: flex-start;
          }
          .benefit-icon {
            width: 40px; height: 40px; border-radius: 10px;
            background: #EEF2FF;
            border: 1px solid rgba(79,70,229,0.12);
            display: flex; align-items: center; justify-content: center;
            flex-shrink: 0; color: #4F46E5;
          }
          .benefit-label {
            font-size: 15px; font-weight: 600; color: #09090B;
            margin-bottom: 4px; letter-spacing: -0.01em;
          }
          .benefit-body {
            font-size: 14px; color: #52525B; line-height: 1.65;
          }

          /* RIGHT FORM */
          .beta-form-col {
            position: sticky;
            top: 88px;
          }
          .beta-form-card {
            background: #fff;
            border: 1px solid rgba(0,0,0,0.08);
            border-radius: 20px;
            padding: 40px 36px;
            box-shadow: 0 8px 40px -12px rgba(0,0,0,0.08);
          }
          .beta-form-title {
            font-size: 20px; font-weight: 700;
            color: #09090B; letter-spacing: -0.03em;
            margin-bottom: 6px;
          }
          .beta-form-sub {
            font-size: 13px; color: #52525B;
            margin-bottom: 28px; line-height: 1.5;
          }
          .beta-spots {
            display: inline-flex; align-items: center; gap: 8px;
            background: #EEF2FF;
            border: 1px solid rgba(79,70,229,0.15);
            border-radius: 6px;
            padding: 6px 12px;
            font-size: 12px; font-weight: 600;
            color: #4F46E5;
            margin-bottom: 24px;
            letter-spacing: 0.01em;
          }
          .beta-spots-dot {
            width: 6px; height: 6px; border-radius: 50%;
            background: #4F46E5;
            animation: pulse 2s ease-in-out infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(0.8); }
          }

          /* Footer */
          .beta-footer {
            text-align: center;
            padding: 40px;
            border-top: 1px solid rgba(0,0,0,0.06);
            font-size: 12px; color: #A1A1AA;
          }
          .beta-footer a { color: #71717A; text-decoration: none; }
          .beta-footer a:hover { color: #09090B; }

          @media (max-width: 768px) {
            .nav { padding: 0 20px; }
            .beta-page {
              grid-template-columns: 1fr;
              padding: 48px 20px 80px;
              gap: 56px;
            }
            .beta-form-col { position: static; }
            .beta-form-card { padding: 28px 20px; }
            .beta-headline { font-size: 36px; }
          }
        `}} />
      </Head>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">PracticePapers.io</Link>
          <Link href="/" className="nav-back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
            Back to home
          </Link>
        </div>
      </nav>

      {/* BACKGROUND GLOW */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(79,70,229,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      {/* MAIN */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <div className="beta-page">

          {/* LEFT — COPY */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariant} className="beta-eyebrow">Beta — limited spots</motion.span>
            <motion.h1 variants={itemVariant} className="beta-headline">
              Be one of the first students to use it.
            </motion.h1>
            <motion.p variants={itemVariant} className="beta-sub">
              We're opening PracticePapers.io to a small group of HSC students before the full launch. Free access. Real questions. And your input shapes what we build next.
            </motion.p>

            <motion.div variants={containerVariant} className="benefits-list">
              {benefits.map((b) => (
                <motion.div key={b.label} variants={itemVariant} className="benefit-item">
                  <div className="benefit-icon">{b.icon}</div>
                  <div>
                    <div className="benefit-label">{b.label}</div>
                    <div className="benefit-body">{b.body}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.div
            className="beta-form-col"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ type: 'spring', bounce: 0, duration: 1, delay: 0.2 }}
          >
            <div className="beta-form-card">
              <div className="beta-spots">
                <span className="beta-spots-dot" />
                Beta now open
              </div>
              <div className="beta-form-title">Claim your spot</div>
              <div className="beta-form-sub">Takes 30 seconds. Free access, no credit card.</div>
              <iframe
                data-tally-src="https://tally.so/embed/3yraKW?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="320"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="Join the PracticePapers.io beta"
                style={{ width: '100%', background: 'transparent', border: 'none', colorScheme: 'dark' }}
              />
            </div>

            <p style={{ fontSize: '12px', color: '#A1A1AA', textAlign: 'center', marginTop: '16px', lineHeight: 1.6 }}>
              By joining you agree to our{' '}
              <Link href="/privacy" style={{ color: '#71717A', textDecoration: 'underline' }}>privacy policy</Link>.
              We&apos;ll only email you about PracticePapers.io.
            </p>
          </motion.div>

        </div>
      </main>

      <footer className="beta-footer">
        © {YEAR} PracticePapers.io ·{' '}
        <Link href="/privacy">Privacy policy</Link> ·{' '}
        <Link href="/">Home</Link>
      </footer>
    </>
  );
}
