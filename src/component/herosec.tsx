'use client'
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className='mx-auto min-h-screen bg-gradient-to-r from-[#2c0530] via-[#120015] to-[#0c0c0e] animate-gradientBlur'>
      <div className="hero min-w-min-h-screen min-h-[40rem] relative flex items-start justify-center text-white text-4xl font-bold overflow-hidden">
        {/* Background color with Zoom Effect */}
        {/* Animated Dark Gradient Overlay */}
        <div className="bg-gradient-to-r from-[#2c0530] via-[#120015] to-[#0c0c0e] animate-gradientBlur"></div>

        {/* Hero Content - Moved to the Top */}
        <div className="pt-9 text-white-500">
          <h2 className='text-5xl text-center glow-text'>Welcome to</h2>
          <h2 className='text-5xl text-white text-center glow-text cursor-pointer hover:animate-bounce'>Agentia World</h2>
          <p className='font-semibold text-lg text-center pt-2'>
            The Future of Modern AI Agents
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 pt-16 p-9 gap-11">
            {/* Left side - Text */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <h2 className="text-3xl font-medium text-purple-600 mb-4">Welcome to Agentia World</h2>
              <p className="text-lg text-gray-400 font-medium mb-6">
                Agentia World is the ultimate platform that connects technology enthusiasts, innovators, and professionals
                with cutting-edge AI solutions. Join us to explore the future!
              </p>
              <a
                href="https://chat.whatsapp.com/EwWks8pEf3nGwjNvBPMEnE" // Replace with your WhatsApp group link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-sm w-fit text-white py-2 px-4 rounded hover:bg-purple-700 transition"
              >
                Join Now
              </a>
            </div>
            
            {/* Right side - Image */}
            <div className="flex justify-center mt-8 md:mt-0">
              <Image src={'/images/hero3.jpg'} alt="AI Robot" width={350} height={350} className="shadow-xl rounded-lg" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );  
}
