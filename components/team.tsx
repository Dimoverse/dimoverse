// Component mentioning the team members of the project
import Image from 'next/image'

import TeamImage01 from '@/public/images/team-01-ab.jpeg'
import TeamImage02 from '@/public/images/team-02-dl.jpeg'
import TeamImage03 from '@/public/images/team-03-jl.jpeg'
import TeamImage05 from '@/public/images/team-05-st.jpg'

export default function Team() {
    return (
    <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2 className="h2 mb-4">The Team</h2>
        </div>

        {/* Items */}
        <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

          {/* 1st item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="rounded-full" src={TeamImage01} width={128} height={128} alt="TeamImage 01" />
            <h4 className="h4 mb-2">Alexandre Binninger</h4>
            <p className="text-lg text-gray-400 text-center">Co-Founder</p>
            <p className="text-lg text-gray-400 text-center">Ph.D in Computer Graphics ETH Zurich</p>
          </div>

          {/* 2nd item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="rounded-full" src={TeamImage02} width={128} height={128} alt="TeamImage 02" />
            <h4 className="h4 mb-2">Dorine Lachat</h4>
            <p className="text-lg text-gray-400 text-center">Co-Founder</p>
            <p className="text-lg text-gray-400 text-center">Bachelor in Management University of Fribourg</p>
          </div>

          {/* 3rd item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="rounded-full" src={TeamImage03} width={128} height={128} alt="TeamImage 03" />
            <h4 className="h4 mb-2">Jessie Li</h4>
            <p className="text-lg text-gray-400 text-center">Co-Founder</p>
            <p className="text-lg text-gray-400 text-center">Bachelor in Comp. Science ETH Zurich</p>
          </div>

        </div>
        <br></br>
        {/* Mentors and Advisors item */}
        <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-1 lg:gap-10 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="rounded-full" src={TeamImage05} width={128} height={128} alt="TeamImage 05" />
            <h4 className="h4 mb-2">Stefan Tuchschmid</h4>
            <p className="text-lg text-gray-400 text-center">Advisor</p>
            <p className="text-lg text-gray-400 text-center">Ph.D in Computer Vision</p>
            <p className="text-lg text-gray-400 text-center">ETH AI Center</p>
          </div>
        </div>

      </div>
    </div>
  </section>
)

}