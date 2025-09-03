import React from "react";
import { Mic } from "lucide-react"; // Assuming lucide-react is installed for the microphone icon

const VoiceConsultationSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content Area */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Sub-tagline */}
          <div className="mb-6 inline-block">
            <span className="inline-flex items-center rounded-full bg-green-700/20 px-3 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-700/30">
              <span className="mr-1 h-1.5 w-1.5 rounded-full bg-green-400"></span>
              AI Voice Consultation
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Speak Freely. Be
            <span className="block">Understood.</span>
            <span className="text-green-500 block">Instantly.</span>
          </h2>

          {/* Description */}
          <p className="max-w-xl text-lg text-gray-400 mb-6">
            Our advanced AI listens, comprehends, and responds to your health
            concerns in real time, just like a human, but with unparalleled
            precision and access to vast medical knowledge. Experience a
            natural, private, and judgment-free conversation from the comfort of
            your home.
          </p>

          {/* Highlighted Text */}
          <p className="max-w-xl text-lg font-medium text-green-500 mb-4">
            No waiting times, no appointments needed. Just pure AI intelligence.
          </p>

          {/* Small print */}
          <p className="text-xs text-gray-500 italic">
            *Analyzing speech patterns...
          </p>
        </div>

        {/* Right Image/Animation Area */}
        <div className="md:w-1/2 flex justify-center relative">
          {/* Green Glow Dots */}
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-green-500/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-green-500/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse-slow delay-500"></div>

          <div className="relative w-full max-w-lg aspect-video bg-gray-900 rounded-xl border border-gray-700 p-4 flex items-center justify-center overflow-hidden shadow-2xl">
            {/* Inner Ring Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-64 h-64 rounded-full border-2 border-green-500/30 animate-scale-pulse"></div>
              <div className="absolute w-52 h-52 rounded-full border-2 border-green-500/40 animate-scale-pulse delay-100"></div>
              <div className="absolute w-40 h-40 rounded-full border-2 border-green-500/50 animate-scale-pulse delay-200"></div>
            </div>

            {/* Microphone Icon */}
            <div className="relative z-10 p-6 bg-gray-800/70 rounded-full flex items-center justify-center border border-green-600 shadow-lg animate-fade-in">
              <Mic className="h-16 w-16 text-green-400" />
            </div>

            {/* Sound Wave Representation */}
            <div className="absolute bottom-1/3 left-0 right-0 h-8 bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-70 animate-wave"></div>
            <div className="absolute bottom-1/3 left-0 right-0 h-6 bg-gradient-to-r from-transparent via-green-500/70 to-transparent opacity-70 animate-wave-reverse"></div>

            {/* Small UI elements as seen in the image */}
            <div className="absolute top-4 right-4 text-green-500 text-xs">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-1 animate-ping-slow"></span>
              Live
            </div>
            <div className="absolute bottom-4 left-4 text-gray-500 text-xs">
              001
            </div>
            <div className="absolute top-4 left-4">
              {/* Crosshair icon placeholder */}
              <div className="h-4 w-4 border-l border-t border-gray-600"></div>
            </div>
            <div className="absolute bottom-4 right-4">
              {/* Crosshair icon placeholder */}
              <div className="h-4 w-4 border-r border-b border-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceConsultationSection;
