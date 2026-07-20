import Head from 'next/head'
import Link from 'next/link'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | PracticePapers.io</title>
        <meta name="description" content="The terms governing your use of PracticePapers.io." />
        <link rel="canonical" href="https://practicepapers.io/terms" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '80px 24px', fontFamily: 'Inter, system-ui, sans-serif', lineHeight: 1.7, color: '#09090B' }}>
        <Link href="/" style={{ color: '#6366F1', textDecoration: 'none', fontSize: 14 }}>
          &larr; Back to home
        </Link>
        <h1 style={{ fontSize: 32, marginTop: 24, marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ color: '#71717A', marginBottom: 32 }}>Last updated: 21 July 2026</p>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>1. Acceptance of Terms</h2>
          <p>By accessing or using PracticePapers.io, you agree to be bound by these Terms of Service. If you do not agree, do not use the service.</p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>2. Use of the Service</h2>
          <p>PracticePapers.io is provided for educational purposes. You agree to use the service only for lawful purposes and not to disrupt or attempt to gain unauthorised access to any part of the platform.</p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>3. Beta Disclaimer</h2>
          <p>The service is currently in beta. Features may change, break, or be discontinued without notice. We make no guarantees about uptime, accuracy of solutions, or continued availability.</p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>4. Intellectual Property</h2>
          <p>All content, branding, and software on PracticePapers.io are owned by PracticePapers.io or its licensors. Practice questions are original or licensed and may not be redistributed.</p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>5. Limitation of Liability</h2>
          <p>PracticePapers.io is provided "as is" without warranties of any kind. We are not liable for any decisions made based on the content provided, including exam preparation outcomes.</p>
        </section>

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>6. Contact</h2>
          <p>Questions about these terms? Email us at legal@practicepapers.io.</p>
        </section>
      </main>
    </>
  )
}
