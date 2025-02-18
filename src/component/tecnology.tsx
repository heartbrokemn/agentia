import { Kaushan_Script } from 'next/font/google'
import Image from 'next/image';
import React from 'react'

const Kaushan = Kaushan_Script({
  weight: '400',
  subsets: ["latin"],
});

const threebox = [
  { name: 'Next.js15',
    logo: '/images/nextjs.jpg',
    width: '150',
    Link: 'https://nextjs.org/'    
  },
  { name: 'Python', 
    logo: '/images/python.jpg',
    width: '100',
    Link: 'https://www.python.org/'    
  },
  { name: 'Crew Ai', 
    logo: '/images/crewai.png',
    width: '150',
    Link: 'https://www.crewai.com/' 
  },
]

const Technology = () => {
  return (
    <div className='bg-black min-h-screen text-center text-white pt-11'>
      <h1 className={`relative text-white text-6xl font-bold ${Kaushan.className} glow-text`}>
        Technologies we Use
      </h1>

      <p className='text-white pt-6 font-semibold'>
        Powering Agentia World with cutting-edge technologies for AI-driven excellence.
      </p>

      {/* BOXES */}
      <div className='flex flex-wrap gap-6 justify-center px-9 pt-11'>
        {threebox.map((teach, index) => (
          <a key={index}
            href={teach.Link}
            target='_blank'
            rel="noopener noreferrer"
            className='border border-purple-500 rounded-xl shadow-lg flex flex-col items-center justify-center w-60 h-60 transition-transform duration-300 hover:shadow-[0_0_20px_5px_rgba(134,8,255,0.8)] hover:scale-110'
          >
            <Image src={teach.logo} alt={teach.name} width={teach.width} height={80} />
            <p className='mt-4 text-xl font-semibold'>{teach.name}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Technology
