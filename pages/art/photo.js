import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";
import Link from 'next/link';
import { CldImage, CldVideoPlayer } from "next-cloudinary";
import Navigation from '.././navigation'; // Import the Navigation component
import { useState, useEffect, useRef } from 'react';
import localFont from 'next/font/local'
const bodonireg = Bodoni_Moda({ subsets: ['latin'], weight: ['400'], style: ['normal'] });
const dilight = localFont({
  src: [
    {
      path: '../../public/fonts/dilight.otf',
      weight: '400'
    }
  ],
})
const direg = localFont({
  src: [
    {
      path: '../../public/fonts/direg.otf',
      weight: '400'
    }
  ],
})
const dimed = localFont({
  src: [
    {
      path: '../../public/fonts/dimed.otf',
      weight: '400'
    }
  ],
})
const didot = localFont({
  src: [
    {
      path: '../../public/fonts/Didot.ttf',
      weight: '400'
    }
  ],
  variable: '--font-didot'
})
const didotdf = localFont({
  src: [
    {
      path: '../../public/fonts/DidotDef.ttf',
      weight: '400'
    }
  ],
  variable: '--font-didotdf'
})
const proxnova = localFont({
  src: [
    {
      path: '../../public/fonts/pnlight.otf',
      weight: '300'
    }
  ],
  variable: '--font-proxnova'
})

const proxnovareg = localFont({
  src: [
    {
      path: '../../public/fonts/pnreg.ttf',
      weight: '300'
    }
  ],
  variable: '--font-proxnova'
})

const proxnovabold = localFont({
  src: [
    {
      path: '../../public/fonts/pnbold.otf',
      weight: '300'
    }
  ],
  variable: '--font-proxnova'
})



export default function art() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);
  const isIndexPage = true; 

  useEffect(() => {
    // Add event listener to detect clicks outside the sidebar
    const handleOutsideClick = (e) => {
      if (isSidebarOpen && !e.target.closest('.sidebar')) {
        setIsSidebarOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleOutsideClick);

    // Remove the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleVideoTimeUpdate = () => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const remainingTime = videoElement.duration - videoElement.currentTime;
    const threshold = 6; // Adjust this threshold as needed

    if (remainingTime <= threshold) {
      setVideoEnded(true);
    }
  };
    return (
      <main className={`bg-white flex min-h-screen max-w-screen flex-col items-center justify-between `}>
      <div className="flex flex-col items-center">
      <Navigation isIndexPage={false} class="sticky" /> {/* Use the Navigation component here */}
      </div>

      <div className="w-screen h-screen overflow-y-scroll">
        <div className="text-center pt-16 my-24">
          <h1 className={`${didotdf.className} text-2xl`}>Photography</h1>
        </div>

        <div className="flex flex-wrap justify-center my-16 mt-6 mx-8">
          <CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1707332436/image-gallery/PH001.jpg" height={600} width={500} crop="auto" alt="Facebook" />
          <CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1708466366/image-gallery/PH002.jpg" height={600} width={500} crop="auto" alt="Facebook" />
        </div>

    <div className="flex flex-wrap justify-center my-16 mt-6 mx-8">
    <CldImage src="https://res.cloudinary.com/dqqim3gc1/image/upload/v1707332438/image-gallery/PH003.tiff" height={600} width={800} crop="auto" alt="Facebook" />
    </div>

    <div className={`${didotdf.className} px-1 py-8 flex items-center sm:flex-row flex-col`}>
        <span className="mx-auto text-center text-xs text-neutral-900">
          <div className="mb-4">
          <Link href="/about" className="underline decoration-1 underline-offset-2 mx-2">About</Link>
          <Link href="/contact" className="underline decoration-1 underline-offset-2 mx-2">Contact</Link> <br />
          </div>
          <div className={`${dilight.className}`}>
          hayamaj@bu.edu <br />
          [857] 891 - 8848 <br />
          </div>
        </span>
      </div>
  </div>
    </main>
    )
}