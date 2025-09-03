import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Mic,
  FileText,
  Stethoscope,
  Lock,
  Users,
  CheckCircle,
  Code,
  Clock,
  UserCheck,
  Eye,
  Zap,
  Shield,
  File,
  Twitter,
  Linkedin,
  Github,
  SunIcon,
  MoonIcon,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import appoint from "/Appointment booking image.png";
import report from "/public/Report Genration Image.png";
import calling from "/public/Call Feature Image.png";
import robot from "/public/Robots.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Header = ({ isMenuOpen, setIsMenuOpen, theme, toggleTheme }) => {
  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-800/40 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex items-center space-x-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-700/10 border border-green-700/20">
            <span className="text-xl font-bold text-green-500">A</span>
          </div>
          <h1 className="text-xl font-bold text-gray-50">Aarogya Mitra</h1>
        </motion.div>

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
          <button
            onClick={toggleTheme}
            className="h-9 w-9 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5 text-gray-50" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-gray-50" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
          <div className="flex items-center space-x-3">
            <button className="text-sm font-medium text-gray-50 hover:text-green-500 transition-colors">
              Login
            </button>
            <button className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-green-600 hover:shadow-lg">
              Sign Up
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="h-9 w-9 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5 text-gray-50" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-gray-50" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-9 w-9 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-gray-50" />
            ) : (
              <Menu className="h-5 w-5 text-gray-50" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden border-t border-gray-800/40 bg-black/95 backdrop-blur"
          >
            <div className="container px-4 py-4 space-y-4">
              <nav className="flex flex-col space-y-3">
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
              <div className="flex flex-col space-y-3">
                <button className="text-sm font-medium text-gray-50 hover:text-green-500 transition-colors text-left">
                  Login
                </button>
                <button className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-green-600 hover:shadow-lg text-left">
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const StatCard = ({ icon, value, label }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    className=" rounded-xl border border-green-600 p-8 text-center flex flex-col items-center hover:bg-green-800 transition-colors duration-300"
  >
    {icon && <div className="p-2 mb-2">{icon}</div>}
    <span className="text-4xl font-bold text-green-500">{value}</span>
    <span className="text-gray-400 text-sm mt-1">{label}</span>
  </motion.div>
);

const LandingPage2 = () => {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans transition-colors duration-300">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center py-24 px-4 text-center min-h-[calc(100vh-64px)]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content (Left Side) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="md:w-1/2 text-center md:text-left"
          >
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-green-700/20 px-3 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-700/30">
                <span className="mr-1 h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span>
                Revolutionary AI Health Assistant
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight text-white">
              Your Health.
              <span className="text-green-500 block">Orchestrated by AI.</span>
              Your Voice.
              <span className="text-white block">Your Future.</span>
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-gray-400 mb-10">
              Experience seamless,{" "}
              <strong className="text-green-500">
                AI-powered health consultations
              </strong>
              , comprehensive reports, and{" "}
              <strong className="text-green-500">
                smart doctor connections
              </strong>
              . Instantly, intelligently.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
              <button className="inline-flex items-center justify-center rounded-lg bg-green-500 px-6 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-6 py-3 text-base font-medium text-white shadow-md transition-all duration-300 hover:bg-gray-800">
                Watch Demo
              </button>
            </div>
          </motion.div>
          {/* Image (Right Side) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-lg p-1 overflow-hidden rounded-xl shadow-2xl ">
              <img
                src={robot}
                alt="AI Health Assistant Robots"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>
        {/* Statistics Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl pt-16  border-t border-gray-800/50 mt-auto"
        >
          <StatCard value="10k+" label="Happy Patients" />
          <StatCard value="24/7" label="AI Availability" />
          <StatCard value="99%" label="Accuracy Rate" />
        </motion.div>
      </main>

      <hr className="my-16 border-gray-800" />
      {/* Voice Consultation Section */}
      <section className="py-20 px-4" id="voice-consultation">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="md:w-1/2 text-center md:text-left"
          >
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center rounded-full bg-green-700/20 px-3 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-700/30">
                <span className="mr-1 h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span>
                AI Voice Consultation
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight text-white">
              Speak Freely. Be
              <span className="text-white block">Understood.</span>
              <span className="text-green-500 block">Instantly.</span>
            </h2>
            <p className="max-w-xl text-lg text-gray-400 mb-6">
              Our advanced AI listens, comprehends, and responds to your health
              concerns in real time, just like a human, but with unparalleled
              precision and access to vast medical knowledge. Experience a
              natural, private, and judgment-free conversation from the comfort
              of your home.
            </p>
            <p className="max-w-xl text-lg font-medium text-green-500 mb-4">
              No waiting times, no appointments needed. Just pure AI
              intelligence.
            </p>
            <p className="text-xs text-gray-500 italic">
              *Analyzing speech patterns...
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-gray-700 shadow-2xl">
              <img
                src={calling}
                alt="AI Calling Feature"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="my-16 border-gray-800" />
      {/* Intelligent Reports Section */}
      <section className="py-20 px-4" id="reports">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-gray-700 shadow-2xl">
              <img
                src={report}
                alt="AI Generated Report"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="md:w-1/2 text-center md:text-left"
          >
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center rounded-full bg-green-700/20 px-3 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-700/30">
                <FileText className="h-3 w-3 mr-1" />
                Intelligent Reports
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight text-white">
              Understand Your Health.
              <span className="text-green-500 block">
                Instantly Generated. Fully Digital.
              </span>
            </h2>
            <p className="max-w-xl text-lg text-gray-400 mb-6">
              Post-consultation, our AI instantly compiles a comprehensive
              health report and a preliminary prescription based on your
              conversation. Access a clear summary, potential diagnoses, and
              suggested remedies – all in a secure, digital PDF format, ready
              for download or sharing.
            </p>
            <p className="max-w-xl text-lg font-medium text-green-500 mb-4">
              Every detail, meticulously managed by AI, for your clarity.
            </p>
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center rounded-full bg-gray-800/50 px-3 py-1 text-xs font-medium text-gray-400 hover:bg-gray-800">
                <Zap className="h-3 w-3 mr-1" /> AI Analysis
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-800/50 px-3 py-1 text-xs font-medium text-gray-400 hover:bg-gray-800">
                <Clock className="h-3 w-3 mr-1" /> Instant Generation
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="my-16 border-gray-800" />
      {/* Smart Doctor Matching Section */}
      <section className="py-20 px-4" id="doctor-matching">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-gray-700 shadow-2xl">
              <img
                src={appoint}
                alt="AI Doctor Matching"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="md:w-1/2 text-center md:text-left"
          >
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center rounded-full bg-green-700/20 px-3 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-700/30">
                <Stethoscope className="h-3 w-3 mr-1" />
                AI Doctor Matching
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight text-white">
              Smart Referrals. Effortless Booking.
              <span className="text-green-500 block">Managed by AI.</span>
            </h2>
            <p className="max-w-xl text-lg text-gray-400 mb-6">
              If further human intervention is required, our AI intelligently
              analyzes your consultation data to suggest the most relevant
              medical specialists. View their availability, explore their
              profiles, and book appointments directly through the platform.
            </p>
            <p className="max-w-xl text-lg font-medium text-green-500 mb-4">
              Your path to recovery, optimized and streamlined by our
              intelligent system.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-800/50 px-4 py-2 rounded-lg text-center hover:bg-gray-800 transition-colors">
                <span className="block text-lg font-bold text-green-500">
                  98%
                </span>
                <span className="block text-xs text-gray-400 mt-1">
                  Match Accuracy
                </span>
              </div>
              <div className="bg-gray-800/50 px-4 py-2 rounded-lg text-center hover:bg-gray-800 transition-colors">
                <span className="block text-lg font-bold text-green-500">
                  &lt;5min
                </span>
                <span className="block text-xs text-gray-400 mt-1">
                  Booking Time
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="my-16 border-gray-800" />
      {/* How It Works Section */}
      <section className="py-20 px-4 text-center" id="how-it-works">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center rounded-full bg-green-700/20 px-3 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-700/30">
                <Zap className="h-3 w-3 mr-1" />
                AI-Powered Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-tight text-white">
              How Aarogya Mitra <span className="text-green-500">Works</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-12">
              Experience healthcare reimagined through artificial intelligence.
              Every step optimized for your health journey.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["01", "02", "03", "04"].map((step, index) => (
              <motion.div
                key={step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index}
                className=" rounded-xl border border-green-600 p-8 text-left hover:bg-green-800 transition-colors duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="p-2 rounded-lg bg-green-700/10 border border-green-700/20 text-green-500">
                    {step === "01" && <Mic className="h-6 w-6" />}
                    {step === "02" && <Code className="h-6 w-6" />}
                    {step === "03" && <FileText className="h-6 w-6" />}
                    {step === "04" && <Stethoscope className="h-6 w-6" />}
                  </div>
                  <span className="h-8 w-8 rounded-full bg-green-500 text-black font-bold flex items-center justify-center text-sm">
                    {step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-50 mb-2">
                  {step === "01" && "Voice Your Concerns"}
                  {step === "02" && "AI Analysis & Processing"}
                  {step === "03" && "Instant Health Report"}
                  {step === "04" && "Smart Doctor Referral"}
                </h3>
                <p className="text-sm text-gray-400">
                  {step === "01" &&
                    "Simply speak to our AI assistant about your health concerns. No forms, no waiting - just natural conversation."}
                  {step === "02" &&
                    "Our advanced AI analyzes your symptoms, medical history, and concerns using vast medical knowledge-databases."}
                  {step === "03" &&
                    "Receive a comprehensive digital health report with potential diagnoses, treatment suggestions, and prescriptions."}
                  {step === "04" &&
                    "If needed, our AI matches you with the most suitable specialists and facilitates seamless appointment booking."}
                </p>
                <div className="mt-4 text-xs text-gray-500 flex items-center">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 mr-1 animate-pulse"></span>
                  AI Processing...
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-16 bg-green-700/20 rounded-xl border border-green-700/30 p-8 flex flex-col md:flex-row items-center justify-between text-left"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-50 mb-2">
                Ready to Experience AI-Powered Healthcare?
              </h3>
              <p className="text-sm text-gray-400">
                Join thousands who trust Aarogya Mitra for their health needs
              </p>
            </div>
            <button className="mt-6 md:mt-0 rounded-lg bg-green-500 px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl group">
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 inline-block" />
            </button>
          </motion.div>
        </div>
      </section>

      <hr className="my-16 border-gray-800" />
      {/* Trust & Security Section */}
      <section className="py-20 px-4 text-center" id="trust">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center rounded-full bg-green-700/20 px-3 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-700/30">
                <Shield className="h-3 w-3 mr-1" />
                Trust & Security
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-tight text-white">
              Your Health Data is{" "}
              <span className="text-green-500">Secured by AI</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-12">
              Advanced AI doesn't just power our consultations - it also
              protects your privacy with unprecedented security measures and
              zero human intervention.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "AI-Grade Security",
              "Zero Human Access",
              "Secure Data Handling",
              "Transparent AI",
            ].map((card, index) => (
              <motion.div
                key={card}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index}
                className=" rounded-xl border border-green-400 p-8 text-left hover:bg-green-800 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-green-700/10 border border-green-700/20 text-green-500">
                    {card === "AI-Grade Security" && (
                      <Lock className="h-6 w-6" />
                    )}
                    {card === "Zero Human Access" && (
                      <Users className="h-6 w-6" />
                    )}
                    {card === "Secure Data Handling" && (
                      <File className="h-6 w-6" />
                    )}
                    {card === "Transparent AI" && <Eye className="h-6 w-6" />}
                  </div>
                  <span className="text-green-500 text-sm font-medium">
                    {card === "AI-Grade Security" && "99.9% Uptime"}
                    {card === "Zero Human Access" && "100% Private"}
                    {card === "Secure Data Handling" && "HIPAA Compliant"}
                    {card === "Transparent AI" && "Full Transparency"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-50 mb-2">{card}</h3>
                <p className="text-sm text-gray-400">
                  {card === "AI-Grade Security" &&
                    "Enterprise-level encryption and security protocols ensure your health data is protected by the same standards that protect AI systems."}
                  {card === "Zero Human Access" &&
                    "Your private health conversations remain completely confidential. Only AI processes your data - no human ever sees your personal information."}
                  {card === "Secure Data Handling" &&
                    "All health records are encrypted, stored securely, and managed by our AI systems with strict compliance to healthcare data protection standards."}
                  {card === "Transparent AI" &&
                    "Our AI explains its reasoning and recommendations, giving you full transparency into how your health assessments are made."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="my-16 border-gray-800" />
      {/* Certified & Compliant Section */}
      <section className="py-20 px-4 text-center" id="certified">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold text-gray-50 mb-2">
              Certified & Compliant
            </h3>
            <p className="max-w-xl mx-auto text-sm text-gray-400 mb-12">
              Our AI systems meet the highest industry standards for healthcare
              data security
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {["ISO 27001", "HIPAA", "SOC 2", "GDPR"].map((cert, index) => (
              <motion.div
                key={cert}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index}
                className=" rounded-xl border border-green-800 p-8 text-center flex flex-col items-center hover:bg-green-800 transition-colors duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-700/10 border border-green-700/20 text-green-500 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-50 mb-1">{cert}</h4>
                <p className="text-sm text-gray-400">
                  {cert === "ISO 27001" && "Information Security"}
                  {cert === "HIPAA" && "Healthcare Privacy"}
                  {cert === "SOC 2" && "Service Organization Control"}
                  {cert === "GDPR" && "Data Protection"}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto">
            {["256-bit", "0", "24/7"].map((stat, index) => (
              <motion.div
                key={stat}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index}
                className=" rounded-xl border border-green-800 p-8 text-center flex flex-col items-center hover:bg-green-800 transition-colors duration-300"
              >
                {stat === "256-bit" && (
                  <Shield className="h-8 w-8 text-green-500 mb-2" />
                )}
                {stat === "0" && (
                  <UserCheck className="h-8 w-8 text-green-500 mb-2" />
                )}
                {stat === "24/7" && (
                  <Eye className="h-8 w-8 text-green-500 mb-2" />
                )}
                <span className="text-4xl font-bold text-green-500">
                  {stat}
                </span>
                <span className="text-gray-400 text-sm mt-1">
                  {stat === "256-bit" && "AI Encryption Standard"}
                  {stat === "0" && "Human Data Access Points"}
                  {stat === "24/7" && "AI Security Monitoring"}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="my-16 border-gray-800" />
      {/* Footer */}
      <footer className="py-16 px-4 bg-black">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="flex flex-col">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-700/10 border border-green-700/20">
                <span className="text-xl font-bold text-green-500">A</span>
              </div>
              <h1 className="text-xl font-bold text-gray-50">Aarogya Mitra</h1>
            </motion.div>
            <p className="text-sm text-gray-400 mb-4">
              Revolutionizing healthcare with AI-powered consultations and
              instant medical reports. Your trusted health companion, available
              24/7.
            </p>
            <div className="flex space-x-4 text-gray-500">
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-green-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-green-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="hover:text-green-500 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-50 mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#features"
                  className="hover:text-green-500 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-green-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-green-500 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h4 className="text-lg font-bold text-gray-50 mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage2;
