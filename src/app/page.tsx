import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import NavBar from "@/components/ui/NavBar";

export default function Home() {
  return ( 
    <>  
    
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">Welcome</p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6l lg:text-7xl">
          Chat with your{" "}
          <span className=" bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            documents
          </span>{" "}
          in seconds
        </h1>
        <p className="mt-5 max-w-prose text-slate-100 sm:text-lg">
          Upload your files and seek information about them.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/dashboard"
          target="_blank"
        >
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      <div>
        <div className=" relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          ></div>
        </div>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-2xl bg-gray-900 p-2 ring-1 ring-inset ring-zinc-100/10 lg:-m-4 lg:rounded-2xl lg:p-4 ">
              <Image
                src="/dashboard-preview.jpg"
                alt="product preview"
                width={1364}
                height={866}
                quality={100}
                className="rounded-md bg-white p-2 sm:pd-8 md:p-20 shadow-2xl ring-1 ring-gray-400"
              />
            </div>
          </div>
        </div>

        <div className=" relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          ></div>
        </div>
      </div>
      {/*Feature osio */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-50 sm:text-5xl">
              Start chatting in minutes
            </h2>
            <p className="mt-4 text-lg text-gray-50">
              Interacting with your PDF files have never been easier
            </p>
          </div>
        </div>
        {/*Steps */}
        <ol className="m-8  pt-8 flex space-x-12 space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col soace-y-2 border-1-4 border-zinc-300 py-2 pl-4 md:border-1-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-purple-500">
                Step 1
              </span>
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 text-slate-300">
                Either starting out with a free plan or choose our {''}
                <Link
                  href="/pricing"
                  className="text-blue-500 underline underline-offset-2"
                > 
                pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col soace-y-2 border-1-4 border-zinc-300 py-2 pl-4 md:border-1-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-purple-500">
                Step 2
              </span>
              <span className="text-xl font-semibold">
                Upload your PDF fil
              </span>
              <span className="mt-2 text-slate-300">
                We&apos;ll process your file and make it ready for you to chat with.
              </span>
            </div>
          </li> 
          <li className="md:flex-1">
            <div className="flex flex-col soace-y-2 border-1-4 border-zinc-300 py-2 pl-4 md:border-1-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-purple-500">
                
                Step 3
              </span>
              <span className="text-xl font-semibold">
                Start asking questions
                
              </span>
              <span className="mt-2 text-slate-300">
                Try out today - it really takes less than a minute
                
              </span>
            </div>
          </li>
        </ol> 
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-2xl bg-gray-900 p-2 ring-1 ring-inset ring-zinc-100/10 lg:-m-4 lg:rounded-2xl lg:p-4 ">
              <Image
                src="/file-upload-preview.jpg"
                alt="uploading preview"
                width={1419}
                height={732}
                quality={100}
                className="rounded-md bg-white p-2 sm:pd-8 md:p-20 shadow-2xl ring-1 ring-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
