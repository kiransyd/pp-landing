"use client"
import { useEffect } from "react"
import Image from "next/image"

// Declare Tally types for TypeScript
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void
    }
  }
}

export default function WaitlistPage() {
  useEffect(() => {
    // Check if the Tally script is already present
    const scriptId = "tally-embed-script"
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script")
      script.id = scriptId
      script.src = "https://tally.so/widgets/embed.js"
      script.async = true
      script.onload = () => {
        if (window.Tally) window.Tally.loadEmbeds()
      }
      document.head.appendChild(script)
      return () => {
        document.head.removeChild(script)
      }
    } else {
      // If script already loaded, just call loadEmbeds
      if (window.Tally) window.Tally.loadEmbeds()
    }
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-white">
      <Image
        src="/pplogo.png"
        alt="Practice Papers.io Logo"
        width={220}
        height={70}
        className="mb-6"
        priority
      />
      <h1 className="text-4xl font-bold mb-8 text-center text-black">Join the 250+ students already on waitlist</h1>
      <iframe
        data-tally-src="https://tally.so/embed/3yraKW?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="804"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Join the 250+ students already on waitlist"
        style={{ maxWidth: 500, width: "100%", background: "transparent", border: "none" }}
      ></iframe>
    </main>
  )
} 