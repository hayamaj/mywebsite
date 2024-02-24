import { useState, useEffect } from 'react';
import Navigation from './navigation'; // Import the Navigation component
import localFont from 'next/font/local'
import Link from 'next/link';

{     /*fonts*/     }
const dilight = localFont({
  src: [
    {
      path: '../public/fonts/dilight.otf',
      weight: '400'
    }
  ],
})
const direg = localFont({
  src: [
    {
      path: '../public/fonts/direg.otf',
      weight: '400'
    }
  ],
})
const dimed = localFont({
  src: [
    {
      path: '../public/fonts/dimed.otf',
      weight: '400'
    }
  ],
})
const dibold = localFont({
  src: [
    {
      path: '../public/fonts/dibold.otf',
      weight: '400'
    }
  ],
})
const diboldital = localFont({
  src: [
    {
      path: '../public/fonts/diboldital.otf',
      weight: '400'
    }
  ],
})
const didot = localFont({
  src: [
    {
      path: '../public/fonts/Didot.ttf',
      weight: '400'
    }
  ],
  variable: '--font-didot'
})
const didotdf = localFont({
  src: [
    {
      path: '../public/fonts/DidotDef.ttf',
      weight: '400'
    }
  ],
  variable: '--font-didotdf'
})
const proxnova = localFont({
  src: [
    {
      path: '../public/fonts/pnlight.otf',
      weight: '300'
    }
  ],
  variable: '--font-proxnova'
})

const proxnovareg = localFont({
  src: [
    {
      path: '../public/fonts/pnreg.ttf',
      weight: '300'
    }
  ],
  variable: '--font-proxnova'
})

const proxnovabold = localFont({
  src: [
    {
      path: '../public/fonts/pnbold.otf',
      weight: '300'
    }
  ],
  variable: '--font-proxnova'
})


export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
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

  const handleVideoEnd = () => {
    setVideoEnded(true);
    console.log("works");
  };

  {/*resume, not sure if still needed here.*/}
  const handleDownload = () => {
    const pdfUrl = '/AlMajali-Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'AlMajali-Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className={`bg-white flex min-h-screen max-w-screen flex-col items-center justify-between`}>
    <div className="flex flex-col items-center">
        <Navigation isIndexPage={false} class="sticky" /> {/* Use the Navigation component here */}
    </div>

    <div className="text-center mt-24 mb-8">
          <h1 className={`${didot.className} text-2xl`}>About Me</h1>
        </div>

    <section className="flex flex-row justify-center">
<div className="flex items-left w-1/2" >
    <video autoPlay="autoplay" Loop="loop" playsInLine="playsinline" muted="true" onEnded={handleVideoEnd} className="h-4/5 w-full ml-2 justify-left">
                      <source src="/aboutvid.mov" />
                      </video>
                      </div>
                      <div className="flex items-left flex-col text-left w-1/3">
                        <h1 className={`${dilight.className} text-sm my-2`}>Hi! I'm Haya. </h1>
                        <h1 className={`${dilight.className} text-sm text-left`}>
                            I am a Jordanian-born student at Boston University, on track to graduate in May 2024. 
                             <br />
                            From a young age, I thought I would follow a path in the arts. I spent my childhood reading, drawing & painting. Yet, amidst
                            the solitude of my artistic endeavors, I craved collaboration & connection with others.
                            <br />
                            This is what led me to embark on a different path in college. While maintainting a minor in Visual Arts, I chose to 
                            major in Computer Science & Technology. Recognizing the digital landscape as the emerging frontier of innovation,
                            I sought to master the language through which modern ideas were being brought to life.
                            <br />
                            Over the past four years, I've meticulously crafted a versatile skill set spanning engineering, product management, 
                            & design. In this journey, I stumbled upon the role of a product leader &#8212; an opportunity to synthesize my diverse 
                            expertise and lead teams in crafting innovative solutions that transcend traditional disciplinary boundaries.
                            <br />
                            Regardless of the starting point, my ultimate aim remains consistent: to guide teams towards the creation of 
                            groundbreaking solutions that address multifaceted challenges. 
                            
                         </h1>
                      </div>
</section>

{/*resume stuff, figure out where to put*/}

{/*
      <div className="mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center text-center hover:no-underline ">
          <button onClick={handleDownload} className={`${inter300.className} px-2 md:mt-4 text-sm text-neutral-800 hover:text-neutral-800`}>download my resume.</button>
          <button onClick={handleDownload} className={`w-3 h-3 my-4 border border-neutral-950 bg-white hover:bg-neutral-950`}></button>

        </div>
      </div>
                  */}

      <div className={`${didotdf.className} px-1 py-8 flex items-center sm:flex-row flex-col`}>
        <span className="mx-auto text-center text-xs text-neutral-900">
          <div className="mb-4">
          <Link href="/about" className="underline decoration-1 underline-offset-2 mx-2">About</Link>
          <Link href="/contact" className="underline decoration-1 underline-offset-2 mx-2">Contact</Link> <br />
          </div>
          <div>
          hayamaj@bu.edu <br />
          [857] 891 - 8848 <br />
          </div>
        </span>
      </div>
      </main>

  );
}