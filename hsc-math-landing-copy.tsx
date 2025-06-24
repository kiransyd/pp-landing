'use client'

import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { Check, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Pricing from '@/components/pricing'

export default function HSCMathLanding() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden">
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl space-y-6 text-center">
              <h1 className="text-center text-4xl font-semibold lg:text-5xl">HSC Mathematics Resources</h1>
              <p className="text-muted-foreground">Access comprehensive practice papers and resources for all levels of HSC Mathematics.</p>
            </div>
            
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Mathematics Standard</h3>
                  <ul className="space-y-2">
                    {['Practice Papers', 'Video Solutions', 'Formula Sheets', 'Topic Tests'].map((item) => (
                      <li key={item} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6">
                    <Link href="#">
                      View Resources <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Mathematics Advanced</h3>
                  <ul className="space-y-2">
                    {['Practice Papers', 'Video Solutions', 'Formula Sheets', 'Topic Tests'].map((item) => (
                      <li key={item} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6">
                    <Link href="#">
                      View Resources <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Mathematics Extension</h3>
                  <ul className="space-y-2">
                    {['Practice Papers', 'Video Solutions', 'Formula Sheets', 'Topic Tests'].map((item) => (
                      <li key={item} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6">
                    <Link href="#">
                      View Resources <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <Pricing />
      </main>
      <SiteFooter />
    </>
  )
} 