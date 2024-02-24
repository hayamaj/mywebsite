import { useEffect } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Navigation from './navigation'; // Import the Navigation component
import React, { useRef, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Head from 'next/head';

const inter300 = Inter({ subsets: ['latin'], weight: ['300'] });
const inter500 = Inter({ subsets: ['latin'], weight: ['500'] });



import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineClose,
} from 'react-icons/ai';

interface ContactProps {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

function Contact({ serviceId, templateId, publicKey }: ContactProps) {
  const [isIndexPage, setIsIndexPage] = useState(false); // Assuming this is not the index page
  const form = useRef<HTMLFormElement>(null);
  const [submitResult, setSubmitResult] = useState<
    'success' | 'failure' | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit() {
    if (!serviceId || !templateId || !publicKey || !form.current) {
      console.error(
        'EmailJS environment variables or form reference are not defined'
      );
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      setSubmitResult('success');
      setIsModalOpen(true);
      reset();
    } catch (error) {
      setSubmitResult('failure');
      setIsModalOpen(true);
    }
  }
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    <main className={`bg-white flex min-h-screen flex-col items-center justify-between ${inter300.className}`}>
            <div className="flex flex-col items-center mt-4">
            <div className="top-4 left-4 absolute flex flex-col mt- text-xs text-neutral-400">
                
                </div>
                <Navigation isIndexPage={isIndexPage} /> 
            </div>

      <main className="flex-1 p-4" style={{ paddingTop: '3rem' }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-neutral-950 text-2xl mb-4 text-center">
            Get in Touch!
          </p>
          <p className="text-neutral-950 mb-4">
            If you'd like to reach out to me or report a bug on my website,
            please fill out the form below with your name, email, and a message.
            <br />
            You can also directly email me at{' '}
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL ? (
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                className="text-blue-400 underline"
              >
                {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
              </a>
            ) : (
              '(Fetching email address...)'
            )}
            <a>.</a>
            <br />
            <br />
            I&lsquo;ll get back to you as soon as possible!
          </p>
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <input
              {...register('name', { required: true })}
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
            {errors.name && (
              <span className="text-red-500">This field is required.</span>
            )}

            <input
              {...register('email', {
                required: 'This field is required.',
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please provide a valid email address.',
                },
              })}
              placeholder="Your Email Address"
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
            {errors.email && typeof errors.email.message === 'string' && (
              <span className="text-red-500">{errors.email.message}</span>
            )}

            <textarea
              {...register('message', {
                required: 'This field is required.',
                minLength: {
                  value: 10,
                  message: 'Your message must be at least 10 characters.',
                },
              })}
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded text-black"
              rows={4}
            />
            {errors.message && typeof errors.message.message === 'string' && (
              <span className="text-red-500">{errors.message.message}</span>
            )}

            <input
              type="submit"
              className="w-full p-2 bg-black text-white rounded cursor-pointer hover:bg-art"
            />
          </form>
        </div>
      </main>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className={`p-8 rounded shadow-lg relative flex items-center justify-center ${
              submitResult === 'success' ? 'bg-green-200' : 'bg-red-200'
            }`}
          >
            {' '}
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700"
            >
              <AiOutlineClose size={24} />
            </button>
            <div className="">
              {submitResult === 'success' && (
                <div className="flex flex-col items-center justify-center">
                  <AiOutlineCheckCircle
                    className="text-green-500 animate-bounce"
                    size={50}
                  />
                  <p className="text-green-900 text-lg font-bold text-center">
                    Successfully submitted form!
                  </p>
                </div>
              )}
              {submitResult === 'failure' && (
                <div className="flex flex-col items-center justify-center">
                  <AiOutlineCloseCircle
                    className="text-red-500 animate-bounce"
                    size={50}
                  />
                  <p className="text-red-500 text-lg font-bold text-center">
                    Failed to submit form. Please try again later.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
</main>
    
  );
}

  export async function getStaticProps() {
    const serviceId = process.env.REACT_APP_SERVICE_ID ?? null;
    const templateId = process.env.REACT_APP_TEMPLATE_ID ?? null;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY ?? null;
  
    return {
      props: {
        serviceId,
        templateId,
        publicKey,
      },
    };
  }

  export default Contact;