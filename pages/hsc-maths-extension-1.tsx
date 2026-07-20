import Head from 'next/head'
import Link from 'next/link'

const courseFaqs = [
  {
    question: "What is HSC Mathematics Extension 1?",
    answer: "Mathematics Extension 1 is an accelerated Year 12 course for students who have excelled in Advanced Mathematics. It covers harder calculus, trigonometry, vectors, proof, and statistical inference. It is a 1-unit extension course taken alongside Mathematics Advanced."
  },
  {
    question: "Do I need Extension 1 for university?",
    answer: "Many engineering, physics, and mathematics degrees either require or strongly recommend Extension 1. It is assumed knowledge for a large number of STEM degrees at UNSW, USyd, and other Go8 universities."
  },
  {
    question: "What topics are in the Extension 1 syllabus?",
    answer: "Key topics include further trigonometry (compound angles, double angles, t-formulae), calculus (rates of change, projectile motion, harder integration), vectors, proof by induction, and statistical inference (sample means, confidence intervals)."
  },
  {
    question: "How is Extension 1 different from Extension 2?",
    answer: "Extension 1 is 1 unit and builds directly on Advanced. Extension 2 is a further 1 unit (2 units total of extension) and is the most difficult high-school maths in NSW, covering complex numbers, mechanics, and advanced proof."
  },
  {
    question: "How can PracticePapers.io help with Extension 1?",
    answer: "We offer Extension 1-style questions across every syllabus topic, with instant worked solutions, weak-areas tracking, and the Isaac AI tutor for step-by-step explanations. Free during beta."
  }
]

