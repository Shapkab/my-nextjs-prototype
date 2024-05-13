"use client";

import Navbar from " /components/navbar";
import { Dropdown } from " /components/ui/dropdown";
import HTag from " /components/ui/hTag";
import { jobExperiences } from " /lib/data";

export default function About() {
  return (
    <div className="relative">
      <Navbar />
      {jobExperiences.map((job) => {
        return (
          <div
            key={job.title}
            className="hover-smooth-up transition-smooth m-9 w-2/5 flex grid grid-cols-2 place-items-center gap-3 rounded-3xl bg-amber-50 p-8 shadow-xl hover:bg-amber-100 cursor-pointer"
          >
            <HTag tag="h3" className="ml-5 text-center text-2xl font-semibold">
              {job.title}
            </HTag>
            <Dropdown classname="text-blue-gray-500 gradient-pink-purple">
              {job.responsibilities}
            </Dropdown>
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
