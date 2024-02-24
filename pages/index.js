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
        <Navigation isIndexPage={isIndexPage} class="sticky" /> {/* Use the Navigation component here */}
    </div>

<div className="flex flex-col justify-center items-center h-screen z-100" >
    <video autoPlay="autoplay" playsInLine="playsinline" muted="true" onEnded={handleVideoEnd} className="w-full h-full object-cover object-right-bottom">
                      <source src="/introvid.mov" />
                      </video>
                      </div>

          <div className={` ${dilight.className} whitespace-nowrap opacity-0 z-100 absolute left-1/3 top-1/3 transition-opacity duration-1000 ${videoEnded ? 'opacity-100' : ''} text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-neutral-200 `}>An aspiring <strong className={` ${proxnovareg.className} underline underline-offset-4 decoration-1 whitespace-nowrap`}>product leader</strong> <br /> with expertise in <span class=" text-neutral-200 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className={` ${dibold.className} block animate-text-slide-3 text-justify text-accent leading-tight [&_li]:block`}>
            <li class="whitespace-nowrap">product management</li>
            <li>engineering</li>
            <li>design</li>
            <li aria-hidden="true">product management</li>
          </ul>
          </span>
      </div>

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
          <div className={`${dilight.className}`}>
          hayamaj@bu.edu <br />
          [857] 891 - 8848 <br />
          </div>
        </span>
      </div>
      </main>

  );
}