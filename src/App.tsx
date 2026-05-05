/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Laptop, 
  Rocket, 
  Users, 
  Award, 
  Calendar, 
  MapPin, 
  Mail, 
  ArrowRight, 
  ChevronRight, 
  Bot, 
  Code,
  Zap,
  Globe,
  Smartphone,
  ExternalLink,
  ChevronDown,
  HelpCircle,
  Clock,
  BookOpen,
  Menu,
  X
} from 'lucide-react';

// --- Types ---
type View = 'home' | 'program' | 'schedule' | 'faq';

interface CampCardProps {
  title: string;
  age: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  color: 'desert' | 'oasis';
}

interface NavLinkProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

// --- Components ---

const NavLink = ({ children, isActive, onClick }: NavLinkProps) => (
  <button 
    onClick={onClick}
    className={`text-sm font-bold tracking-tight transition-colors cursor-pointer ${
      isActive ? 'text-asu-gold underline underline-offset-8 decoration-2' : 'text-white hover:text-asu-gold'
    }`}
  >
    {children}
  </button>
);

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    {subtitle && <div className="text-asu-maroon font-black text-[10px] uppercase tracking-[0.25em] mb-2">{subtitle}</div>}
    <h2 className="text-4xl font-black text-asu-grey-900 uppercase tracking-tighter leading-none">{children}</h2>
  </div>
);

const ImagePlaceholder = ({ label, className = "" }: { label: string, className?: string }) => (
  <div className={`bg-asu-grey-50 border-2 border-dashed border-asu-grey-200 rounded-xl flex flex-col items-center justify-center text-asu-grey-300 relative overflow-hidden group ${className}`}>
    <div className="text-4xl mb-3 grayscale mix-blend-multiply opacity-20 group-hover:opacity-40 transition-opacity">📸</div>
    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-asu-grey-400">{label}</div>
    <div className="absolute inset-0 bg-asu-maroon/5 opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
);

