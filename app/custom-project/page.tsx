"use client";

import React from "react"

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Send,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  MessageCircle,
  Clock,
  Shield,
  Users,
  Zap,
  ChevronRight,
} from "lucide-react";

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a detailed consultation to understand your vision, requirements, and business goals.",
    icon: Lightbulb,
    color: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "Our team creates comprehensive wireframes, prototypes, and design systems tailored to your brand.",
    icon: Palette,
    color: "from-purple-500 to-pink-400",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Expert engineers build your solution using cutting-edge technologies with clean, scalable code.",
    icon: Code2,
    color: "from-emerald-500 to-teal-400",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy your project and provide ongoing maintenance, updates, and dedicated support.",
    icon: Rocket,
    color: "from-orange-500 to-amber-400",
  },
];

// Project types
const projectTypes = [
  "AI / Machine Learning Solution",
  "SaaS Application",
  "Mobile App (iOS/Android)",
  "E-commerce Platform",
  "Web Application",
  "API / Backend System",
  "Enterprise Software",
  "Other",
];

// Budget ranges
const budgetRanges = [
  "< $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
];

// Benefits
const benefits = [
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Efficient development cycles with clear milestones",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous testing and code review processes",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Expert developers assigned to your project",
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    description: "Built for growth with modern architecture",
  },
];

// Scroll reveal hook
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Form component
function ProjectInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Your project inquiry has been received. Our team will review your requirements and get
          back to you within 24 hours.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-xl text-white hover:bg-white/10 transition-colors"
        >
          Return Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
            placeholder="john@company.com"
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">Company / Organization</label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
          placeholder="Acme Inc."
        />
      </div>

      {/* Project Type & Budget */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">Project Type *</label>
          <select
            required
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled className="bg-card text-muted-foreground">
              Select project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type} className="bg-card text-white">
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">Budget Range *</label>
          <select
            required
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled className="bg-card text-muted-foreground">
              Select budget
            </option>
            {budgetRanges.map((range) => (
              <option key={range} value={range} className="bg-card text-white">
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Timeline */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">Expected Timeline</label>
        <input
          type="text"
          value={formData.timeline}
          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
          placeholder="e.g., 3 months, Q2 2024"
        />
      </div>

      {/* Project Description */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">Project Description *</label>
        <textarea
          required
          rows={5}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
          placeholder="Tell us about your project, goals, and any specific requirements..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Submit Inquiry
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      {/* WhatsApp alternative */}
      <div className="text-center">
        <p className="text-muted-foreground text-sm mb-3">Or reach us directly</p>
        <a
          href="https://wa.me/3076924116?text=Hello"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp
        </a>
      </div>
    </form>
  );
}

// Process step component
function ProcessStep({
  step,
  index,
  isVisible,
}: {
  step: (typeof processSteps)[0];
  index: number;
  isVisible: boolean;
}) {
  const Icon = step.icon;

  return (
    <div
      className={`
        relative transition-all duration-700
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Connector line */}
      {index < processSteps.length - 1 && (
        <div className="hidden lg:block absolute top-16 left-1/2 w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
      )}

      <div className="relative z-10 text-center">
        {/* Step number */}
        <div className="text-6xl font-bold text-white/5 mb-4">{step.number}</div>

        {/* Icon */}
        <div
          className={`
            w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4
            bg-gradient-to-br ${step.color}
          `}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function CustomProjectPage() {
  const heroRef = useScrollReveal();
  const processRef = useScrollReveal();
  const formRef = useScrollReveal();
  const benefitsRef = useScrollReveal();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

        <div
          ref={heroRef.ref}
          className={`
            relative z-10 max-w-4xl mx-auto text-center
            transition-all duration-1000
            ${heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">Custom Development</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white">Bring Your</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Vision to Life
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Partner with our expert team to build custom software solutions tailored to your unique
            business needs. From AI applications to enterprise platforms.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div>
              <div className="text-3xl font-bold text-white">200+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background" />

        <div ref={processRef.ref} className="relative z-10 max-w-7xl mx-auto">
          {/* Section header */}
          <div
            className={`
              text-center mb-16 transition-all duration-1000
              ${processRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>

          {/* Process steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
                isVisible={processRef.isVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6 relative">
        <div
          ref={formRef.ref}
          className={`
            max-w-6xl mx-auto
            transition-all duration-1000
            ${formRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let&apos;s Build Something Amazing
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours. We&apos;re
                excited to learn about your project and discuss how we can help.
              </p>

              {/* Benefits */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.title}
                      className="flex items-start gap-4 p-4 rounded-xl bg-card/30 border border-white/5"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right form */}
            <div className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-white/5">
              <ProjectInquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Trust Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 to-transparent" />

        <div
          ref={benefitsRef.ref}
          className={`
            relative z-10 max-w-4xl mx-auto text-center
            transition-all duration-1000
            ${benefitsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-white/10">
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
              &ldquo;Clyro Tech transformed our idea into a powerful AI platform that exceeded our
              expectations. Their expertise and dedication are unmatched.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">John Davidson</div>
                <div className="text-sm text-muted-foreground">CEO, TechStart Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
