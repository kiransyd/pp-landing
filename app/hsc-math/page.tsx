import dynamic from 'next/dynamic'

// Dynamically import the landing page component
const HSCMathLanding = dynamic(() => import('@/pages/hsc-math-landing'), {
  ssr: true
})

export default function HSCMathPage() {
  return <HSCMathLanding />
} 