export default function HSCext1() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "HSC Mathematics Extension 1",
    "description": "Interactive HSC Maths Extension 1 practice with auto-marking, worked solutions, weak-areas tracking, and AI tutor.",
    "provider": { "@type": "Organization", "name": "PracticePapers.io", "url": "https://practicepapers.io" }
  }
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": courseFaqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
  }
  return (
    <>
      <Head>
        <title>HSC Maths Extension 1 — Practice Questions & Worked Solutions | PracticePapers.io</title>
        <meta name="description" content="Master HSC Mathematics Extension 1 with interactive practice questions, step-by-step worked solutions, weak-areas tracking, and Isaac AI tutor. Free during beta." />
        <link rel="canonical" href="https://practicepapers.io/hsc-maths-extension-1" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>
      <main style={{ maxWidth: 1000, margin: '0 auto', padding: '120px 24px 80px', fontFamily: 'Inter, system-ui, sans-serif', color: '#09090B', lineHeight: 1.7 }}>
        <Link href="/" style={{ color: '#6366F1', textDecoration: 'none', fontSize: 14 }}>← Back to home</Link>
        <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6366F1', margin: '24px 0 8px' }}>HSC Mathematics · Extension 1</p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px', lineHeight: 1.1 }}>HSC Maths Extension 1 Practice That Actually Works</h1>
        <p style={{ fontSize: 20, color: '#52525B', maxWidth: 680, margin: '0 0 32px' }}>Master further trigonometry, vectors, proof, and statistical inference with interactive practice, instant worked solutions, and AI-powered weak-areas tracking. Free during beta.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56 }}>
          <Link href="/beta" style={{ background: '#6366F1', color: '#fff', padding: '14px 28px', borderRadius: 10, fontWeight: 600, textDecoration: 'none' }}>Start Practising Free</Link>
          <Link href="/hsc-maths-formula-sheet" style={{ border: '1px solid #D4D4D8', color: '#09090B', padding: '14px 28px', borderRadius: 10, fontWeight: 600, textDecoration: 'none' }}>View Formula Sheet</Link>
        </div>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>What is HSC Mathematics Extension 1?</h2>
          <p style={{ fontSize: 17, color: '#52525B' }}>Extension 1 is an accelerated Year 12 course for students who have excelled in Advanced Mathematics. It covers harder calculus, trigonometry, vectors, formal proof, and statistical inference. It is a 1-unit extension course taken alongside Mathematics Advanced, and it is assumed knowledge for many STEM degrees.</p>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>Extension 1 Syllabus Topics</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              ["📐 Further Trigonometry", "Compound angle formulas, double and half angles, t-formulae, and solving harder trig equations."],
              ["∫ Harder Calculus", "Rates of change, projectile motion, integration by substitution and parts, and volumes of revolution."],
              ["🧭 Vectors", "Vector operations, dot product, projections, and geometric proofs in 2D and 3D."],
              ["✅ Proof", "Proof by mathematical induction for sums, divisibility, and inequalities."],
              ["📊 Statistical Inference", "Sample means, confidence intervals, and the distribution of the sample proportion."],
              ["🔗 Connections", "Linking topics across Advanced and Extension 1 to solve multi-step problems."],
            ].map(([t, d]) => (
              <div key={t} style={{ background: '#fff', borderRadius: 14, padding: 24, border: '1px solid #E4E4E7' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 15, color: '#52525B', margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>How PracticePapers.io Helps You Master Extension 1</h2>
          <div style={{ display: 'grid', gap: 20 }}>
            {[
              ["🎯", "Topic-by-Topic Practice", "Drill specific syllabus topics — from induction proofs to projectile motion. Every question aligned to NESA outcomes."],
              ["✅", "Instant Worked Solutions", "Every question comes with a step-by-step worked solution. No more flipping to the back of a textbook — get feedback instantly."],
              ["📊", "Weak-Areas Tracking", "The platform learns where you lose marks and shows you exactly which topics to focus on."],
              ["🤖", "Isaac AI Tutor", "Stuck on a question? Isaac explains it step by step — in English, Arabic, Chinese, Vietnamese, or Hindi."],
            ].map(([icon, t, d]) => (
              <div key={t} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 26 }}>{icon}</div>
                <div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, margin: '0 0 4px' }}>{t}</h3>
                  <p style={{ fontSize: 16, color: '#52525B', margin: 0 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>PracticePapers vs Other HSC Maths Resources</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #D4D4D8' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px' }}>Feature</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px' }}>PracticePapers</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px' }}>Past Papers (PDF)</th>
                  <th style={{ textAlign: 'center', padding: '12px 16px' }}>Tutoring</th>
                </tr>
              </thead>
              <tbody style={{ color: '#3F3F46' }}>
                {[
                  ["Instant auto-marking", "✅", "❌", "⚠️ Manual"],
                  ["Worked solutions", "✅ Every question", "⚠️ Some", "✅"],
                  ["Weak-areas tracking", "✅ Automatic", "❌", "⚠️ Subjective"],
                  ["AI tutor (multi-language)", "✅", "❌", "❌"],
                  ["Available 24/7", "✅", "✅", "❌ Scheduled"],
                  ["Cost", "Free (beta)", "Free", "$40-80/hr"],
                ].map(([f, a, b, c], i) => (
                  <tr key={f} style={{ borderBottom: '1px solid #E4E4E7' }}>
                    <td style={{ padding: '10px 16px' }}>{f}</td>
                    <td style={{ textAlign: 'center', padding: '10px 16px' }}>{a}</td>
                    <td style={{ textAlign: 'center', padding: '10px 16px' }}>{b}</td>
                    <td style={{ textAlign: 'center', padding: '10px 16px' }}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20, textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            {courseFaqs.map((faq, i) => (
              <details key={i} style={{ borderBottom: '1px solid #E4E4E7', padding: '16px 0' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: 17 }}>{faq.question}</summary>
                <p style={{ color: '#52525B', marginTop: 12 }}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section style={{ textAlign: 'center', background: '#F4F4F5', borderRadius: 20, padding: '48px 24px' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, margin: '0 0 12px' }}>Start Practising Extension 1 Today</h2>
          <p style={{ fontSize: 18, color: '#52525B', margin: '0 0 24px' }}>Free during beta. No credit card required.</p>
          <Link href="/beta" style={{ background: '#6366F1', color: '#fff', padding: '14px 32px', borderRadius: 10, fontWeight: 600, textDecoration: 'none', fontSize: 17 }}>Join the Beta Free</Link>
        </section>
      </main>
    </>
  )
}