const CampCard = ({ title, age, description, icon, tags, color }: CampCardProps) => {
  const isDesert = color === 'desert';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={`asu-card flex flex-col justify-between h-full group ${!isDesert ? '' : 'border-asu-maroon'}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="text-asu-grey-600 transition-colors group-hover:text-asu-maroon">
            {icon}
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest bg-asu-grey-50 px-2 py-1 rounded text-asu-grey-600 border border-asu-grey-100">
            {age}
          </span>
        </div>
        
        <div className="mb-4 aspect-video rounded-lg overflow-hidden border border-asu-grey-100">
          <ImagePlaceholder label={`${title} Photo`} className="w-full h-full rounded-none border-none" />
        </div>
        
        <h3 className="text-xl font-bold text-asu-grey-900 mb-2 leading-tight">{title}</h3>
        <p className="text-sm font-medium text-asu-grey-600 mb-6 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="text-[9px] font-black text-asu-grey-500 bg-asu-grey-50 px-2 py-0.5 rounded border border-asu-grey-100 uppercase tracking-tighter">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <button className="w-full py-3 rounded bg-asu-maroon text-white font-bold text-sm tracking-tight hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
        View Syllabus
        <ChevronRight size={16} />
      </button>
    </motion.div>
  );
};

// --- Views ---

const HomeView = ({ setView }: { setView: (v: View) => void }) => (
  <>
    {/* Hero Section */}
    <section className="bg-white border-b border-asu-grey-100">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-asu-maroon font-black text-xs uppercase tracking-[0.2em] mb-4">
              Summer 2026 • Tempe, AZ
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-black text-asu-grey-900 leading-[1.05] mb-8">
              Igniting the <span className="italic text-asu-maroon tracking-normal">Next Generation</span> of Robotics.
            </h1>
            
            <p className="text-xl text-asu-grey-600 mb-10 leading-relaxed max-w-xl">
              ASU Robotics Camps provide middle school and high school students with hands-on experience in engineering design, 
              robotics programming, and computer science.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="asu-button-primary shadow-lg shadow-asu-maroon/20 px-8">
                Register for Camp
              </button>
              <button onClick={() => setView('program')} className="asu-button-outline px-8">
                View Curriculum
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:block aspect-video bg-asu-grey-50 border-2 border-dashed border-asu-grey-200 rounded-xl relative overflow-hidden group shadow-2xl shadow-asu-maroon/5"
          >
            <ImagePlaceholder label="Hero Visual Content" className="w-full h-full rounded-none border-none" />
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-morphism rounded-lg border border-white/20 bg-white/40 backdrop-blur-md">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-asu-green rounded-full animate-ping" />
                 <span className="text-[10px] font-black text-asu-grey-900 uppercase tracking-widest">ASU Polytechnic Lab Live</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Camp Types Grid */}
    <section className="py-20 bg-asu-grey-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <SectionTitle>Available Programs</SectionTitle>
          <div className="bg-asu-green text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shrink-0">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            Registration Open
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <CampCard 
            title="LEGO Robotics Core"
            age="Ages 11-13 • Intermediate"
            description="Master the fundamentals of mechanical design and block-based coding through the LEGO Education platform."
            icon={<Laptop size={24} />}
            tags={['LEGO EV3', 'Alice 3D', 'Logic']}
            color="oasis"
          />
          <CampCard 
            title="VEX V5 Engineering"
            age="Ages 14-16 • Advanced"
            description="Design complex robots to solve competitive challenges. Introduction to C++ and structural engineering."
            icon={<Bot size={24} />}
            tags={['C++', 'VEX V5', 'Engineering']}
            color="oasis"
          />
          <CampCard 
            title="AI & Web Integration"
            age="Ages 16+ • Advanced"
            description="Build reactive web applications and integrate open-source AI models using JavaScript and Python frameworks."
            icon={<Cpu size={24} />}
            tags={['Python', 'React', 'Gemini AI']}
            color="desert"
          />
        </div>
      </div>
    </section>

    {/* Gallery / Media Section */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Camp Experience">Memories & Media</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <ImagePlaceholder label="Competition Hall" className="w-full h-full min-h-[400px]" />
          </div>
          <div>
            <ImagePlaceholder label="Robot Construction" className="w-full h-full aspect-square" />
          </div>
          <div>
            <ImagePlaceholder label="Closing Ceremony" className="w-full h-full aspect-square" />
          </div>
          <div className="col-span-2">
             <div className="p-8 bg-asu-maroon rounded-xl flex flex-col justify-center h-full text-white">
                <h4 className="text-xl font-bold mb-4">Featured in the News</h4>
                <div className="space-y-4">
                   <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-xs font-medium opacity-80 italic">ASU News Video</span>
                      <ExternalLink size={14} className="opacity-60" />
                   </div>
                   <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-xs font-medium opacity-80 italic">CBS News Highlight</span>
                      <ExternalLink size={14} className="opacity-60" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    {/* Team / Info Section */}
    <section className="py-24 bg-white border-y border-asu-grey-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <SectionTitle subtitle="Faculty Leaders">Academic Oversight</SectionTitle>
            <div className="space-y-6">
              {[
                { name: "Dr. Yinong Chen", role: "Robotics Expert", achievements: "Former Ultimate Architecture Sumo Champion" },
                { name: "Dr. Hokeun Kim", role: "Systems Engineering", achievements: "ASU Computing & Intelligence Faculty" }
              ].map((lead) => (
                <div key={lead.name} className="flex gap-5 p-6 bg-asu-grey-50 rounded-lg">
                  <div className="w-12 h-12 bg-asu-maroon text-white font-bold rounded flex items-center justify-center">
                    {lead.name.split(' ')[1][0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-asu-grey-900">{lead.name}</h4>
                    <div className="text-asu-maroon font-bold text-xs uppercase mb-1">{lead.role}</div>
                    <p className="text-xs text-asu-grey-600">{lead.achievements}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-asu-grey-900 text-white p-12 rounded-xl flex flex-col justify-center">
            <Rocket className="text-asu-gold mb-6" size={40} />
            <h3 className="text-3xl font-black mb-4 tracking-tight uppercase">Ready for Challenge?</h3>
            <p className="text-asu-grey-400 mb-8 leading-relaxed">
              Join hundreds of students who have launched their careers right here in our labs. 
              Summer 2026 sessions are filling up fast.
            </p>
            <button className="asu-button-primary bg-asu-gold text-asu-maroon uppercase tracking-widest text-sm self-start">
              Secure Your Spot
            </button>
          </div>
        </div>
      </div>
    </section>
  </>
);

const ProgramView = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="py-20 max-w-7xl mx-auto px-6"
  >
    <SectionTitle subtitle="What Students Learn">Academic Program</SectionTitle>
    <div className="grid lg:grid-cols-2 gap-12 mb-20">
      <div className="p-8 bg-white rounded-xl shadow-sm border-t-4 border-asu-maroon">
        <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Bot className="text-asu-maroon" /> 7Up Camp (Grades 7-8)
        </h3>
        <ul className="space-y-4 text-asu-grey-600">
          <li className="flex gap-3"><ArrowRight size={16} className="shrink-0 mt-1 text-asu-gold" /> 3D movie and game programming using Alice</li>
          <li className="flex gap-3"><ArrowRight size={16} className="shrink-0 mt-1 text-asu-gold" /> Draw 3D objects using SketchUp or Tinkercad</li>
          <li className="flex gap-3"><ArrowRight size={16} className="shrink-0 mt-1 text-asu-gold" /> Construction of a LEGO EV3 robot</li>
          <li className="flex gap-3"><ArrowRight size={16} className="shrink-0 mt-1 text-asu-gold" /> Robotics programming in EV3 Graphical language</li>
          <li className="flex gap-3"><ArrowRight size={16} className="shrink-0 mt-1 text-asu-gold" /> First Lego League (FLL) competition prep</li>
          <li className="flex gap-3"><ArrowRight size={16} className="shrink-0 mt-1 text-asu-gold" /> Program robots with Bluetooth-remote control</li>
          <li className="flex gap-3"><ArrowRight size={16} className="shrink-0 mt-1 text-asu-gold" /> AI-based maze navigation</li>
        </ul>
      </div>
      <div className="p-8 bg-white rounded-xl shadow-sm border-t-4 border-asu-gold">
        <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
          <Cpu className="text-asu-maroon" /> 9Up Camp (Grades 9-12)
        </h3>
        <ul className="space-y-4 text-asu-grey-600">
          <li className="flex gap-3"><ArrowRight size={16} className="shrink-0 mt-1 text-asu-gold" /> Advanced computing and logic foundations</li>
          <li className="flex gap-3"><ArrowRight size={16} className="shrink-0 mt-1 text-asu-gold" /> Career paths in science, engineering, and computing</li>
          <li className="flex gap-3"><ArrowRight size={16} className="shrink-0 mt-1 text-asu-gold" /> Visual IoT / Robotics Programming Environment</li>
          <li className="flex gap-3"><ArrowRight size={16} className="shrink-0 mt-1 text-asu-gold" /> Virtual and physical robot implementation</li>
          <li className="flex gap-3"><ArrowRight size={16} className="shrink-0 mt-1 text-asu-gold" /> Web programming and Web app development</li>
          <li className="flex gap-3"><ArrowRight size={16} className="shrink-0 mt-1 text-asu-gold" /> Android Smartphone App development</li>
          <li className="flex gap-3"><ArrowRight size={16} className="shrink-0 mt-1 text-asu-gold" /> Service-Oriented Computing concepts</li>
        </ul>
      </div>
    </div>

    <SectionTitle subtitle="Core Competencies">Skills & Technologies</SectionTitle>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { title: 'Problem Solving', icon: <Zap /> },
        { title: 'System Design', icon: <CogIcon /> },
        { title: 'Team Collaboration', icon: <Users /> },
        { title: 'Logic Thinking', icon: <BrainIcon /> },
      ].map((s, i) => (
        <div key={i} className="p-6 bg-asu-grey-900 text-white rounded-xl flex flex-col items-center text-center">
          <div className="text-asu-gold mb-4">{s.icon}</div>
          <div className="font-bold text-sm tracking-tight">{s.title}</div>
        </div>
      ))}
    </div>
  </motion.div>
);

const ScheduleView = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="py-20 max-w-4xl mx-auto px-6"
  >
    <SectionTitle subtitle="A Day in the Lab">Daily Schedule</SectionTitle>
    <div className="bg-white rounded-xl shadow-sm overflow-hidden divide-y divide-asu-grey-100 border border-asu-grey-100">
      {[
        { time: '8:00 AM – 8:30 AM', activity: 'Check-in & Morning Setup' },
        { time: '8:45 AM – 10:00 AM', activity: 'Instructions and hands-on laboratories' },
        { time: '10:00 AM – 10:15 AM', activity: 'Break & Snack time' },
        { time: '10:15 AM – 11:30 AM', activity: 'Advanced Lab Work' },
        { time: '11:30 AM – 1:00 PM', activity: 'Lunch break (Mill Ave exploration)' },
        { time: '1:00 PM – 2:15 PM', activity: 'Robotics Challenges' },
        { time: '2:15 PM – 2:30 PM', activity: 'Afternoon Break' },
        { time: '2:30 PM – 4:15 PM', activity: 'Final Project Refinement' },
        { time: '4:30 PM – 5:00 PM', activity: 'Student Pickup & Play time' },
      ].map((item, i) => (
        <div key={i} className="flex flex-col sm:flex-row sm:items-center p-6 gap-4 hover:bg-asu-grey-50 transition-colors">
          <div className="sm:w-48 font-black text-asu-maroon text-sm shrink-0 flex items-center gap-2">
            <Clock size={16} />
            {item.time}
          </div>
          <div className="text-asu-grey-900 font-bold">{item.activity}</div>
        </div>
      ))}
    </div>

    <div className="mt-12 p-8 bg-asu-maroon text-white rounded-xl flex items-center justify-between">
      <div>
        <h4 className="font-bold text-xl mb-2">Location</h4>
        <p className="opacity-80 text-sm">ASU Brickyard Engineering Building (BYENG 214)</p>
      </div>
      <MapPin className="text-asu-gold" size={32} />
    </div>
  </motion.div>
);

const FAQView = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="py-20 max-w-4xl mx-auto px-6"
  >
    <SectionTitle subtitle="Common Inquiries">Frequently Asked Questions</SectionTitle>
    <div className="space-y-4">
      {[
        { q: "How do I know if this program is right for my child?", a: "Our camps are designed for students with a strong interest in science and engineering. If your child enjoys building things, solving puzzles, and learning how technology works, they will thrive here." },
        { q: "Will my child earn college credit?", a: "While students gain valuable university-level exposure, college credits are not officially granted for these summer camps." },
        { q: "Are Robotics Camps an educational as well as entertaining experience?", a: "Absolutely. We balance rigorous engineering curriculum with fun, hands-on challenges and end-of-camp competitions." },
        { q: "What happens if there is an illness or emergency?", a: "We have direct access to university health services and strictly follow ASU campus safety protocols." },
        { q: "How do I apply for financial aid?", a: "Scholarships are available for motivated students and K-12 teachers. Please contact us with an endorsement letter from your school principal." }
      ].map((item, i) => (
        <div key={i} className="asu-card">
          <h4 className="font-black text-asu-grey-900 mb-4 flex gap-3">
             <HelpCircle className="text-asu-gold shrink-0" />
             {item.q}
          </h4>
          <p className="text-asu-grey-600 text-sm leading-relaxed pl-9 border-l border-asu-grey-100">
            {item.a}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

// --- Custom Icons ---
const CogIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="m6.34 17.66-1.41 1.41"/></svg>
);

const BrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.54Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.54Z"/></svg>
);

// --- Header Components ---

const AsuUnitHeader = () => (
  <div className="bg-white border-b border-asu-grey-100">
    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center py-6 lg:h-[90px] gap-6 lg:gap-12">
      <a href="https://asu.edu" className="block shrink-0">
        <img 
          src="https://github.com/vickydee/ASU-Desert-CodeSprouts-Website/blob/main/src/asu%20wide%20frame.png?raw=true" 
          alt="ASU" 
          className="h-10 w-auto hidden lg:block"
        />
        <img 
          src="https://github.com/vickydee/ASU-Desert-CodeSprouts-Website/blob/main/src/asu%20shortened%20frame.png?raw=true" 
          alt="ASU" 
          className="h-10 w-auto block lg:hidden"
        />
      </a>
      <div className="flex flex-col justify-center">
        <a href="https://engineering.asu.edu" className="text-xs font-bold uppercase tracking-widest text-asu-grey-600 hover:text-asu-maroon leading-tight mb-0.5 hidden lg:block">
          Ira A. Fulton Schools of Engineering
        </a>
        <a href="https://scai.engineering.asu.edu" className="text-lg font-bold tracking-tighter text-asu-grey-900 leading-none">
          School of Computing and Augmented Intelligence
        </a>
      </div>
    </div>
  </div>
);

export default function App() {
  const [view, setView] = useState<View>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [view]);

  const renderView = () => {
    switch (view) {
      case 'program': return <ProgramView />;
      case 'schedule': return <ScheduleView />;
      case 'faq': return <FAQView />;
      default: return <HomeView setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-asu-grey-50">
      <AsuUnitHeader />
      
      {/* Navigation */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-asu-maroon/95 backdrop-blur-sm' : 'bg-asu-maroon'
        } border-b-4 border-asu-gold text-white`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between">
          <div 
            onClick={() => setView('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-8 h-8 bg-asu-gold rounded-full flex items-center justify-center text-asu-maroon font-black text-base transition-transform group-hover:scale-110">
              S
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-xl tracking-tighter leading-none">ASU Robotics Camps</span>
              <span className="text-[13px] font-bold opacity-80 mt-0.5">SUMMER 2026</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink isActive={view === 'program'} onClick={() => setView('program')}>Curriculum</NavLink>
            <NavLink isActive={view === 'schedule'} onClick={() => setView('schedule')}>Schedule</NavLink>
            <NavLink isActive={view === 'faq'} onClick={() => setView('faq')}>FAQ</NavLink>
            <button className="border border-white/20 px-4 py-1.5 rounded-sm text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-asu-maroon transition-all">
              Login
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-asu-maroon border-t border-white/10 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col p-6 gap-6">
                <NavLink isActive={view === 'program'} onClick={() => setView('program')}>Curriculum</NavLink>
                <NavLink isActive={view === 'schedule'} onClick={() => setView('schedule')}>Schedule</NavLink>
                <NavLink isActive={view === 'faq'} onClick={() => setView('faq')}>FAQ</NavLink>
                <button className="bg-asu-gold text-asu-maroon py-3 rounded-sm font-black uppercase tracking-[0.2em] text-[10px]">
                  Student Login
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {renderView()}
      </main>

      {/* Footer / Status Bar */}
      <footer className="bg-asu-grey-900 text-asu-grey-400 text-[10px] font-bold uppercase tracking-widest">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
          <div className="hidden sm:block">© 2026 Arizona State University • School of Computing & Augmented Intelligence</div>
          <div className="sm:hidden">© 2026 ASU SCAI</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span>Status:</span>
              <span className="text-asu-green font-black">OPEN</span>
            </div>
            <div className="h-3 w-[1px] bg-asu-grey-700" />
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


