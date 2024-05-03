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
            className="hover-smooth-up transition-smooth m-9 w-1/3 cursor-pointer rounded-3xl bg-amber-50 p-8 shadow-xl hover:bg-amber-100"
          >
            <HTag
              tag="h3"
              classname="flex items-center text-2xl font-semibold ml-5"
            >
              {job.title}
            </HTag>
            <ul className="m-2 font-medium text-gray-500">
              {job.skills.map((skill) => {
                return (
                  <li key={skill} className="mb-2 inline text-lg">
                    <span className="ml-3">{skill}</span>
                  </li>
                );
              })}
            </ul>
            <div>
              {job.responsibilities.map((resp) => {
                return (
                  <Dropdown classname="" key={resp}>
                    {resp}
                  </Dropdown>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
