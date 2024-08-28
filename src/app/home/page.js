import { Suspense } from "react";
import Image from 'next/image';



export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black" >
      <div className="flex justify-between p-6">
        <div className="w-1/2 justify-center items-center inline">
          {/* Insert Hero Image */}
          <img src="/hero-image.png" alt="Hero Image" class=" inset-0 w-full h-full object-contain" />
        </div>



        <div className="w-1/2">
          <header className="flex justify-between items-center p-6">
            <Image src="/logo.svg" alt="Logo" width={168.76} height={60} />
            <div className="flex space-x-6 items-center">
              <a href="#" className="font-clash font-bold text-base mr-10">search</a>
              <a href="#" className="font-clash font-bold text-base border-b-2 border-gray-500 ml-24 ">more</a>
            </div>
          </header>
          <h1 className="text-7xl font-bold mx-10 mt-24 ">It’s definitely<br /> not a cult</h1>
          <input
            className="mt-8 px-4 py-2 border border-gray-300 w-full mx-5"
            placeholder="You will find the article you want to search here"
          />
          <div className="grid grid-rows-3 gap-4">
            <div className="bg-blue-200 p-4">
              <h2 className="text-lg font-bold">The Merit Myth: An Examination of Casteism in IITs</h2>
              <p className="text-gray-600">Campus Journalism • 28/03/23</p>
            </div>
            <div className="bg-pink-200 p-4">
              <h2 className="text-lg font-bold">Semester Exchange - Jan Edition</h2>
              <p className="text-gray-600">Summer 2022 • 21/03/23</p>
            </div>
          </div>

        </div>
      </div>




      {/* Latest Articles */}
      <section className="p-12 bg-gray-100">
        <h2 className="text-3xl font-bold">Latest Articles</h2>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {/* Replace with appropriate content */}
          <div className="bg-red-200 h-48 flex items-center justify-center">Article 1</div>
          <div className="bg-yellow-200 h-48 flex items-center justify-center">Article 2</div>
          <div className="bg-green-200 h-48 flex items-center justify-center">Article 3</div>
        </div>
      </section>

      {/* Random Articles */}
      <section className="p-12">
        <h2 className="text-3xl font-bold">Bored? Here are some random articles to read.</h2>
        <div className="grid grid-cols-4 gap-4 mt-8">
          {/* Replace with appropriate content */}
          <div className="bg-purple-200 h-40 flex items-center justify-center">Random 1</div>
          <div className="bg-indigo-200 h-40 flex items-center justify-center">Random 2</div>
          <div className="bg-teal-200 h-40 flex items-center justify-center">Random 3</div>
          <div className="bg-pink-200 h-40 flex items-center justify-center">Random 4</div>
        </div>
      </section>

      {/* Video Section */}
      <section className="p-12 bg-gray-100">
        <h2 className="text-3xl font-bold">We made some videos too</h2>
        <div className="mt-8 flex">
          <div className="w-1/2">
            {/* Insert Video Embed */}
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-1/2 p-4">
            <p>This one is "In conversation with Anil Kumar, ex-director McKinsey and co-founder, ISB Hyderabad".</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-black text-white">
        <div className="text-center">© Watchout! Student Media Body of IITR 2023</div>
      </footer>
    </div>
  );
}

