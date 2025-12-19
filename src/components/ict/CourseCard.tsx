import React from "react";
import { Course } from "@/data/courses";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Clock, Radio, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

interface CourseCardProps {
    course: Course;
    onClick: (course: Course) => void;
}

export const CourseCard = ({ course, onClick }: CourseCardProps) => {
    // Dynamically get the icon component
    const IconComponent = (Icons as any)[course.iconName] || Icons.BookOpen;

    return (
        <Card
            className="group flex flex-col h-full bg-white border border-slate-100 shadow-[0_2px_10px_-4px_rgba(6,81,237,0.1)] hover:shadow-[0_8px_30px_-12px_rgba(6,81,237,0.3)] transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => {
                // debug: log click events
                // eslint-disable-next-line no-console
                console.log('CourseCard clicked', course.id);
                onClick(course);
            }}
        >
            <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-80 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="pb-3 pt-6 px-6">
                <div className="flex justify-between items-start mb-5">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                    {course.level && (
                        <Badge variant="secondary" className="bg-slate-100 text-slate-500 font-medium px-2.5 py-1 text-[10px] uppercase tracking-wider border border-slate-200">
                            {course.level}
                        </Badge>
                    )}
                </div>
                <div className="space-y-1.5">
                    <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-none font-semibold px-2 py-0.5 text-[11px] w-fit">
                            {course.ageGroup}
                        </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800 leading-tight group-hover:text-indigo-700 transition-colors">
                        {course.title}
                    </CardTitle>
                </div>
            </CardHeader>

            <CardContent className="px-6 flex-1">
                <CardDescription className="text-sm text-slate-500 line-clamp-3 leading-relaxed font-normal">
                    {course.description}
                </CardDescription>

                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-500 font-medium pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-1.5 group-hover:text-indigo-600 transition-colors">
                        <Clock size={15} className="text-slate-400 group-hover:text-indigo-400 transition-colors" />
                        {course.duration}
                    </div>
                    <div className="flex items-center gap-1.5 group-hover:text-indigo-600 transition-colors">
                        <Radio size={15} className="text-slate-400 group-hover:text-indigo-400 transition-colors" />
                        {course.format}
                    </div>
                </div>
            </CardContent>

            <CardFooter className="px-6 pb-6 pt-2">
                <div className="w-full flex items-center justify-between text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700">
                    <span>View Syllabus</span>
                    <Icons.ArrowRight size={16} />
                </div>
            </CardFooter>
        </Card>
    );
};
