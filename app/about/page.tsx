"use client";

import Navbar from " /components/navbar";
import { Dropdown } from " /components/ui/dropdown";
import HTag from " /components/ui/hTag";
import { jobExperiences } from " /lib/data";

export default function About() {
  return (
    <div>
      <Navbar />
      {jobExperiences.map((job) => {
        return (
          <div
            key={job.title}
            className="hover-smooth-up transition-smooth m-9 grid w-1/2 cursor-pointer grid-cols-2 place-items-center gap-3 rounded-3xl bg-amber-50 p-8 shadow-xl hover:bg-amber-100"
          >
            <HTag tag="h3" classname="text-center text-2xl font-semibold ml-5">
              {job.title}
            </HTag>
            <div>
              <Dropdown classname="right-0">{job.responsibilities}</Dropdown>
            </div>
            <ul className="m-2 font-medium text-gray-500">
              {job.skills.map((skill) => {
                return (
                  <li key={skill} className="mb-2 inline text-lg">
                    <span className="ml-3">{skill}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
