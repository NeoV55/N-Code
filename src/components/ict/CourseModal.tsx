import React from "react";
import Link from "next/link";
import { Course } from "@/data/courses";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, MapPin, Wrench, GraduationCap, ShieldCheck, BookOpen } from "lucide-react";

interface CourseModalProps {
    course: Course | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const CourseModal = ({ course, open, onOpenChange }: CourseModalProps) => {
    if (!course) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-white border-none shadow-2xl rounded-xl gap-0 max-h-[90vh] overflow-y-auto">
                <button
                    onClick={() => onOpenChange(false)}
                    className="absolute right-4 top-4 p-2 rounded-full bg-black/5 hover:bg-black/10 text-slate-500 hover:text-slate-700 transition-colors z-50 focus:outline-none"
                    aria-label="Close"
                >
                    <span className="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>

                {/* Header Section */}
                <div className="bg-slate-50 p-6 md:p-8 border-b border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-blue-600 text-white hover:bg-blue-700 border-none px-3">
                            {course.category}
                        </Badge>
                        <span className="text-slate-400 text-sm font-medium flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            {course.ageGroup}
                        </span>
                    </div>

                    <DialogTitle className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                        {course.title}
                    </DialogTitle>
                    <DialogDescription className="text-base text-slate-600 leading-relaxed max-w-2xl">
                        {course.description}
                    </DialogDescription>
                </div>

                <div className="grid md:grid-cols-3">
                    {/* Left Content: Outcomes & Details */}
                    <div className="md:col-span-2 p-6 md:p-8 space-y-8">

                        {/* Outcomes */}
                        <div>
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <GraduationCap size={16} className="text-blue-600" />
                                Syllabus Overview
                            </h4>
                            <ul className="space-y-3">
                                {course.outcomes.map((outcome, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                                        <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                                        <span>{outcome}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Syllabus Accordion */}
                        {course.syllabus && course.syllabus.length > 0 && (
                            <div className="pt-6 border-t border-slate-100">
                                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <BookOpen size={16} className="text-blue-600" />
                                    Course Schedule
                                </h4>
                                <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                                    {course.syllabus.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 p-3 rounded-lg bg-slate-50 border border-slate-100">
                                            <div className="flex-shrink-0 w-12 text-center">
                                                <span className="block text-[10px] uppercase text-slate-400 font-bold">Week</span>
                                                <span className="block text-lg font-bold text-blue-600 leading-none">{item.week}</span>
                                            </div>
                                            <div>
                                                <h5 className="text-sm font-bold text-slate-900">{item.title}</h5>
                                                <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{item.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Logistics */}
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                            <div className="space-y-1">
                                <h5 className="text-xs font-medium text-slate-500 uppercase">Duration</h5>
                                <p className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                                    <Clock size={16} className="text-slate-400" /> {course.duration}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h5 className="text-xs font-medium text-slate-500 uppercase">Format</h5>
                                <p className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                                    <MapPin size={16} className="text-slate-400" /> {course.format}
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3">
                            <ShieldCheck className="text-blue-600 shrink-0 mt-0.5" size={18} />
                            <p className="text-xs text-blue-800 leading-relaxed">
                                <span className="font-semibold">Parent Note:</span> Use of {course.tools.join(", ")} is supervised. We maintain a safe, private learning environment for all students.
                            </p>
                        </div>

                    </div>

                    {/* Right Sidebar: Action */}
                    <div className="bg-slate-50 border-t md:border-t-0 md:border-l border-slate-200 p-6 md:p-8 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-slate-900 mb-1">Ready to start?</h4>
                                <p className="text-xs text-slate-500">Secure your child's spot in the next cohort.</p>
                            </div>

                            <Link
                                href="/n-code/student-registration"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-11 shadow-sm rounded-lg">
                                    Proceed to Enrollment
                                </Button>
                            </Link>

                            <div className="text-center">
                                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide mb-2">Enrollment Process</p>
                                <ol className="text-xs text-slate-600 space-y-2 text-left bg-white p-3 rounded border border-slate-200">
                                    <li className="flex gap-2">
                                        <span className="font-bold text-blue-600">1.</span> Fill Google Form
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-blue-600">2.</span> Receive Confirmation
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-blue-600">3.</span> Class Schedule Sent
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-200">
                            <p className="text-xs text-center text-slate-400">
                                Questions? <a href="mailto:support@n-code.com" className="text-blue-600 hover:underline">Contact Support</a>
                            </p>
                        </div>
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    );
};
