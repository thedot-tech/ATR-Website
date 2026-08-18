import React, { useState, useEffect } from 'react';
import ActiveTheoryLogo from './components/ActiveTheoryLogo';
import {
  AudiLogo,
  JayaCoffeeLogo,
  SiemensLogo,
  ShanthiGearsLogo,
  BurgerKingLogo,
  RobotronicLogo,
  ThreeDPrintingLogo,
  SirpavanamLogo,
  MathiMobilesLogo,
  SamsungLogo,
} from './components/ClientLogos';

// Start a Project Modal
function ProjectModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [name, setName] = useState('');
  const [co, setCo] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [need, setNeed] = useState('Branding');
  const [budget, setBudget] = useState('Under ₹2 lakh');
  const [msg, setMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0B14]/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#171327] text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-white/15 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/50 hover:text-white w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#CBF24C]/20 text-[#CBF24C] flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ✓
            </div>
            <h3 className="font-serif-instrument text-3xl font-normal mb-2 text-white">
              We received your message
            </h3>
            <p className="text-sm text-white/70 mb-6 leading-relaxed">
              Thanks {name || 'there'}! A human from our Bengaluru/Coimbatore team will get in touch at <strong className="text-white">{email}</strong> within one working day.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-3.5 rounded-full bg-[#CBF24C] text-[#0D0B14] font-semibold text-sm hover:bg-[#d8fa6d] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <ActiveTheoryLogo theme="light" height={54} className="mb-3" />
              <h3 className="font-serif-instrument text-3xl sm:text-4xl font-normal leading-tight text-white mb-2">
                Start a project
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Tell us about your brand, product launch, or timeline. No slide decks, no pressure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/15 focus:outline-none focus:border-[#CBF24C] text-sm text-white bg-white/5 placeholder:text-white/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    value={co}
                    onChange={(e) => setCo(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/15 focus:outline-none focus:border-[#CBF24C] text-sm text-white bg-white/5 placeholder:text-white/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/15 focus:outline-none focus:border-[#CBF24C] text-sm text-white bg-white/5 placeholder:text-white/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+91"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/15 focus:outline-none focus:border-[#CBF24C] text-sm text-white bg-white/5 placeholder:text-white/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1">
                  What do you need?
                </label>
                <select
                  value={need}
                  onChange={(e) => setNeed(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/15 focus:outline-none focus:border-[#CBF24C] text-sm text-white bg-[#171327]"
                >
                  <option value="Branding">Branding</option>
                  <option value="Web Design & Development">Web Design & Development</option>
                  <option value="Performance Marketing">Performance Marketing</option>
                  <option value="AI Development">AI Development</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1">
                  Budget range
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/15 focus:outline-none focus:border-[#CBF24C] text-sm text-white bg-[#171327]"
                >
                  <option value="Under ₹2 lakh">Under ₹2 lakh</option>
                  <option value="₹2–5 lakh">₹2–5 lakh</option>
                  <option value="₹5–15 lakh">₹5–15 lakh</option>
                  <option value="₹15+ lakh">₹15+ lakh</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1">
                  Tell us about the project
                </label>
                <textarea
                  rows={3}
                  placeholder="What is slowing you down?"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/15 focus:outline-none focus:border-[#CBF24C] text-sm text-white bg-white/5 placeholder:text-white/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#CBF24C] text-[#0D0B14] font-bold text-sm shadow-md hover:bg-[#d8fa6d] transition-all duration-200 cursor-pointer"
              >
                Send it
              </button>
              <p className="text-[11px] text-[#A49DBC] text-center mt-1">
                Keeping the budget dropdown saves everyone a wasted call.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

// ACTIVE THEORY HERO COMPONENT MATCHING IMAGE 2
function ActiveTheoryHero({ onOpenProject }: { onOpenProject: () => void }) {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden flex flex-col justify-between">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4"
        className="absolute inset-0 z-0 w-full h-[130%] object-cover object-top pointer-events-none"
        style={{
          filter: 'none',
        }}
      />

      {/* Hero Content & Floating Navigation Layer */}
      <div className="relative z-10 flex flex-col h-full w-full justify-between">
        {/* Navigation Floating Glass Pill with Ultra-Clean Glassmorphism */}
        <header className="pt-4 md:pt-6 px-4 sm:px-6 w-full max-w-6xl mx-auto flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-xl rounded-[26px] px-6 md:px-8 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.05)] flex items-center justify-between w-full border border-white/70 ring-1 ring-black/5 transition-all duration-300">
            {/* Active Theory Logo */}
            <div className="flex items-center shrink-0 hover:scale-[1.02] transition-transform duration-200">
              <ActiveTheoryLogo theme="dark" height={64} />
            </div>

            {/* Desktop Navigation Links - Larger Font & Perfect Alignment */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9 select-none">
              <span className="text-[15px] lg:text-base font-semibold text-[#1B133C] hover:text-black transition-colors cursor-pointer tracking-tight">
                Work
              </span>
              <span className="group text-[15px] lg:text-base font-semibold text-[#1B133C] hover:text-black transition-colors cursor-pointer flex items-center gap-1.5 tracking-tight">
                What We Do{" "}
                <span className="text-[10px] text-[#1B133C]/70 group-hover:translate-y-0.5 transition-transform duration-200">
                  ▼
                </span>
              </span>
              <span className="group text-[15px] lg:text-base font-semibold text-[#1B133C] hover:text-black transition-colors cursor-pointer flex items-center gap-1.5 tracking-tight">
                Industries{" "}
                <span className="text-[10px] text-[#1B133C]/70 group-hover:translate-y-0.5 transition-transform duration-200">
                  ▼
                </span>
              </span>
              <span className="text-[15px] lg:text-base font-semibold text-[#1B133C] hover:text-black transition-colors cursor-pointer tracking-tight">
                Studio
              </span>
              <span className="text-[15px] lg:text-base font-semibold text-[#1B133C] hover:text-black transition-colors cursor-pointer tracking-tight">
                Contact
              </span>
            </nav>

            {/* Right Status & Action Button */}
            <div className="flex items-center gap-4 sm:gap-6 shrink-0">
              <div className="hidden sm:flex items-center gap-2 bg-[#1B133C]/5 border border-[#1B133C]/10 rounded-full px-3.5 py-1.5 text-xs font-bold text-[#1B133C] tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6ca300] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6ca300]"></span>
                </span>
                <span>BLR / CBE</span>
              </div>
              <button
                onClick={onOpenProject}
                className="rounded-full bg-[#CBF24C] hover:bg-[#d8fa6d] px-6 py-2.5 text-xs sm:text-sm font-bold text-[#0D0B14] shadow-[0_4px_14px_rgba(203,242,76,0.4)] hover:shadow-[0_6px_20px_rgba(203,242,76,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer shrink-0"
              >
                Start a Project
              </button>
            </div>
          </div>
        </header>

        {/* Hero Centered Content matching Image 2 */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 my-auto -mt-20 sm:-mt-36 md:-mt-48 pb-12 max-w-5xl mx-auto">

          {/* Main Headline in Instrument Serif */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] sm:leading-[0.96] tracking-[-0.03em] text-[#1B133C] font-serif-instrument font-medium text-center drop-shadow-[0_2px_10px_rgba(255,255,255,0.6)]">
            Where bold brands<br className="hidden sm:inline" />{" "}
            Meet <span className="text-[#1B133C]">Serious Execution</span>.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-7 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-[#1B133C]/80 font-medium mx-auto font-sans-inter text-center">
            Strategy, branding, digital, performance and AI, connected by one senior team.
          </p>
        </div>

        {/* Bottom subtle marquee header */}
        <div className="pb-3 text-center">

        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('/');
  const [activeFilter, setActiveFilter] = useState('all');
  const [showCookie, setShowCookie] = useState(true);
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  // Form states
  const [nlEmail, setNlEmail] = useState('');
  const [nlMsg, setNlMsg] = useState<{ text: string; error?: boolean } | null>(null);
  const [contactMsg, setContactMsg] = useState<{ text: string; error?: boolean } | null>(null);
  const [contactData, setContactData] = useState({
    name: '',
    co: '',
    email: '',
    phone: '',
    need: 'Branding',
    budget: '₹5–15 lakh',
    msg: '',
  });

  // Animated stat values
  const [counts, setCounts] = useState({
    brands: 0,
    spend: 0,
    visits: 0,
    roas: 0,
    retention: 0,
  });

  // Route titles
  const titles: Record<string, string> = {
    '/': 'Active Theory — Creative & AI Agency | Bengaluru + Coimbatore',
    '/work': 'Our Work — Case Studies | Active Theory',
    '/branding': 'Brand Identity & Rebranding | Active Theory',
    '/web': 'Web Design & Development | Active Theory',
    '/performance': 'Performance Marketing | Active Theory',
    '/ai': 'AI Development & Systems | Active Theory',
    '/real-estate': 'Real Estate Marketing & Automation | Active Theory',
    '/d2c': 'D2C Branding & Scale | Active Theory',
    '/saas': 'SaaS Positioning & Web Platforms | Active Theory',
    '/studio': 'About Active Theory — Bengaluru & Coimbatore Studio',
    '/contact': 'Contact Active Theory — Start a Project',
  };

  useEffect(() => {
    const handleHash = () => {
      let path = (window.location.hash || '#/').replace(/^#/, '');
      if (path === '' || path === '/') path = '/';
      setCurrentRoute(path);
      document.title = titles[path] || 'Active Theory — Creative & AI Agency';
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();

    // Cookie timeout
    const cookieTimer = setTimeout(() => {
      setShowCookie(true);
    }, 1500);

    return () => {
      window.removeEventListener('hashchange', handleHash);
      clearTimeout(cookieTimer);
    };
  }, []);

  // Animate stats when on home
  useEffect(() => {
    if (currentRoute === '/') {
      let start: number | null = null;
      const duration = 1500;
      const targetBrands = 45;
      const targetSpend = 38;
      const targetVisits = 6400;
      const targetRoas = 4.2;
      const targetRetention = 91;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);

        setCounts({
          brands: Math.round(targetBrands * ease),
          spend: Math.round(targetSpend * ease),
          visits: Math.round(targetVisits * ease),
          roas: parseFloat((targetRoas * ease).toFixed(1)),
          retention: Math.round(targetRetention * ease),
        });

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }, [currentRoute]);

  const handleNlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nlEmail.includes('@')) {
      setNlMsg({ text: 'That email address is missing an @. Check it and try again.', error: true });
    } else {
      setNlMsg({ text: 'You are in. First update lands Thursday.', error: false });
      setNlEmail('');
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactData.email.includes('@')) {
      setContactMsg({ text: 'We need a working email address to reply to. Add one and send again.', error: true });
    } else {
      setContactMsg({ text: 'Got it. We will be in touch within one working day — usually sooner.', error: false });
      setContactData({ name: '', co: '', email: '', phone: '', need: 'Branding', budget: '₹5–15 lakh', msg: '' });
    }
  };

  // Work portfolio items
  const workItems = [
    { cat: 'branding real-estate', title: 'Developer launch — Brand & Positioning', result: 'Enquiries roughly tripled in the first quarter after launch.', imgClass: 'wi-1' },
    { cat: 'performance real-estate', title: 'Project launch performance campaigns', result: 'Cost per qualified site visit fell by more than half across the phase.', imgClass: 'wi-4' },
    { cat: 'branding d2c', title: 'D2C Consumer Label — Identity & Packaging', result: 'From contract manufacturer to shelf brand in one quarter.', imgClass: 'wi-2' },
    { cat: 'web d2c performance', title: 'High-Converting Storefront Rebuild', result: 'Conversion rate up 42%, return on ad spend up, same media budget.', imgClass: 'wi-5' },
    { cat: 'web saas', title: 'SaaS Platform — Positioning & Marketing Site', result: 'Sales cycle shortened once the category was clear.', imgClass: 'wi-3' },
    { cat: 'ai real-estate', title: 'Automated Lead Qualification Agent', result: 'Response time reduced from 9 hours to under 45 seconds, round the clock.', imgClass: 'wi-6' },
  ];

  const filteredWork = workItems.filter(
    (item) => activeFilter === 'all' || item.cat.includes(activeFilter)
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1B133C]">
      {/* START A PROJECT MODAL */}
      <ProjectModal isOpen={isProjectOpen} onClose={() => setIsProjectOpen(false)} />

      {/* SUBPAGE HEADER (Rendered only on non-home pages) */}
      {currentRoute !== '/' && (
        <header className="sticky top-0 z-40 w-full bg-[#171327]/95 backdrop-blur-md border-b border-white/10 py-3.5 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <a href="#/" className="flex items-center gap-2.5 transition-opacity hover:opacity-85">
              <ActiveTheoryLogo theme="light" height={52} />
            </a>

            <nav className="hidden md:flex items-center gap-7">
              <a href="#/" className="text-sm font-medium text-white/75 hover:text-white transition-colors">
                Home
              </a>
              <a href="#/work" className={`text-sm font-medium transition-colors ${currentRoute === '/work' ? 'text-[#CBF24C] font-semibold' : 'text-white/75 hover:text-white'}`}>
                Work
              </a>
              <a href="#/branding" className={`text-sm font-medium transition-colors ${currentRoute === '/branding' ? 'text-[#CBF24C] font-semibold' : 'text-white/75 hover:text-white'}`}>
                Branding
              </a>
              <a href="#/web" className={`text-sm font-medium transition-colors ${currentRoute === '/web' ? 'text-[#CBF24C] font-semibold' : 'text-white/75 hover:text-white'}`}>
                Web
              </a>
              <a href="#/performance" className={`text-sm font-medium transition-colors ${currentRoute === '/performance' ? 'text-[#CBF24C] font-semibold' : 'text-white/75 hover:text-white'}`}>
                Performance
              </a>
              <a href="#/ai" className={`text-sm font-medium transition-colors ${currentRoute === '/ai' ? 'text-[#CBF24C] font-semibold' : 'text-white/75 hover:text-white'}`}>
                AI
              </a>
              <a href="#/studio" className={`text-sm font-medium transition-colors ${currentRoute === '/studio' ? 'text-[#CBF24C] font-semibold' : 'text-white/75 hover:text-white'}`}>
                Studio
              </a>
              <a href="#/contact" className={`text-sm font-medium transition-colors ${currentRoute === '/contact' ? 'text-[#CBF24C] font-semibold' : 'text-white/75 hover:text-white'}`}>
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CBF24C]"></span>
                <span>BLR / CBE</span>
              </div>
              <button
                onClick={() => setIsProjectOpen(true)}
                className="text-xs sm:text-sm font-semibold bg-[#CBF24C] text-[#0D0B14] px-4 py-2 rounded-full shadow-sm hover:bg-[#d8fa6d] transition-colors cursor-pointer"
              >
                Start a Project
              </button>
            </div>
          </div>
        </header>
      )}

      <main id="main" className="flex-1">
        {/* ==========================================================
            HOME PAGE (Route: '/')
            ========================================================== */}
        {currentRoute === '/' && (
          <div>
            {/* HERO SECTION MATCHING IMAGE 2 */}
            <ActiveTheoryHero onOpenProject={() => setIsProjectOpen(true)} />

            {/* MARQUEE LOGO STRIP WITH CLIENT PNG LOGOS ON LIGHT BACKGROUND */}
            <section className="bg-[#F4F4F7] border-y border-black/10 py-6 overflow-hidden select-none">
              <div className="strip">
                <div className="marquee gap-6 items-center">
                  {/* Set 1 */}
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]">
                    <AudiLogo className="h-7 w-auto text-black" />
                  </div>
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]">
                    <SiemensLogo className="h-9 w-auto" />
                  </div>
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]">
                    <ShanthiGearsLogo className="h-10 w-auto" />
                  </div>
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]">
                    <BurgerKingLogo className="h-11 w-auto" />
                  </div>
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]">
                    <JayaCoffeeLogo className="h-10 w-auto" />
                  </div>
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]">
                    <RobotronicLogo className="h-11 w-auto" />
                  </div>
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]">
                    <ThreeDPrintingLogo className="h-11 w-auto" />
                  </div>
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]">
                    <SirpavanamLogo className="h-11 w-auto" />
                  </div>
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]">
                    <MathiMobilesLogo className="h-11 w-auto" />
                  </div>

                  {/* Set 2 (Identical Duplicate for Infinite Seamless Marquee Loop) */}
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]" aria-hidden="true">
                    <AudiLogo className="h-7 w-auto text-black" />
                  </div>
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]" aria-hidden="true">
                    <SiemensLogo className="h-9 w-auto" />
                  </div>
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]" aria-hidden="true">
                    <ShanthiGearsLogo className="h-10 w-auto" />
                  </div>
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]" aria-hidden="true">
                    <BurgerKingLogo className="h-11 w-auto" />
                  </div>
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]" aria-hidden="true">
                    <JayaCoffeeLogo className="h-10 w-auto" />
                  </div>
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]" aria-hidden="true">
                    <RobotronicLogo className="h-11 w-auto" />
                  </div>
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]" aria-hidden="true">
                    <ThreeDPrintingLogo className="h-11 w-auto" />
                  </div>
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]" aria-hidden="true">
                    <SirpavanamLogo className="h-11 w-auto" />
                  </div>
                  <div className="logo-slot px-6 h-18 bg-white rounded-2xl border border-black/10 flex items-center justify-center shadow-sm shrink-0 min-w-[160px] max-w-[220px]" aria-hidden="true">
                    <MathiMobilesLogo className="h-11 w-auto" />
                  </div>
                </div>
              </div>
            </section>

            {/* POSITIONING — SIGNATURE SPLIT */}
            <section className="sec bg-ink">
              <div className="wrap">
                <div>
                  <p className="eyebrow eyebrow-lime">Two cities. One standard.</p>
                  <h2 className="h2" style={{ maxWidth: '16ch' }}>
                    We speak startup and shop floor.
                  </h2>
                  <p className="lead mute-d measure">
                    Most agencies are fluent in one or the other. We work in both — which is why we can make a manufacturer look world-class and make a seed-stage product feel established. Same craft, different accent.
                  </p>
                </div>

                <div className="split">
                  <article className="panel panel-blr">
                    <span className="panel-num" aria-hidden="true">01</span>
                    <h3 className="panel-city">Bengaluru</h3>
                    <p className="panel-tag">Speed</p>
                    <p className="panel-txt">
                      SaaS launches, D2C drops, campaigns that go live on a Tuesday and get judged by Friday. It keeps us fast and keeps us current.
                    </p>
                  </article>
                  <div className="seam" aria-hidden="true">
                    <span>One standard</span>
                  </div>
                  <article className="panel panel-cbe">
                    <span className="panel-num" aria-hidden="true">02</span>
                    <h3 className="panel-city">Coimbatore</h3>
                    <p className="panel-tag">Substance</p>
                    <p className="panel-txt">
                      Engineering firms exporting to twelve countries, textile businesses in their second generation, and developers selling out phases without a website worth the name.
                    </p>
                  </article>
                </div>

                <div className="btn-row" style={{ marginTop: 32 }}>

                </div>
              </div>
            </section>

            {/* STATS */}
            <section className="sec bg-ink-2">
              <div className="wrap">
                <p className="eyebrow eyebrow-lime">The receipts</p>
                <h2 className="h2" style={{ maxWidth: '20ch' }}>
                  Numbers we are happy to be held to.
                </h2>
                <div className="stats">
                  <div className="stat">
                    <div className="stat-n">{counts.brands}+</div>
                    <p className="stat-l">Brands built or rebuilt</p>
                    <p className="stat-w">Volume signal</p>
                  </div>
                  <div className="stat">
                    <div className="stat-n">₹{counts.spend} Cr</div>
                    <p className="stat-l">Ad spend managed</p>
                    <p className="stat-w">The number that qualifies you for real estate budgets</p>
                  </div>
                  <div className="stat">
                    <div className="stat-n">{counts.visits.toLocaleString()}+</div>
                    <p className="stat-l">Qualified site visits driven</p>
                    <p className="stat-w">Developers buy site visits, not leads</p>
                  </div>
                  <div className="stat">
                    <div className="stat-n">{counts.roas}x</div>
                    <p className="stat-l">Average return on ad spend, D2C</p>
                    <p className="stat-w">The only D2C metric a founder cares about</p>
                  </div>
                  <div className="stat">
                    <div className="stat-n">{counts.retention}%</div>
                    <p className="stat-l">Clients still with us after year one</p>
                    <p className="stat-w">Almost nobody publishes this one</p>
                  </div>
                </div>
                <p className="stat-w" style={{ marginTop: 26, maxWidth: '60ch' }}>
                  Transparent agency figures. Honest results beat rounded-up fiction.
                </p>
              </div>
            </section>

            {/* SERVICES */}
            <section className="sec bg-paper" id="services-section">
              <div className="wrap">
                <div style={{ maxWidth: '60ch' }}>
                  <p className="eyebrow eyebrow-violet">What we do</p>
                  <h2 className="h2">Four things. Done properly.</h2>
                  <p className="lead mute-l">
                    We have turned down more service lines than we have added. Depth beats a long menu — and it is the reason our performance work is creative-led and our creative work is data-led.
                  </p>
                </div>

                <div className="grid-2x2" style={{ marginTop: 44 }}>
                  <article className="card card-t-violet">
                    <div className="card-idx">01 / Idea to Product</div>
                    <h3 className="h3">From Idea to Product</h3>
                    <p className="card-p">
                      Turning early stage ideas into real, market ready products. We help shape the concept, define the experience, build the product, and create everything needed to take it from an idea on paper to something people can actually use.
                    </p>
                    <div className="card-foot">

                    </div>
                  </article>

                  <article className="card card-t-lime">
                    <div className="card-idx">02 / AI</div>
                    <h3 className="h3">AI Development</h3>
                    <p className="card-p">
                      Lead qualification agents, WhatsApp assistants that respond in nine seconds instead of nine hours, internal tools, and AI search visibility. We build the systems, not slide decks about them.
                    </p>
                    <div className="card-foot">

                    </div>
                  </article>

                  <article className="card card-t-coral">
                    <div className="card-idx">03 / Performance</div>
                    <h3 className="h3">Performance Marketing</h3>
                    <p className="card-p">
                      Meta, Google, and LinkedIn run against pipeline, not impressions. Creative and media sit in the same team, which is the only reason performance creative ever gets good. You see the account, the spend, and the losses.
                    </p>
                    <div className="card-foot">

                    </div>
                  </article>

                  <article className="card card-t-sky">
                    <div className="card-idx">04 / Web</div>
                    <h3 className="h3">Web Design & Development</h3>
                    <p className="card-p">
                      Sites that load fast, read clearly, and turn visitors into enquiries. Design, copy, build, and handover — including CMS training, so you are not emailing us to change a phone number. Project microsites, D2C storefronts, and SaaS marketing sites.
                    </p>
                    <div className="card-foot">

                    </div>
                  </article>
                </div>


              </div>
            </section>

            {/* VERTICALS */}
            <section className="sec bg-ink" id="verticals-section">
              <div className="wrap">
                <div style={{ maxWidth: '60ch' }}>
                  <p className="eyebrow eyebrow-lime">Where we go deep</p>
                  <h2 className="h2">Three verticals where we have already paid the tuition.</h2>
                  <p className="lead mute-d">
                    Every industry has its own rhythm, its own vocabulary, and its own failure modes. These three are where we do not have to learn on your dime.
                  </p>
                </div>

                <div className="grid-3" style={{ marginTop: 44 }}>
                  <article className="vcard">
                    <div className="vcard-top vcard-re" data-mark="RE"></div>
                    <div className="vcard-body">
                      <h3 className="h3">Real Estate</h3>
                      <p className="card-p">
                        Launches measured in qualified site visits, not vanity leads. 3D visualisers, project microsites, performance creative that sells inventory without discounting, and post-enquiry AI agents that follow up before the lead goes cold.
                      </p>
                      <div className="card-foot">

                      </div>
                    </div>
                  </article>

                  <article className="vcard">
                    <div className="vcard-top vcard-d2c" data-mark="D2C"></div>
                    <div className="vcard-body">
                      <h3 className="h3">D2C & Consumer Brands</h3>
                      <p className="card-p">
                        Packaging that earns shelf space and unboxing videos. Always-on creative pipelines that keep Meta fatigue away. ROAS that lets you scale ad spend without losing money on unit economics.
                      </p>
                      <div className="card-foot">

                      </div>
                    </div>
                  </article>

                  <article className="vcard">
                    <div className="vcard-saas vcard-top" data-mark="SaaS"></div>
                    <div className="vcard-body">
                      <h3 className="h3">SaaS & Technology</h3>
                      <p className="card-p">
                        Positioning that makes clear what you actually do in five seconds. Marketing sites built for search and conversions. Pipeline generation that speaks to developers, buyers, or CFOs with the right vocabulary.
                      </p>
                      <div className="card-foot">

                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>

            {/* TESTIMONIALS / QUOTES */}
            <section className="sec bg-paper">
              <div className="wrap">
                <div style={{ maxWidth: '60ch' }}>
                  <p className="eyebrow eyebrow-violet">Client words</p>
                  <h2 className="h2">What founders and CMOs say about working with Active Theory.</h2>
                </div>

                <div className="grid-3 items-stretch" style={{ marginTop: 44 }}>
                  <article className="quote h-full flex flex-col justify-between p-6 lg:p-8 bg-white rounded-3xl border border-black/10 shadow-sm">
                    <div className="flex-1 flex flex-col justify-between">
                      <p className="quote-t text-[15px] leading-relaxed text-black/80 font-medium mb-6">
                        Active Theory has helped us achieve excellent sales outcomes for our e-commerce platform, Sirpavanam. They are a highly experienced team who focus on finding the right solutions and delivering result-oriented outcomes. We truly appreciate their approach and commitment.
                      </p>
                    </div>
                    <div className="mt-auto pt-5 border-t border-black/10 flex items-center justify-between gap-4">
                      <div className="quote-who">
                        <div className="quote-n font-bold text-black text-sm">Sirpavanam</div>
                        <div className="quote-r text-xs text-black/60 font-medium mt-0.5">E-Commerce Platform</div>
                      </div>
                      <SirpavanamLogo className="h-10 lg:h-12 w-auto max-w-[140px] object-contain shrink-0" />
                    </div>
                  </article>
                  <article className="quote h-full flex flex-col justify-between p-6 lg:p-8 bg-white rounded-3xl border border-black/10 shadow-sm">
                    <div className="flex-1 flex flex-col justify-between">
                      <p className="quote-t text-[15px] leading-relaxed text-black/80 font-medium mb-6">
                        Robotronic has been partnering with Active Theory for over 4 years, and we are extremely happy with the association. Their coordination, timely execution, and result-oriented solutions are something we are truly grateful for.
                      </p>
                    </div>
                    <div className="mt-auto pt-5 border-t border-black/10 flex items-center justify-between gap-4">
                      <div className="quote-who">
                        <div className="quote-n font-bold text-black text-sm">Robotronic</div>
                        <div className="quote-r text-xs text-black/60 font-medium mt-0.5">Technology Partner</div>
                      </div>
                      <RobotronicLogo className="h-10 lg:h-12 w-auto max-w-[140px] object-contain shrink-0" />
                    </div>
                  </article>
                  <article className="quote h-full flex flex-col justify-between p-6 lg:p-8 bg-white rounded-3xl border border-black/10 shadow-sm">
                    <div className="flex-1 flex flex-col justify-between">
                      <p className="quote-t text-[15px] leading-relaxed text-black/80 font-medium mb-6">
                        Active Theory helped us create a unique and special brand identity for our exclusive Samsung showroom. The overall branding beautifully represented the next-level vision we had for our company. We are very happy with the outcome and their creative approach.
                      </p>
                    </div>
                    <div className="mt-auto pt-5 border-t border-black/10 flex items-center justify-between gap-4">
                      <div className="quote-who">
                        <div className="quote-n font-bold text-black text-sm">Exclusive Samsung Showroom</div>
                        <div className="quote-r text-xs text-black/60 font-medium mt-0.5">Retail & Brand Identity</div>
                      </div>
                      <MathiMobilesLogo className="h-10 lg:h-12 w-auto max-w-[140px] object-contain shrink-0" />
                    </div>
                  </article>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="sec bg-ink" id="faq-section">
              <div className="wrap-narrow">
                <div>
                  <p className="eyebrow eyebrow-lime">Before you ask</p>
                  <h2 className="h2">Questions people actually ask before hiring us.</h2>
                </div>
                <div className="faq">
                  <details open>
                    <summary>How do you work across Bengaluru and Coimbatore?</summary>
                    <p className="faq-a">
                      Bengaluru is our speed hub — SaaS, D2C, fast-moving campaigns. Coimbatore is our industrial and scale hub — engineering, manufacturing, real estate. Both teams share the same creative directors and tech leads. You get the speed of Bangalore and the grounded pragmatism of Coimbatore.
                    </p>
                  </details>
                  <details>
                    <summary>Do you do one-off projects or only retainers?</summary>
                    <p className="faq-a">
                      Both. Brand identity and website redesigns are usually fixed-scope projects (6–12 weeks). Performance marketing and AI development work best on monthly retainers with clear quarterly KPIs. Many clients start with a project and move to a retainer once we have earned the trust.
                    </p>
                  </details>
                  <details>
                    <summary>What is your pricing model?</summary>
                    <p className="faq-a">
                      Transparent, milestone-based for projects, and flat monthly fees plus performance incentives for retainers. No hidden markups on media spend — you own the ad accounts and see every rupee. We send detailed scopes before anyone signs anything.
                    </p>
                  </details>
                  <details>
                    <summary>How involved does our team need to be?</summary>
                    <p className="faq-a">
                      Heavily involved in the first two weeks (we need your brain on the business), then we take the heavy lifting. Weekly 30-minute syncs, shared Slack/WhatsApp channels for quick questions, and monthly reviews. We respect your calendar.
                    </p>
                  </details>
                  <details>
                    <summary>What if we are not happy with the creative direction?</summary>
                    <p className="faq-a">
                      We include two structured revision rounds in every project phase. Because we share work in progress rather than doing "grand reveal" presentations, we have never had a client surprised by the final direction. If something is off, we fix it.
                    </p>
                  </details>
                </div>
              </div>
            </section>

            {/* NEWSLETTER */}
            <section className="sec-tight bg-ink-2">
              <div className="wrap">
                <div className="grid-2" style={{ alignItems: 'center', gap: 40 }}>
                  <div>
                    <p className="eyebrow eyebrow-lime">Smarter in five minutes a week</p>
                    <h2 className="h3" style={{ fontSize: 'clamp(1.6rem,2.8vw,2.2rem)' }}>
                      Every Tuesday: one teardown, one AI tool, one hard lesson.
                    </h2>
                    <p className="card-p mute-d" style={{ margin: 0, maxWidth: '52ch' }}>
                      Breakdowns of high-converting Indian brands, AI workflows you can actually use, and the stuff agencies usually keep to themselves.
                    </p>
                  </div>
                  <div>
                    <form onSubmit={handleNlSubmit} className="nl">
                      <input
                        type="email"
                        placeholder="Your work email"
                        value={nlEmail}
                        onChange={(e) => setNlEmail(e.target.value)}
                        aria-label="Your email"
                      />
                      <button type="submit" className="btn btn-lime">
                        Subscribe
                      </button>
                    </form>
                    {nlMsg && (
                      <p className="msg show" style={{ color: nlMsg.error ? 'var(--coral)' : 'var(--lime)' }}>
                        {nlMsg.text}
                      </p>
                    )}
                    <p className="stat-w" style={{ marginTop: 12 }}>
                      No spam. No agency chest-thumping. Unsubscribe in one click.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CLOSING CTA */}
            <section className="sec bg-paper">
              <div className="wrap">
                <div className="cta-band bg-lime">
                  <p className="eyebrow" style={{ color: 'var(--ink)', opacity: 0.7 }}>
                    Ready when you are
                  </p>
                  <h2 className="h2">Let's find out if we are a fit.</h2>
                  <p className="cta-sub">
                    A 30-minute call with a senior director. We ask about your goals, share relevant case studies, and give you an honest take on whether we can move the needle. No slide decks, no pressure.
                  </p>
                  <div className="btn-row" style={{ justifyContent: 'center' }}>
                    <button onClick={() => setIsProjectOpen(true)} className="btn btn-ink cursor-pointer">
                      Start a Project
                    </button>
                  </div>
                  <p className="cta-foot">
                    Average response time: under 4 hours on business days. Bengaluru and Coimbatore time.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==========================================================
            WORK PAGE (Route: '/work')
            ========================================================== */}
        {currentRoute === '/work' && (
          <div>
            <section className="phero bg-ink">
              <span className="hero-glow g1" aria-hidden="true"></span>
              <div className="wrap hero-in">
                <p className="crumb">Active Theory / Work</p>
                <h1 className="display">The work.</h1>
                <p className="hero-sub">Featured projects across branding, high-converting platforms, and AI systems.</p>
              </div>
            </section>

            <section className="sec-tight bg-ink" style={{ paddingTop: 0 }}>
              <div className="wrap">
                <div className="filters" role="group" aria-label="Filter work">
                  {['all', 'branding', 'web', 'performance', 'ai', 'real-estate', 'd2c', 'saas'].map((f) => (
                    <button
                      key={f}
                      className={`chip ${activeFilter === f ? 'on' : ''}`}
                      onClick={() => setActiveFilter(f)}
                    >
                      {f.charAt(0).toUpperCase() + f.slice(1).replace('-', ' ')}
                    </button>
                  ))}
                </div>

                <div className="work-grid">
                  {filteredWork.map((item, idx) => (
                    <article key={idx} className="wcard">
                      <div className={`wcard-img ${item.imgClass}`}>PROJECT ASSET</div>
                      <div className="wcard-b">
                        <p className="wcard-m">{item.cat.split(' ').join(' · ').toUpperCase()}</p>
                        <h3 className="h4">{item.title}</h3>
                        <p className="wcard-r">{item.result}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="sec bg-paper">
              <div className="wrap">
                <div className="cta-band bg-lime">
                  <h2 className="h2">Want to build something similar?</h2>
                  <p className="cta-sub">
                    Let's talk through your goals, scope, and metrics over a 30-minute introductory call.
                  </p>
                  <div className="btn-row" style={{ justifyContent: 'center' }}>
                    <button onClick={() => setIsProjectOpen(true)} className="btn btn-ink cursor-pointer">
                      Start a Project
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==========================================================
            BRANDING PAGE (Route: '/branding')
            ========================================================== */}
        {currentRoute === '/branding' && (
          <div>
            <section className="phero bg-ink">
              <span className="hero-glow g1" aria-hidden="true"></span>
              <div className="wrap hero-in">
                <p className="crumb"><a href="#/">Active Theory</a> / What We Do / Brand Identity</p>
                <h1 className="display">A brand people can describe without looking it up.</h1>
                <p className="hero-sub">Naming, identity systems, voice, and guidelines built so your team can actually execute.</p>
                <div className="btn-row">
                  <button onClick={() => setIsProjectOpen(true)} className="btn btn-lime cursor-pointer">Start a Project</button>
                  <a href="#/work" className="btn btn-line-d">See the Work</a>
                </div>
              </div>
            </section>

            <section className="sec bg-ink-2">
              <div className="wrap">
                <div className="grid-2" style={{ gap: 48 }}>
                  <div>
                    <p className="eyebrow eyebrow-coral">The problem</p>
                    <div className="problem">
                      <p className="body-p">Your logo was made in an afternoon. Your deck, website, and social channels look like three unrelated companies.</p>
                      <p className="body-p">It works fine until you stand next to a competitor with half your quality and twice your polish.</p>
                    </div>
                  </div>
                  <div>
                    <p className="eyebrow eyebrow-lime">What is included</p>
                    <ul className="tick tick-d">
                      <li>Brand strategy — positioning, audience, messaging hierarchy</li>
                      <li>Logo system — primary, secondary, and badge variants</li>
                      <li>Typography, palette, grid systems, and icon sets</li>
                      <li>Tone of voice with concrete before-and-after guidelines</li>
                      <li>Complete design tokens and live design system web page</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==========================================================
            WEB PAGE (Route: '/web')
            ========================================================== */}
        {currentRoute === '/web' && (
          <div>
            <section className="phero bg-ink">
              <span className="hero-glow g1" aria-hidden="true"></span>
              <div className="wrap hero-in">
                <p className="crumb"><a href="#/">Active Theory</a> / What We Do / Web Design & Development</p>
                <h1 className="display">A website that sells while you sleep.</h1>
                <p className="hero-sub">Fast, clear, and built to convert. Designed, written, developed, and handed over cleanly.</p>
                <div className="btn-row">
                  <button onClick={() => setIsProjectOpen(true)} className="btn btn-lime cursor-pointer">Start a Project</button>
                  <a href="#/work" className="btn btn-line-d">See the Work</a>
                </div>
              </div>
            </section>

            <section className="sec bg-ink-2">
              <div className="wrap">
                <div className="grid-2" style={{ gap: 48 }}>
                  <div>
                    <p className="eyebrow eyebrow-coral">The problem</p>
                    <div className="problem">
                      <p className="body-p">Your site takes seven seconds to load on mobile and your sales team feels hesitant to send the link.</p>
                    </div>
                  </div>
                  <div>
                    <p className="eyebrow eyebrow-lime">What is included</p>
                    <ul className="tick tick-d">
                      <li>High-conversion UX architecture and modern responsive design</li>
                      <li>Full copywriting aligned with your product positioning</li>
                      <li>Sub-3-second load times passing all Core Web Vitals</li>
                      <li>CMS integration so your team can edit without developer overhead</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==========================================================
            PERFORMANCE PAGE (Route: '/performance')
            ========================================================== */}
        {currentRoute === '/performance' && (
          <div>
            <section className="phero bg-ink">
              <span className="hero-glow g1" aria-hidden="true"></span>
              <div className="wrap hero-in">
                <p className="crumb"><a href="#/">Active Theory</a> / What We Do / Performance Marketing</p>
                <h1 className="display">Ads judged by revenue, not reach.</h1>
                <p className="hero-sub">Meta, Google, and LinkedIn run against pipeline. Full transparency and creative in one team.</p>
                <div className="btn-row">
                  <button onClick={() => setIsProjectOpen(true)} className="btn btn-lime cursor-pointer">Start a Project</button>
                  <a href="#/work" className="btn btn-line-d">See the Work</a>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==========================================================
            AI PAGE (Route: '/ai')
            ========================================================== */}
        {currentRoute === '/ai' && (
          <div>
            <section className="phero bg-ink">
              <span className="hero-glow g1" aria-hidden="true"></span>
              <span className="hero-glow g2" aria-hidden="true"></span>
              <div className="wrap hero-in">
                <p className="crumb"><a href="#/">Active Theory</a> / What We Do / AI Development</p>
                <h1 className="display">AI that does a job.<br />Not AI that does a demo.</h1>
                <p className="hero-sub">Lead qualification agents, WhatsApp assistants, and autonomous workflow automations.</p>
                <div className="btn-row">
                  <button onClick={() => setIsProjectOpen(true)} className="btn btn-lime cursor-pointer">Start a Project</button>
                  <a href="#/work" className="btn btn-line-d">See the Work</a>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==========================================================
            INDUSTRIES (Real Estate, D2C, SaaS)
            ========================================================== */}
        {(currentRoute === '/real-estate' || currentRoute === '/d2c' || currentRoute === '/saas') && (
          <div>
            <section className="phero bg-ink">
              <span className="hero-glow g1" aria-hidden="true"></span>
              <div className="wrap hero-in">
                <p className="crumb"><a href="#/">Active Theory</a> / Industries / {currentRoute.replace('/', '').toUpperCase()}</p>
                <h1 className="display">
                  {currentRoute === '/real-estate' && 'We fill sales galleries.'}
                  {currentRoute === '/d2c' && 'Turn contract manufacturing into a flagship D2C brand.'}
                  {currentRoute === '/saas' && 'Your product is better than your pitch.'}
                </h1>
                <p className="hero-sub">Dedicated capabilities tailored to your market, buyers, and operational requirements.</p>
                <div className="btn-row">
                  <button onClick={() => setIsProjectOpen(true)} className="btn btn-lime cursor-pointer">Start a Project</button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==========================================================
            STUDIO PAGE (Route: '/studio')
            ========================================================== */}
        {currentRoute === '/studio' && (
          <div>
            <section className="phero bg-ink">
              <span className="hero-glow g1" aria-hidden="true"></span>
              <div className="wrap hero-in">
                <p className="crumb"><a href="#/">Active Theory</a> / Studio</p>
                <h1 className="display">A creative & AI agency built for execution.</h1>
                <p className="hero-sub">Founded to bridge the gap between world-class brand craft, high-speed engineering, and intelligent AI automation.</p>
              </div>
            </section>

            <section className="sec bg-paper">
              <div className="wrap">
                <div style={{ maxWidth: '50ch' }}>
                  <p className="eyebrow eyebrow-violet">What we believe</p>
                  <h2 className="h2">Five principles we live by.</h2>
                </div>
                <div style={{ marginTop: 40 }}>
                  <div className="belief">
                    <div className="belief-h">
                      <span className="belief-n">01</span>
                      <div>
                        <h3 className="h4">Clarity beats clever</h3>
                        <p className="body-p mute-l" style={{ margin: 0 }}>
                          If a customer cannot understand what you do in 5 seconds, they will leave.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="belief">
                    <div className="belief-h">
                      <span className="belief-n">02</span>
                      <div>
                        <h3 className="h4">Craft is non-negotiable</h3>
                        <p className="body-p mute-l" style={{ margin: 0 }}>
                          Visual polish, typographic precision, and rock-solid performance signal care across every layer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="belief">
                    <div className="belief-h">
                      <span className="belief-n">03</span>
                      <div>
                        <h3 className="h4">Build it, don't just recommend it</h3>
                        <p className="body-p mute-l" style={{ margin: 0 }}>
                          We ship working code, reliable agents, and measurable pipeline over static slide decks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==========================================================
            CONTACT PAGE (Route: '/contact')
            ========================================================== */}
        {currentRoute === '/contact' && (
          <div>
            <section className="phero bg-ink">
              <span className="hero-glow g1" aria-hidden="true"></span>
              <div className="wrap hero-in">
                <p className="crumb"><a href="#/">ACTIVE THEORY</a> / CONTACT</p>
                <h1 className="display font-bold">Tell us what is not working.</h1>
                <p className="hero-sub text-white/70">Fill this in, or just email. Either way you will hear from a human within one working day.</p>
              </div>
            </section>

            <section className="sec-tight bg-ink" style={{ paddingTop: 0 }}>
              <div className="wrap">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  {/* Left Form Column */}
                  <div className="lg:col-span-7">
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="f-name" className="block text-xs font-semibold text-white/80 mb-1.5">Name</label>
                          <input
                            id="f-name"
                            type="text"
                            placeholder="Your name"
                            value={contactData.name}
                            onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#CBF24C]"
                          />
                        </div>
                        <div>
                          <label htmlFor="f-co" className="block text-xs font-semibold text-white/80 mb-1.5">Company</label>
                          <input
                            id="f-co"
                            type="text"
                            placeholder="Company name"
                            value={contactData.co}
                            onChange={(e) => setContactData({ ...contactData, co: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#CBF24C]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="f-email" className="block text-xs font-semibold text-white/80 mb-1.5">Email</label>
                          <input
                            id="f-email"
                            type="email"
                            placeholder="you@company.com"
                            required
                            value={contactData.email}
                            onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#CBF24C]"
                          />
                        </div>
                        <div>
                          <label htmlFor="f-phone" className="block text-xs font-semibold text-white/80 mb-1.5">Phone</label>
                          <input
                            id="f-phone"
                            type="tel"
                            placeholder="+91"
                            value={contactData.phone}
                            onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#CBF24C]"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="f-need" className="block text-xs font-semibold text-white/80 mb-1.5">What do you need?</label>
                        <select
                          id="f-need"
                          value={contactData.need}
                          onChange={(e) => setContactData({ ...contactData, need: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#171327] text-white text-sm focus:outline-none focus:border-[#CBF24C]"
                        >
                          <option value="Branding">Branding</option>
                          <option value="Web Design & Development">Web Design & Development</option>
                          <option value="Performance Marketing">Performance Marketing</option>
                          <option value="AI Development">AI Development</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="f-budget" className="block text-xs font-semibold text-white/80 mb-1.5">Budget range</label>
                        <select
                          id="f-budget"
                          value={contactData.budget}
                          onChange={(e) => setContactData({ ...contactData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#171327] text-white text-sm focus:outline-none focus:border-[#CBF24C]"
                        >
                          <option value="Under ₹2 lakh">Under ₹2 lakh</option>
                          <option value="₹2–5 lakh">₹2–5 lakh</option>
                          <option value="₹5–15 lakh">₹5–15 lakh</option>
                          <option value="₹15+ lakh">₹15+ lakh</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="f-msg" className="block text-xs font-semibold text-white/80 mb-1.5">Tell us about the project</label>
                        <textarea
                          id="f-msg"
                          rows={4}
                          placeholder="What is slowing you down?"
                          value={contactData.msg}
                          onChange={(e) => setContactData({ ...contactData, msg: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#CBF24C] resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-full bg-[#CBF24C] text-[#0D0B14] font-bold text-base hover:bg-[#d8fa6d] transition-all duration-200 cursor-pointer shadow-md mt-2"
                      >
                        Send it
                      </button>
                      <p className="text-xs text-[#A49DBC] mt-2">
                        Keeping the budget dropdown saves everyone a wasted call.
                      </p>
                    </form>

                    {contactMsg && (
                      <p className="msg show mt-3" style={{ color: contactMsg.error ? 'var(--coral)' : 'var(--lime)' }}>
                        {contactMsg.text}
                      </p>
                    )}
                  </div>

                  {/* Right Column: Prefer to talk & Office cards */}
                  <div className="lg:col-span-5 space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Prefer to talk?</h2>
                      <p className="text-sm text-[#A49DBC] leading-relaxed mb-4">
                        Book a 30-min call and skip the form. First conversation is free and there is no deck.
                      </p>
                      <button
                        onClick={() => setIsProjectOpen(true)}
                        className="px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white hover:text-[#0D0B14] transition-all cursor-pointer mb-6"
                      >
                        Book a 30-min call →
                      </button>
                      <div className="text-sm text-[#A49DBC] space-y-1">
                        <p className="hover:text-white transition-colors"><a href="mailto:hello@activetheory.in">hello@activetheory.in</a></p>
                      </div>
                    </div>

                    {/* Offices Block with Embedded Maps */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Bengaluru Card */}
                      <div className="p-5 rounded-2xl bg-[#171327] border border-white/10 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-lg text-white mb-1">Bengaluru</h3>
                          <p className="text-xs text-[#A49DBC] leading-relaxed">
                            Sector 2, HSR Layout<br />
                            Bengaluru, KA 560102<br />
                            Karnataka, India
                          </p>
                        </div>
                        <div className="w-full h-32 rounded-xl overflow-hidden mt-4 border border-white/10 relative">
                          <iframe
                            title="Bengaluru Map"
                            src="https://maps.google.com/maps?q=Sector%202%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560102&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80 hover:filter-none hover:opacity-100 transition-all duration-300"
                            loading="lazy"
                          ></iframe>
                        </div>
                      </div>

                      {/* Coimbatore Card */}
                      <div className="p-5 rounded-2xl bg-[#171327] border border-white/10 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-lg text-white mb-1">Coimbatore</h3>
                          <p className="text-xs text-[#A49DBC] leading-relaxed">
                            DB Road, RS Puram<br />
                            Coimbatore, TN 641002<br />
                            Tamil Nadu, India
                          </p>
                        </div>
                        <div className="w-full h-32 rounded-xl overflow-hidden mt-4 border border-white/10 relative">
                          <iframe
                            title="Coimbatore Map"
                            src="https://maps.google.com/maps?q=DB%20Road%2C%20RS%20Puram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641002&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80 hover:filter-none hover:opacity-100 transition-all duration-300"
                            loading="lazy"
                          ></iframe>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-[#A49DBC] pt-1">
                      Both addresses must match your Google Business Profiles exactly, character for character.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* FOOTER MATCHING ORIGINAL DESIGN */}
      <footer className="ftr">
        <div className="wrap">
          <div className="ftr-top">
            <div className="ftr-brand">
              <a href="#/" className="inline-block mb-4 transition-opacity hover:opacity-85">
                <ActiveTheoryLogo theme="light" height={80} />
              </a>
              <p>A creative and AI agency in Bengaluru and Coimbatore. Identity, websites, performance campaigns, and the AI systems that make all three work harder.</p>
              <div className="btn-row" style={{ marginTop: 22 }}>
                <button onClick={() => setIsProjectOpen(true)} className="btn btn-lime btn-sm cursor-pointer">
                  Start a Project
                </button>
              </div>
            </div>
            <div>
              <p className="ftr-h">WHAT WE DO</p>
              <div className="ftr-l">
                <a href="#/branding">Brand Identity</a>
                <a href="#/web">Web Design & Development</a>
                <a href="#/performance">Performance Marketing</a>
                <a href="#/ai">AI Development</a>
              </div>
            </div>
            <div>
              <p className="ftr-h">INDUSTRIES</p>
              <div className="ftr-l">
                <a href="#/real-estate">Real Estate</a>
                <a href="#/d2c">D2C</a>
                <a href="#/saas">SaaS & Tech</a>
                <a href="#/work">All Work</a>
              </div>
            </div>
            <div>
              <p className="ftr-h">STUDIO</p>
              <div className="ftr-l">
                <a href="#/studio">About us</a>
                <a href="#/contact">Careers</a>
                <a href="#/contact">Contact</a>
                <a href="mailto:hello@activetheory.in">hello@activetheory.in</a>
              </div>
            </div>
          </div>

          {/* OFFICE ADDRESSES BLOCK */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-b border-white/10">
            <div>
              <p className="ftr-h">BENGALURU</p>
              <p className="text-sm text-[#A49DBC] leading-relaxed">
                Sector 2, HSR Layout<br />
                Bengaluru, KA 560102
              </p>
            </div>
            <div>
              <p className="ftr-h">COIMBATORE</p>
              <p className="text-sm text-[#A49DBC] leading-relaxed">
                DB Road, RS Puram<br />
                Coimbatore, TN 641002
              </p>
            </div>
          </div>

          <div className="ftr-bot">
            <span>© 2026 Active Theory. All rights reserved.</span>
            <span className="ftr-made">
              <span className="w-2 h-2 rounded-full bg-[#CBF24C] inline-block mr-1.5"></span>Made in Bengaluru & Coimbatore. Obviously.
            </span>
          </div>
        </div>
      </footer>

      {/* FLOATING COOKIE CONSENT POP-UP AT BOTTOM */}
      {showCookie && (
        <div className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-[#171327]/95 backdrop-blur-xl border border-white/20 text-white p-5 rounded-2xl shadow-2xl animate-fadeIn flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-[#CBF24C] font-semibold text-sm">
              <span className="text-base">🍪</span> Cookie Settings
            </div>
            <button
              onClick={() => setShowCookie(false)}
              className="text-white/60 hover:text-white text-xs font-bold w-6 h-6 rounded-full bg-white/10 flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close cookies"
            >
              ✕
            </button>
          </div>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans-inter">
            We use cookies to analyze site performance and optimize your digital experience.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={() => setShowCookie(false)}
              className="flex-1 rounded-xl bg-[#CBF24C] py-2 px-4 text-xs sm:text-sm font-bold text-[#0D0B14] hover:bg-[#d8fa6d] transition-all cursor-pointer text-center shadow-md"
            >
              Accept Cookies
            </button>
            <button
              onClick={() => setShowCookie(false)}
              className="rounded-xl bg-white/10 border border-white/15 py-2 px-4 text-xs sm:text-sm font-semibold text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
