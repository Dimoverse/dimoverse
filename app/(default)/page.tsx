export const metadata = {
  title: 'Home - Dimoverse',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Team from '@/components/team'
import Testimonials from '@/components/testimonials'
import Working from '@/components/working'

export default function Home() {
  return (
    <>
      <Hero />
      <Working />
      <Testimonials />
      <Features />
      {/*<Zigzag /> */}
      {/*<Newsletter />*/}
      <Team />
    </>
  )
}
