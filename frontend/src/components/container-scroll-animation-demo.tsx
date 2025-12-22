"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-white dark:bg-black">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-black dark:text-white mb-4">
              From{" "}
              <span className="text-orange-400 drop-shadow-lg">Essential</span> to
              <br />
              <span className="text-5xl md:text-7xl lg:text-8xl font-bold mt-2 leading-none bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                Extraordinary
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Whether you need a simple, effective card for your business or a cutting-edge design to wow clients, we have it all.
            </p>
          </>
        }
      >
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-[#f5f5f0] to-[#e8e8e0] dark:from-zinc-900 dark:to-zinc-800 p-6">
          <div className="bg-gradient-to-b from-[#e8dcc8] to-[#d4c4ad] dark:bg-zinc-800 rounded-3xl shadow-2xl w-full h-full flex flex-col items-center justify-center py-8 px-6 antialiased" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
            {/* Profile Image */}
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg mb-6 flex-shrink-0">
              <div className="w-[104px] h-[104px] rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden border-2 border-white/50">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
            </div>
            
            {/* Name and Title */}
            <div className="text-center mb-6 flex-shrink-0">
              <h2 className="text-[28px] font-extrabold text-[#2d2d2d] dark:text-white mb-3 tracking-tight leading-none" style={{ textRendering: 'optimizeLegibility' }}>
                James Carter
              </h2>
              <p className="text-[13px] font-bold text-[#c85a3b] dark:text-orange-500 uppercase tracking-[0.15em] mb-0 leading-tight" style={{ textRendering: 'optimizeLegibility' }}>
                Professional
              </p>
              <p className="text-[13px] font-bold text-[#c85a3b] dark:text-orange-500 uppercase tracking-[0.15em] leading-tight" style={{ textRendering: 'optimizeLegibility' }}>
                Photographer
              </p>
              <p className="text-[11px] text-[#5a5a5a] dark:text-gray-400 italic mt-4 leading-[1.6] px-1 max-w-[220px] mx-auto" style={{ textRendering: 'optimizeLegibility' }}>
                "Capturing life's moments one shutter at a time. Enthusiastic about travel and portraits."
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4 mb-6 flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#c85a3b]/10 dark:bg-orange-900/30 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-sm">
                <svg className="w-6 h-6 text-[#c85a3b] dark:text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#c85a3b]/10 dark:bg-orange-900/30 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-sm">
                <svg className="w-6 h-6 text-[#c85a3b] dark:text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                </svg>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#c85a3b]/10 dark:bg-orange-900/30 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-sm">
                <svg className="w-6 h-6 text-[#c85a3b] dark:text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </div>
            </div>
            
            {/* Location */}
            <div className="bg-[#c85a3b]/5 dark:bg-orange-900/20 rounded-2xl p-5 w-full max-w-[240px] flex-shrink-0 shadow-sm">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#c85a3b] dark:text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div className="flex-1">
                  <p className="text-[11px] font-bold text-[#c85a3b] dark:text-orange-500 uppercase tracking-[0.1em] mb-2 leading-none" style={{ textRendering: 'optimizeLegibility' }}>
                    Location
                  </p>
                  <p className="text-[13px] text-[#2d2d2d] dark:text-gray-200 font-semibold leading-[1.5]" style={{ textRendering: 'optimizeLegibility' }}>
                    456 Bloom Avenue,<br />Springfield, IL 62704
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
