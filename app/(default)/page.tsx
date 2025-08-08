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
import Videos from '@/components/videos'
import Partner from '@/components/partner'

export default function Home() {
  return (
    <>
    
      <section id="hero">
        <Hero />
      </section>
      {/* <section id="working">
        <Working />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="videos">
        <Videos />
      </section> */}
      {/*<section id="zigzag">
        <Zigzag />
      </section>*/}
      <section id="team">
        <Team />
      </section>
      <section id="partner">
        <Partner />
      </section>
      {/* <section id="newsletter">
        <Newsletter />
      </section> */}
    </>
  )
}