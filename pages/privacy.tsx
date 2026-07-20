import Head from 'next/head'
import Link from 'next/link'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | PracticePapers.io</title>
        <meta name="description" content="How PracticePapers.io collects, uses, and protects your data." />
        <link rel="canonical" href="https://practicepapers.io/privacy" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '80px 24px', fontFamily: 'Inter, system-ui, sans-serif', lineHeight: 1.7, color: '#09090B' }}>
        <Link href="/" style={{ color: '#6366F1', textDecoration: 'none', fontSize: 14 }}>
          &larr; Back to home
        </Link>
        <h1 style={{ fontSize: 32, marginTop: 24, marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ color: '#71717A', marginBottom: 32 }}>Last updated: 21 July 2026</p>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as your name and email address when you sign up for the beta, and the practice questions you attempt and your responses. We also collect usage data through analytics tools (PostHog) and advertising pixels (Meta) to understand how the service is used and to improve it.</p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>2. How We Use Your Information</h2>
          <p>We use your information to provide and improve PracticePapers.io, including tracking your progress, identifying weak areas, generating worked solutions, and communicating with you about your account. We do not sell your personal information.</p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>3. Data Storage and Security</h2>
          <p>Your data is stored securely using industry-standard encryption. We take reasonable measures to protect your information from unauthorised access, but no method of transmission over the internet is 100% secure.</p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>4. Third-Party Services</h2>
          <p>We use third-party services including PostHog (product analytics), Meta Pixel (advertising), and Google Fonts. These services may collect information about you as described in their own privacy policies.</p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>5. Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal information by contacting us. If you are under 18, please ensure you have a parent or guardian's permission to use this service.</p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>6. Contact</h2>
          <p>Questions about this policy? Email us at privacy@practicepapers.io.</p>
        </section>
      </main>
    </>
  )
}
