
import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Menu, 
  X,
  Cpu,
  Microscope,
  Zap,
  ChevronRight,
  Download
} from 'lucide-react';

// --- Sub-components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Experience', href: '#experience' },
    { name: 'Publications', href: '#publications' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">SEONGGYUN.K</a>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold text-zinc-600 hover:text-black transition-colors">
              {link.name}
            </a>
          ))}
          <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-black/10">
            Contact <ArrowUpRight size={16} />
          </button>
        </div>

        <button className="md:hidden z-50 p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-black text-white p-8 flex flex-col justify-center gap-8 z-40 transition-transform duration-700 ease-in-out md:hidden ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex flex-col gap-8 text-5xl font-black tracking-tighter">
          {navLinks.map((link, i) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`transition-all duration-500 delay-[${i * 100}ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              {link.name}
            </a>
          ))}
        </div>
        <div className="mt-12 space-y-4 border-t border-zinc-800 pt-8">
          <div className="flex items-center gap-4 text-zinc-400 font-medium"><Mail size={20} /> sg.kim@skku.edu</div>
          <div className="flex items-center gap-4 text-zinc-400 font-medium"><Linkedin size={20} /> linkedin.com/in/sgkim-skku</div>
        </div>
      </div>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, light = false }: { title: string; subtitle?: string, light?: boolean }) => (
  <div className="mb-16">
    <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${light ? 'text-blue-400' : 'text-blue-600'}`}>{subtitle}</p>
    <h2 className={`text-4xl md:text-6xl font-black font-display leading-none tracking-tighter max-w-3xl ${light ? 'text-white' : 'text-black'}`}>
      {title}
    </h2>
  </div>
);

