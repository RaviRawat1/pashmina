import ArtMarquee from '../components/home/ArtMarquee'
import Blogs from '../components/home/Blogs'
import Faq from '../components/home/Faq'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link'
import Recommendations from '../components/home/Recommendations'
import Sustainability from '../components/home/Sustainability'
import Testimonial from '../components/home/Testimonial'
import TopHeader from '../components/TopHeader'
import Video from '../components/home/Video'
import Videobanner from '../components/home/Videobanner'
import Viewed from '../components/home/Viewed'
import MostSought from '../components/home/MostSought'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pashmina</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopHeader />
      <Layout>
        <Videobanner />

        <div className="max-w-[1240px] w-full mx-auto my-0 box-border">
          <div className="pt-[44px] pb-[88px] px-2 box-border text-center">
            <h2 className='font-Orpheu font-normal text-[32px] leading-8 tracking-[0.06em] text-[#56112A] mb-[17px] text-center' >Art of Weaving</h2>
            <p className="font-Calibri font-normal text-[14px] leading-[160%] tracking-[0.02em] text-[#2D2D2D] text-center'">Once the luxurious cashmere fiber has been spun into a complete yarn, it passes on to the weaver. The art of weaving is the turning point in the sojourn of a Pashmina. It transforms the Cashmere yarn into the finest pashmina shawls, stoles, scarves, throws, and apparel the human eye has ever seen. A weaver carefully mounts the yarn over his traditional wooden handloom and starts weaving with a harmonious effort of his hand and foot. It takes anywhere from 3 days to 2 weeks to finish weaving one pashmina scarf, pashmina wrap or a pashmina shawl. There are several weaves that are done but the Chasm-e-Bulbul or the popularly known Diamond weave remains the signature weave which we at pashmina.com use for all our creations.</p>
          </div>
        </div>

        <section className="bg-lime_yellow py-14">
          <div className="2xl:container 2xl:mx-auto">
            <h2 className="text-center font-Orpheu text-[32px]">
              Most Viewed Pashminas
            </h2>
            <div className="py-4 pb-12">
              <div className="w-28 mx-auto border-2 border-red-900"></div>
            </div>
            <Viewed />
          </div>
        </section>

        <MostSought/>

        <Video />
        <section className="bg-lime_yellow text-center text-base py-16">
          <div className="2xl:container 2xl:mx-auto">
            <h2 className="text-center font-Orpheu text-[32px]">
              Your Recommendations
            </h2>
            <div className="py-4 pb-12">
              <div className="w-28 mx-auto border-2 border-red-900"></div>
            </div>
            <Recommendations />
          </div>
        </section>

        <Sustainability />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <h2 className="text-center font-Orpheu text-[32px]">
            Our Artisans
          </h2>
          <div className="py-4">
            <div className="w-28 mx-auto border-2 border-red-900"></div>
          </div>
          <p className="text-center mt-4 text-lg">
            Empowering the community of artisans associated with us is
            fundamental to our core values. Their livelihood to a certain extent
            depends on us. Our artisans work painstakingly to acquire, weave,
            embroider our luxury pieces; hence we too work hard to promote this
            shared sense of partnership.
          </p>
        </div>
        <ArtMarquee />
        <Link href="/artisans" prefetch={false}>
          <div
            className="relative cursor-pointer flex items-center justify-center px-4 py-3 cusColor sm:mb-14 sm:px-8"
          >
            <div className="relative">
              <span className="text-lg mr-2 align-middle">
                VIEW ALL
              </span>
              <div className="absolute top-[2px] -right-5">
                <Image
                  src="/images/marron-arrow.png"
                  width="18"
                  height="10"
                  alt="arrow"
                  loading='lazy'
                />
              </div>
            </div>
          </div>
        </Link>

        <div className="bg-lime_yellow py-5 2xl:mx-auto mt-6">
          <h2 className="text-center font-Orpheu text-[32px]">
            Our Blogs
          </h2>
          <div className="py-4">
            <div className="w-28 mx-auto border-2 border-red-900"></div>
          </div>
          <Blogs />
        <Link href="/blog" prefetch={false}>
          <div
            className="relative flex items-center cursor-pointer justify-center px-4 py-3 cusColor sm:mb-14 sm:px-8 mb-10"
          >

            <div className="relative">
              <span className="text-lg mr-2 align-middle">
                VIEW ALL
              </span>
              <div className="absolute top-[2px] -right-5">
                <Image
                  src="/images/marron-arrow.png"
                  width="18"
                  height="10"
                  alt="arrow"
                  loading='lazy'
                />
              </div>
            </div>
          </div>
        </Link>
        </div>

        <Testimonial />

        <Faq />
      </Layout>
    </div>
  )
}
