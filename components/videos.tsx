import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01-rw.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

import VideoThumb from '@/public/images/hero-image-01.png'
import BlenderRoom from '@/public/images/Video_thumb.png'
import RusticRoom from '@/public/images/Video_thumb_1.png'
import ModalVideo from '@/components/modal-video'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Research and Development</h2>
            <p className="text-xl text-gray-400"></p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-4 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
            <ModalVideo
                thumb={VideoThumb}
                thumbWidth={1024}
                thumbHeight={576}
                thumbAlt="Video thumbnail"
                video="/videos/demo.mp4"
                videoWidth={1920}
                videoHeight={1080} />
            </div>

            <div className="flex flex-col h-full p-4 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
                <ModalVideo
                thumb={RusticRoom}
                thumbWidth={1024}
                thumbHeight={576}
                thumbAlt="Video thumbnail"
                video="/videos/Blender_room_synthetic_Gaussian_Splattings.mp4"
                videoWidth={1920}
                videoHeight={1080} />
            </div>
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
            <ModalVideo
                thumb={BlenderRoom}
                thumbWidth={1024}
                thumbHeight={576}
                thumbAlt="Video thumbnail"
                video="/videos/Gaussian_Splatting_rendering_of_a_rustic_style_room.mp4"
                videoWidth={1920}
                videoHeight={1080} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
