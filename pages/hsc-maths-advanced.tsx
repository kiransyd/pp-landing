import Head from 'next/head'
import Link from 'next/link'

const courseFaqs = [
  {
    question: "What is HSC Mathematics Advanced?",
    answer: "HSC Mathematics Advanced is a calculus-based Year 12 mathematics course in the NSW HSC curriculum. It covers functions, trigonometric functions, differential and integral calculus, exponential and logarithmic functions, financial mathematics, and statistical analysis. It is a 2-unit course designed for students who need mathematics for university study in science, engineering, economics, or related fields."
  },
  {
    question: "How is HSC Maths Advanced different from Standard 2?",
    answer: "HSC Mathematics Advanced includes calculus (differentiation and integration), which Standard 2 does not. Advanced is more mathematically rigorous and is a prerequisite for many university STEM courses. Standard 2 focuses on practical applications like financial maths, statistics, and networks without calculus."
  },
  {
    question: "What topics are in the HSC Maths Advanced syllabus?",
    answer: "The HSC Mathematics Advanced syllabus covers: Functions (including polynomial, exponential, logarithmic, and trigonometric), Trigonometric Functions, Calculus (differentiation and integration of various functions), Financial Mathematics (sequences, series, annuities), and Statistical Analysis (probability, discrete/continuous random variables, normal distribution, sampling)."
  },
  {
    question: "Do I need Maths Advanced for university?",
    answer: "HSC Mathematics Advanced is a prerequisite or assumed knowledge for many university courses including engineering, science, computer science, economics, commerce, and health sciences. Check specific university course requirements, as some may require Extension 1 or Extension 2 instead."
  },
  {
    question: "How can PracticePapers.io help with HSC Maths Advanced?",
    answer: "PracticePapers.io offers HSC-style practice questions for every Advanced syllabus topic, instant auto-marking with worked solutions, weak-areas tracking to identify where you lose marks, and the Isaac AI tutor for personalised explanations in multiple languages. Free during beta."
  }
]

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "HSC Mathematics Advanced",
    "description": "Interactive HSC Maths Advanced practice with auto-marking, worked solutions, weak-areas tracking, and AI tutor. Covers all NESA syllabus topics.",
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
        <title>HSC Maths Advanced — Practice Questions, Worked Solutions & Formula Sheet | PracticePapers.io</title>
        <meta name="description" content="Master HSC Mathematics Advanced with interactive practice questions, step-by-step worked solutions, weak-areas tracking, and Isaac AI tutor. Free during beta." />
        <link rel="canonical" href="https://practicepapers.io/hsc-maths-advanced" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>
      <main style={{ maxWidth: 1000, margin: '0 auto', padding: '120px 24px 80px', fontFamily: 'Inter, system-ui, sans-serif', color: '#09090B', lineHeight: 1.7 }}>
        <Link href="/" style={{ color: '#6366F1', textDecoration: 'none', fontSize: 14 }}>← Back to home</Link>
        <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6366F1', margin: '24px 0 8px' }}>HSC Mathematics · Advanced</p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px', lineHeight: 1.1 }}>HSC Maths Advanced Practice That Actually Works</h1>
        <p style={{ fontSize: 20, color: '#52525B', maxWidth: 680, margin: '0 0 32px' }}>Master calculus, functions, and trigonometry with interactive practice questions, instant worked solutions, and AI-powered weak-areas tracking. Free during beta.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56 }}>
          <Link href="/beta" style={{ background: '#6366F1', color: '#fff', padding: '14px 28px', borderRadius: 10, fontWeight: 600, textDecoration: 'none' }}>Start Practising Free</Link>
          <Link href="https://blog.practicepapers.io/hsc-maths-formula-sheet/" style={{ border: '1px solid #D4D4D8', color: '#09090B', padding: '14px 28px', borderRadius: 10, fontWeight: 600, textDecoration: 'none' }}>View Formula Sheet</Link>
        </div>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>What is HSC Mathematics Advanced?</h2>
          <p style={{ fontSize: 17, color: '#52525B' }}>HSC Mathematics Advanced is a 2-unit calculus-based course in the NSW Higher School Certificate. It is designed for students who intend to study mathematics or related disciplines at university, including engineering, science, economics, and computer science. The course builds on Year 11 Advanced Mathematics and introduces more complex calculus, financial mathematics, and statistical analysis.</p>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>HSC Maths Advanced Syllabus Topics</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              ["📈 Functions", "Polynomial, exponential, logarithmic, and trigonometric functions. Graphing, transformations, and function algebra."],
              ["📐 Trigonometric Functions", "Radian measure, trigonometric identities, solving equations, and applications to real-world problems."],
              ["∫ Calculus — Differentiation", "Rules of differentiation, chain/product/quotient rules, implicit differentiation, rates of change, optimisation."],
              ["∫ Calculus — Integration", "Anti-differentiation, definite integrals, area under curves, trapezoidal rule, and applications."],
              ["💰 Financial Mathematics", "Sequences and series, arithmetic and geometric progressions, compound interest, annuities, and loans."],
              ["📊 Statistical Analysis", "Probability, discrete and continuous random variables, normal distribution, sampling, and confidence intervals."],
            ].map(([t, d]) => (
              <div key={t} style={{ background: '#fff', borderRadius: 14, padding: 24, border: '1px solid #E4E4E7' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 15, color: '#52525B', margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>How PracticePapers.io Helps You Master HSC Maths Advanced</h2>
          <div style={{ display: 'grid', gap: 20 }}>
            {[
              ["🎯", "Topic-by-Topic Practice", "Drill specific syllabus topics — from differentiation rules to normal distribution. Every question aligned to NESA outcomes."],
              ["✅", "Instant Worked Solutions", "Every question comes with a step-by-step worked solution. No more flipping to the back of a textbook — get feedback instantly."],
              ["📊", "Weak-Areas Tracking", "The platform learns where you lose marks and shows you exactly which topics to focus on. Stop wasting time on things you already know."],
              ["🤖", "Isaac AI Tutor", "Stuck on a question? Isaac explains it step by step — in English, Arabic, Chinese, Vietnamese, or Hindi. Like having a tutor on call 24/7."],
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
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, margin: '0 0 12px' }}>Start Practising HSC Maths Advanced Today</h2>
          <p style={{ fontSize: 18, color: '#52525B', margin: '0 0 24px' }}>Free during beta. No credit card required.</p>
          <Link href="/beta" style={{ background: '#6366F1', color: '#fff', padding: '14px 32px', borderRadius: 10, fontWeight: 600, textDecoration: 'none', fontSize: 17 }}>Join the Beta Free</Link>
        </section>
      </main>
    </>
  )
}
