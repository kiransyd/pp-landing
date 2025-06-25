'use client'

import Link from 'next/link'
import Head from 'next/head'
import { Button } from '@/components/ui/button'
import { Check, X, BookOpen, Target, LineChart, Clock, ArrowRight, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HeroHeader } from '@/components/hero5-header'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import Features from '@/components/features'

// Animation variants similar to those in hero-section examples
const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
              transition: {
          type: 'spring' as const,
          bounce: 0.3,
          duration: 1.5,
        },
    },
  },
}

export default function HomePage() {
  return (
          <>
        <Head>
          <title>HSC Mathematics Practice Papers | Ace Your HSC Maths Exam</title>
          <meta name="description" content="Transform your HSC Mathematics performance with unlimited practice papers, step-by-step solutions, and AI-powered explanations. Join thousands of students achieving Band 5 & 6 results." />
          <link rel="icon" href="/pplogo.png" />
          <link rel="apple-touch-icon" href="/pplogo.png" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.practicepaper.com.au" />
          <meta property="og:title" content="HSC Mathematics Practice Papers | Ace Your HSC Maths Exam" />
          <meta property="og:description" content="Transform your HSC Mathematics performance with unlimited practice papers, step-by-step solutions, and AI-powered explanations. Join thousands of students achieving Band 5 & 6 results." />
          <meta property="og:image" content="/social-pp.jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.practicepaper.com.au" />
          <meta property="twitter:title" content="HSC Mathematics Practice Papers | Ace Your HSC Maths Exam" />
          <meta property="twitter:description" content="Transform your HSC Mathematics performance with unlimited practice papers, step-by-step solutions, and AI-powered explanations. Join thousands of students achieving Band 5 & 6 results." />
          <meta property="twitter:image" content="/social-pp.jpeg" />
          
          {/* Additional SEO meta tags */}
          <meta name="keywords" content="HSC mathematics, practice papers, HSC maths exam, NSW students, Band 6 results, mathematics tutoring, HSC preparation" />
          <meta name="author" content="Practice Paper" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" content="https://www.practicepaper.com.au" />
        </Head>
     
      <HeroHeader />
      <main className="overflow-hidden">
        {/* Hero Section using the hero section from Tailark */}
        <section className="relative pt-24 md:pt-36">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    delayChildren: 1,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring' as const,
                    bounce: 0.3,
                    duration: 2,
                  },
                },
              },
            }}
            className="absolute inset-0 -z-20"
          >
            {/* Background gradient effect */}
            <div className="pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
          </AnimatedGroup>
          <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
          
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center sm:mx-auto">
              <AnimatedGroup variants={transitionVariants}>
                <Link
                  href="#browse-papers"
                  className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                  <span className="text-foreground text-sm">Finally stop stressing about HSC maths 😮‍💨</span>
                  <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                  <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedGroup>

              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="mt-8 text-balance font-geist-sans text-6xl font-extrabold md:text-7xl lg:mt-12 xl:text-[5.25rem]">
                Ace HSC maths. Smash your way to Band 6. 
              </TextEffect>
              
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-8 max-w-2xl text-balance font-geist-sans text-xl font-medium text-muted-foreground">
                Get unlimited practice papers, step-by-step solutions, and AI-powered explanations to transform your HSC maths performance.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                <div
                  key={1}
                  className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl px-5 text-base">
                    <Link href="/waitlist">
                      <span className="text-nowrap">Join Waitlist</span>
                    </Link>
                  </Button>
                </div>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-10.5 rounded-xl px-5">
                  <Link href="#problem">
                    <span className="text-nowrap">Learn More</span>
                  </Link>
                </Button>
              </AnimatedGroup>
            </div>
          </div>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="mt-12 px-6">
            <div className="mx-auto max-w-5xl">
              <div className="relative overflow-hidden rounded-xl border shadow-lg">
                <div className="aspect-video md:aspect-[16/9] lg:aspect-[2/1]">
                  <img 
                    src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full object-cover"
                    alt="Students studying mathematics together"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <div className="mx-auto max-w-3xl rounded-lg border bg-card/50 p-4 md:p-6 backdrop-blur-sm">
                    <p className="text-base md:text-lg font-medium text-card-foreground">
                      Spending 3 hours studying just to feel even more confused? We get it.
                    </p>
                    <p className="mt-2 text-base md:text-lg text-card-foreground">Literally everyone feels this way.</p>
                    <p className="mt-4 text-lg md:text-xl font-bold text-primary">
                      83% of HSC students report feeling overwhelmed by the mathematics curriculum.
                    </p>
                    <p className="mt-4 md:mt-6 text-base md:text-lg italic text-card-foreground">
                      The kids getting Band 6s aren't smarter. They just study differently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedGroup>

          {/* Credibility Section */}
          <div className="mt-16 mx-auto max-w-4xl px-6">
            <div className="rounded-xl border bg-primary/5 p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.396-.756 1.506-.756 1.902 0l1.07 2.04a1 1 0 00.95.69h2.2c.969 0 1.371 1.24.588 1.81l-1.776 1.287a1 1 0 00-.363 1.118l.675 2.093c.317.98-.755 1.79-1.613 1.27L10 11.347l-1.682 1.178c-.858.52-1.93-.29-1.613-1.27l.675-2.093a1 1 0 00-.363-1.118L5.241 7.467c-.783-.57-.38-1.81.588-1.81h2.2a1 1 0 00.95-.69l1.07-2.04z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-muted-foreground">Trusted by real HSC Math students</span>
              </div>
              <h3 className="text-2xl font-geist-sans font-bold mb-3">Created by Students Who Actually Aced HSC Maths</h3>
              <p className="font-geist-sans text-lg text-muted-foreground">
                Built by high-achieving selective school students who topped HSC Mathematics and current HSC markers. 
                We know exactly what it takes to get Band 6 because we've been there.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Section using features component structure */}
        <section id="problem" className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
          <div className="@container mx-auto max-w-5xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-balance font-geist-sans text-4xl font-bold lg:text-5xl">Why You're Still Struggling (It's Not Your Fault)</h2>
              <p className="mt-4 font-geist-sans text-lg text-muted-foreground max-w-2xl mx-auto">You're not bad at maths. You're just studying it wrong. (And so is literally everyone else.)</p>
            </div>

            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl blur-xl opacity-30"></div>
              <div className="relative rounded-xl border overflow-hidden bg-card/50 backdrop-blur-sm">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col gap-6 md:gap-10">
                    <div className="flex flex-col md:flex-row gap-6 md:items-center">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 shrink-0 md:w-20 md:h-20">
                        <X className="w-8 h-8 text-destructive" />
                      </div>
                      <div>
                        <h3 className="text-xl font-geist-sans font-bold mb-2">Reading notes for 3 hours just to blank out in the exam</h3>
                        <p className="text-muted-foreground font-geist-sans">You know that feeling when you 'understand' everything at home but your brain goes 404 during the actual test? Yeah, that's this.</p>
                      </div>
                    </div>
                    
                    <div className="w-full border-t border-dashed border-zinc-200 dark:border-zinc-800"></div>
                    
                    <div className="flex flex-col md:flex-row gap-6 md:items-center">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 shrink-0 md:w-20 md:h-20">
                        <svg className="w-8 h-8 text-destructive" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 9H21M9 15L12 12M12 12L15 15M12 12V21M12 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-geist-sans font-bold mb-2">Watching random YouTube tutorials that won't even be on your exam 🤦‍♀️</h3>
                        <p className="text-muted-foreground font-geist-sans">Stop watching American maths YouTubers teach methods that aren't even in the NSW syllabus. You're literally wasting your time.</p>
                      </div>
                    </div>
                    
                    <div className="w-full border-t border-dashed border-zinc-200 dark:border-zinc-800"></div>
                    
                    <div className="flex flex-col md:flex-row gap-6 md:items-center">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 shrink-0 md:w-20 md:h-20">
                        <svg className="w-8 h-8 text-destructive" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 15L21 21M21 15L15 21M10 21V14L3 7V3H21V7L14 14V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-geist-sans font-bold mb-2">Doing the same easy questions over and over</h3>
                        <p className="text-muted-foreground font-geist-sans">Getting comfortable with basic questions while avoiding the hard ones? That's why the actual HSC feels like it's written in a different language.</p>
                      </div>
                    </div>
                    
                    <div className="w-full border-t border-dashed border-zinc-200 dark:border-zinc-800"></div>
                    
                    <div className="flex flex-col md:flex-row gap-6 md:items-center">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 shrink-0 md:w-20 md:h-20">
                        <svg className="w-8 h-8 text-destructive" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-geist-sans font-bold mb-2">Using your older sibling's 2019 textbooks</h3>
                        <p className="text-muted-foreground font-geist-sans">The syllabus changed. Your textbook didn't. Now you're studying stuff that literally won't be tested.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mx-auto mt-12 max-w-3xl rounded-xl bg-destructive/5 p-6 text-center border border-destructive/20">
              <p className="text-xl font-bold font-geist-sans text-destructive">
                These methods create a dangerous illusion that SHATTERS during your actual HSC.
              </p>
              <p className="mt-3 text-muted-foreground font-geist-sans">
                Real talk: 83% of students who don't hit their target use these exact 'study' methods.
              </p>
            </div>
          </div>
        </section>

        {/* 3-Step Formula Section */}
        <section className="py-16 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
              <h2 className="font-geist-sans text-4xl font-bold lg:text-5xl">The 3-Step HSC Maths Glow-Up</h2>
              <p className="mt-4 font-geist-sans text-lg text-muted-foreground max-w-2xl mx-auto">After helping 5,000+ students achieve Band 5 and 6 results, we've developed a system that consistently produces results:</p>
            </div>

            <div className="relative">
              <div className="grid md:grid-cols-3 gap-12 relative">
                {/* Step 1: Strategic Practice */}
                <div className="relative flex flex-col items-center">
                  <div className="mb-6 relative">
                    <div className="absolute -inset-2 rounded-full bg-zinc-100 dark:bg-zinc-800"></div>
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-700 shadow-sm">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                  </div>
                  
                  <div className="mb-4 p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    <BookOpen className="h-8 w-8 text-zinc-700 dark:text-zinc-300" />
                  </div>
                  
                  <h3 className="text-2xl font-geist-sans font-bold mb-3 text-center">Practice That Actually Counts</h3>
                  
                  <p className="font-geist-sans text-muted-foreground text-center">No more random worksheets. Only HSC-style questions that show up in the real exam.</p>
                  
                  <div className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                    <span>Evidence-based approach</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </div>
                
                {/* Middle section with connector lines */}
                <div className="relative flex flex-col items-center">
                  <div className="mb-6 relative">
                    <div className="absolute -inset-2 rounded-full bg-zinc-100 dark:bg-zinc-800"></div>
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-700 shadow-sm">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                  </div>
                  
                  <div className="mb-4 p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    <svg className="h-8 w-8 text-zinc-700 dark:text-zinc-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-geist-sans font-bold mb-3 text-center">Spot the Patterns, Beat the Exam</h3>
                  
                  <p className="font-geist-sans text-muted-foreground text-center">Learn the sneaky tricks HSC loves to repeat. Get good at recognizing them.</p>
                  
                  <div className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                    <span>Develop cognitive shortcuts</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </div>
                
                {/* Step 3: Detailed Solution Analysis */}
                <div className="relative flex flex-col items-center">
                  <div className="mb-6 relative">
                    <div className="absolute -inset-2 rounded-full bg-zinc-100 dark:bg-zinc-800"></div>
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-700 shadow-sm">
                      <span className="text-2xl font-bold">3</span>
                    </div>
                  </div>
                  
                  <div className="mb-4 p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    <LineChart className="h-8 w-8 text-zinc-700 dark:text-zinc-300" />
                  </div>
                  
                  <h3 className="text-2xl font-geist-sans font-bold mb-3 text-center">Solutions That Make Sense</h3>
                  
                  <p className="font-geist-sans text-muted-foreground text-center">See every step, not just the answer. Finally understand what markers want.</p>
                  
                  <div className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                    <span>HSC marker-approved techniques</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </div>
              </div>
              
              {/* Horizontal connector lines - visible on desktop only */}
              <div className="hidden md:block absolute top-[3.5rem] left-1/6 right-1/6 h-0.5 bg-zinc-200 dark:bg-zinc-700">
                <div className="absolute left-0 right-0 top-0 bottom-0"></div>
              </div>
            </div>

            <div className="mt-20 mx-auto max-w-3xl">
              <div className="relative overflow-hidden rounded-2xl border p-1">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 animate-pulse"></div>
                <div className="relative rounded-xl bg-card p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-shrink-0 p-2 rounded-full bg-primary/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v8"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22H2"></path><path d="m16 6-4 4-4-4"></path><path d="M16 18a4 4 0 0 0-8 0"></path></svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-geist-sans font-bold">Ready to transform your HSC maths performance?</h4>
                      <p className="text-muted-foreground font-geist-sans mt-1">This formula has helped over 5,000 students achieve Band 5 and 6 results. It can work for you too.</p>
                    </div>
                    <div className="flex-shrink-0 ml-auto">
                      <Button
                        asChild
                        size="sm"
                        className="rounded-xl px-4">
                        <Link href="/waitlist">
                          <span>Join Waitlist</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <Features />

        {/* Visual Features Section with Image */}
        <section className="py-16 md:py-32">
          <div className="mx-auto max-w-6xl space-y-12 px-6">
            <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
              <h2 className="font-geist-sans text-4xl font-bold lg:text-5xl">Why This Isn't Just Another Boring Maths Site</h2>
              <p className="max-w-sm font-geist-sans sm:ml-auto">Every single syllabus dot point, covered. No gaps, no surprises.</p>
            </div>
            <div className="relative rounded-3xl p-3 md:-mx-8">
              <div className="aspect-video relative overflow-hidden rounded-xl border">
                <div className="bg-linear-to-t z-1 from-background absolute inset-0 to-transparent"></div>
                <img 
                  src="/SCR-20250501-izle.png"
                  className="object-cover w-full h-full" 
                  alt="Student using HSC Math study materials on a tablet" 
                />
              </div>
            </div>
            <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="size-4 text-primary" />
                  <h3 className="font-geist-sans text-sm font-medium">Complete Materials</h3>
                </div>
                <p className="text-muted-foreground font-geist-sans text-sm">Comprehensive coverage of every syllabus dot point for all maths levels.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LineChart className="size-4 text-primary" />
                  <h3 className="font-geist-sans text-sm font-medium">Progress Tracking</h3>
                </div>
                <p className="text-muted-foreground font-geist-sans text-sm">Track your glow-up with stats and charts. See your progress, flex your wins.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="size-4 text-primary" />
                  <h3 className="font-geist-sans text-sm font-medium">Targeted Practice</h3>
                </div>
                <p className="text-muted-foreground font-geist-sans text-sm">Target your weak spots. Get better where it actually matters.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" />
                  <h3 className="font-geist-sans text-sm font-medium">Time Management</h3>
                </div>
                <p className="text-muted-foreground font-geist-sans text-sm">Timed practice = exam confidence. No more running out of time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Chat Solution Feature */}
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
          <div className="@container mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-balance font-geist-sans text-4xl font-bold lg:text-5xl">Stuck? Our AI Is Your 2am Maths Lifeline</h2>
              <p className="mt-4 font-geist-sans text-lg text-muted-foreground mx-auto max-w-2xl">Ask anything, get step-by-step help, and never feel lost again.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-xl overflow-hidden border shadow-lg">
                <img 
                  src="SCR-20250501-jdor.png"
                  className="w-full h-auto"
                  alt="Student using AI chat to solve math problems" 
                />
              </div>
              
              <div className="space-y-6">
                <div className="bg-primary/5 p-6 rounded-xl border">
                  <h3 className="font-geist-sans text-2xl font-bold">Breakthrough AI Technology That Makes Maths "Click"</h3>
                  <p className="mt-3 font-geist-sans">Our revolutionary AI doesn't just give you answers - it explains each step in detail so you truly understand the solution process.</p>
                  
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-geist-sans font-medium">Prompt Library, No Overthinking</p>
                        <p className="text-sm text-muted-foreground font-geist-sans">One tap = "Why is this better?" or "What's the trick here?"</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-geist-sans font-medium">Explains in Your Language</p>
                        <p className="text-sm text-muted-foreground font-geist-sans">Arabic, Chinese, French, German, Italian, and more. No Google Translate needed.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-geist-sans font-medium">Step-by-Step, No Spoilers</p>
                        <p className="text-sm text-muted-foreground font-geist-sans">Reveal one step at a time, just like a real tutor (but way faster).</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card p-6 rounded-xl border">
                  <h4 className="font-geist-sans text-xl font-bold">The Secret Weapon of Top HSC Students</h4>
                  <p className="mt-2 font-geist-sans text-muted-foreground italic">
                    "Asking the AI why a particular approach works or to explain a key insight is like having a maths tutor available at 2am before my exam. It helped me truly understand concepts instead of just memorising procedures."
                  </p>
                  <p className="mt-2 font-geist-sans text-sm">— Daniel K., Band 6 Mathematics Extension 2</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Solution Showcase */}
        <section className="py-16 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-balance font-geist-sans text-4xl font-bold lg:text-5xl">See Exactly How It's Done</h2>
              <p className="mt-4 font-geist-sans text-lg text-muted-foreground mx-auto max-w-2xl">
                Our interactive step-by-step solution system breaks down complex problems into digestible pieces, helping you build true understanding
              </p>
            </div>
            
            <div className="grid lg:grid-cols-7 gap-6 items-start">
              <div className="lg:col-span-3 space-y-6">
                <div className="rounded-xl border bg-card overflow-hidden">
                  <div className="bg-muted p-3 border-b flex items-center">
                    <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">3</div>
                    <h3 className="ml-2 font-geist-sans font-medium">Step Revealed</h3>
                  </div>
                  <div className="p-5 space-y-4">
                    <p className="font-geist-sans font-medium">Question 1</p>
                    <p className="font-geist-sans">The question asks for the equation of the graph of y = sin<sup>-1</sup> function.</p>
                    <p className="font-geist-sans">Testing a point on the graph where x = 0.5, we get y = 3π/2</p>
                    <p className="font-geist-sans">Let's try answer choice D: y = 3sin<sup>-1</sup>(2x-1)</p>
                    <p className="font-geist-sans">When x = 0.5:</p>
                    <p className="font-geist-sans">y = 3sin<sup>-1</sup>(2 × 0.5) = 3sin<sup>-1</sup>(1) = 3sin<sup>-1</sup>(1) = 3 × π/2 = 3π/2</p>
                    <p className="font-geist-sans">Therefore, the answer is (D) y = 3sin<sup>-1</sup>(2x-1)</p>
                    <div className="mt-8 flex items-center">
                      <div className="h-10 w-10 rounded-full flex items-center justify-center border">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                      </div>
                      <p className="ml-3 font-geist-sans text-sm text-muted-foreground">Questions about this step</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-4 space-y-6">
                <div className="rounded-xl border bg-card overflow-hidden">
                  <div className="p-5 space-y-3">
                    <h3 className="font-geist-sans font-medium text-xl">One-Click Understanding</h3>
                    <p className="font-geist-sans text-muted-foreground">
                      Not just solutions – but true comprehension. Our intelligent prompts help you dig deeper into each concept.
                    </p>
                    
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="rounded-lg border bg-background p-3">
                        <p className="font-geist-sans text-sm font-medium">Can you explain this step in simpler terms?</p>
                      </div>
                      <div className="rounded-lg border bg-background p-3">
                        <p className="font-geist-sans text-sm font-medium">Why is this approach better than other methods?</p>
                      </div>
                      <div className="rounded-lg border bg-background p-3">
                        <p className="font-geist-sans text-sm font-medium">How does this relate to the HSC syllabus?</p>
                      </div>
                      <div className="rounded-lg border bg-background p-3">
                        <p className="font-geist-sans text-sm font-medium">What formula is being used here?</p>
                      </div>
                      <div className="rounded-lg border bg-background p-3">
                        <p className="font-geist-sans text-sm font-medium">Can I use this technique in other questions?</p>
                      </div>
                      <div className="rounded-lg border bg-background p-3">
                        <p className="font-geist-sans text-sm font-medium">What's the key insight in this step?</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl border bg-card p-5 overflow-hidden space-y-3">
                  <h3 className="font-geist-sans font-medium text-xl">Multilingual Explanations</h3>
                  <p className="font-geist-sans text-muted-foreground">
                    Break through language barriers. Get crystal-clear explanations in your preferred language.
                  </p>
                  
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="rounded-lg border bg-background p-3">
                      <p className="font-geist-sans text-sm font-medium">What's the most important thing to remember here?</p>
                    </div>
                    <div className="rounded-lg border bg-background p-3">
                      <p className="font-geist-sans text-sm font-medium">Explain to me in Arabic</p>
                    </div>
                    <div className="rounded-lg border bg-background p-3">
                      <p className="font-geist-sans text-sm font-medium">Explain to me in Chinese</p>
                    </div>
                    <div className="rounded-lg border bg-background p-3">
                      <p className="font-geist-sans text-sm font-medium">Explain to me in French</p>
                    </div>
                    <div className="rounded-lg border bg-background p-3">
                      <p className="font-geist-sans text-sm font-medium">Explain to me in German</p>
                    </div>
                    <div className="rounded-lg border bg-background p-3">
                      <p className="font-geist-sans text-sm font-medium">Explain to me in Italian</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex justify-between">
                      <div className="font-geist-sans text-sm text-muted-foreground">Step 3 of 43</div>
                      <Button variant="default" size="sm" className="rounded-lg">
                        Join Waitlist <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Approach Works Section */}
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
          <div className="@container mx-auto max-w-5xl px-6">
            <div className="text-center">
              <h2 className="text-balance font-geist-sans text-4xl font-bold lg:text-5xl">Why Our Approach Works When Others Fail</h2>
              <p className="mt-4 font-geist-sans">The NSW Education Standards Authority (NESA) doesn't test your ability to memorise formulas – they test your ability to apply concepts under pressure.</p>
            </div>
            
            <div className="mt-12 rounded-xl border bg-card p-8">
              <h3 className="text-2xl font-bold">Our practice papers are meticulously crafted to simulate real HSC exam conditions:</h3>
              
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Precisely calibrated difficulty progression",
                  "Question formats that mirror actual exam patterns",
                  "Coverage of all syllabus dot points",
                  "Step-by-step solutions that reveal examiner thinking"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                    </div>
                    <p className="text-lg font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 md:py-32">
          <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
            <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
              <h2 className="font-geist-sans text-4xl font-bold lg:text-5xl">What Makes Us Different</h2>
              <p className="font-geist-sans">Unlike generic maths resources, our platform was built specifically for HSC Mathematics students by high-achieving selective school students who topped HSC maths and current HSC markers.</p>
            </div>

            <div className="mt-12 overflow-hidden rounded-xl border">
              <div className="grid md:grid-cols-2">
                <div className="bg-muted p-8">
                  <h3 className="text-center font-geist-sans text-xl font-bold">Regular Resources</h3>
                  <ul className="mt-6 space-y-4">
                    {[
                      "Generic practice questions",
                      "Basic workings",
                      "Limited practice options",
                      "Static PDF documents",
                      "No personalisation"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <X className="h-5 w-5 text-destructive" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-card p-8">
                  <h3 className="text-center font-geist-sans text-xl font-bold">Our Platform</h3>
                  <ul className="mt-6 space-y-4">
                    {[
                      "HSC-specific exam questions",
                      "Detailed step-by-step solutions",
                      "Unlimited practice materials",
                      "Interactive digital experience",
                      "Targeted by difficulty and topic"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
          <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
            <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
              <h2 className="font-geist-sans text-4xl font-bold lg:text-5xl">Real Students. Real Glow-Ups.</h2>
              <p className="font-geist-sans text-muted-foreground">Screenshots of Band 6 DMs not included (but we have them).</p>
            </div>

            <div className="grid gap-4 [--color-card:var(--color-muted)] *:border-none *:shadow-none sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2 dark:[--color-muted:var(--color-zinc-900)]">
              <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                <CardHeader>
                  <div className="flex items-center justify-center">
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      Band 6 Result
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                    <p className="font-geist-sans text-xl font-medium">"I was literally failing, now I'm flexing my 89/100. These papers showed me what I was missing. Walked into the HSC feeling like a boss."</p>

                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                      <Avatar className="size-12">
                        <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" alt="James L." />
                        <AvatarFallback>JL</AvatarFallback>
                      </Avatar>

                      <div>
                        <cite className="font-geist-sans text-sm font-medium">James L.</cite>
                        <span className="text-muted-foreground font-geist-sans block text-sm">Sydney Grammar</span>
                      </div>
                    </div>
                  </blockquote>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardContent className="h-full pt-6">
                  <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                    <p className="font-geist-sans text-xl font-medium">"The questions were so close to the real HSC, it was almost scary. I felt like I'd already done the exam!"</p>

                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                      <Avatar className="size-12">
                        <AvatarImage src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Sarah T." />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>
                      <div>
                        <cite className="font-geist-sans text-sm font-medium">Sarah T.</cite>
                        <span className="text-muted-foreground font-geist-sans block text-sm">Band 6 Mathematics Advanced</span>
                      </div>
                    </div>
                  </blockquote>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="h-full pt-6">
                  <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                    <p className="font-geist-sans">"Three weeks in and maths finally made sense. I stopped memorising, started understanding, and my marks shot up."</p>

                    <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                      <Avatar className="size-12">
                        <AvatarImage src="https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Michael R." />
                        <AvatarFallback>MR</AvatarFallback>
                      </Avatar>
                      <div>
                        <cite className="font-geist-sans text-sm font-medium">Michael R.</cite>
                        <span className="text-muted-foreground font-geist-sans block text-sm">Band 5 Mathematics Extension 1</span>
                      </div>
                    </div>
                  </blockquote>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="h-full pt-6">
                  <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                    <p className="font-geist-sans">"The step-by-step breakdowns showed me exactly where I was going wrong. Fixed my mistakes, levelled up fast."</p>

                    <div className="grid grid-cols-[auto_1fr] gap-3">
                      <Avatar className="size-12">
                        <AvatarImage src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Emily W." />
                        <AvatarFallback>EW</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-geist-sans text-sm font-medium">Emily W.</p>
                        <span className="text-muted-foreground font-geist-sans block text-sm">North Sydney Girls High</span>
                      </div>
                    </div>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden py-16 md:py-32">
          <div className="absolute inset-0 -z-10 bg-primary"></div>
          <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),rgba(255,255,255,0))]"></div>
          
          <div className="mx-auto max-w-6xl px-6 text-primary-foreground">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center rounded-full bg-primary-foreground/10 px-4 py-1.5">
                  <Clock className="mr-2 h-4" />
                  <span className="font-geist-sans text-sm font-medium">Time-Sensitive Opportunity</span>
                </div>
                
                <h2 className="mt-6 text-balance font-geist-sans text-4xl font-bold lg:text-5xl">
                  Your HSC is coming. Don't let maths be the reason you miss your dream ATAR.
                </h2>
                
                <div className="mt-12 rounded-xl bg-primary-foreground/10 p-8">
                  <h3 className="font-geist-sans text-2xl font-bold">Limited-Time Premium Access Includes:</h3>
                  
                  <ul className="mt-6 space-y-4">
                    {[
                      "Comprehensive practice papers for all maths levels",
                      "Extension 1 & 2 specialised materials",
                      "Unlimited downloads and access",
                      "Ask AI how to solve any question",
                      "Priority support from our team of tutors"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="h-5 w-5" />
                        <span className="font-geist-sans text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="browse-papers" className="py-16 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-5xl rounded-3xl border bg-card px-6 py-12 shadow-lg md:py-20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5">
                  <Clock className="mr-2 h-4 w-4 text-primary" />
                  <span className="font-geist-sans text-sm font-medium text-primary">Limited Time Offer</span>
                </div>
                
                <h2 className="mt-6 text-balance font-geist-sans text-4xl font-bold lg:text-5xl">
                  Transform Your HSC Mathematics Performance Today
                </h2>
                
                <p className="mx-auto mt-6 max-w-2xl font-geist-sans text-lg text-muted-foreground">
                  Join thousands of successful students who went from maths anxiety to Band 6 results with our proven system
                </p>
                
                <div className="mt-10 grid w-full gap-8 md:grid-cols-2">
                  <div className="rounded-xl border bg-muted p-6">
                    <h3 className="font-geist-sans text-xl font-semibold">Continue with traditional study methods</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="mt-1 h-4 w-4 text-destructive" />
                        <span className="font-geist-sans">Feel overwhelmed by complex concepts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="mt-1 h-4 w-4 text-destructive" />
                        <span className="font-geist-sans">Waste time on inefficient practice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="mt-1 h-4 w-4 text-destructive" />
                        <span className="font-geist-sans">Develop false confidence that shatters in exams</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="rounded-xl border bg-primary/10 p-6">
                    <h3 className="font-geist-sans text-xl font-semibold">Use our proven HSC Maths system</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 text-primary" />
                        <span className="font-geist-sans">Master concepts through targeted practice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 text-primary" />
                        <span className="font-geist-sans">Build genuine confidence through understanding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 text-primary" />
                        <span className="font-geist-sans">Walk into your HSC exam fully prepared</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="rounded-xl px-5 text-base">
                    <Link href="/waitlist">
                      <span>Get My Free Practice Papers</span>
                    </Link>
                  </Button>
                  
                  <Button asChild size="lg" variant="outline" className="rounded-xl px-5 text-base">
                    <Link href="#problem">
                      <span>Learn More</span>
                    </Link>
                  </Button>
                </div>
                
                <div className="mt-4 flex items-center justify-center space-x-1">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">No credit card required</span> • Instant access to sample papers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>  
      </main>
    </>
  )
}