
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight">seonggyun.</a>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-zinc-500 transition-colors">
              {link.name}
            </a>
          ))}
          <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-zinc-800 transition-all active:scale-95">
            Contact <ArrowUpRight size={16} />
          </button>
        </div>

        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-black text-white p-8 flex flex-col justify-center gap-8 z-40 transition-transform duration-500 md:hidden ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex flex-col gap-6 text-4xl font-bold">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
        <div className="mt-12 space-y-4 border-t border-zinc-800 pt-8">
          <div className="flex items-center gap-3 text-zinc-400 font-medium"><Mail size={18} /> sg.kim@skku.edu</div>
          <div className="flex items-center gap-3 text-zinc-400 font-medium"><Linkedin size={18} /> linkedin.com/in/sgkim-skku</div>
        </div>
      </div>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, light = false }: { title: string; subtitle?: string, light?: boolean }) => (
  <div className="mb-12">
    <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${light ? 'text-zinc-400' : 'text-zinc-500'}`}>{subtitle}</p>
    <h2 className={`text-4xl md:text-5xl font-extrabold font-display leading-tight max-w-2xl ${light ? 'text-white' : 'text-black'}`}>
      {title}
    </h2>
  </div>
);

const ContactItem = ({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) => (
  <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-zinc-900/50 transition-all cursor-default border border-transparent">
    <div className="bg-zinc-800 p-3 rounded-xl text-zinc-400 group-hover:bg-white group-hover:text-black transition-colors">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-tighter mb-1">{label}</p>
      {href ? (
        <a href={href} className="text-sm font-bold text-white hover:underline">{value}</a>
      ) : (
        <p className="text-sm font-bold text-white">{value}</p>
      )}
    </div>
  </div>
);

const SkillCard = ({ title, items, icon: Icon }: { title: string; items: string[]; icon: any }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col h-full hover:shadow-md transition-shadow">
    <div className="mb-6 bg-zinc-50 w-12 h-12 rounded-2xl flex items-center justify-center text-black">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item, idx) => (
        <span key={idx} className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-lg text-xs font-medium">
          {item}
        </span>
      ))}
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8">
            <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">Semiconductor Researcher</p>
            <h1 className="text-6xl md:text-8xl font-black font-display leading-[0.95] tracking-tighter mb-8">
              Innovating <br/><span className="text-zinc-400">Memory Systems.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-medium max-w-2xl leading-relaxed">
              성균관대학교 반도체융합공학과 박사 통합과정 김성균입니다. <br className="hidden md:block" /> 
              차세대 비휘발성 메모리(PRAM, ReRAM) 및 뉴로모픽 하드웨어 신뢰성을 연구합니다.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <button className="bg-black text-white w-40 h-40 rounded-full flex flex-col items-center justify-center gap-2 font-bold text-sm hover:scale-105 transition-transform group shadow-xl">
              <Download size={24} className="group-hover:-translate-y-1 transition-transform" />
              <span>Full CV</span>
            </button>
          </div>
        </div>
      </header>

      {/* Research Interests */}
      <section id="research" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader subtitle="Research Interests" title="Focusing on hardware acceleration for the AI era." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Next-Gen Memory",
                desc: "PRAM, ReRAM 설계 및 신뢰성 평가 연구를 통한 고효율 저장장치 구현",
                icon: Cpu
              },
              {
                title: "Neuromorphic",
                desc: "하드웨어 기반 AI 가속기 및 고집적 시냅스 소자의 물리적 구현",
                icon: Zap
              },
              {
                title: "Characterization",
                desc: "ALD/CVD 공정 박막 증착 및 정밀한 물리적/전기적 특성 분석",
                icon: Microscope
              }
            ].map((interest, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] bg-zinc-50 border border-transparent hover:border-zinc-200 transition-all hover:bg-white hover:shadow-xl">
                <div className="mb-6 text-black bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <interest.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{interest.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-medium">{interest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section id="experience" className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Education */}
            <div id="about">
              <SectionHeader subtitle="Education" title="Academic Background" />
              <div className="space-y-12">
                <div className="relative pl-10 border-l-2 border-zinc-200">
                  <div className="absolute top-0 left-[-11px] w-5 h-5 rounded-full bg-black border-4 border-[#f5f5f7]"></div>
                  <p className="text-sm font-bold text-zinc-400 mb-2">2022.03 – Present</p>
                  <h4 className="text-2xl font-extrabold mb-1 tracking-tight">성균관대학교 반도체융합공학과</h4>
                  <p className="text-lg font-bold text-zinc-800 mb-3">박사 과정 (석박사 통합)</p>
                  <ul className="text-zinc-500 space-y-2 font-medium">
                    <li>• 지도교수: 이지능 교수 (지능형 반도체 소자 연구실)</li>
                    <li>• 주제: 고집적 신경망 회로 시냅스 소자 신뢰성 개선</li>
                  </ul>
                </div>
                <div className="relative pl-10 border-l-2 border-zinc-200">
                  <div className="absolute top-0 left-[-11px] w-5 h-5 rounded-full bg-zinc-300 border-4 border-[#f5f5f7]"></div>
                  <p className="text-sm font-bold text-zinc-400 mb-2">2016.03 – 2022.02</p>
                  <h4 className="text-2xl font-extrabold mb-1 tracking-tight">성균관대학교 전자전기공학부</h4>
                  <p className="text-lg font-bold text-zinc-800 mb-3">공학학사</p>
                  <span className="inline-block bg-zinc-900 text-white text-[10px] px-2 py-1 rounded-full font-bold mb-3 uppercase">GPA 4.15 / 4.5</span>
                  <p className="text-zinc-500 font-medium">주요 이수: 반도체 공학, 고체 물리, 회로 이론, 집적 회로 설계</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <SectionHeader subtitle="Experience" title="Research & Projects" />
              <div className="space-y-6">
                {[
                  {
                    org: "성균관대학교 산학협력단",
                    role: "연구원",
                    period: "2023.01 – Present",
                    proj: "차세대 지능형 반도체 기술개발 사업",
                    details: [
                      "28nm 공정 기반 시냅스 소자 어레이 제작",
                      "동작 전압 20% 저감 및 스위칭 속도 1.5배 향상"
                    ]
                  },
                  {
                    org: "삼성전자 산학 프로젝트",
                    role: "참여 연구원",
                    period: "2022.07 – 2022.12",
                    proj: "V-NAND 플래시 메모리 신뢰성 시뮬레이션",
                    details: [
                      "TCAD 전하 트랩(Charge Trap) 모델링 수행",
                      "데이터 유지 기간(Retention) 예측 모델 개발"
                    ]
                  }
                ].map((exp, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold">{exp.org}</h4>
                        <p className="text-zinc-500 font-semibold text-sm">{exp.role}</p>
                      </div>
                      <span className="text-xs font-bold text-zinc-400 bg-zinc-50 px-2 py-1 rounded-md">{exp.period}</span>
                    </div>
                    <p className="text-black font-bold mb-3 flex items-center gap-2 text-sm">
                      <ChevronRight size={14} className="text-zinc-400" /> {exp.proj}
                    </p>
                    <ul className="text-zinc-500 text-sm font-medium space-y-2">
                      {exp.details.map((d, idx) => (
                        <li key={idx}>• {d}</li>
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
      <section id="publications" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader subtitle="Publications" title="Academic Contributions" />
          <div className="grid gap-4">
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
              <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between p-8 border border-zinc-100 rounded-3xl hover:bg-zinc-50 transition-all">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest bg-zinc-100 text-zinc-500 px-2 py-1 rounded-md group-hover:bg-black group-hover:text-white transition-colors">
                      {pub.tag}
                    </span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">{pub.title}</h4>
                  <p className="text-zinc-500 font-medium">{pub.authors} <span className="mx-2 text-zinc-200">|</span> <span className="text-zinc-800 font-semibold">{pub.venue}</span></p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader subtitle="Technical Skills" title="Expertise & Tools" />
          <div className="grid md:grid-cols-3 gap-8">
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
      <footer className="py-24 px-6 bg-black text-white rounded-t-[4rem]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <SectionHeader light subtitle="Contact Info" title="Building the next generation of semiconductors." />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <ContactItem icon={Mail} label="Email" value="sg.kim@skku.edu" href="mailto:sg.kim@skku.edu" />
                <ContactItem icon={Phone} label="Phone" value="010-9876-5432" />
                <ContactItem icon={Linkedin} label="LinkedIn" value="sgkim-skku" href="https://linkedin.com/in/sgkim-skku" />
                <ContactItem icon={MapPin} label="Location" value="성균관대 수원 캠퍼스" />
              </div>

              <div className="mt-16 pt-8 border-t border-zinc-800">
                <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-4">References</p>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-lg">이지능 교수</p>
                    <p className="text-zinc-400 text-sm">성균관대학교 반도체융합공학과 <span className="mx-2">|</span> jn.lee@skku.edu</p>
                  </div>
                  <div>
                    <p className="font-bold text-lg">최삼성 박사</p>
                    <p className="text-zinc-400 text-sm">삼성전자 반도체연구소 수석연구원 <span className="mx-2">|</span> s.choi@samsung.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between items-start lg:items-end">
               <div className="w-full">
                 <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-6">Recent Awards</p>
                 <div className="space-y-6 w-full">
                    {[
                      { title: "SKKU 우수논문상", year: "2024" },
                      { title: "삼성전자 산학 장학생", year: "2023" },
                      { title: "설계 경진대회 장려상", year: "2021" }
                    ].map((award, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-zinc-800 pb-4">
                        <span className="text-lg font-bold">{award.title}</span>
                        <span className="text-zinc-400 font-medium">{award.year}</span>
                      </div>
                    ))}
                 </div>
               </div>
               <div className="mt-20 flex flex-col items-start lg:items-end gap-2 text-right">
                  <p className="text-zinc-500 text-sm font-medium">© 2025 Seong-gyun Kim.</p>
                  <p className="text-zinc-700 text-xs">Modern CV Experience</p>
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
