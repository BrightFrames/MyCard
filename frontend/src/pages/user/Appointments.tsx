import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MoreHorizontal } from "lucide-react";
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    isToday
} from 'date-fns';

const Appointments = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
    const goToToday = () => {
        const today = new Date();
        setCurrentDate(today);
        setSelectedDate(today);
    };

    // Calendar generation logic
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const calendarDays = eachDayOfInterval({
        start: startDate,
        end: endDate,
    });

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className="flex flex-col h-full gap-6 animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Appointments</h2>
                    <p className="text-slate-500 mt-2">Manage your schedule and upcoming events.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={goToToday} className="bg-white">
                        Today
                    </Button>
                    <div className="flex items-center gap-2 bg-white rounded-md border p-1">
                        <Button variant="ghost" size="icon" onClick={prevMonth} className="h-8 w-8">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={nextMonth} className="h-8 w-8">
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
                {/* Calendar Grid */}
                <Card className="lg:col-span-2 border-0 shadow-sm ring-1 ring-slate-100 bg-white overflow-hidden flex flex-col">
                    <CardHeader className="p-6 border-b border-slate-100 flex flex-row items-center justify-between">
                        <div className="flex items-center gap-2">
                            <CalendarIcon className="w-5 h-5 text-indigo-600" />
                            <CardTitle className="text-lg font-semibold text-slate-900">
                                {format(currentDate, 'MMMM yyyy')}
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0 flex-1 flex flex-col">
                        {/* Weekday Headers */}
                        <div className="grid grid-cols-7 border-b border-slate-100 bg-slate-50/50">
                            {weekDays.map((day) => (
                                <div key={day} className="py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Days Grid */}
                        <div className="grid grid-cols-7 flex-1 auto-rows-fr">
                            {calendarDays.map((day, dayIdx) => {
                                const isSelected = selectedDate && isSameDay(day, selectedDate);
                                const isCurrentMonth = isSameMonth(day, monthStart);
                                const isCurrentDay = isToday(day);

                                return (
                                    <div
                                        key={day.toString()}
                                        className={`
                                            min-h-[100px] border-b border-r border-slate-50 p-3 transition-colors hover:bg-slate-50 relative group cursor-pointer
                                            ${!isCurrentMonth ? 'bg-slate-50/30 text-slate-400' : 'bg-white'}
                                            ${isSelected ? 'bg-indigo-50/50' : ''}
                                        `}
                                        onClick={() => setSelectedDate(day)}
                                    >
                                        <div className="flex justify-between items-start">
                                            <span
                                                className={`
                                                    text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full
                                                    ${isCurrentDay
                                                        ? 'bg-indigo-600 text-white shadow-sm'
                                                        : isSelected
                                                            ? 'text-indigo-600'
                                                            : 'text-slate-700'}
                                                `}
                                            >
                                                {format(day, 'd')}
                                            </span>
                                            {/* Placeholder for event indicator dot */}
                                            {isSameDay(day, new Date(2025, 11, 24)) && (
                                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>

                {/* Side Panel: Selected Date Details */}
                <div className="space-y-6">
                    <Card className="border-0 shadow-sm ring-1 ring-slate-100 bg-white h-full">
                        <CardHeader className="p-6 border-b border-slate-100">
                            <CardTitle className="text-lg font-semibold text-slate-900">
                                {selectedDate ? format(selectedDate, 'EEEE, MMM do') : 'Select a date'}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            {selectedDate && isSameDay(selectedDate, new Date()) ? (
                                <div className="space-y-4">
                                    <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100 group hover:border-indigo-200 transition-colors cursor-pointer">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-semibold text-indigo-900">Project Review</h4>
                                            <Button variant="ghost" size="icon" className="h-6 w-6 text-indigo-400 hover:text-indigo-600 -mr-2 -mt-2">
                                                <MoreHorizontal className="w-4 h-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center text-xs text-indigo-600 mb-3 gap-2">
                                            <Clock className="w-3.5 h-3.5" />
                                            10:00 AM - 11:30 AM
                                        </div>
                                        <div className="flex items-center -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-indigo-200 border-2 border-white flex items-center justify-center text-[10px] text-indigo-700 font-bold">JD</div>
                                            <div className="w-6 h-6 rounded-full bg-purple-200 border-2 border-white flex items-center justify-center text-[10px] text-purple-700 font-bold">AS</div>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-white rounded-lg border border-slate-200 hover:border-indigo-200 transition-colors cursor-pointer">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-semibold text-slate-900">Lunch Break</h4>
                                        </div>
                                        <div className="flex items-center text-xs text-slate-500 gap-2">
                                            <Clock className="w-3.5 h-3.5" />
                                            1:00 PM - 2:00 PM
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-48 text-center text-slate-400">
                                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-3">
                                        <CalendarIcon className="w-6 h-6 text-slate-300" />
                                    </div>
                                    <p className="text-sm">No appointments for this day.</p>
                                    <Button variant="link" className="text-indigo-600 mt-2">Add Event</Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Appointments;
