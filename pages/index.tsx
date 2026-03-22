"use client";

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useScroll, useTransform, Variants, useInView, useMotionValue, animate, AnimatePresence } from 'motion/react';

// Animated counter component
function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, to, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return controls.stop;
  }, [inView, motionVal, to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

// Isaac animated face — transitions between happy, thinking, and talking moods
function IsaacFace({ mood }: { mood: 'happy' | 'thinking' | 'talking' }) {
  const [mouthOpen, setMouthOpen] = useState(false);
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    if (mood !== 'talking') { setMouthOpen(false); return; }
    const interval = setInterval(() => setMouthOpen(o => !o), 400);
    return () => clearInterval(interval);
  }, [mood]);

  useEffect(() => {
    if (mood !== 'talking') { setBlinking(false); return; }
    const timer = setTimeout(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 150);
    }, 2000);
    return () => clearTimeout(timer);
  }, [mood]);

  const pCx = mood === 'thinking' ? -1 : 0;
  const pCy = mood === 'thinking' ? -0.8 : mood === 'talking' ? -0.2 : 0;
  const cheekOp = mood === 'happy' ? 0.35 : mood === 'thinking' ? 0.15 : 0.28;

  return (
    <motion.div
      animate={{ y: mood === 'thinking' ? 0 : [0, -1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.svg
        width="32" height="32" viewBox="0 0 40 40" fill="none"
        style={{ transformOrigin: 'center', display: 'block' }}
        animate={{
          rotate: mood === 'talking' ? [0, 1, -1, 0] : mood === 'thinking' ? -4 : 0,
        }}
        transition={mood === 'talking'
          ? { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
          : { duration: 0.4 }
        }
      >
        <rect width="40" height="40" rx="12" fill="#FFDAA6" />
        {/* Eye whites */}
        <circle cx="14" cy="17" r="3.5" fill="#FFFFFF" />
        <circle cx="26" cy="17" r="3.5" fill="#FFFFFF" />
        {/* Pupils — animate position for mood, ry for blink */}
        <motion.ellipse
          fill="#2D2B3D"
          animate={{ cx: 14 + pCx, cy: 17 + pCy, rx: 2.5, ry: blinking ? 0.25 : 2.5 }}
          transition={{ duration: 0.15 }}
        />
        <motion.ellipse
          fill="#2D2B3D"
          animate={{ cx: 26 + pCx, cy: 17 + pCy, rx: 2.5, ry: blinking ? 0.25 : 2.5 }}
          transition={{ duration: 0.15 }}
        />
        {/* Highlights */}
        <circle cx="13" cy="16" r="1" fill="#fff" opacity="0.8" />
        <circle cx="25" cy="16" r="1" fill="#fff" opacity="0.8" />
        {/* Cheeks */}
        <motion.ellipse cx="12" cy="21" rx="4" ry="2.5" fill="#FFBCBC"
          animate={{ opacity: cheekOp }} transition={{ duration: 0.3 }}
        />
        <motion.ellipse cx="28" cy="21" rx="4" ry="2.5" fill="#FFBCBC"
          animate={{ opacity: cheekOp }} transition={{ duration: 0.3 }}
        />
        {/* Mouth — happy smile */}
        <motion.path d="M15 24 Q20 28 25 24" stroke="#C75A3A" strokeWidth="2"
          strokeLinecap="round" fill="none"
          animate={{ opacity: mood === 'happy' ? 1 : 0 }} transition={{ duration: 0.2 }}
        />
        {/* Mouth — thinking pout */}
        <motion.path d="M17 24.5 Q20 25.5 23 24.5" stroke="#C75A3A" strokeWidth="2"
          strokeLinecap="round" fill="none"
          animate={{ opacity: mood === 'thinking' ? 1 : 0 }} transition={{ duration: 0.2 }}
        />
        {/* Mouth — talking closed */}
        <motion.path d="M15 24 Q20 28 25 24" stroke="#C75A3A" strokeWidth="2"
          strokeLinecap="round" fill="none"
          animate={{ opacity: mood === 'talking' && !mouthOpen ? 1 : 0 }} transition={{ duration: 0.1 }}
        />
        {/* Mouth — talking open */}
        <motion.path d="M16 23.5 Q20 27 24 23.5" stroke="#C75A3A" strokeWidth="2"
          strokeLinecap="round" fill="#E8735A"
          animate={{ opacity: mood === 'talking' && mouthOpen ? 1 : 0 }} transition={{ duration: 0.1 }}
        />
      </motion.svg>
    </motion.div>
  );
}

// Isaac animated chat panel — loops every ~12s showing a real conversation
function IsaacAnimatedPanel() {
  const panelRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(panelRef, { margin: "-100px" });
  const [started, setStarted] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [visible, setVisible] = useState(false);
  const [mood, setMood] = useState<'happy' | 'thinking' | 'talking'>('happy');
  const [showChip, setShowChip] = useState(false);
  const [showUserMsg, setShowUserMsg] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);
  const [showPills, setShowPills] = useState(false);

  useEffect(() => {
    if (isInView && !started) setStarted(true);
  }, [isInView, started]);

  useEffect(() => {
    if (!started) return;

    // Reset everything for new cycle
    setVisible(true);
    setShowChip(false);
    setShowUserMsg(false);
    setShowTyping(false);
    setShowLine1(false);
    setShowLine2(false);
    setShowLine3(false);
    setShowPills(false);
    setMood('happy');

    const timers = [
      // Frame 2: context chip + user message
      setTimeout(() => setShowChip(true), 1000),
      setTimeout(() => setShowUserMsg(true), 1300),
      // Frame 3: Isaac thinks
      setTimeout(() => { setMood('thinking'); setShowTyping(true); }, 2500),
      // Frame 4: Isaac responds — line by line
      setTimeout(() => { setMood('talking'); setShowTyping(false); setShowLine1(true); }, 4500),
      setTimeout(() => setShowLine2(true), 6000),
      setTimeout(() => setShowLine3(true), 7500),
      // Frame 5: happy mood + language pills
      setTimeout(() => { setMood('happy'); setShowPills(true); }, 9000),
      // Frame 6: hold then fade out
      setTimeout(() => setVisible(false), 11000),
      setTimeout(() => setCycle(c => c + 1), 12000),
    ];

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, cycle]);

  return (
    <div ref={panelRef} style={{ minHeight: 440 }}>
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={cycle}
            className="isaac-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
            transition={{ type: 'spring', stiffness: 420, damping: 32 }}
          >
            {/* Header with animated face */}
            <div className="isaac-header">
              <IsaacFace mood={mood} />
              <div>
                <div className="isaac-header-name">Isaac</div>
                <div className="isaac-header-status">AI Maths Tutor</div>
              </div>
            </div>

            {/* Chat body */}
            <div className="isaac-body">
              {/* Context chip */}
              <AnimatePresence>
                {showChip && (
                  <motion.div
                    key="chip"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="isaac-context-chip">Q14B</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* User message */}
              <AnimatePresence>
                {showUserMsg && (
                  <motion.div
                    key="user-msg"
                    className="isaac-user-msg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
                  >
                    Why do we set the two equations equal to each other first?
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Typing indicator */}
              <AnimatePresence>
                {showTyping && (
                  <motion.div
                    key="typing"
                    className="isaac-typing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {[0, 0.15, 0.3].map((delay) => (
                      <motion.div
                        key={delay}
                        style={{ width: 6, height: 6, borderRadius: '50%', background: '#A1A1AA' }}
                        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Isaac response — progressive reveal */}
              <AnimatePresence>
                {showLine1 && (
                  <motion.div
                    key="bot-msg"
                    className="isaac-bot-msg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
                  >
                    <strong>Great question.</strong> Setting <em>y = x²</em> equal to <em>y = 4 − x²</em> finds where the curves cross — those are your integration bounds.

                    <AnimatePresence>
                      {showLine2 && (
                        <motion.span
                          key="line2"
                          style={{ display: 'block', marginTop: 8 }}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          Think of it this way: you can&#39;t calculate the area <em>between</em> two curves until you know <em>where they meet</em>. The intersection points give you the limits of your definite integral.
                        </motion.span>
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {showLine3 && (
                        <motion.span
                          key="line3"
                          className="isaac-trap"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          Common HSC trap: students forget to check which curve is on top.
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language pills */}
            <AnimatePresence>
              {showPills && (
                <motion.div
                  key="pills"
                  className="language-pills-wrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="language-pills-label">Explain in your language</div>
                  <div className="language-pills">
                    {['\u0627\u0644\u0639\u0631\u0628\u064A\u0629', '\u4E2D\u6587', '\u0939\u093F\u0928\u094D\u0926\u0940', 'Ti\u1EBFng Vi\u1EC7t', '\uD55C\uAD6D\uC5B4', '\u65E5\u672C\u8A9E'].map((lang, i) => (
                      <motion.span
                        key={lang}
                        className="language-pill"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                      >
                        {lang}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', bounce: 0, duration: 0.8 }
  },
};

const YEAR = new Date().getFullYear();

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const navBorderOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const navBoxShadow = useTransform(scrollYProgress, [0, 0.05], ['0 0 0 rgba(9,9,11,0)', '0 1px 0 rgba(9,9,11,0.04)']);

  // Parallax offsets for the 3 feature blocks (adjust range as needed)
  const y1 = useTransform(scrollYProgress, [0.1, 0.4], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.6], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);
  const y4 = useTransform(scrollYProgress, [0.6, 0.85], [50, -50]);

  // Parallax for pain section image
  const painImageY = useTransform(scrollYProgress, [0.05, 0.25], [30, -30]);

  return (
    <>
      <Head>
        <title>PracticePapers.io — HSC Maths Practice That Actually Works</title>
        <meta name="description" content="Real HSC-style questions, worked solutions, and a tool that learns where you're going wrong. Join the beta free." />
        <meta property="og:title" content="PracticePapers.io — HSC Maths Practice That Actually Works" />
        <meta property="og:description" content="Band 6 maths students don't study more. They practise differently. Join the beta free." />
        <meta property="og:image" content="/og-pp.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PracticePapers.io — HSC Maths Practice That Actually Works" />
        <meta name="twitter:description" content="Band 6 maths students don't study more. They practise differently. Join the beta free." />
        <meta name="twitter:image" content="/og-pp.png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Kalam:wght@300;400;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{
          __html: `
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
            position: sticky;
            top: 0;
            z-index: 100;
            background: #F8F7F5;
            border-bottom: 1px solid transparent;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
            padding: 0 40px;
          }
          .nav.scrolled {
            border-bottom-color: rgba(9,9,11,0.08);
            box-shadow: 0 1px 0 rgba(9,9,11,0.04);
          }
          .nav-inner {
            max-width: 1200px;
            margin: 0 auto;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .nav-logo {
            font-size: 18px;
            font-weight: 700;
            color: #09090B;
            text-decoration: none;
            letter-spacing: -0.03em;
          }
          .nav-links {
            display: flex;
            align-items: center;
            gap: 32px;
            list-style: none;
          }
          .nav-links a {
            font-size: 14px;
            color: #52525B;
            text-decoration: none;
            transition: color 0.15s;
          }
          .nav-links a:hover { color: #09090B; }
          .nav-links a.btn-nav,
          .nav-links a.btn-nav:hover { color: #ffffff; }
          .btn-nav {
            background: #4F46E5;
            color: #ffffff;
            font-size: 13px;
            font-weight: 600;
            padding: 8px 20px;
            border-radius: 8px;
            text-decoration: none;
            transition: background 0.15s;
            white-space: nowrap;
          }
          .btn-nav:hover { background: #4338CA; }
          .nav-hamburger {
            display: none;
            flex-direction: column;
            gap: 5px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
          }
          .nav-hamburger span {
            display: block;
            width: 22px;
            height: 2px;
            background: #09090B;
            border-radius: 2px;
            transition: transform 0.2s, opacity 0.2s;
          }
          .nav-mobile {
            display: none;
            flex-direction: column;
            gap: 0;
            background: #F8F7F5;
            border-top: 1px solid rgba(0,0,0,0.06);
            padding: 16px 20px 24px;
          }
          .nav-mobile.open { display: flex; }
          .nav-mobile a {
            font-size: 16px;
            color: #18181B;
            text-decoration: none;
            padding: 12px 0;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            font-weight: 500;
          }
          .nav-mobile a:last-child { border-bottom: none; }
          .nav-mobile .btn-nav {
            margin-top: 12px;
            text-align: center;
            display: block;
            font-size: 15px;
            padding: 12px 20px;
          }

          /* EYEBROW */
          .eyebrow {
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #71717A;
            margin-bottom: 20px;
            display: block;
          }

          /* HERO */
          .hero {
            min-height: calc(100vh - 64px);
            display: flex;
            align-items: center;
            padding: 80px 40px;
            background: #F8F7F5;
            position: relative;
            overflow: hidden;
          }
          .hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
            pointer-events: none;
            opacity: 0.6;
          }
          .hero-inner {
            max-width: 1200px;
            margin: 0 auto;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
            position: relative;
            z-index: 1;
          }
          .hero-headline {
            font-size: clamp(38px, 5vw, 64px);
            font-weight: 700;
            letter-spacing: -0.04em;
            line-height: 1.05;
            color: #09090B;
            margin-bottom: 24px;
          }
          .hero-sub {
            font-size: 17px;
            color: #52525B;
            line-height: 1.7;
            max-width: 480px;
            margin-bottom: 40px;
          }
          .hero-ctas {
            display: flex;
            align-items: center;
            gap: 24px;
            margin-bottom: 24px;
            flex-wrap: wrap;
          }
          .btn-primary {
            background: #18181B;
            color: #fff;
            font-size: 15px;
            font-weight: 500;
            padding: 14px 28px;
            border-radius: 8px;
            text-decoration: none;
            transition: opacity 0.15s;
            display: inline-block;
          }
          .btn-primary:hover { opacity: 0.85; }
          .btn-link {
            font-size: 15px;
            color: #52525B;
            text-decoration: none;
            transition: color 0.15s;
          }
          .btn-link:hover { color: #09090B; }
          .hero-proof {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
          }
          .hero-proof-label {
            font-size: 11px;
            color: #A1A1AA;
            letter-spacing: 0.01em;
            margin-right: 2px;
          }
          .course-badge {
            font-size: 11px;
            font-weight: 500;
            color: #52525B;
            background: rgba(0,0,0,0.05);
            border: 1px solid rgba(0,0,0,0.08);
            padding: 3px 10px;
            border-radius: 20px;
            white-space: nowrap;
          }
          .hero-reassurance {
            font-size: 12px;
            color: #A1A1AA;
            margin-top: 10px;
          }

          /* NOTEBOOK MOCKUP RE-DESIGN */
          .hero-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 120%;
            height: 120%;
            background: radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.12) 0%, rgba(139, 92, 246, 0.07) 40%, rgba(250, 249, 246, 0) 70%);
            filter: blur(40px);
            z-index: 0;
            animation: pulseGlow 8s ease-in-out infinite alternate;
          }
          @keyframes pulseGlow {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
            100% { transform: translate(-50%, -50%) scale(1.05); opacity: 1; }
          }
          .notebook-mockup {
            background: #fdfcf8;
            border-radius: 4px 16px 16px 4px;
            box-shadow: 
              -5px 0 10px rgba(0,0,0,0.02),
              0 24px 60px -12px rgba(0,0,0,0.15),
              inset 4px 0 12px rgba(0,0,0,0.03);
            transform: rotate(-1.5deg);
            overflow: hidden;
            position: relative;
            z-index: 1;
            width: 100%;
            max-width: 440px;
            margin: 0 auto;
            aspect-ratio: 4.5/5;
            border-left: 3px solid rgba(0,0,0,0.1);
            border-top: 1px solid rgba(0,0,0,0.05);
            border-right: 1px solid rgba(0,0,0,0.05);
            border-bottom: 1px solid rgba(0,0,0,0.05);
          }
          .notebook-page {
            width: 100%;
            height: 100%;
            background-image: repeating-linear-gradient(transparent, transparent 31px, rgba(59, 130, 246, 0.15) 31px, rgba(59, 130, 246, 0.15) 32px);
            background-size: 100% 32px;
            background-position: 0 44px; /* offset the first line */
            position: relative;
          }
          .notebook-margin {
            position: absolute;
            left: 56px;
            top: 0;
            bottom: 0;
            width: 2px;
            background-color: rgba(220, 38, 38, 0.35);
          }
          .notebook-top-margin {
            position: absolute;
            left: 0;
            right: 0;
            top: 44px;
            height: 2px;
            background-color: rgba(59, 130, 246, 0.15);
          }
          .notebook-content {
            padding: 56px 30px 40px 72px;
            font-family: 'Kalam', cursive;
            font-size: 20px;
            line-height: 32px; 
            color: #1E3A8A; /* dark blue pen */
          }
          .handwritten-line {
            min-height: 32px;
            display: flex;
            align-items: center;
          }
          .mock-cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .mock-card {
            background: #fff;
            border-radius: 8px;
            padding: 14px;
            border: 1px solid rgba(0,0,0,0.07);
          }
          .mock-card-pill {
            display: inline-block;
            font-size: 9px;
            font-weight: 600;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            padding: 2px 7px;
            border-radius: 3px;
            margin-bottom: 6px;
          }
          .pill-indigo { background: #EEF2FF; color: #4F46E5; }
          .pill-sky { background: #E0F2FE; color: #0284C7; }
          .pill-amber { background: #FFF8E1; color: #D97706; }
          .pill-emerald { background: #ECFDF5; color: #059669; }
          .mock-card-title {
            font-size: 11px;
            font-weight: 600;
            color: #09090B;
            margin-bottom: 2px;
          }
          .mock-card-meta {
            font-size: 10px;
            color: #A1A1AA;
          }
          .mock-card-bar {
            margin-top: 8px;
            height: 3px;
            background: #E4E4E7;
            border-radius: 2px;
            overflow: hidden;
          }
          .mock-card-fill {
            height: 100%;
            border-radius: 2px;
          }

          /* SECTIONS */
          section { position: relative; }

          .section-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 40px;
          }

          /* PAIN */
          .pain-section {
            padding: 140px 40px;
            background: #F8F7F5;
          }
          .pain-inner {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
          }
          .pain-content {
            text-align: left;
          }
          .pain-image-wrapper {
            position: relative;
            width: 100%;
            aspect-ratio: 4/3;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 24px 60px -12px rgba(0,0,0,0.15), 0 10px 40px -10px rgba(0,0,0,0.06);
            transform: rotate(2deg);
            border: 1px solid rgba(0,0,0,0.05);
            background: #fff;
          }
          .pain-image-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .section-label {
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0.12em;
            color: #71717A;
            margin-bottom: 24px;
            display: block;
          }
          .section-headline {
            font-size: clamp(28px, 3.5vw, 44px);
            font-weight: 700;
            letter-spacing: -0.03em;
            line-height: 1.1;
            color: #09090B;
            margin-bottom: 40px;
          }
          .pain-body p {
            font-size: 17px;
            color: #52525B;
            line-height: 1.75;
            margin-bottom: 20px;
          }
          .pain-body p:last-child { margin-bottom: 0; }
          .pain-body strong {
            color: #09090B;
            font-weight: 500;
          }

          /* AGITATE */
          .agitate-section {
            padding: 140px 40px;
            background: #F8F7F5;
            border-top: 1px solid rgba(0,0,0,0.06);
          }
          .agitate-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 48px;
          }
          .agitate-col-label {
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: rgba(232, 84, 58, 0.75);
            margin-bottom: 14px;
            display: block;
          }
          .agitate-col-headline {
            font-size: 22px;
            font-weight: 700;
            letter-spacing: -0.025em;
            color: #09090B;
            margin-bottom: 14px;
            line-height: 1.2;
          }
          .agitate-col-body {
            font-size: 15px;
            color: #71717A;
            line-height: 1.7;
          }

          /* SOLUTION DARK */
          .solution-section {
            padding: 140px 40px;
            background: #18181B;
            color: #fff;
            position: relative;
            overflow: hidden;
          }
          .solution-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: url('/papers-dark.jpeg');
            background-size: cover;
            background-position: center;
            opacity: 0.07;
            pointer-events: none;
            z-index: 0;
          }
          .solution-inner {
            position: relative;
            z-index: 1;
            max-width: 1200px;
            margin: 0 auto;
          }
          .solution-eyebrow {
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #71717A;
            margin-bottom: 20px;
            display: block;
          }
          .solution-headline {
            font-size: clamp(28px, 3.5vw, 44px);
            font-weight: 700;
            letter-spacing: -0.03em;
            line-height: 1.1;
            color: #fff;
            margin-bottom: 28px;
            max-width: 640px;
          }
          .solution-body {
            font-size: 17px;
            color: #A1A1AA;
            line-height: 1.75;
            max-width: 660px;
            margin-bottom: 72px;
          }
          .feature-cards {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 24px;
          }
          .feature-card {
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 12px;
            padding: 32px;
          }
          .feature-card-icon {
            width: 36px;
            height: 36px;
            margin-bottom: 20px;
            color: #A1A1AA;
          }
          .feature-card-title {
            font-size: 17px;
            font-weight: 600;
            color: #fff;
            letter-spacing: -0.02em;
            margin-bottom: 10px;
          }
          .feature-card-body {
            font-size: 14px;
            color: #71717A;
            line-height: 1.7;
          }

          /* FEATURE DEEP DIVE */
          .features-section {
            padding: 140px 40px;
            background: #F8F7F5;
          }
          .feature-block {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
            margin-bottom: 120px;
          }
          .feature-block:last-child { margin-bottom: 0; }
          .feature-block.reverse { direction: rtl; }
          .feature-block.reverse > * { direction: ltr; }
          .feature-copy-eyebrow {
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #71717A;
            margin-bottom: 14px;
            display: block;
          }
          .feature-copy-headline {
            font-size: clamp(24px, 3vw, 40px);
            font-weight: 700;
            letter-spacing: -0.03em;
            line-height: 1.15;
            color: #09090B;
            margin-bottom: 18px;
          }
          .feature-copy-body {
            font-size: 16px;
            color: #52525B;
            line-height: 1.75;
          }

          /* SCREENSHOT PLACEHOLDER RE-DESIGN */
          .screenshot-wrap {
            position: relative;
            transform-style: preserve-3d;
            perspective: 1200px;
          }
          .screenshot-placeholder {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255,255,255,0.4);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 
              0 30px 60px -15px rgba(0,0,0,0.08), 
              0 10px 30px -10px rgba(0,0,0,0.04),
              inset 0 1px 0 rgba(255,255,255,0.8);
          }
          .screenshot-inner-chrome {
            background: rgba(255, 255, 255, 0.4);
            padding: 12px 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid rgba(0,0,0,0.04);
          }
          .screenshot-body-content {
            padding: 32px;
            min-height: 400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.2);
            position: relative;
          }
          .screenshot-label {
            position: absolute;
            bottom: -36px;
            left: 0; right: 0;
            text-align: center;
            font-size: 11px;
            color: #A1A1AA;
            line-height: 1.6;
          }
          
          /* BENTO GRID (FEATURE 1) */
          .bento-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            gap: 12px;
            width: 100%;
            max-width: 360px;
            z-index: 2;
          }
          .bento-card {
            background: rgba(255, 255, 255, 0.8);
            border-radius: 12px;
            padding: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,1);
            border: 1px solid rgba(0,0,0,0.03);
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }
          .bento-card.large {
            grid-column: span 2;
            padding: 24px;
            background: linear-gradient(135deg, rgba(238, 242, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%);
            border-color: rgba(79, 70, 229, 0.1);
          }
          .bento-title {
            font-size: 11px;
            font-weight: 600;
            color: #52525B;
            margin-bottom: 2px;
          }
          .bento-value {
            font-size: 24px;
            font-weight: 700;
            color: #09090B;
            letter-spacing: -0.02em;
          }
          .bento-sub {
            font-size: 10px;
            color: #A1A1AA;
            margin-top: 4px;
          }

          /* SOCIAL PROOF */
          .social-section {
            padding: 140px 40px;
            background: #F8F7F5;
            border-top: 1px solid rgba(0,0,0,0.06);
          }
          .social-inner {
            max-width: 1200px;
            margin: 0 auto;
          }
          .social-headline {
            font-size: clamp(24px, 3vw, 38px);
            font-weight: 700;
            letter-spacing: -0.03em;
            color: #09090B;
            margin-bottom: 60px;
            text-align: center;
          }
          .social-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
          }
          .social-image-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            min-height: 500px;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 24px 60px -12px rgba(0,0,0,0.1);
          }
          .social-image-wrapper img {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            object-fit: cover;
          }
          .testimonials-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .testimonial-card {
            background: #fff;
            border: 1px solid rgba(0,0,0,0.08);
            border-radius: 16px;
            padding: 28px 32px;
          }
          .testimonial-text {
            font-size: 15px;
            color: #18181B;
            line-height: 1.7;
            margin-bottom: 20px;
          }
          .testimonial-author {
            font-size: 12px;
            color: #71717A;
          }
          .testimonial-author strong {
            color: #09090B;
            font-weight: 500;
          }

          /* PRICING */
          .pricing-section {
            padding: 140px 40px;
            background: #F8F7F5;
            border-top: 1px solid rgba(0,0,0,0.06);
          }
          .pricing-inner {
            max-width: 880px;
            margin: 0 auto;
            text-align: center;
          }
          .pricing-headline {
            font-size: clamp(26px, 3vw, 40px);
            font-weight: 700;
            letter-spacing: -0.03em;
            color: #09090B;
            margin-bottom: 60px;
          }
          .pricing-cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            text-align: left;
            margin-bottom: 32px;
          }
          .pricing-card {
            background: #fff;
            border: 1px solid rgba(0,0,0,0.08);
            border-radius: 16px;
            padding: 36px;
          }
          .pricing-card.recommended {
            border: 1.5px solid #18181B;
            box-shadow: 0 8px 32px -8px rgba(0,0,0,0.12);
          }
          .pricing-recommended-badge {
            display: inline-block;
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            background: #18181B;
            color: #fff;
            padding: 3px 9px;
            border-radius: 4px;
            margin-bottom: 20px;
          }
          .pricing-plan-name {
            font-size: 14px;
            font-weight: 600;
            color: #09090B;
            margin-bottom: 4px;
          }
          .pricing-price {
            font-size: 42px;
            font-weight: 700;
            letter-spacing: -0.04em;
            color: #09090B;
            margin-bottom: 4px;
          }
          .pricing-price span {
            font-size: 16px;
            font-weight: 400;
            color: #71717A;
            letter-spacing: 0;
          }
          .pricing-descriptor {
            font-size: 13px;
            color: #71717A;
            margin-bottom: 28px;
            line-height: 1.5;
          }
          .pricing-divider {
            border: none;
            border-top: 1px solid rgba(0,0,0,0.07);
            margin-bottom: 24px;
          }
          .pricing-features {
            list-style: none;
            margin-bottom: 32px;
          }
          .pricing-features li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            font-size: 14px;
            color: #3F3F46;
            margin-bottom: 12px;
            line-height: 1.5;
          }
          .pricing-features li svg {
            flex-shrink: 0;
            margin-top: 2px;
          }
          .btn-outline {
            display: block;
            width: 100%;
            text-align: center;
            border: 1.5px solid #18181B;
            color: #18181B;
            font-size: 14px;
            font-weight: 500;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            transition: background 0.15s, color 0.15s;
          }
          .btn-outline:hover { background: #18181B; color: #fff; }
          .btn-dark {
            display: block;
            width: 100%;
            text-align: center;
            background: #18181B;
            color: #fff;
            font-size: 14px;
            font-weight: 500;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            transition: opacity 0.15s;
          }
          .btn-dark:hover { opacity: 0.85; }
          .pricing-fine-print {
            font-size: 13px;
            color: #A1A1AA;
            max-width: 480px;
            margin: 0 auto;
            line-height: 1.6;
          }

          /* EMOTIONAL CLOSE */
          .close-section {
            padding: 160px 40px;
            background-color: #18181B;
            text-align: center;
            position: relative;
          }
          .close-inner {
            position: relative;
            z-index: 1;
            max-width: 640px;
            margin: 0 auto;
          }
          .close-headline {
            font-size: clamp(28px, 4vw, 52px);
            font-weight: 700;
            letter-spacing: -0.04em;
            line-height: 1.08;
            color: #fff;
            margin-bottom: 28px;
          }
          .close-body {
            font-size: 17px;
            color: #A1A1AA;
            line-height: 1.75;
            margin-bottom: 48px;
          }
          .btn-white {
            display: inline-block;
            background: #fff;
            color: #09090B;
            font-size: 15px;
            font-weight: 600;
            padding: 16px 36px;
            border-radius: 8px;
            text-decoration: none;
            transition: opacity 0.15s;
            margin-bottom: 16px;
          }
          .btn-white:hover { opacity: 0.9; }
          .close-micro {
            font-size: 12px;
            color: #52525B;
          }

          /* FOOTER */
          .footer {
            background: #F8F7F5;
            border-top: 1px solid rgba(0,0,0,0.08);
            padding: 40px;
          }
          .footer-inner {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
          }
          .footer-logo {
            font-size: 14px;
            font-weight: 600;
            color: #09090B;
            text-decoration: none;
            letter-spacing: -0.02em;
          }
          .footer-links {
            display: flex;
            gap: 28px;
            list-style: none;
          }
          .footer-links a {
            font-size: 13px;
            color: #71717A;
            text-decoration: none;
            transition: color 0.15s;
          }
          .footer-links a:hover { color: #09090B; }
          .footer-copy {
            font-size: 12px;
            color: #A1A1AA;
          }

          /* HOW IT WORKS */
          .how-section {
            padding: 120px 40px;
            background: #F8F7F5;
            border-top: 1px solid rgba(0,0,0,0.06);
          }
          .how-inner {
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
          }
          .how-headline {
            font-size: clamp(26px, 3vw, 40px);
            font-weight: 700;
            letter-spacing: -0.03em;
            color: #09090B;
            margin-bottom: 72px;
          }
          .how-steps {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 48px;
            text-align: left;
          }
          .how-step-number {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #18181B;
            color: #fff;
            font-size: 18px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
          }
          .how-step-title {
            font-size: 19px;
            font-weight: 700;
            color: #09090B;
            letter-spacing: -0.02em;
            margin-bottom: 10px;
          }
          .how-step-body {
            font-size: 15px;
            color: #71717A;
            line-height: 1.7;
          }

          /* ISAAC CHAT PANEL */
          .isaac-panel {
            width: 100%;
            max-width: 400px;
            background: #FFFBF5;
            border-radius: 16px;
            box-shadow: 0 30px 60px -15px rgba(0,0,0,0.12), 0 10px 30px -10px rgba(0,0,0,0.06);
            border: 1px solid rgba(0,0,0,0.06);
            overflow: hidden;
            position: relative;
            z-index: 1;
          }
          .isaac-header {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 18px;
            border-bottom: 1px solid rgba(0,0,0,0.06);
            background: rgba(255,255,255,0.6);
          }
          .isaac-header-name {
            font-size: 13px;
            font-weight: 600;
            color: #09090B;
          }
          .isaac-header-status {
            font-size: 10px;
            color: #71717A;
          }
          .isaac-body {
            padding: 18px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            min-height: 340px;
          }
          .isaac-context-chip {
            display: inline-block;
            font-size: 9px;
            font-weight: 600;
            color: #71717A;
            background: #F4F4F5;
            padding: 2px 8px;
            border-radius: 4px;
            margin-bottom: 2px;
          }
          .isaac-user-msg {
            align-self: flex-end;
            background: #18181B;
            color: #fff;
            font-size: 13px;
            line-height: 1.6;
            padding: 10px 14px;
            border-radius: 12px 12px 4px 12px;
            max-width: 85%;
          }
          .isaac-bot-msg {
            align-self: flex-start;
            background: #F4F4F5;
            color: #18181B;
            font-size: 13px;
            line-height: 1.65;
            padding: 12px 14px;
            border-radius: 12px 12px 12px 4px;
            max-width: 90%;
          }
          .isaac-bot-msg strong {
            font-weight: 600;
          }
          .isaac-bot-msg .isaac-trap {
            display: block;
            margin-top: 8px;
            padding-top: 8px;
            border-top: 1px solid rgba(0,0,0,0.06);
            color: #D97706;
            font-size: 12px;
            font-weight: 600;
          }
          .language-pills-wrap {
            padding: 0 18px 16px;
          }
          .language-pills-label {
            font-size: 10px;
            color: #A1A1AA;
            margin-bottom: 8px;
          }
          .language-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
          }
          .language-pill {
            font-size: 11px;
            color: #52525B;
            background: rgba(0,0,0,0.04);
            border: 1px solid rgba(0,0,0,0.06);
            padding: 3px 10px;
            border-radius: 20px;
            white-space: nowrap;
          }

          /* FADE UP - replaced by framer motion
          .fade-up {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.6s ease, transform 0.6s ease;
          }
          .fade-up.visible {
            opacity: 1;
            transform: translateY(0);
          }
          */

          /* MOBILE */
          @media (max-width: 768px) {
            .nav { padding: 0 20px; }
            .nav-links { display: none; }
            .nav-hamburger { display: flex; }

            .hero { padding: 60px 20px; min-height: auto; }
            .hero-inner {
              grid-template-columns: 1fr;
              gap: 48px;
            }
            .hero-headline { font-size: 42px; }
            .browser-mockup { transform: none; }
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            .hero-ctas { flex-direction: column; align-items: flex-start; }
            .btn-primary { width: 100%; text-align: center; }

            .pain-section { padding: 80px 20px; }
            .pain-inner { grid-template-columns: 1fr; gap: 48px; }
            .pain-image-wrapper { transform: none; }

            .agitate-section { padding: 80px 20px; }
            .agitate-grid { grid-template-columns: 1fr; gap: 40px; }

            .solution-section { padding: 80px 20px; }
            .feature-cards { grid-template-columns: 1fr; }

            .features-section { padding: 80px 20px; }
            .feature-block {
              grid-template-columns: 1fr;
              gap: 40px;
              margin-bottom: 72px;
            }
            .feature-block.reverse { direction: ltr; }

            .social-section { padding: 80px 20px; }
            .social-content { grid-template-columns: 1fr; gap: 48px; }
            .social-image-wrapper { min-height: 300px; }
            .testimonials-grid { grid-template-columns: 1fr; }

            .pricing-section { padding: 80px 20px; }
            .pricing-cards { grid-template-columns: 1fr; }

            .close-section { padding: 100px 20px; }
            .btn-white { width: 100%; text-align: center; }

            .how-section { padding: 80px 20px; }
            .how-steps { grid-template-columns: 1fr; gap: 40px; }

            .isaac-panel { max-width: 100%; }
            .isaac-body { min-height: 280px; }

            .footer { padding: 32px 20px; }
            .footer-inner { flex-direction: column; align-items: flex-start; gap: 16px; }
            .footer-links { flex-wrap: wrap; gap: 16px; }
          }
        `}} />
      </Head>

      {/* NAV */}
      <motion.nav
        className="nav"
        id="main-nav"
        style={{
          borderBottomColor: useTransform(navBorderOpacity, v => `rgba(9,9,11,${v * 0.08})`),
          boxShadow: navBoxShadow
        }}
      >
        <div className="nav-inner">
          <Link href="/" className="nav-logo">PracticePapers.io</Link>
          <ul className="nav-links">
            <li><Link href="#how-it-works">How it works</Link></li>
            <li><Link href="#pricing">Pricing</Link></li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link href="/beta" className="btn-nav">Join the beta</Link></motion.li>
          </ul>
          <button className="nav-hamburger" aria-label="Open menu" onClick={() => setMobileNavOpen(o => !o)}>
            <span style={{ transform: mobileNavOpen ? 'translateY(7px) rotate(45deg)' : undefined }} />
            <span style={{ opacity: mobileNavOpen ? 0 : 1 }} />
            <span style={{ transform: mobileNavOpen ? 'translateY(-7px) rotate(-45deg)' : undefined }} />
          </button>
        </div>
        <nav className={`nav-mobile${mobileNavOpen ? ' open' : ''}`}>
          <Link href="#how-it-works" onClick={() => setMobileNavOpen(false)}>How it works</Link>
          <Link href="#pricing" onClick={() => setMobileNavOpen(false)}>Pricing</Link>
          <Link href="/beta" className="btn-nav" onClick={() => setMobileNavOpen(false)}>Join the beta</Link>
        </nav>
      </motion.nav>

      {/* SECTION 1 — HERO */}
      <section className="hero">
        <div className="hero-inner">
          <motion.div
            className="hero-copy"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariant} className="eyebrow">HSC Mathematics · NSW · {YEAR}</motion.span>
            <motion.h1 variants={itemVariant} className="hero-headline">
              Band 6 maths students don't study more.<br />They practise differently.
            </motion.h1>
            <motion.p variants={itemVariant} className="hero-sub">
              Real HSC-style questions, complete worked solutions, and a tracker that shows exactly which topics are costing you marks — so every session counts. Set up in 30 seconds. Personalised to your subjects and year level.
            </motion.p>
            <motion.div variants={itemVariant} className="hero-ctas">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/beta" className="btn-primary">Join the beta — free</Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }}>
                <Link href="#how-it-works" className="btn-link">See how it works ↓</Link>
              </motion.div>
            </motion.div>
            <motion.p variants={itemVariant} className="hero-reassurance">Free during beta · No credit card required</motion.p>
            <motion.div variants={itemVariant} className="hero-proof">
              <span className="hero-proof-label">Covers</span>
              <span className="course-badge">Standard</span>
              <span className="course-badge">Advanced</span>
              <span className="course-badge">Extension 1</span>
              <span className="course-badge">Extension 2</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 30, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ type: 'spring', bounce: 0, duration: 1, delay: 0.2 }}
          >
            <div className="hero-glow"></div>
            <motion.div
              className="notebook-mockup"
              animate={{ y: [-4, 4, -4], rotate: [-1.5, -0.5, -1.5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="notebook-page">
                <div className="notebook-top-margin"></div>
                <div className="notebook-margin"></div>
                <div className="notebook-content">

                  <div className="handwritten-line" style={{ color: '#09090B', fontWeight: 700, fontSize: '24px', marginBottom: '8px' }}>
                    Q: Find the derivative of f(x) = x² sin(x)
                  </div>

                  <div className="handwritten-line" style={{ position: 'relative' }}>
                    <span style={{ color: '#2563EB', zIndex: 1 }}>f'(x) = 2x cos(x)</span>

                    {/* The Scratch-out */}
                    <motion.svg
                      style={{ position: 'absolute', top: '50%', left: '-10px', width: '220px', height: '40px', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 2 }}
                      viewBox="0 0 200 40"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        d="M 5 20 Q 50 5, 100 25 T 160 15 T 195 25"
                        fill="transparent"
                        stroke="#DC2626"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 9, delay: 1, times: [0, 0.08, 0.8, 1], repeat: Infinity, repeatDelay: 0 }}
                      />
                      <motion.path
                        d="M 190 15 Q 150 35, 90 15 T 30 25 T 10 15"
                        fill="transparent"
                        stroke="#DC2626"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 9, delay: 1.4, times: [0, 0.07, 0.8, 1], repeat: Infinity, repeatDelay: 0 }}
                      />
                    </motion.svg>

                    {/* The correction markup */}
                    <motion.div
                      style={{ position: 'absolute', right: '40px', top: '8px', color: '#DC2626', fontSize: '16px', fontWeight: 'bold', zIndex: 3 }}
                      animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8], rotate: -15 }}
                      transition={{ duration: 9, delay: 1.8, times: [0, 0.05, 0.8, 1], repeat: Infinity, repeatDelay: 0 }}
                    >
                      Product Rule!
                    </motion.div>
                  </div>

                  <motion.div
                    className="handwritten-line"
                    style={{ marginTop: '16px', color: '#059669' }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 9, delay: 2.5, times: [0, 0.07, 0.8, 1], repeat: Infinity, repeatDelay: 0 }}
                  >
                    f'(x) = x²(cos x) + 2x(sin x)
                  </motion.div>
                  <motion.div
                    className="handwritten-line"
                    style={{ color: '#059669' }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 9, delay: 3, times: [0, 0.07, 0.8, 1], repeat: Infinity, repeatDelay: 0 }}
                  >
                    f'(x) = x(x cos x + 2 sin x)
                  </motion.div>

                  {/* Checkmark */}
                  <motion.div
                    style={{ position: 'absolute', bottom: '60px', right: '40px', color: '#059669' }}
                    animate={{ opacity: [0, 0.8, 0.8, 0] }}
                    transition={{ duration: 9, delay: 3.8, times: [0, 0.06, 0.8, 1], repeat: Infinity, repeatDelay: 0 }}
                  >
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                      <motion.path
                        d="M 20 50 L 40 70 L 90 20"
                        stroke="#059669"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{ pathLength: [0, 1, 1, 0] }}
                        transition={{ duration: 9, delay: 3.8, times: [0, 0.06, 0.8, 1], repeat: Infinity, repeatDelay: 0 }}
                      />
                      <motion.circle
                        cx="50" cy="50" r="45"
                        stroke="#059669"
                        strokeWidth="4"
                        strokeDasharray="10 10"
                        animate={{ opacity: [0, 0.5, 0.5, 0] }}
                        transition={{ duration: 9, delay: 4.2, times: [0, 0.06, 0.8, 1], repeat: Infinity, repeatDelay: 0 }}
                      />
                    </svg>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — PAIN */}
      <section className="pain-section" id="pain">
        <motion.div
          className="pain-inner"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="pain-content">
            <motion.span variants={itemVariant} className="section-label">be honest with yourself</motion.span>
            <motion.h2 variants={itemVariant} className="section-headline">You've put in the hours.<br />So why doesn't it feel like enough?</motion.h2>
            <motion.div variants={itemVariant} className="pain-body">
              <p><strong>Re-reading your notes feels productive. It isn't.</strong> The only thing that builds exam skill in maths is sitting with a real question, attempting it cold, checking where your reasoning broke down, and doing it again. That's it.</p>
              <p>You've been to every class. You've got the notes. You can follow a worked example line by line. But in the exam, when the integration question is set up slightly differently — or the Extension 1 proof goes in a direction you didn't expect — your mind goes blank.</p>
              <p><strong>That's not a you problem. That's a practice problem.</strong></p>
              <p>The students scoring in the top bands aren't smarter. They haven't found some secret shortcut. They've just done more real questions, under real conditions — and they know exactly which topics to target.</p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariant} className="pain-image-wrapper" style={{ y: painImageY }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/student.jpeg" alt="HSC student studying late at night, exhausted over maths exam papers" />
          </motion.div>
        </motion.div>
      </section >

      {/* SECTION 3 — AGITATE */}
      < section className="agitate-section" >
        <motion.div
          className="agitate-grid"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={containerVariant}>
            <motion.span variants={itemVariant} className="agitate-col-label">The fake study trap</motion.span>
            <motion.h3 variants={itemVariant} className="agitate-col-headline">Re-reading your solutions isn't maths practice.</motion.h3>
            <motion.p variants={itemVariant} className="agitate-col-body">Following someone else's working feels like understanding. It isn't. You won't know if you can actually do a proof or a differentiation question until you close the notes and try.</motion.p>
          </motion.div>
          <motion.div variants={containerVariant}>
            <motion.span variants={itemVariant} className="agitate-col-label">The scattered practice problem</motion.span>
            <motion.h3 variants={itemVariant} className="agitate-col-headline">Random questions don't fix weak topics.</motion.h3>
            <motion.p variants={itemVariant} className="agitate-col-body">If Integration by substitution keeps costing you marks, doing a mix of random questions won't fix it. You need to drill that topic — across Advanced, Extension 1, and Extension 2 papers — until it's solid.</motion.p>
          </motion.div>
          <motion.div variants={containerVariant}>
            <motion.span variants={itemVariant} className="agitate-col-label">The trial week panic</motion.span>
            <motion.h3 variants={itemVariant} className="agitate-col-headline">You can't cram maths.</motion.h3>
            <motion.p variants={itemVariant} className="agitate-col-body">Complex Numbers, Proof by Induction, Volumes of Revolution — these topics take time to click. Students who improve don't do more the week before trials. They started earlier and practised more deliberately.</motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 4 — SOLUTION DARK */}
      <section className="solution-section" id="how-it-works">
        <motion.div
          className="solution-inner"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariant}>
            <span className="solution-eyebrow">what actually works</span>
            <h2 className="solution-headline">Stop reviewing. Start doing.</h2>
            <p className="solution-body">
              PracticePapers.io is built around one idea: the best way to prepare for HSC Mathematics is to do HSC-quality questions — across Standard, Advanced, Extension 1, and Extension 2 — attempt them properly, check your answers against complete worked solutions, and track exactly which topics keep tripping you up. Not passive review. Not highlighting notes at midnight. Deliberate, targeted maths practice — with the feedback loop that actually makes it stick before your exam.
            </p>
          </motion.div>
          <motion.div className="feature-cards" variants={containerVariant}>
            <motion.div variants={itemVariant} whileHover={{ y: -8, scale: 1.02 }} className="feature-card">
              <svg className="feature-card-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="24" height="28" rx="3" />
                <line x1="11" y1="12" x2="25" y2="12" />
                <line x1="11" y1="17" x2="25" y2="17" />
                <line x1="11" y1="22" x2="19" y2="22" />
              </svg>
              <div className="feature-card-title">Real HSC-style papers</div>
              <p className="feature-card-body">Past-paper-quality questions across all levels — Standard, Advanced, Extension 1, Extension 2. Formatted exactly like the real exam.</p>
            </motion.div>
            <motion.div variants={itemVariant} whileHover={{ y: -8, scale: 1.02 }} className="feature-card">
              <svg className="feature-card-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="10" cy="10" r="3" />
                <circle cx="26" cy="10" r="3" />
                <circle cx="10" cy="26" r="3" />
                <circle cx="26" cy="26" r="3" />
                <line x1="13" y1="10" x2="23" y2="10" />
                <line x1="10" y1="13" x2="10" y2="23" />
                <line x1="13" y1="26" x2="23" y2="26" />
              </svg>
              <div className="feature-card-title">Worked solutions, step by step</div>
              <p className="feature-card-body">Every question has a complete worked solution. Not just the answer — the method, the reasoning, and how to structure your response for full marks.</p>
            </motion.div>
            <motion.div variants={itemVariant} whileHover={{ y: -8, scale: 1.02 }} className="feature-card">
              <svg className="feature-card-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="18" r="12" />
                <circle cx="18" cy="18" r="5" />
                <line x1="18" y1="4" x2="18" y2="8" />
                <line x1="18" y1="28" x2="18" y2="32" />
                <line x1="4" y1="18" x2="8" y2="18" />
                <line x1="28" y1="18" x2="32" y2="18" />
              </svg>
              <div className="feature-card-title">Practice by topic</div>
              <p className="feature-card-body">Choose a topic — Integration, Probability, Vectors — and drill questions from across all papers. Focused practice, not random noise.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 4.5 — HOW IT WORKS */}
      <section className="how-section">
        <motion.div
          className="how-inner"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariant} className="how-headline">How it works</motion.h2>
          <motion.div className="how-steps" variants={containerVariant}>
            <motion.div variants={itemVariant}>
              <div className="how-step-number">1</div>
              <h3 className="how-step-title">Pick a topic or paper</h3>
              <p className="how-step-body">Choose a full practice paper or drill a specific topic — Integration, Vectors, Probability, whatever's costing you marks.</p>
            </motion.div>
            <motion.div variants={itemVariant}>
              <div className="how-step-number">2</div>
              <h3 className="how-step-title">Attempt questions cold</h3>
              <p className="how-step-body">No peeking. Try each question properly, then mark yourself. Solutions stay hidden until you're ready.</p>
            </motion.div>
            <motion.div variants={itemVariant}>
              <div className="how-step-number">3</div>
              <h3 className="how-step-title">See what's actually weak</h3>
              <p className="how-step-body">Your results feed into a tracker that shows exactly which topics you keep dropping marks on — so your next session targets what matters.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 5 — FEATURE DEEP DIVE */}
      < section className="features-section" >

        {/* Feature 1: screenshot left, text right */}
        <motion.div
          className="feature-block"
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="screenshot-wrap" style={{ y: y1 }}>
            <div className="screenshot-placeholder">
              <div className="screenshot-inner-chrome">
                <div className="browser-dots">
                  <div className="browser-dot dot-red"></div>
                  <div className="browser-dot dot-yellow"></div>
                  <div className="browser-dot dot-green"></div>
                </div>
                <div className="browser-url" style={{ background: 'rgba(255,255,255,0.6)', borderRadius: '6px', padding: '5px 12px', fontSize: '11px', color: '#71717A', flex: 1, border: '1px solid rgba(0,0,0,0.05)', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.02)' }}>
                  <svg style={{ marginRight: '6px', opacity: 0.5, verticalAlign: 'middle' }} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  practicepapers.io/topics
                </div>
              </div>
              <div className="screenshot-body-content">

                {/* Stunning Bento Box Visualization */}
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)', filter: 'blur(20px)', zIndex: 0 }} />

                <motion.div
                  className="bento-grid"
                  variants={containerVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={itemVariant} className="bento-card large" whileHover={{ y: -4, boxShadow: '0 12px 24px -8px rgba(79,70,229,0.15)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <div className="bento-title">Calculus Mastery</div>
                        <div className="bento-value"><CountUp to={84} suffix="%" /></div>
                        <div className="bento-sub">Top 10% of state</div>
                      </div>
                      <svg width="48" height="48" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="rgba(79, 70, 229, 0.1)" strokeWidth="3"></circle>
                        <motion.circle
                          cx="18" cy="18" r="15.91549430918954"
                          fill="transparent" stroke="#4F46E5" strokeWidth="3"
                          strokeDasharray="84 16" strokeDashoffset="25" strokeLinecap="round"
                          initial={{ strokeDasharray: "0 100" }}
                          whileInView={{ strokeDasharray: "84 16" }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        ></motion.circle>
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariant} className="bento-card" whileHover={{ y: -4, boxShadow: '0 8px 16px -6px rgba(0,0,0,0.05)' }}>
                    <div className="bento-title" style={{ color: '#0284C7' }}>Trigonometry</div>
                    <div className="bento-value" style={{ fontSize: '18px' }}><CountUp to={142} /> / 160</div>
                    <div className="bento-sub">Questions completed</div>
                    <div style={{ marginTop: '8px', height: '3px', background: 'rgba(2, 132, 199, 0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                      <motion.div
                        style={{ height: '100%', background: '#0284C7', borderRadius: '2px' }}
                        initial={{ width: '0%' }}
                        whileInView={{ width: '88%' }}
                        transition={{ duration: 1, delay: 0.6 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariant} className="bento-card" whileHover={{ y: -4, boxShadow: '0 8px 16px -6px rgba(0,0,0,0.05)' }}>
                    <div className="bento-title" style={{ color: '#D97706' }}>Probability</div>
                    <div className="bento-value" style={{ fontSize: '18px' }}><CountUp to={48} /> / 65</div>
                    <div className="bento-sub">Questions completed</div>
                    <div style={{ marginTop: '8px', height: '3px', background: 'rgba(217, 119, 6, 0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                      <motion.div
                        style={{ height: '100%', background: '#D97706', borderRadius: '2px' }}
                        initial={{ width: '0%' }}
                        whileInView={{ width: '73%' }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                    </div>
                  </motion.div>

                </motion.div>

              </div>
            </div>
          </motion.div>
          <div className="feature-copy">
            <span className="feature-copy-eyebrow">Topic browser</span>
            <h3 className="feature-copy-headline">Every topic. Every paper. One place.</h3>
            <p className="feature-copy-body">Browse by course — Standard, Advanced, Extension 1, Extension 2 — then drill into any topic. Integration. Proof by Induction. Binomial Probability. Volumes of Revolution. Each topic shows exactly how many questions are in the bank across all past papers, so you always know what's left to practise.</p>
          </div>
        </motion.div>

        {/* Feature 2: text left, screenshot right */}
        <motion.div
          className="feature-block reverse"
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="screenshot-wrap" style={{ y: y2 }}>
            <div className="screenshot-placeholder">
              <div className="screenshot-inner-chrome">
                <div className="browser-dots">
                  <div className="browser-dot dot-red"></div>
                  <div className="browser-dot dot-yellow"></div>
                  <div className="browser-dot dot-green"></div>
                </div>
                <div className="browser-url" style={{ background: 'rgba(255,255,255,0.5)', borderRadius: '4px', padding: '3px 10px', fontSize: '11px', color: '#71717A', flex: 1 }}>practicepapers.io/practice</div>
              </div>
              <div className="screenshot-body-content" style={{ gap: '16px' }}>
                <div style={{ position: 'absolute', top: '10px', left: '-20px', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)', filter: 'blur(30px)', zIndex: 0 }} />

                <motion.div
                  style={{ width: '100%', maxWidth: '340px', zIndex: 1 }}
                  variants={containerVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* The Question Card */}
                  <motion.div variants={itemVariant} style={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', borderRadius: '12px', padding: '20px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', marginBottom: '12px', position: 'relative' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: '#09090B', background: '#F4F4F5', padding: '4px 8px', borderRadius: '4px' }}>Question 14b</span>
                      <span style={{ fontSize: '11px', color: '#A1A1AA', fontWeight: 500 }}>4 marks</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#18181B', lineHeight: 1.6, marginBottom: '16px', fontWeight: 500 }}>
                      Find the exact area enclosed between the curves <br />
                      <span style={{ fontFamily: '"Times New Roman", Times, serif', fontStyle: 'italic', fontSize: '14px' }}>y = x²</span> and <span style={{ fontFamily: '"Times New Roman", Times, serif', fontStyle: 'italic', fontSize: '14px' }}>y = 4 − x²</span>.
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: '#27272A' }}
                      whileTap={{ scale: 0.98 }}
                      style={{ width: '100%', background: '#18181B', color: '#fff', fontSize: '11px', fontWeight: 600, padding: '10px 0', border: 'none', borderRadius: '6px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z"></path></svg>
                      Reveal Solution
                    </motion.button>
                  </motion.div>

                  {/* The Unfolded Solution Card */}
                  <motion.div
                    variants={itemVariant}
                    style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(250,250,250,0.95) 100%)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '12px', padding: '20px', boxShadow: '0 20px 40px -10px rgba(16, 185, 129, 0.1)', position: 'relative' }}
                  >
                    <div style={{ position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '14px', background: 'rgba(16, 185, 129, 0.3)' }} />
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#059669', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      Step 1: Find points of intersection
                    </div>
                    <div style={{ fontSize: '12px', color: '#52525B', lineHeight: 1.6, fontFamily: '"Times New Roman", Times, serif', fontStyle: 'italic', background: 'rgba(255,255,255,0.7)', padding: '12px', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.04)', textAlign: 'center' }}>
                      x² = 4 − x² <br />
                      2x² = 4 <br />
                      x = ±√2
                    </div>
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </motion.div>
          <div className="feature-copy">
            <span className="feature-copy-eyebrow">Worked solutions</span>
            <h3 className="feature-copy-headline">See the question first. Attempt it. Then check your work.</h3>
            <p className="feature-copy-body">Solutions are hidden until you ask. Because in HSC Maths, it's never just about the answer — it's about method marks, correct notation, and how you structure your working. Every solution shows you exactly how to set it out for full marks, not just what x equals.</p>
          </div>
        </motion.div>

        {/* Feature 3: screenshot left, text right */}
        <motion.div
          className="feature-block"
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="screenshot-wrap" style={{ y: y3 }}>
            <div className="screenshot-placeholder">
              <div className="screenshot-inner-chrome">
                <div className="browser-dots">
                  <div className="browser-dot dot-red"></div>
                  <div className="browser-dot dot-yellow"></div>
                  <div className="browser-dot dot-green"></div>
                </div>
                <div className="browser-url" style={{ background: 'rgba(255,255,255,0.5)', borderRadius: '4px', padding: '3px 10px', fontSize: '11px', color: '#71717A', flex: 1 }}>practicepapers.io/weak-areas</div>
              </div>
              <div className="screenshot-body-content" style={{ gap: '12px' }}>
                <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%)', filter: 'blur(30px)', zIndex: 0 }} />

                <motion.div
                  style={{ width: '100%', maxWidth: '340px', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}
                  variants={containerVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    { topic: 'Integration', rate: 42, level: '2U', color: '#EF4444', gradient: 'linear-gradient(90deg, #FCA5A5, #EF4444)' },
                    { topic: 'Complex Numbers', rate: 55, level: 'E2', color: '#F59E0B', gradient: 'linear-gradient(90deg, #FCD34D, #F59E0B)' },
                    { topic: 'Probability', rate: 68, level: 'E1', color: '#3B82F6', gradient: 'linear-gradient(90deg, #93C5FD, #3B82F6)' },
                    { topic: 'Trigonometry', rate: 84, level: '2U', color: '#10B981', gradient: 'linear-gradient(90deg, #6EE7B7, #10B981)' },
                  ].map((w) => (
                    <motion.div
                      key={w.topic}
                      variants={itemVariant}
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.9)' }}
                      style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', borderRadius: '10px', padding: '12px 16px', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'default' }}
                    >
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: `${w.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `inset 0 1px 0 rgba(255,255,255,0.5)` }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: w.gradient, boxShadow: `0 2px 4px ${w.color}40` }}></div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                          <span style={{ fontSize: '12px', fontWeight: 600, color: '#18181B' }}>{w.topic}</span>
                          <span style={{ fontSize: '10px', background: '#F4F4F5', color: '#52525B', padding: '2px 6px', borderRadius: '4px', fontWeight: 600, border: '1px solid rgba(0,0,0,0.04)' }}>{w.level}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ flex: 1, height: '6px', background: 'rgba(0,0,0,0.04)', borderRadius: '3px', overflow: 'hidden', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.02)' }}>
                            <motion.div
                              style={{ height: '100%', background: w.gradient, borderRadius: '3px' }}
                              initial={{ width: '0%' }}
                              whileInView={{ width: `${w.rate}%` }}
                              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            />
                          </div>
                          <div style={{ fontSize: '10px', fontWeight: 600, color: w.color, width: '28px', textAlign: 'right' }}>{w.rate}%</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

              </div>
            </div>
          </motion.div>
          <div className="feature-copy">
            <span className="feature-copy-eyebrow">Weak areas tracking</span>
            <h3 className="feature-copy-headline">It knows where you keep going wrong.</h3>
            <p className="feature-copy-body">After you mark your answers, PracticePapers tracks your performance by topic — across every course level. If you're consistently dropping marks on Extension 1 Trigonometric Equations or Advanced Probability, that rises to the top. Your next session targets exactly what's costing you marks. Not a generic maths revision schedule — yours.</p>
          </div>
        </motion.div>

        {/* Feature 4: Isaac — text left, chat panel right */}
        <motion.div
          className="feature-block reverse"
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="screenshot-wrap" style={{ y: y4 }}>
            <div style={{ position: 'relative' }}>
              {/* Glow */}
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(255, 180, 100, 0.18) 0%, transparent 70%)', filter: 'blur(30px)', zIndex: 0 }} />
              <IsaacAnimatedPanel />
            </div>
          </motion.div>
          <div className="feature-copy">
            <span className="feature-copy-eyebrow">Meet Isaac</span>
            <h3 className="feature-copy-headline">A maths tutor who's awake at 11pm the night before your exam.</h3>
            <p className="feature-copy-body">
              Stuck on a question? Tap "Ask Isaac" next to any solution step. He'll break it down — why the method works, what the marker looks for, where students typically slip up.
              <br /><br />
              Isaac isn't a chatbot that gives you the answer. He explains the reasoning behind each step, flags common HSC traps, and tells you exactly how to set out your working for full marks.
              <br /><br />
              And if English isn't your first language, Isaac explains in yours — Arabic, Chinese, Hindi, Vietnamese, and eight other languages.
            </p>
          </div>
        </motion.div>

      </section>

      {/* SECTION 6 — SOCIAL PROOF */}
      <section className="social-section">
        <motion.div
          className="social-inner"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariant} className="social-headline">From students who were exactly where you are</motion.h2>

          <div className="social-content">
            <motion.div variants={itemVariant} className="social-image-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/pp-students.jpg" alt="Students studying together in a classroom" />
            </motion.div>

            <motion.div variants={containerVariant} className="testimonials-grid">
              <motion.div variants={itemVariant} whileHover={{ y: -6, boxShadow: '0 12px 32px -8px rgba(0,0,0,0.08)' }} className="testimonial-card">
                <p className="testimonial-text">"genuinely the most useful thing I've found for ext 2. doing questions by topic before trials changed everything."</p>
                <div className="testimonial-author"><strong>Anika S.</strong> — Mathematics Extension 2</div>
              </motion.div>
              <motion.div variants={itemVariant} whileHover={{ y: -6, boxShadow: '0 12px 32px -8px rgba(0,0,0,0.08)' }} className="testimonial-card">
                <p className="testimonial-text">"I used to just re-read my notes for hours and wonder why I kept making the same mistakes. The weak areas feature literally showed me what I was doing. Kind of confronting but also exactly what I needed."</p>
                <div className="testimonial-author"><strong>James T.</strong> — Mathematics Advanced</div>
              </motion.div>
              <motion.div variants={itemVariant} whileHover={{ y: -6, boxShadow: '0 12px 32px -8px rgba(0,0,0,0.08)' }} className="testimonial-card">
                <p className="testimonial-text">"the solutions are actually good. like proper worked solutions not just 'x = 4'. i finally understand why the method works, not just what to write."</p>
                <div className="testimonial-author"><strong>Priya M.</strong> — Mathematics Extension 1</div>
              </motion.div>
              <motion.div variants={itemVariant} whileHover={{ y: -6, boxShadow: '0 12px 32px -8px rgba(0,0,0,0.08)' }} className="testimonial-card">
                <p className="testimonial-text">"i asked isaac to explain integration by parts in vietnamese for my mum so she'd stop asking what i'm even studying. he actually did it. properly."</p>
                <div className="testimonial-author"><strong>Sarah L.</strong> — Mathematics Advanced</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 7 — PRICING */}
      <section className="pricing-section" id="pricing">
        <motion.div
          className="pricing-inner"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariant} className="pricing-headline">Simple pricing. No surprises.</motion.h2>
          <motion.div variants={containerVariant} className="pricing-cards">

            {/* Essential */}
            <motion.div variants={itemVariant} whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }} className="pricing-card">
              <div className="pricing-plan-name">Essential</div>
              <div className="pricing-price">$12 <span>/ month</span></div>
              <p className="pricing-descriptor">Everything you need to practise properly.</p>
              <hr className="pricing-divider" />
              <ul className="pricing-features">
                {[
                  'Unlimited access to all practice papers',
                  'Full worked solutions for every question',
                  'Practice by topic — all subjects',
                  'Weak areas tracking',
                  'Self-marking tools',
                ].map((f) => (
                  <li key={f}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7.5" stroke="#18181B" strokeWidth="1" />
                      <path d="M5 8l2 2 4-4" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/beta" className="btn-outline">Join the beta</Link>
              </motion.div>
            </motion.div>

            {/* Smart */}
            <motion.div variants={itemVariant} whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }} className="pricing-card recommended">
              <div className="pricing-recommended-badge">Recommended</div>
              <div className="pricing-plan-name">Smart</div>
              <div className="pricing-price">$22 <span>/ month</span></div>
              <p className="pricing-descriptor">For students chasing Band 6 — and who mean it.</p>
              <hr className="pricing-divider" />
              <ul className="pricing-features">
                {[
                  'Everything in Essential',
                  'AI-powered question explanations',
                  'Personalised mock exam generator',
                  'Step-by-step AI tutor on any solution',
                ].map((f) => (
                  <li key={f}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7.5" stroke="#18181B" strokeWidth="1" />
                      <path d="M5 8l2 2 4-4" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/beta" className="btn-dark">Join the beta</Link>
              </motion.div>
            </motion.div>

          </motion.div>
          <motion.p variants={itemVariant} className="pricing-fine-print">Pricing applies after the beta period. Beta access is free with no credit card required.</motion.p>
        </motion.div>
      </section>

      {/* SECTION 8 — EMOTIONAL CLOSE */}
      <section className="close-section">
        {/* Exam hall background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/examhall.jpeg"
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.38, zIndex: 0 }}
        />
        {/* Dark overlay so text stays readable */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(9,9,11,0.45) 0%, rgba(9,9,11,0.65) 100%)' }} />
        <motion.div
          style={{
            position: 'absolute', inset: 0, zIndex: 0,
            background: 'radial-gradient(ellipse at 50% 60%, rgba(99,102,241,0.15) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="close-inner"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span variants={itemVariant} style={{ display: 'inline-block', fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(167,139,250,0.9)', marginBottom: '16px' }}>Early access</motion.span>
          <motion.h2 variants={itemVariant} className="close-headline">Be one of the first students to use it.</motion.h2>
          <motion.p variants={itemVariant} className="close-body">We're opening PracticePapers.io to HSC students before the full launch. You'll get free access to every feature — and your feedback shapes what we build next.</motion.p>
          <motion.div variants={itemVariant}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
              <Link href="/beta" className="btn-white">Join the beta — it's free</Link>
            </motion.div>
            <p className="close-micro">No credit card. No catch.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 9 — FOOTER */}
      < footer className="footer" >
        <div className="footer-inner">
          <Link href="/" className="footer-logo">PracticePapers.io</Link>
          <ul className="footer-links">
            <li><Link href="#how-it-works">How it works</Link></li>
            <li><Link href="#pricing">Pricing</Link></li>
            <li><Link href="/beta">Join beta</Link></li>
            <li><Link href="/privacy">Privacy policy</Link></li>
          </ul>
          <span className="footer-copy">© {YEAR} PracticePapers.io</span>
        </div>
      </footer >

    </>
  );
}
