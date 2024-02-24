import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";
import Link from 'next/link';
import Navigation from './navigation'; // Import the Navigation component
import React, { useState, useEffect, useRef } from "react";
const bodonireg = Bodoni_Moda({ subsets: ['latin'], weight: ['400'], style: ['normal'] });
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


export default function eng() {
    return (
        <main className={`bg-white min-h-screen ${dilight.className}`}>
          <div className="flex flex-col items-center mt-4">
          <Navigation isIndexPage={false} class="sticky" /> {/* Use the Navigation component here */}
      </div>

            <div className="container mx-auto px-4">

        <div className="text-center mt-16">
          <h1 className={`${didot.className} text-black text-2xl`}>Engineering/Computer Science</h1>
        </div>


{/* 
                <section className="my-16 text-neutral-900 text-xl max-w-screen-lg text-justify">
                    <h1 className={`${dilight.className} text-sm`}>Nearly a recent graduate with a <strong className={` ${dimed.className} text-neutral-900`}>B.S. in Computer Science </strong>
                        from Boston University, I offer a robust technical skill set and a strong academic foundation. 
                        My proficiency spans leading cross-functional teams as a Project Manager 
                        at <strong className={` ${dimed.className} text-black`}>BU Spark!</strong>, implementing cutting-edge AI solutions at <strong className={` ${dimed.className} text-black`}>Dakota Systems</strong>, 
                        and actively contributing to web development & marketing initiatives at companies like <strong className={` ${dimed.className} text-black`}>ZenHR </strong>.
                    </h1>
                </section>
*/}
              
                    <div className="flex flex-col my-2 mt-8">
                        <h1 className={`${direg.className} my-2`}>EDUCATION</h1>
                        <h1 className={`${dilight.className} mb-4`}><strong className={`${dimed.className} mb-4`}>2024</strong> &nbsp; B.Sc. in Computer Science, Boston University, Massachusetts, USA.</h1>
                        </div>
               
                <section className="my-4 text-black">
                    <h2 className={` ${direg.className} w-48 text-left`}>TECHNICAL SKILLS</h2>
                
                <div className="max-w-screen-xl mx-auto flex flex-col my-2">
                    <div className="flex flex-col lg:flex-row">
                        <h1 className={`${dimed.className}`}>Languages &nbsp; &nbsp; &nbsp; &nbsp;  &#8212;</h1>
                        <div className="flex relative z-20 text-neutral-900 max-w-screen-md text-justify ml-8 mt-1">
                            <h1 className={`${dilight.className} text-neutral-900`}>
                                <li className="list-none">Python, Java, JavaScript, C, HTML, CSS, Ruby, SML</li>
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row mb-4">
                        <h1 className={`${dimed.className} leading-4`}>Technologies/ <br/> Frameworks &nbsp; &nbsp; &#8212;</h1>
                        <div className="flex relative z-20 text-neutral-900 max-w-screen-md text-justify ml-8 mt-1">
                            <h1 className={`${dilight.className} text-neutral-900`}>
                            <li className="list-none">React, Node.js, Adobe, Rails, Figma, TailwindCSS, AWS, Heroku, PostreSQL, Vercel</li>
                            </h1>
                        </div>
                    </div>
                </div>
                </section>


                <div className="flex flex-col my-4">
                        <h1 className={`${direg.className} my-2`}>EXPERIENCE</h1>
                        <h1 className={`${dimed.className}`}>Artificial Intelligence <strong className={`${dilight.className}`}>&#8212; AI Integration & Solutions Engineer</strong></h1>
                        <h1 className={`${dimed.className}`}>Software Development <strong className={`${dilight.className}`}> &#8212;Software Engineering Intern</strong></h1>
                        <h1 className={`${dimed.className}`}>Project Management <strong className={`${dilight.className}`}> &#8212;Software Project Manager</strong></h1>
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
