import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Globe, 
  BookOpen, 
  Award, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Search,
  Home,
  Info,
  Briefcase,
  Plane,
  ShieldCheck,
  Building2,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';
import { Event, Destination, Service } from './types';

// --- Data ---
const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Study Abroad Counseling',
    description: 'Expert guidance on choosing the right country, university, and course based on your profile.',
    icon: 'Globe'
  },
  {
    id: '2',
    title: 'Visa Assistance',
    description: 'Comprehensive support for student visa applications, documentation, and interview preparation.',
    icon: 'Award'
  },
  {
    id: '3',
    title: 'Test Preparation',
    description: 'Specialized coaching for IELTS, TOEFL, GRE, and GMAT to help you achieve your target scores.',
    icon: 'BookOpen'
  },
  {
    id: '4',
    title: 'Scholarship Guidance',
    description: 'Helping you identify and apply for merit-based and need-based international scholarships.',
    icon: 'CheckCircle2'
  },
  {
    id: '5',
    title: 'Accommodation Support',
    description: 'Assisting you in finding safe and affordable housing options near your university.',
    icon: 'Building2'
  },
  {
    id: '6',
    title: 'Travel Insurance',
    description: 'Providing comprehensive travel insurance plans to ensure your safety during your journey.',
    icon: 'ShieldCheck'
  },
  {
    id: '7',
    title: 'Pre-departure Briefing',
    description: 'Preparing you for the cultural, academic, and social transition to your new home.',
    icon: 'Plane'
  }
];

const DESTINATIONS: Destination[] = [
  { id: 'uk', name: 'United Kingdom', image: 'https://picsum.photos/seed/uk/800/600', description: 'World-class education and rich history.' },
  { id: 'can', name: 'Canada', image: 'https://picsum.photos/seed/canada/800/600', description: 'Diverse culture and excellent work opportunities.' },
  { id: 'ire', name: 'Ireland', image: 'https://picsum.photos/seed/ireland/800/600', description: 'The land of saints and scholars with top-tier universities.' },
  { id: 'fra', name: 'France', image: 'https://picsum.photos/seed/france/800/600', description: 'Excellence in arts, fashion, and engineering.' },
  { id: 'aus', name: 'Australia', image: 'https://picsum.photos/seed/australia/800/600', description: 'High quality of life and innovative research.' },
  { id: 'usa', name: 'USA', image: 'https://picsum.photos/seed/usa/800/600', description: 'The global hub for technology and academic freedom.' },
  { id: 'kaz', name: 'Kazakhstan', image: 'https://picsum.photos/seed/kazakhstan/800/600', description: 'Emerging hub for medical and technical studies.' },
  { id: 'uzb', name: 'Uzbekistan', image: 'https://picsum.photos/seed/uzbekistan/800/600', description: 'Rich history and growing educational opportunities.' },
  { id: 'chn', name: 'China', image: 'https://picsum.photos/seed/china/800/600', description: 'Global economic powerhouse with modern campuses.' },
  { id: 'mlt', name: 'Malta', image: 'https://picsum.photos/seed/malta/800/600', description: 'English-speaking Mediterranean gem for students.' },
  { id: 'hun', name: 'Hungary', image: 'https://picsum.photos/seed/hungary/800/600', description: 'Affordable European education with high standards.' },
  { id: 'geo', name: 'Georgia', image: 'https://picsum.photos/seed/georgia/800/600', description: 'Popular destination for medical studies.' },
  { id: 'bul', name: 'Bulgaria', image: 'https://picsum.photos/seed/bulgaria/800/600', description: 'Quality education in the heart of the Balkans.' },
  { id: 'mal', name: 'Malaysia', image: 'https://picsum.photos/seed/malaysia/800/600', description: 'Multicultural hub with global university campuses.' },
  { id: 'sin', name: 'Singapore', image: 'https://picsum.photos/seed/singapore/800/600', description: 'Global financial center and educational excellence.' },
  { id: 'tur', name: 'Turkey', image: 'https://picsum.photos/seed/turkey/800/600', description: 'Bridging East and West with vibrant student life.' },
  { id: 'cyp', name: 'Cyprus', image: 'https://picsum.photos/seed/cyprus/800/600', description: 'Sun-soaked island with international academic programs.' }
];

