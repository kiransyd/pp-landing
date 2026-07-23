import Head from 'next/head'
import Link from 'next/link'

const courseFaqs = [
    { question: "Where can I find HSC maths past papers?", answer: "The official source is NESAs HSC exam papers archive. PracticePapers.io also organises past-paper-style questions by topic with instant worked solutions, which is useful for targeted drill practice." },
    { question: "How should I use past papers to study?", answer: "Start topic-by-topic: pull every question on one area across several years. Closer to the exam, sit full papers under timed conditions, then mark brutally and redo every mistake within 48 hours." },
    { question: "Are the questions on PracticePapers.io real past paper questions?", answer: "Our questions are written to match the style, difficulty, and format of real NESA HSC papers, aligned to the current syllabus outcomes for each course." },
    { question: "Do you have Extension 1 and 2 past papers?", answer: "Yes. We cover Standard 2, Advanced, Extension 1, and Extension 2, with questions organised by both topic and year." },
    { question: "Is PracticePapers.io free?", answer: "Yes, full access is free during the beta period. No credit card required." }
  ]

export default function Page() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "HSC Mathematics Past Papers",
  "description": "Practise real HSC-style maths questions by topic or full past paper, with instant auto-marking and worked solutions. Free during beta.",
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
      "name": "Where can I find HSC maths past papers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The official source is NESAs HSC exam papers archive. PracticePapers.io also organises past-paper-style questions by topic with instant worked solutions, which is useful for targeted drill practice."
      }
    },
    {
      "@type": "Question",
      "name": "How should I use past papers to study?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start topic-by-topic: pull every question on one area across several years. Closer to the exam, sit full papers under timed conditions, then mark brutally and redo every mistake within 48 hours."
      }
    },
    {
      "@type": "Question",
      "name": "Are the questions on PracticePapers.io real past paper questions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our questions are written to match the style, difficulty, and format of real NESA HSC papers, aligned to the current syllabus outcomes for each course."
      }
    },
    {
      "@type": "Question",
      "name": "Do you have Extension 1 and 2 past papers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We cover Standard 2, Advanced, Extension 1, and Extension 2, with questions organised by both topic and year."
      }
    },
    {
      "@type": "Question",
      "name": "Is PracticePapers.io free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, full access is free during the beta period. No credit card required."
      }
    }
  ]
}
  return (
    <>
      <Head>
        <title>HSC Maths Past Papers — Practice by Topic & Full Exam | PracticePapers.io</title>
        <meta name="description" content="Practise real HSC-style maths questions by topic or full past paper, with instant auto-marking and worked solutions. Free during beta." />
        <link rel="canonical" href="https://practicepapers.io/hsc-maths-past-papers" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>
      <main style={{ maxWidth: 1000, margin: '0 auto', padding: '120px 24px 80px', fontFamily: 'Inter, system-ui, sans-serif', color: '#09090B', lineHeight: 1.7 }}>
        <Link href="/" style={{ color: '#6366F1', textDecoration: 'none', fontSize: 14 }}>← Back to home</Link>
        <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6366F1', margin: '24px 0 8px' }}>HSC Mathematics · Past Papers</p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px', lineHeight: 1.1 }}>HSC Maths Past Papers — Practice by Topic & Full Exam</h1>
        <p style={{ fontSize: 20, color: '#52525B', maxWidth: 680, margin: '0 0 32px' }}>Practise real HSC-style maths questions by topic or full past paper, with instant auto-marking and worked solutions. Free during beta.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56 }}>
          <Link href="/beta" style={{ background: '#6366F1', color: '#fff', padding: '14px 28px', borderRadius: 10, fontWeight: 600, textDecoration: 'none' }}>Start Practising Free</Link>
          <Link href="https://blog.practicepapers.io/hsc-maths-formula-sheet/" style={{ border: '1px solid #D4D4D8', color: '#09090B', padding: '14px 28px', borderRadius: 10, fontWeight: 600, textDecoration: 'none' }}>View Formula Sheet</Link>
        </div>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>What is HSC Mathematics Past Papers?</h2>
          <p style={{ fontSize: 17, color: '#52525B' }}>Past HSC papers are the best preparation for the exam — but only if you use them well. PracticePapers.io organises past-paper-style questions by topic and by year, so you can drill one area or sit a full timed paper, then get instant feedback on every question.</p>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>Past Papers Syllabus Topics</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E4E4E7" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>📚 By Topic</h3>
              <p style={{ fontSize: 15, color: "#52525B", margin: 0 }}>Pull every question on one topic (probability, calculus, trig) across multiple years to see the patterns NESA reuses.</p>
            </div>
            <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E4E4E7" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>📝 Full Papers</h3>
              <p style={{ fontSize: 15, color: "#52525B", margin: 0 }}>Sit complete past-paper-style exams under timed conditions to build stamina and exam strategy.</p>
            </div>
            <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E4E4E7" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>✅ Auto-Marking</h3>
              <p style={{ fontSize: 15, color: "#52525B", margin: 0 }}>Get marked instantly against the real marking criteria, with worked solutions for every question.</p>
            </div>
            <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E4E4E7" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>📊 Track Progress</h3>
              <p style={{ fontSize: 15, color: "#52525B", margin: 0 }}>See exactly which topics cost you marks so your next session targets the right areas.</p>
            </div>
            <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E4E4E7" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>🗂 Every Course</h3>
              <p style={{ fontSize: 15, color: "#52525B", margin: 0 }}>Standard 2, Advanced, Extension 1, and Extension 2 papers, all in one place.</p>
            </div>
            <div style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid #E4E4E7" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>🤖 AI Explanations</h3>
              <p style={{ fontSize: 15, color: "#52525B", margin: 0 }}>Isaac walks you through any question step by step, in your language.</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>How PracticePapers.io Helps You Master Past Papers</h2>
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
              <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: 17 }}>Where can I find HSC maths past papers?</summary>
              <p style={{ color: "#52525B", marginTop: 12 }}>The official source is NESAs HSC exam papers archive. PracticePapers.io also organises past-paper-style questions by topic with instant worked solutions, which is useful for targeted drill practice.</p>
            </details>
            <details key={1} style={{ borderBottom: "1px solid #E4E4E7", padding: "16px 0" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: 17 }}>How should I use past papers to study?</summary>
              <p style={{ color: "#52525B", marginTop: 12 }}>Start topic-by-topic: pull every question on one area across several years. Closer to the exam, sit full papers under timed conditions, then mark brutally and redo every mistake within 48 hours.</p>
            </details>
            <details key={2} style={{ borderBottom: "1px solid #E4E4E7", padding: "16px 0" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: 17 }}>Are the questions on PracticePapers.io real past paper questions?</summary>
              <p style={{ color: "#52525B", marginTop: 12 }}>Our questions are written to match the style, difficulty, and format of real NESA HSC papers, aligned to the current syllabus outcomes for each course.</p>
            </details>
            <details key={3} style={{ borderBottom: "1px solid #E4E4E7", padding: "16px 0" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: 17 }}>Do you have Extension 1 and 2 past papers?</summary>
              <p style={{ color: "#52525B", marginTop: 12 }}>Yes. We cover Standard 2, Advanced, Extension 1, and Extension 2, with questions organised by both topic and year.</p>
            </details>
            <details key={4} style={{ borderBottom: "1px solid #E4E4E7", padding: "16px 0" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: 17 }}>Is PracticePapers.io free?</summary>
              <p style={{ color: "#52525B", marginTop: 12 }}>Yes, full access is free during the beta period. No credit card required.</p>
            </details>
          </div>
        </section>

        <section style={{ textAlign: 'center', background: '#F4F4F5', borderRadius: 20, padding: '48px 24px' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, margin: '0 0 12px' }}>Start Practising Past Papers Today</h2>
          <p style={{ fontSize: 18, color: '#52525B', margin: '0 0 24px' }}>Free during beta. No credit card required.</p>
          <Link href="/beta" style={{ background: '#6366F1', color: '#fff', padding: '14px 32px', borderRadius: 10, fontWeight: 600, textDecoration: 'none', fontSize: 17 }}>Join the Beta Free</Link>
        </section>
      </main>
    </>
  )
}
