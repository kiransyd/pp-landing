import Head from 'next/head'
import Link from 'next/link'

const courseFaqs = [
    { question: "What is HSC Mathematics Standard 2?", answer: "Standard 2 is a practical Year 12 mathematics course covering financial maths, statistics, networks, and measurement. It has no calculus and focuses on applied, real-world problem solving." },
    { question: "Is Standard 2 easier than Advanced?", answer: "It is different, not simply easier. Standard 2 replaces calculus with practical topics like networks and measurement. It suits students whose strengths are applied maths rather than algebraic rigour." },
    { question: "What topics are in the Standard 2 syllabus?", answer: "Topics include financial mathematics (loans, annuities), statistics (normal distribution, sampling), networks, measurement, rates and ratios, and algebraic modelling." },
    { question: "Can I get into university with Standard 2?", answer: "Yes, many non-STEM degrees accept Standard 2. However, most engineering, science, and commerce degrees require Advanced or higher. Check the prerequisites for your intended course." },
    { question: "How can PracticePapers.io help with Standard 2?", answer: "We offer Standard 2-style questions across every syllabus topic, instant worked solutions, weak-areas tracking, and the Isaac AI tutor. Free during beta." }
  ]

export default function Page() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "HSC Mathematics Standard 2",
  "description": "Master HSC Mathematics Standard 2 with interactive practice, step-by-step worked solutions, weak-areas tracking, and Isaac AI tutor. Free during beta.",
  "provider": {
    "@type": "Organization",
    "name": "PracticePapers.io",
    "url": "https://practicepapers.io"
  }
}
  const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is HSC Mathematics Standard 2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard 2 is a practical Year 12 mathematics course covering financial maths, statistics, networks, and measurement. It has no calculus and focuses on applied, real-world problem solving."
      }
    },
    {
      "@type": "Question",
      "name": "Is Standard 2 easier than Advanced?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is different, not simply easier. Standard 2 replaces calculus with practical topics like networks and measurement. It suits students whose strengths are applied maths rather than algebraic rigour."
      }
    },
    {
      "@type": "Question",
      "name": "What topics are in the Standard 2 syllabus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Topics include financial mathematics (loans, annuities), statistics (normal distribution, sampling), networks, measurement, rates and ratios, and algebraic modelling."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get into university with Standard 2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many non-STEM degrees accept Standard 2. However, most engineering, science, and commerce degrees require Advanced or higher. Check the prerequisites for your intended course."
      }
    },
    {
      "@type": "Question",
      "name": "How can PracticePapers.io help with Standard 2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer Standard 2-style questions across every syllabus topic, instant worked solutions, weak-areas tracking, and the Isaac AI tutor. Free during beta."
      }
    }
  ]
}
  return (
    <>
      <Head>
        <title>HSC Maths Standard 2 — Practice Questions & Worked Solutions | PracticePapers.io</title>
        <meta name="description" content="Master HSC Mathematics Standard 2 with interactive practice, step-by-step worked solutions, weak-areas tracking, and Isaac AI tutor. Free during beta." />
        <link rel="canonical" href="https://practicepapers.io/hsc-maths-standard-2" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>
      <main style={{ maxWidth: 1000, margin: '0 auto', padding: '120px 24px 80px', fontFamily: 'Inter, system-ui, sans-serif', color: '#09090B', lineHeight: 1.7 }}>
        <Link href="/" style={{ color: '#6366F1', textDecoration: 'none', fontSize: 14 }}>← Back to home</Link>
        <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6366F1', margin: '24px 0 8px' }}>HSC Mathematics · Standard 2</p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px', lineHeight: 1.1 }}>HSC Maths Standard 2 — Practice Questions & Worked Solutions</h1>
        <p style={{ fontSize: 20, color: '#52525B', maxWidth: 680, margin: '0 0 32px' }}>Master HSC Mathematics Standard 2 with interactive practice, step-by-step worked solutions, weak-areas tracking, and Isaac AI tutor. Free during beta.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56 }}>
          <Link href="/beta" style={{ background: '#6366F1', color: '#fff', padding: '14px 28px', borderRadius: 10, fontWeight: 600, textDecoration: 'none' }}>Start Practising Free</Link>
          <Link href="/hsc-maths-formula-sheet" style={{ border: '1px solid #D4D4D8', color: '#09090B', padding: '14px 28px', borderRadius: 10, fontWeight: 600, textDecoration: 'none' }}>View Formula Sheet</Link>
        </div>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>What is HSC Mathematics Standard 2?</h2>
          <p style={{ fontSize: 17, color: '#52525B' }}>Mathematics Standard 2 is a practical Year 12 course focused on real-world maths: financial mathematics, statistics, networks, and measurement. It does not include calculus, making it a strong choice for students whose strengths lie in applied problem-solving rather than algebra.</p>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>Standard 2 Syllabus Topics</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E4E4E7" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>💰 Financial Mathematics</h3>
              <p style={{ fontSize: 15, color: "#52525B", margin: 0 }}>Earning, spending, investing, depreciation, loans, and annuities using sequences and series.</p>
            </div>
            <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E4E4E7" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>📊 Statistics</h3>
              <p style={{ fontSize: 15, color: "#52525B", margin: 0 }}>Data analysis, normal distribution, and sampling in real-world contexts.</p>
            </div>
            <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E4E4E7" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>🔗 Networks</h3>
              <p style={{ fontSize: 15, color: "#52525B", margin: 0 }}>Shortest paths, minimum spanning trees, and critical path analysis.</p>
            </div>
            <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E4E4E7" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>📏 Measurement</h3>
              <p style={{ fontSize: 15, color: "#52525B", margin: 0 }}>Area, volume, surface area, and trigonometry in practical situations.</p>
            </div>
            <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E4E4E7" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>📈 Rates & Ratios</h3>
              <p style={{ fontSize: 15, color: "#52525B", margin: 0 }}>Applying rates, ratios, and percentages to everyday problems.</p>
            </div>
            <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E4E4E7" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>🧮 Algebra & Modelling</h3>
              <p style={{ fontSize: 15, color: "#52525B", margin: 0 }}>Using formulae and linear relationships to model real situations.</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>How PracticePapers.io Helps You Master Standard 2</h2>
          <div style={{ display: 'grid', gap: 20 }}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ fontSize: 26 }}>🎯</div>
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 4px" }}>Topic-by-Topic Practice</h3>
                <p style={{ fontSize: 16, color: "#52525B", margin: 0 }}>Drill specific syllabus topics. Every question aligned to NESA outcomes.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ fontSize: 26 }}>✅</div>
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 4px" }}>Instant Worked Solutions</h3>
                <p style={{ fontSize: 16, color: "#52525B", margin: 0 }}>Every question comes with a step-by-step worked solution. Get feedback instantly.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ fontSize: 26 }}>📊</div>
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 4px" }}>Weak-Areas Tracking</h3>
                <p style={{ fontSize: 16, color: "#52525B", margin: 0 }}>The platform learns where you lose marks and shows you exactly which topics to focus on.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ fontSize: 26 }}>🤖</div>
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 4px" }}>Isaac AI Tutor</h3>
                <p style={{ fontSize: 16, color: "#52525B", margin: 0 }}>Stuck? Isaac explains it step by step — in English, Arabic, Chinese, Vietnamese, or Hindi.</p>
              </div>
            </div>
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
                <tr style={{ borderBottom: "1px solid #E4E4E7" }}>
                  <td style={{ padding: "10px 16px" }}>Instant auto-marking</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>✅</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>❌</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>⚠️ Manual</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #E4E4E7" }}>
                  <td style={{ padding: "10px 16px" }}>Worked solutions</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>✅ Every question</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>⚠️ Some</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>✅</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #E4E4E7" }}>
                  <td style={{ padding: "10px 16px" }}>Weak-areas tracking</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>✅ Automatic</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>❌</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>⚠️ Subjective</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #E4E4E7" }}>
                  <td style={{ padding: "10px 16px" }}>AI tutor (multi-language)</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>✅</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>❌</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>❌</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #E4E4E7" }}>
                  <td style={{ padding: "10px 16px" }}>Available 24/7</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>✅</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>✅</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>❌ Scheduled</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #E4E4E7" }}>
                  <td style={{ padding: "10px 16px" }}>Cost</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>Free (beta)</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>Free</td>
                  <td style={{ textAlign: "center", padding: "10px 16px" }}>$40-80/hr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20, textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <details key={0} style={{ borderBottom: "1px solid #E4E4E7", padding: "16px 0" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: 17 }}>What is HSC Mathematics Standard 2?</summary>
              <p style={{ color: "#52525B", marginTop: 12 }}>Standard 2 is a practical Year 12 mathematics course covering financial maths, statistics, networks, and measurement. It has no calculus and focuses on applied, real-world problem solving.</p>
            </details>
            <details key={1} style={{ borderBottom: "1px solid #E4E4E7", padding: "16px 0" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: 17 }}>Is Standard 2 easier than Advanced?</summary>
              <p style={{ color: "#52525B", marginTop: 12 }}>It is different, not simply easier. Standard 2 replaces calculus with practical topics like networks and measurement. It suits students whose strengths are applied maths rather than algebraic rigour.</p>
            </details>
            <details key={2} style={{ borderBottom: "1px solid #E4E4E7", padding: "16px 0" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: 17 }}>What topics are in the Standard 2 syllabus?</summary>
              <p style={{ color: "#52525B", marginTop: 12 }}>Topics include financial mathematics (loans, annuities), statistics (normal distribution, sampling), networks, measurement, rates and ratios, and algebraic modelling.</p>
            </details>
            <details key={3} style={{ borderBottom: "1px solid #E4E4E7", padding: "16px 0" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: 17 }}>Can I get into university with Standard 2?</summary>
              <p style={{ color: "#52525B", marginTop: 12 }}>Yes, many non-STEM degrees accept Standard 2. However, most engineering, science, and commerce degrees require Advanced or higher. Check the prerequisites for your intended course.</p>
            </details>
            <details key={4} style={{ borderBottom: "1px solid #E4E4E7", padding: "16px 0" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: 17 }}>How can PracticePapers.io help with Standard 2?</summary>
              <p style={{ color: "#52525B", marginTop: 12 }}>We offer Standard 2-style questions across every syllabus topic, instant worked solutions, weak-areas tracking, and the Isaac AI tutor. Free during beta.</p>
            </details>
          </div>
        </section>

        <section style={{ textAlign: 'center', background: '#F4F4F5', borderRadius: 20, padding: '48px 24px' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, margin: '0 0 12px' }}>Start Practising Standard 2 Today</h2>
          <p style={{ fontSize: 18, color: '#52525B', margin: '0 0 24px' }}>Free during beta. No credit card required.</p>
          <Link href="/beta" style={{ background: '#6366F1', color: '#fff', padding: '14px 32px', borderRadius: 10, fontWeight: 600, textDecoration: 'none', fontSize: 17 }}>Join the Beta Free</Link>
        </section>
      </main>
    </>
  )
}
