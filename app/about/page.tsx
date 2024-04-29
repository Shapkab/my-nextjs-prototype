import Footer from " /components/footer";
import Navbar from " /components/navbar";
import HTag from " /components/ui/hTag";
import { jobExperiences } from " /lib/data";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Navbar />
      {/*<div className="flex flex-col items-center justify-between lg:flex-row lg:items-start">*/}
      {/*  <div className="order-2 mt-8 w-full flex-1 rounded-3xl bg-white p-8 shadow-xl sm:w-96 lg:order-1 lg:w-full lg:rounded-r-none">*/}
      {/*    <div className="mb-7 flex items-center border-b border-gray-300 pb-7">*/}
      {/*      <div className="ml-5">*/}
      {/*        <p className="block text-2xl font-semibold">*/}
      {/*          Industrial civil engineering*/}
      {/*        </p>*/}
      {/*        <span className="align-top text-xl font-medium text-gray-500">*/}
      {/*          &thinsp;*/}
      {/*        </span>*/}
      {/*      </div>*/}
      {/*      <ul className="mb-7 font-medium text-gray-500">*/}
      {/*        <li className="mb-2 flex text-lg">*/}
      {/*          <Image*/}
      {/*            src="https://res.cloudinary.com/williamsondesign/check-grey.svg"*/}
      {/*            alt="check-grey"*/}
      {/*            width={20}*/}
      {/*            height={20}*/}
      {/*          />*/}
      {/*          <span className="ml-3">Work in AutoCad</span>*/}
      {/*        </li>*/}
      {/*      </ul>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {jobExperiences.map((job) => {
        return (
          <div
            key={job.title}
            className="mt-8 w-full flex-1 rounded-3xl bg-white p-8 shadow-xl sm:w-96 lg:order-1 lg:w-full lg:rounded-r-none"
          >
            <HTag
              tag="h3"
              classname="flex items-center text-2xl font-semibold ml-5"
            >
              {job.title}
            </HTag>
            <ul className="mb-7 flex font-medium text-gray-500">
              {job.responsibilities.map((responsibility) => {
                return (
                  <li key={responsibility} className="mb-2 flex text-lg">
                    <Image
                      src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                      alt="check-grey"
                      width={20}
                      height={20}
                    />
                    <span className="ml-3">{responsibility}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}
