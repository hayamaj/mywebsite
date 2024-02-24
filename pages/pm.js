import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";
import Link from 'next/link';
import Navigation from './navigation'; // Import the Navigation component
import React, { useState, useEffect, useRef } from "react";
import localFont from 'next/font/local'

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



export default function Pm() {
  const [showModal, setShowModal] = useState(false);
  const ModalRef = useRef(null); // Correct usage of useRef

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ModalRef.current && !ModalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const closeModal = () => {
    setShowModal(false);

  };

    return (
      <main className={`bg-white min-h-screen ${dilight.className}`}>
        <div className="flex flex-col items-center mt-4">
        <Navigation isIndexPage={false} class="sticky" /> {/* Use the Navigation component here */}
      </div>

 
      <div className="container mx-auto px-4">

<div className="text-center mt-16">
  <h1 className={`${didot.className} text-2xl text-black`}>Product Management</h1>
</div>

<div className="flex flex-col my-2 mt-8">
                        <h1 className={`${direg.className} my-2`}>PRODUCTS</h1>
                        <div className="flex flex-row">
                        <div>
                        <h1 className={`${dilight.className} mb-4`}><strong className={`${dimed.className} mb-4`}>DIBS!</strong> </h1>
                        </div>
                        <div className="ml-4 ">
                        A campus-specific mobile app where students can share images & locations of items they no longer need, fostering a sustainable & collaborative community to reduce waste. 
                        <br/> <button onClick={() => setShowModal(true)} className={`${direg.className} text-accent text-sm`}>Learn More</button>
                        </div>
                        
                </div>
                </div>

                <div className="flex flex-col my-2 mt-8">
                        <h1 className={`${direg.className} my-2`}>PM TOOLS</h1>
                        <div className="flex relative z-20 max-w-screen-md text-justify">
                            <h1 className={`${dilight.className}`}>
                                <li className="list-none">Jira, Slack, Trello, Miro</li>
                            </h1>
                        </div>
                </div>





      
        {showModal ? (
          // Modal component
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-neutral-400 bg-opacity-75 z-50">
            <div ref={ModalRef} className="bg-white p-8 max-w-3xl overflow-auto h-full">
{/* Content of the modal */}
          <section className="mt-4 mb-4 text-neutral-700 text-left">
            <h2 className={` ${dilight.className} bg-neutral-950 text-white w-48 text-xl my-1`}><strong className={`${dilight.className}`}>Phase 1 | </strong> BU XC475</h2>
          </section>
        <section className="max-w-screen-lg mx-auto">
            <div className="my-2">
              <h2 className={`${dilight.className} text-lg text-center mb-1`}>Project Details</h2>
              <div className="text-neutral-900 text-xl text-justify">
                <p className={`${dilight.className} text-sm`}> 
                  In January 2022, I applied to BU's <Link href="#" className={` text-neutral-700 opacity-55 hover:opacity-100`}> XC475</Link> class with a simple idea I wanted to explore. As a city student, move-in/move-out periods mean streets littered with discarded furniture. Most items are usually still in great condition, but students are too lazy & last-minute to find better solutions. This sparked an idea: why not hit two birds with one stone?
                </p>
              </div>
            </div>

            <div className="my-12">
              <h2 className={`${dilight.className} text-lg text-center mb-1`}>Version 1</h2>
              <div className="mx-auto max-w-lg">
                <div>
                  <Image
                    src="/images/dibs-old.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                </div>
                <div className="text-neutral-900 text-xl text-justify whitespace-nowrap">
                  <h3 className={`${dilight.className} text-sm `}><strong className={`${dilight.className} text-sm `}>Tech Stack: </strong>React, Firebase, TailwindCSS, Google Maps API</h3>
                </div>
              </div>
            </div>

            <div className="my-12">
              <h2 className={`${dilight.className} text-lg text-center mb-1`}>My Role</h2>
              <div className="text-neutral-900 text-justify lg:mx-40">
                <div className={`${dilight.className} text-sm list-disc`}>
                  <h3 className={`${dilight.className} text-pm text-lg`}>[Innovator/Lead Developer]</h3>
                  <ul>
                    <li>Organized team meetings</li>
                    <li>Led technical discussions & decision-making</li>
                    <li>Led the project architecture design and planning.</li>
                    <li>Developed main product features alongside teammates</li>
                    <li>Worked with the UI/UX team to finalize design decisions.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-4 mb-4 text-neutral-700 text-left">
          <h2 className={` ${dilight.className} bg-neutral-950 text-white w-72 text-xl my-11`}><strong className={`${dilight.className}`}>Phase 2 | </strong> BU Innovation Lab</h2>
          </section>

          <section className="max-w-screen-lg mx-auto">
            <div className="my-12">
            <h2 className={`${dilight.className} text-lg text-center mb-1`}>Project Details</h2>
              <div className="text-neutral-900 text-xl text-justify lg:mx-24">
                <p className={`${dilight.className} text-sm`}> 
                  I wanted to keep working on dibs, even after the course ended. So, I applied for another fellowship opportunity, where I could form a new team to continue developing the application.
                </p>
              </div>
            </div>

            <div className="my-12">
            <h2 className={`${dilight.className} text-lg text-center mb-1`}>Version 1</h2>
              <div className="mx-auto max-w-lg">
                <div>
                  <Image
                    src="/images/dibs2.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                </div>
                <div className="text-neutral-900 text-xl text-justify mt-4">
                <div className="text-neutral-900 text-xl text-justify whitespace-nowrap">
                  <h3 className={`${dilight.className} text-sm `}><strong className={`${dilight.className} text-sm `}>Tech Stack: </strong>React Native, Expo, TypeScript, Firebase, Google Auth</h3>
                
              </div>
            </div>
            </div>
            </div>

            <div className="my-12">
            <h2 className={`${dilight.className} text-lg text-center mb-1`}>My Role</h2>
              <div className="text-neutral-900 text-xl text-justify lg:mx-40">
                <div className={`${dilight.className} list-disc text-sm`}>
                <h3 className={`${dilight.className} text-pm text-lg`}>[Product Manager]</h3>
                  <ul>
                    <li>Organized team meetings</li>
                    <li>Oversee and manage all aspects of product development, including <br></br>
                    planning, stakeholder communication, app development, testing, and deployment.</li>
                    <li>Ensuring successful app execution within timelines while mitigating project risks.</li>
                  </ul>
                </div>
                
              </div>
              
            </div>

            <div class="my-12">
            <h2 className={`${dilight.className} text-lg text-center mb-1`}>Demo</h2>
              <div className="text-neutral-900 text-xl justify-center">
                <div className="mx-4 sm:mx-64">
                  <video autoPlay loop style={{ width: '100%', maxWidth: '500px' }}>
                    <source src="/dibs.mp4" />
                  </video>
                </div>
              </div>
            </div>

            
          </section>
              {/* You can add more content here */}
              <div className="-mt-4 mb-12">
              <button onClick={closeModal} className={`${dilight.className} text-neutral-700 text-sm text-center mb-1`}>Close</button>
                </div>
            </div>
          </div>
        ) : null}



        
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
    );
}