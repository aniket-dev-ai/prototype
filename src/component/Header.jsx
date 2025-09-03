import React from "react";
import { ArrowRight } from "lucide-react"; // Assuming lucide-react is installed for the arrow icon

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header - as provided in previous conversions, adjusting slightly for the screenshot's dark theme */}
      {/* Note: In a real app, this would be a separate Header component */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800/40 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-700/10 border border-green-700/20">
              <span className="text-xl font-bold text-green-500">A</span>
            </div>
            <h1 className="text-xl font-bold text-gray-50">Aarogya Mitra</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <a
                href="#features"
                className="text-sm font-medium text-gray-400 hover:text-green-500 transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-gray-400 hover:text-green-500 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-400 hover:text-green-500 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Theme Toggle placeholder (as per screenshot it's not visible, assuming a dark theme) */}
            {/* Login/Sign Up buttons based on screenshot */}
            <div className="flex items-center space-x-3">
              <button className="text-sm font-medium text-gray-50 hover:text-green-500 transition-colors">
                Login
              </button>
              <button className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-green-600 hover:shadow-lg">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile Menu Button - not visible in screenshot, but keeping placeholder */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile menu button here if needed */}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex flex-col items-center justify-center py-16 px-4 text-center min-h-[calc(100vh-64px)]">
        {" "}
        {/* Adjust height for header */}
        {/* Sub-tagline */}
        <div className="mb-6">
          <span className="inline-flex items-center rounded-full bg-green-700/20 px-3 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-700/30">
            <span className="mr-1 h-1.5 w-1.5 rounded-full bg-green-400"></span>
            Revolutionary AI Health Assistant
          </span>
        </div>
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
          Your Health.
          <span className="text-green-500 block">Orchestrated by AI.</span>
          Your Voice.
          <span className="block">Your Future.</span>
        </h1>
        {/* Description */}
        <p className="max-w-3xl text-lg md:text-xl text-gray-400 mb-10">
          Experience seamless,{" "}
          <strong className="text-green-500">
            AI-powered health consultations
          </strong>
          , comprehensive reports, and{" "}
          <strong className="text-green-500">smart doctor connections</strong>.
          Instantly, intelligently.
        </p>
        {/* Loading/Processing Message */}
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full bg-gray-800/50 px-3 py-1 text-xs font-medium text-gray-400">
            <span className="animate-pulse mr-1 h-1.5 w-1.5 rounded-full bg-gray-500"></span>
            Processing your health journey...
          </span>
        </div>
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
          <button className="inline-flex items-center justify-center rounded-lg bg-green-500 px-6 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl group">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-6 py-3 text-base font-medium text-white shadow-md transition-all duration-300 hover:bg-gray-800 hover:shadow-lg">
            Watch Demo
          </button>
        </div>
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl pt-16 border-t border-gray-800/50 mt-auto">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-green-500">10k+</span>
            <span className="text-gray-400 text-sm mt-1">Happy Patients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-green-500">24/7</span>
            <span className="text-gray-400 text-sm mt-1">AI Availability</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-green-500">99%</span>
            <span className="text-gray-400 text-sm mt-1">Accuracy Rate</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
