// Component mentioning the team members of the project
import Image from 'next/image'

import TalentKick from '@/public/images/tk.png'
import ETH from '@/public/images/eth-zurich.jpg'

export default function Team() {
    return (
    <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2 className="h2 mb-4">Our Partners</h2>
        </div>

        {/* Items */}
        <div className="max-w-sm mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-2 lg:gap-10 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="" src={TalentKick} width={300} height={300} alt="Partner" />
          </div>

          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="" src={ETH} width={300} height={300} alt="Partner" />
          </div>

        </div>

      </div>
    </div>
  </section>
)

}