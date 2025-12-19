"use client";

import React, { useState } from "react";
import { Course, COURSES } from "@/data/courses";
import { CourseCard } from "@/components/ict/CourseCard";
import { CourseModal } from "@/components/ict/CourseModal";
import { IctIntroDrawer } from "@/components/ict/IctIntroDrawer";
import { PortalLayout } from "@/components/ict/portal/PortalLayout";
import { Badge } from "@/components/ui/badge";

export default function ICTAITutorPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCourseClick = (course: Course) => {
    // debug: log when handler is called
    // eslint-disable-next-line no-console
    console.log('handleCourseClick invoked', course.id);
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  // Group courses by category for the "Institutional" layout
  const categories = [
    "Primary",
    "Secondary",
    "Python",
    "AI/ML (Artificial Intelligence)",
    "Prompt Engineering",
    "Coding",
    "Working Professional",
    "Adults & Seniors"
  ];

  return (
    <PortalLayout>
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Welcome Hero Banner */}
        <div className="rounded-3xl bg-white border border-slate-100 p-8 md:p-12 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0 L100 100 L0 100 Z" />
            </svg>
          </div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60"></div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Enrollment Open for 2025
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
              Welcome to the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Future of Learning</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              An institutional-grade curriculum designed to empower the next generation.
              Structure, safety, and excellence in every lesson.
            </p>
            <div className="flex gap-4">
              <button onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                View Programs
              </button>
              <button className="px-6 py-3 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
                Parent Guide
              </button>
            </div>
          </div>
        </div>

        {/* Categorized Course Grid */}
        <div id="programs" className="space-y-12">
          {categories.map((category) => {
            const categoryCourses = COURSES.filter(c => c.category === category);
            if (categoryCourses.length === 0) return null;

            return (
              <div key={category} className="space-y-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-slate-800">{category} Programs</h3>
                  <div className="h-[1px] flex-1 bg-slate-200"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryCourses.map((course) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      onClick={handleCourseClick}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Footer (Contextual to Portal) */}
        <div className="border-t border-slate-200 pt-12 pb-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h4 className="font-bold text-slate-900 mb-4">ICT AI Tutor Academy</h4>
            <p className="text-sm text-slate-500 leading-relaxed max-w-md">
              Empowering the next generation with future-ready technology skills through structured,
              mentor-guided learning paths.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-4 text-sm">Resources</h5>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600">Student Dashboard</a></li>
              <li><a href="#" className="hover:text-blue-600">Parent Guide</a></li>
              <li><a href="#" className="hover:text-blue-600">System Requirements</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-4 text-sm">Legal & Safety</h5>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600">Safety Guidelines</a></li>
            </ul>
          </div>
        </div>
      </div>

      <CourseModal
        course={selectedCourse}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />

      <IctIntroDrawer />
    </PortalLayout>
  );
}