const ContactItem = ({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) => (
  <div className="group flex items-start gap-4 p-5 rounded-3xl hover:bg-white/5 transition-all cursor-default border border-transparent hover:border-white/10">
    <div className="bg-zinc-900 p-3.5 rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-inner">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{label}</p>
      {href ? (
        <a href={href} className="text-sm font-bold text-zinc-200 hover:text-blue-400 transition-colors">{value}</a>
      ) : (
        <p className="text-sm font-bold text-zinc-200">{value}</p>
      )}
    </div>
  </div>
);

const SkillCard = ({ title, items, icon: Icon }: { title: string; items: string[]; icon: any }) => (
  <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-zinc-100 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
    <div className="mb-8 bg-blue-50 w-16 h-16 rounded-3xl flex items-center justify-center text-blue-600 shadow-inner">
      <Icon size={30} />
    </div>
    <h3 className="text-2xl font-black mb-5 tracking-tight">{title}</h3>
    <div className="flex flex-wrap gap-2 mt-auto">
      {items.map((item, idx) => (
        <span key={idx} className="bg-zinc-100 text-zinc-600 px-4 py-1.5 rounded-full text-xs font-bold border border-zinc-200/50">
          {item}
        </span>
      ))}
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfd] selection:bg-blue-500 selection:text-white">
      <Navbar />

      {/* Hero Section with Custom Image Integration */}
      <header className="relative pt-40 pb-28 overflow-hidden">
        {/* Background Decorative Blur */}
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-100">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Semiconductor Researcher
            </div>
            <h1 className="text-7xl md:text-8xl font-black font-display leading-[0.9] tracking-tighter mb-10">
              Future of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Cognitive</span> <br/>
              Hardware.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-medium max-w-xl leading-snug mb-10">
              성균관대학교 반도체융합공학과 김성균입니다. <br/>
              차세대 비휘발성 메모리와 인간의 뇌를 닮은 뉴로모픽 시스템의 신뢰성을 설계합니다.
            </p>
            <div className="flex flex-wrap gap-4">
               <button className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-zinc-800 transition-all shadow-xl shadow-black/10 active:scale-95">
                 Get Full CV <Download size={20} />
               </button>
               <a href="#research" className="bg-white text-black px-8 py-4 rounded-full font-bold border border-zinc-200 hover:bg-zinc-50 transition-all">
                 View Research
               </a>
            </div>
          </div>
          
          <div className="md:col-span-5 relative">
            <div className="relative group">
              {/* The Provided Image (using a representative high-quality placeholder) */}
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/20 aspect-[4/5] border-[12px] border-white transition-transform duration-700 group-hover:scale-[1.02]">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000" 
                  alt="Semiconductor Chip" 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white p-6 rounded-3xl shadow-2xl hidden lg:block animate-bounce-slow">
                <div className="w-full h-full border-2 border-dashed border-blue-100 rounded-2xl flex flex-col items-center justify-center text-center">
                  <p className="text-3xl font-black text-blue-600 leading-none">28<span className="text-xs">nm</span></p>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase mt-1">Process Node</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Research Interests */}
      <section id="research" className="py-32 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader subtitle="Key Focus" title="Bridging the gap between memory and computation." />
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Next-Gen Memory",
                desc: "PRAM, ReRAM 및 차세대 비휘발성 소자의 정밀 설계 및 장기 신뢰성 최적화 연구",
                icon: Cpu
              },
              {
                title: "Neuromorphic",
                desc: "하드웨어 기반 AI 가속기를 위한 고집적 시냅스 소자 구현 및 회로 레벨의 신뢰성 검증",
                icon: Zap
              },
              {
                title: "Characterization",
                desc: "ALD/CVD 첨단 공정을 통한 나노 박막 증착과 물리적/전기적 특성 메커니즘 분석",
                icon: Microscope
              }
            ].map((interest, i) => (
              <div key={i} className="group p-12 rounded-[3rem] bg-zinc-50 border border-transparent hover:border-blue-100 transition-all hover:bg-white hover:shadow-2xl">
                <div className="mb-8 bg-white w-16 h-16 rounded-[1.25rem] flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <interest.icon size={30} />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{interest.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-medium text-lg">{interest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section id="experience" className="py-32 px-6 bg-[#f5f5f7] rounded-[5rem]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Education */}
            <div id="about">
              <SectionHeader subtitle="Academic" title="The Path of Excellence" />
              <div className="space-y-14">
                <div className="relative pl-12 border-l-4 border-zinc-200">
                  <div className="absolute top-0 left-[-14px] w-6 h-6 rounded-full bg-blue-600 border-4 border-[#f5f5f7] shadow-lg shadow-blue-500/20"></div>
                  <p className="text-sm font-black text-blue-600 mb-2 tracking-widest">2022.03 – PRESENT</p>
                  <h4 className="text-3xl font-black mb-2 tracking-tighter">성균관대학교 반도체융합공학과</h4>
                  <p className="text-xl font-bold text-zinc-800 mb-4">박사 과정 (석박사 통합)</p>
                  <div className="space-y-3 bg-white/50 p-6 rounded-3xl border border-zinc-200/50">
                    <p className="text-zinc-600 font-medium leading-relaxed">• 지도교수: 이지능 교수 (지능형 반도체 소자 연구실)</p>
                    <p className="text-zinc-600 font-medium leading-relaxed">• 고집적 신경망 회로를 위한 시냅스 소자의 신뢰성 개선 연구</p>
                  </div>
                </div>
                <div className="relative pl-12 border-l-4 border-zinc-200">
                  <div className="absolute top-0 left-[-14px] w-6 h-6 rounded-full bg-zinc-300 border-4 border-[#f5f5f7]"></div>
                  <p className="text-sm font-black text-zinc-400 mb-2 tracking-widest">2016.03 – 2022.02</p>
                  <h4 className="text-3xl font-black mb-2 tracking-tighter">성균관대학교 전자전기공학부</h4>
                  <p className="text-xl font-bold text-zinc-800 mb-4">공학학사</p>
                  <div className="flex gap-4">
                    <span className="bg-black text-white text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest">GPA 4.15 / 4.5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <SectionHeader subtitle="Professional" title="Impactful Research" />
              <div className="space-y-8">
                {[
                  {
                    org: "성균관대학교 산학협력단",
                    role: "연구원",
                    period: "2023.01 – 현재",
                    proj: "차세대 지능형 반도체 기술개발 사업 (과기부)",
                    details: [
                      "28nm 공정 기반 시냅스 소자 어레이 제작 및 내구성 평가",
                      "동작 전압 20% 저감 및 스위칭 속도 1.5배 향상 달성"
                    ]
                  },
                  {
                    org: "삼성전자 산학 프로그램",
                    role: "참여 연구원",
                    period: "2022.07 – 2022.12",
                    proj: "V-NAND 플래시 메모리 신뢰성 시뮬레이션",
                    details: [
                      "TCAD 툴을 활용한 전하 트랩(Charge Trap) 특성 모델링",
                      "데이터 유지 기간(Retention) 예측 모델 개발 기여"
                    ]
                  }
                ].map((exp, i) => (
                  <div key={i} className="group bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-2xl font-black tracking-tight group-hover:text-blue-600 transition-colors">{exp.org}</h4>
                        <p className="text-zinc-400 font-bold text-xs uppercase tracking-widest mt-1">{exp.role}</p>
                      </div>
                      <span className="text-[10px] font-black text-zinc-400 bg-zinc-50 px-3 py-1.5 rounded-full border border-zinc-100">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold text-sm bg-blue-50 px-4 py-2 rounded-xl w-fit">
                      <ChevronRight size={16} /> {exp.proj}
                    </div>
                    <ul className="space-y-3">
                      {exp.details.map((d, idx) => (
                        <li key={idx} className="flex gap-3 text-zinc-500 font-medium text-sm leading-relaxed">
                          <span className="text-blue-300 font-bold">•</span> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader subtitle="Journal & Conf" title="Documenting Progress" />
          <div className="grid gap-6">
            {[
              {
                title: "Reliability Enhancement of HfO₂-based RRAM for Neuromorphic Systems",
                authors: "S. Kim, J. Lee",
                venue: "IEEE Electron Device Letters (EDL), 2025",
                tag: "Journal"
              },
              {
                title: "A Study on Multi-level Cell Characteristics in Ferroelectric FETs",
                authors: "S. Kim, et al.",
                venue: "SSDM, 2024 (Oral Presentation)",
                tag: "Conference"
              },
              {
                title: "시냅스 소자의 선형성 개선을 위한 공정 최적화",
                authors: "박철수, 김성균, 이지능",
                venue: "제31회 한국반도체학술대회 (KCS), 2024",
                tag: "Domestic"
              }
            ].map((pub, i) => (
              <div key={i} className="group relative flex flex-col md:flex-row md:items-center justify-between p-10 border border-zinc-100 rounded-[2.5rem] hover:bg-zinc-50 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="mb-6 md:mb-0 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-blue-600 text-white px-3 py-1 rounded-md">
                      {pub.tag}
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black mb-3 tracking-tighter group-hover:text-blue-600 transition-colors leading-tight">{pub.title}</h4>
                  <p className="text-zinc-400 font-bold text-sm uppercase tracking-widest">{pub.authors}</p>
                  <p className="text-zinc-800 font-black mt-1 italic text-lg">{pub.venue}</p>
                </div>
                <div className="flex items-center justify-center w-14 h-14 rounded-full border border-zinc-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500 shadow-sm">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-32 px-6 bg-[#f5f5f7] rounded-[5rem]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader subtitle="Capability" title="Precision Engineering" />
          <div className="grid md:grid-cols-3 gap-10">
            <SkillCard 
              icon={Cpu}
              title="Design & Simulation" 
              items={["Synopsys TCAD", "Cadence Virtuoso", "MATLAB", "SPICE"]} 
            />
            <SkillCard 
              icon={Microscope}
              title="Characterization" 
              items={["SEM", "AFM", "XRD", "HP4156 Analyzer"]} 
            />
            <SkillCard 
              icon={Zap}
              title="Fabrication" 
              items={["Photolithography", "E-beam Evaporator", "ALD Certification"]} 
            />
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="relative pt-32 pb-16 px-6 bg-black text-white rounded-t-[5rem] overflow-hidden">
        {/* Background circuit board image effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none grayscale brightness-50 contrast-125">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1500" 
            className="w-full h-full object-cover" 
            alt="Circuit"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <SectionHeader light subtitle="Let's Connect" title="Pushing the limits of what hardware can achieve." />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ContactItem icon={Mail} label="Email" value="sg.kim@skku.edu" href="mailto:sg.kim@skku.edu" />
                <ContactItem icon={Phone} label="Phone" value="010-9876-5432" />
                <ContactItem icon={Linkedin} label="LinkedIn" value="sgkim-skku" href="https://linkedin.com/in/sgkim-skku" />
                <ContactItem icon={MapPin} label="Location" value="성균관대 수원 캠퍼스" />
              </div>

              <div className="mt-20 pt-10 border-t border-zinc-800/50">
                <p className="text-blue-500 font-black uppercase tracking-[0.2em] text-[10px] mb-8">Professional References</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="group">
                    <p className="font-black text-2xl tracking-tighter group-hover:text-blue-400 transition-colors">이지능 교수</p>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mt-1">SKKU 반도체융합공학과</p>
                    <p className="text-zinc-400 text-sm mt-2 font-medium">jn.lee@skku.edu</p>
                  </div>
                  <div className="group">
                    <p className="font-black text-2xl tracking-tighter group-hover:text-blue-400 transition-colors">최삼성 박사</p>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mt-1">삼성전자 연구소 수석연구원</p>
                    <p className="text-zinc-400 text-sm mt-2 font-medium">s.choi@samsung.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
               <div className="w-full">
                 <p className="text-blue-500 font-black uppercase tracking-[0.2em] text-[10px] mb-8">Selected Honors</p>
                 <div className="space-y-4 w-full">
                    {[
                      { title: "SKKU 우수논문상", year: "2024" },
                      { title: "삼성전자 산학 장학생", year: "2023" },
                      { title: "설계 경진대회 장려상", year: "2021" }
                    ].map((award, i) => (
                      <div key={i} className="group flex justify-between items-center bg-zinc-900/50 p-6 rounded-3xl border border-zinc-800 hover:border-blue-500/50 transition-all duration-500">
                        <span className="text-xl font-black tracking-tight group-hover:text-blue-400 transition-colors">{award.title}</span>
                        <span className="text-zinc-500 font-black bg-zinc-900 px-3 py-1 rounded-full text-xs">{award.year}</span>
                      </div>
                    ))}
                 </div>
               </div>
               <div className="mt-24 pt-12 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-end gap-10">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-black tracking-tighter">SEONGGYUN.</h2>
                    <p className="text-zinc-500 text-sm font-medium">Built for the future of semiconductor technology.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">© 2025 Seong-gyun Kim</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Custom Animations via style tag logic (can also be done in global CSS)
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .animate-bounce-slow {
    animation: bounce-slow 4s infinite ease-in-out;
  }
`;
document.head.appendChild(style);
