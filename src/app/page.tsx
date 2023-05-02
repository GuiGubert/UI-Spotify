import {
  ChevronLeft,
  ChevronRight,
  PlayIcon,
  Search,
  SearchIcon,
} from "lucide-react";

import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
            <div>
              <div className="flex items-center bg-white w-96 h-10 rounded-full ">
                <span className="flex flex-row ml-3 font-semibold text-zinc-500">
                  <Search className="mr-3" />
                  Artists, songs, or podcasts
                </span>
              </div>
            </div>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Morning</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/50cent.jpeg"
                width={104}
                height={104}
                alt="Álbum 50cent"
              />
              <strong>Get Rich Or Die Tryin</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                {" "}
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5  group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              {" "}
              <Image
                src="/bk.jpg"
                width={104}
                height={104}
                alt="Álbum Bk"
              />{" "}
              <strong>Castelos e Ruínas</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                {" "}
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5  group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              {" "}
              <Image
                src="/djonga.png"
                width={104}
                height={104}
                alt="Álbum Djonga"
              />{" "}
              <strong>Heresia</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                {" "}
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5  group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              {" "}
              <Image
                src="/orochi.jpg"
                width={104}
                height={104}
                alt="Álbum Orochi"
              />{" "}
              <strong>Celebridade</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                {" "}
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5  group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              {" "}
              <Image
                src="/rashid.jpg"
                width={104}
                height={104}
                alt="Álbum Rashid"
              />{" "}
              <strong>Confundindo Sábios</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                {" "}
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5  group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              {" "}
              <Image
                src="/travis.jpg"
                width={104}
                height={104}
                alt="Álbum Travis Scott"
              />{" "}
              <strong>Astroworld</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                {" "}
                <PlayIcon />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">
            Made for Guilherme Gubert
          </h2>
          <div className="grid grid-cols-6 gap-6 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
            >
              <Image
                src="/50cent.jpeg"
                className="w-full"
                width={104}
                height={104}
                alt="Daily 50cent"
              />
              <strong>Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                All the hits from the album and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded-md  hover:bg-white/10"
            >
              <Image
                src="/bk.jpg"
                className="w-full"
                width={104}
                height={104}
                alt="Daily Bk"
              />
              <strong>Daily Mix 2</strong>
              <span className="text-sm text-zinc-400">
                All the hits from the album and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded-md  hover:bg-white/10"
            >
              <Image
                src="/rashid.jpg"
                className="w-full"
                width={104}
                height={104}
                alt="Daily Rashid"
              />
              <strong>Daily Mix 3</strong>
              <span className="text-sm text-zinc-400">
                All the hits from the album and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded-md  hover:bg-white/10"
            >
              <Image
                src="/travis.jpg"
                className="w-full"
                width={104}
                height={104}
                alt="Daily Travis Scott"
              />
              <strong>Daily Mix 4</strong>
              <span className="text-sm text-zinc-400">
                All the hits from the album and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded-md  hover:bg-white/10"
            >
              <Image
                src="/djonga.png"
                className="w-full"
                width={104}
                height={104}
                alt="Daily Djonga"
              />
              <strong>Daily Mix 5</strong>
              <span className="text-sm text-zinc-400">
                All the hits from the album and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded-md  hover:bg-white/10"
            >
              <Image
                src="/orochi.jpg"
                className="w-full"
                width={104}
                height={104}
                alt="Daily Orochi"
              />
              <strong>Daily Mix 6</strong>
              <span className="text-sm text-zinc-400">
                All the hits from the album and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