const UPCOMING_EVENTS: Event[] = [
  { id: 'e1', title: 'Global Education Expo', date: 'March 25, 2026', location: 'Islamabad Serena Hotel', link: '#' },
  { id: 'e2', title: 'Study Abroad Seminar', date: 'April 05, 2026', location: 'Pearl Continental Hotel Lahore', link: '#' },
  { id: 'e3', title: 'Application Day Mardan', date: 'April 12, 2026', location: 'Royal Plaza Event Hall, Mardan', link: '#' }
];

const STAFF = [
  { name: 'Hashim Mirza', role: 'CEO & Founder', image: 'https://picsum.photos/seed/staff1/400/400' },
  { name: 'Sarah Ahmed', role: 'Visa Specialist', image: 'https://picsum.photos/seed/staff2/400/400' },
  { name: 'Shah Faisal', role: 'Senior Consultant', image: 'https://picsum.photos/seed/staff3/400/400' }
];

// --- Components ---

const Navbar = ({ onApply }: { onApply: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Global Lift Consultants Logo" 
              className="w-12 h-12 object-contain"
              onError={(e) => {
                // Fallback if image is not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              G
            </div>
            <span className={`text-xl font-bold tracking-tighter ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              GLOBAL<span className="text-blue-500">LIFT</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={onApply}
                className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
              >
                Apply Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-gray-900' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-4">
                <button 
                  onClick={() => {
                    onApply();
                    setIsOpen(false);
                  }}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl text-base font-semibold"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onApply }: { onApply: () => void }) => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/consultancy/1920/1080" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
            Your Pathway to Success
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Elevate Your <br />
            <span className="text-blue-400">Future Globally</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
            Global Lift Consultants is your trusted partner for international education. We bridge the gap between your dreams and global opportunities with expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onApply}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-600/30"
            >
              Start Your Journey <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onApply}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/office1/400/500" alt="Office" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/office2/400/500" alt="Consultation" className="rounded-3xl shadow-lg mt-8" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-3xl shadow-xl">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm font-bold opacity-80 uppercase tracking-widest">Years of Excellence</div>
            </div>
          </div>
          <div>
            <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] mb-4">About Us</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">We Lift Your Dreams to New Heights</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Global Lift Consultants is a premier educational consultancy firm dedicated to providing comprehensive support to students aspiring to study abroad. With a team of experienced professionals, we ensure a smooth transition from your home country to your dream university.
            </p>
            <div className="space-y-4">
              {['Expert Career Counseling', 'High Visa Success Rate', 'Global University Partnerships', 'Personalized Support'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600" size={20} />
                  <span className="font-semibold text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const getIcon = (name: string) => {
    switch(name) {
      case 'Globe': return <Globe className="text-blue-600" size={32} />;
      case 'Award': return <Award className="text-blue-600" size={32} />;
      case 'BookOpen': return <BookOpen className="text-blue-600" size={32} />;
      case 'CheckCircle2': return <CheckCircle2 className="text-blue-600" size={32} />;
      case 'Building2': return <Building2 className="text-blue-600" size={32} />;
      case 'ShieldCheck': return <ShieldCheck className="text-blue-600" size={32} />;
      case 'Plane': return <Plane className="text-blue-600" size={32} />;
      default: return <Globe className="text-blue-600" size={32} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] mb-4">Our Services</h2>
          <h3 className="text-4xl font-bold text-gray-900 tracking-tight">End-to-End Student Support</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                {getIcon(service.icon)}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] mb-4">Study Destinations</h2>
          <h3 className="text-4xl font-bold text-gray-900 tracking-tight">Explore Global Opportunities</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {DESTINATIONS.map((dest) => (
            <motion.div
              key={dest.id}
              whileHover={{ scale: 1.05 }}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-md"
            >
              <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h4 className="text-white font-bold text-lg">{dest.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Events = ({ onApply }: { onApply: () => void }) => {
  return (
    <section id="events" className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-bold text-sm uppercase tracking-[0.3em] mb-4">Upcoming Events</h2>
          <h3 className="text-4xl font-bold tracking-tight">Join Our Education Expos</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event) => (
            <div key={event.id} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Calendar size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4">{event.title}</h4>
              <div className="space-y-3 text-blue-200">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} /> {event.date}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} /> {event.location}
                </div>
              </div>
              <button 
                onClick={onApply}
                className="mt-8 w-full py-3 border border-white/20 rounded-xl hover:bg-white hover:text-blue-900 transition-all font-bold"
              >
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StaffSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] mb-4">Our Team</h2>
          <h3 className="text-4xl font-bold text-gray-900 tracking-tight">Meet Our Experts</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {STAFF.map((member, i) => (
            <div key={i} className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h4>
              <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Visit Our Offices</h3>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Islamabad Office</h4>
                  <p className="text-gray-600">Office no 13, 3rd floor, Al Ghaffar Plaza, G-11 Markaz, Islamabad</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Mardan Office</h4>
                  <p className="text-gray-600">Office no 21, 2nd Floor, Royal Plaza, Mardan</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Call Us</h4>
                  <p className="text-gray-600">+92 306 1301220</p>
                  <p className="text-gray-600">+92 331 9089107</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Email Us</h4>
                  <p className="text-gray-600">ceo@globalliftcons.com</p>
                  <p className="text-gray-600">info@globalliftcons.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 shadow-sm">
            <h4 className="text-2xl font-bold mb-8">Send a Message</h4>
            <form className="space-y-6">
              <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 outline-none transition-all" />
              <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 outline-none transition-all" />
              <textarea placeholder="Your Message" rows={4} className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 outline-none transition-all"></textarea>
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/logo.png" 
                alt="Global Lift Consultants Logo" 
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">G</div>
              <span className="text-xl font-bold tracking-tighter">GLOBAL<span className="text-blue-500">LIFT</span></span>
            </div>
            <p className="text-gray-400 mb-8">Your pathway to success. We empower students to achieve their dreams of studying at top international universities.</p>
            <div className="flex gap-4">
              <Facebook className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" size={20} />
              <Instagram className="text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" size={20} />
              <Linkedin className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" size={20} />
              <Twitter className="text-gray-400 hover:text-blue-300 cursor-pointer transition-colors" size={20} />
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Offices</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex gap-2"><MapPin size={14} className="flex-shrink-0 mt-1" /> Islamabad: G-11 Markaz</li>
              <li className="flex gap-2"><MapPin size={14} className="flex-shrink-0 mt-1" /> Mardan: Royal Plaza</li>
              <li className="flex gap-2"><Phone size={14} className="flex-shrink-0 mt-1" /> +92 306 1301220</li>
              <li className="flex gap-2"><Mail size={14} className="flex-shrink-0 mt-1" /> info@globalliftcons.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-blue-500 flex-grow" />
              <button className="bg-blue-600 p-2 rounded-xl hover:bg-blue-700 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© 2026 Global Lift Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const ApplicationModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X size={24} className="text-gray-500" />
            </button>

            <div className="p-8 sm:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Application Sent!</h3>
                  <p className="text-gray-600 text-lg">Thank you for your interest. Our senior consultant will contact you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Apply Now</h3>
                    <p className="text-gray-600">Fill in your details and start your global journey today.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                        <input required type="text" placeholder="John Doe" className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                        <input required type="email" placeholder="john@example.com" className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                        <input required type="tel" placeholder="+92 300 1234567" className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Preferred Destination</label>
                        <select className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none bg-white">
                          <option>United Kingdom</option>
                          <option>Canada</option>
                          <option>USA</option>
                          <option>Australia</option>
                          <option>Ireland</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700 ml-1">Service Required</label>
                      <select className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none bg-white">
                        <option>Study Abroad Counseling</option>
                        <option>Visa Assistance</option>
                        <option>Test Preparation (IELTS/TOEFL)</option>
                        <option>Scholarship Guidance</option>
                      </select>
                    </div>

                    <div className="pt-4">
                      <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                        Submit Application <ArrowRight size={20} />
                      </button>
                    </div>
                    
                    <p className="text-center text-xs text-gray-400 mt-4">
                      By submitting, you agree to our terms and privacy policy.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar onApply={toggleModal} />
      <Hero onApply={toggleModal} />
      <About />
      <Services />
      <Destinations />
      <Events onApply={toggleModal} />
      <StaffSection />
      <Contact />
      <Footer />
      <ApplicationModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}
