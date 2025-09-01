'use client';
import React from 'react';
import Link from 'next/link';

const reviewerFiles = [
  {
    title: 'Lesson 1: Cardiac Anaphylaxis',
    filename: '/lesson1',
    description: 'PowerPoint presentation on Cardiac Anaphylaxis',
  },
  {
    title: 'Lesson 2: Coronary Vascular Disorders',
    filename: '/LESSON-3_CORONARY-VASCULAR-DISORDERS.pdf',
    description: 'PDF document on Coronary Vascular Disorders',
  },
  {
    title: 'Lesson 3: Cardiac Dysrhythmias',
    filename: '/Cardiac-Dysrhythmias.pptx',
    description: 'PowerPoint presentation on Cardiac Dysrhythmias',
  },
];

const MainContent = () => {
  
  return (
    <main 
      className="flex-1 p-4 sm:p-6 md:p-10 bg-white min-h-screen overflow-y-auto transition-all duration-300"
    
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-600">
          Reviewer for Prelims
        </span>
        <button  className="md:hidden p-2 rounded-md bg-gray-100 text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
        Welcome to your Nursing Reviewer!
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        Galatians 6:9 (NIV)<br />
        &quot;Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.&quot;
      </h2>
      <p className="text-gray-600 max-w-xl mb-8 text-sm sm:text-base">
        This reviewer is designed to help you ace your prelims. It contains materials covering Cardiac Anaphylaxis, Coronary Vascular Disorders, and Cardiac Dysrhythmias.
      </p>

      <section id="lessons" className="mb-10">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Lessons</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewerFiles.map(({ title, filename, description }) => {
            const isInternalLink = filename.startsWith('/lesson');

            const cardContent = (
              <div className="bg-gray-50 rounded-xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition h-full">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
                <div className="mt-auto">
                  <div className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition">
                    {isInternalLink ? 'View Lesson' : 'View File'}
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            );

            if (isInternalLink) {
              return (
                <Link key={filename} href={filename} className="h-full">
                  {cardContent}
                </Link>
              );
            } else {
              return (
                <a
                  key={filename}
                  href={filename}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full"
                >
                  {cardContent}
                </a>
              );
            }
          })}
        </div>
      </section>
    </main>
  );
};

export default MainContent;