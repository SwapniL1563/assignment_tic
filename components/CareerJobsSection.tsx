"use client";

import { MapPin, Briefcase } from "lucide-react";

type Job = {
  title: string;
  location: string;
  experience: string;
};

const jobs: Job[] = [
  { title: "Sales & Marketing", location: "Chennai", experience: "2+ years" },
  { title: "Production & Quality Control", location: "Chennai", experience: "2+ years" },
  { title: "Supply Chain & Logistics", location: "Chennai", experience: "2+ years" },
  { title: "Human Resources", location: "Chennai", experience: "2+ years" },
  { title: "Finance & Administration", location: "Chennai", experience: "4+ years" },
  { title: "Warehouse & Distribution Management", location: "Chennai", experience: "4+ years" },
];

export default function CareersSection() {
  return (
    <section className="hidden md:block w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-4xl md:text-3xl font-semibold text-[#10562C] mb-10">
          Start Your Career Journey Here
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="border-b border-[#888888] pb-4 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#10562C]">{job.title}</h3>
                <div className="mt-2 flex flex-col gap-1 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <MapPin size={16} className="text-red-500" />
                    Location: {job.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <Briefcase size={16} className="text-gray-500" />
                    Experience: {job.experience}
                  </p>
                </div>
              </div>

              <div className="mt-3 md:mt-0 flex flex-col items-center gap-4">
                <button className="bg-green-800 hover:bg-[#10562C] text-white px-4 py-1 rounded-full text-sm transition cursor-pointer">
                  Apply Now
                </button>
                <a
                  href="#"
                  className="text-[#888888] hover:underline text-sm font-medium"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
