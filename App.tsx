
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

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight">seonggyun.</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium hover:text-zinc-500 transition-colors">About</a>
          <a href="#research" className="text-sm font-medium hover:text-zinc-500 transition-colors">Research</a>
          <a href="#experience" className="text-sm font-medium hover:text-zinc-500 transition-colors">Experience</a>
          <a href="#publications" className="text-sm font-medium hover:text-zinc-500 transition-colors">Publications</a>
          <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-zinc-800 transition-all active:scale-95">
            Let's talk <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black text-white p-8 flex flex-col justify-center gap-8 z-40">
          <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}><X size={32} /></button>
          <div className="flex flex-col gap-6 text-4xl font-bold">
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#research" onClick={() => setIsOpen(false)}>Research</a>
            <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
            <a href="#publications" onClick={() => setIsOpen(false)}>Publications</a>
          </div>
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-3 text-zinc-400"><Mail size={18} /> sg.kim@skku.edu</div>
            <div className="flex items-center gap-3 text-zinc-400"><Linkedin size={18} /> linkedin.com/in/sgkim-skku</div>
          </div>
        </div>
      )}
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
  <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-all cursor-default border border-transparent hover:border-zinc-200">
    <div className="bg-zinc-100 p-3 rounded-xl text-zinc-600 group-hover:bg-black group-hover:text-white transition-colors">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-xs font-semibold text-zinc-400 uppercase tracking-tighter mb-1">{label}</p>
      {href ? (
        <a href={href} className="text-sm font-bold text-zinc-800 hover:underline">{value}</a>
      ) : (
        <p className="text-sm font-bold text-zinc-800">{value}</p>
      )}
    </div>
  </div>
);

const SkillCard = ({ title, items, icon: Icon }: { title: string; items: string[]; icon: any }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col h-full">
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
    <div className="min-h-screen selection:bg-black selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">Semiconductor Researcher</p>
            <h1 className="text-6xl md:text-8xl font-black font-display leading-[0.95] tracking-tighter mb-8">
              Discover the future of <span className="text-zinc-400">Memory.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-medium max-w-2xl leading-relaxed">
              성균관대학교 반도체융합공학과 박사 통합과정, 김성균입니다. 차세대 메모리 소자 및 뉴로모픽 컴퓨팅의 신뢰성을 연구하고 있습니다.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end pb-4">
            <button className="bg-black text-white w-32 h-32 rounded-full flex flex-col items-center justify-center gap-1 font-bold text-sm hover:scale-105 transition-transform">
              <Download size={24} />
              <span>CV</span>
            </button>
          </div>
        </div>
      </header>

      {/* Research Interests / About */}
      <section id="about" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader subtitle="Interests" title="Focusing on next-generation computing hardware architecture." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Next-Gen Memory",
                desc: "PRAM, ReRAM 및 차세대 비휘발성 메모리 소자 설계 및 신뢰성 평가",
                icon: Cpu
              },
              {
                title: "Neuromorphic",
                desc: "하드웨어 기반 AI 가속기 및 고집적 시냅스 소자 구현 연구",
                icon: Zap
              },
              {
                title: "Characterization",
                desc: "ALD/CVD 공정을 활용한 박막 증착 및 물리적/전기적 특성 분석",
                icon: Microscope
              }
            ].map((interest, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-zinc-50 border border-transparent hover:border-zinc-200 transition-all">
                <div className="mb-6 text-black group-hover:scale-110 transition-transform">
                  <interest.icon size={32} />
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
            <div>
              <SectionHeader subtitle="Academic" title="Educational Journey" />
              <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-zinc-200">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-black"></div>
                  <p className="text-sm font-bold text-zinc-400 mb-2">2022.03 – 현재</p>
                  <h4 className="text-2xl font-extrabold mb-1 tracking-tight">성균관대학교 반도체융합공학과</h4>
                  <p className="text-lg font-bold text-zinc-800 mb-3">박사 과정 (석박사 통합)</p>
                  <ul className="text-zinc-500 space-y-2 font-medium">
                    <li>• 지도교수: 이지능 교수 (지능형 반도체 소자 연구실)</li>
                    <li>• 고집적 신경망 회로를 위한 시냅스 소자의 신뢰성 개선 연구</li>
                  </ul>
                </div>
                <div className="relative pl-8 border-l-2 border-zinc-200">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-zinc-300"></div>
                  <p className="text-sm font-bold text-zinc-400 mb-2">2016.03 – 2022.02</p>
                  <h4 className="text-2xl font-extrabold mb-1 tracking-tight">성균관대학교 전자전기공학부</h4>
                  <p className="text-lg font-bold text-zinc-800 mb-3">공학학사</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-zinc-900 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">GPA 4.15 / 4.5</span>
                  </div>
                  <p className="text-zinc-500 font-medium">주요 이수: 반도체 공학, 고체 물리, 회로 이론, 집적 회로 설계</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <SectionHeader subtitle="Career" title="Professional Experience" />
              <div className="space-y-8">
                {[
                  {
                    org: "성균관대학교 산학협력단",
                    role: "연구원",
                    period: "2023.01 – 현재",
                    proj: "차세대 지능형 반도체 기술개발 사업",
                    details: [
                      "28nm 공정 기반 시냅스 소자 어레이 제작 및 Endurance 평가",
                      "소자 동작 전압 20% 저감 및 스위칭 속도 1.5배 향상 달성"
                    ]
                  },
                  {
                    org: "삼성전자-성균관대 프로그램",
                    role: "참여 연구원",
                    period: "2022.07 – 2022.12",
                    proj: "V-NAND 플래시 메모리 신뢰성 시뮬레이션",
                    details: [
                      "TCAD 툴을 활용한 전하 트랩(Charge Trap) 특성 모델링 수행",
                      "실제 소자의 Retention 예측 모델 개발 기여"
                    ]
                  }
                ].map((exp, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold">{exp.org}</h4>
                        <p className="text-zinc-500 font-semibold text-sm">{exp.role}</p>
                      </div>
                      <span className="text-xs font-bold text-zinc-400">{exp.period}</span>
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
          <SectionHeader subtitle="Scholarship" title="Scientific Contributions" />
          <div className="space-y-6">
            {[
              {
                title: "Reliability Enhancement of HfO₂-based RRAM for Neuromorphic Systems",
                authors: "S. Kim, J. Lee",
                venue: "IEEE Electron Device Letters (EDL), Vol. 45, No. 2, 2025",
                tag: "Journal"
              },
              {
                title: "A Study on Multi-level Cell Characteristics in Ferroelectric FETs",
                authors: "S. Kim, et al.",
                venue: "International Conference on Solid State Devices and Materials (SSDM), 2024",
                tag: "Conference (Oral)"
              },
              {
                title: "시냅스 소자의 선형성 개선을 위한 공정 최적화",
                authors: "박철수, 김성균, 이지능",
                venue: "제31회 한국반도체학술대회 (KCS), 2024",
                tag: "Domestic"
              }
            ].map((pub, i) => (
              <div key={i} className="group grid md:grid-cols-12 gap-6 items-center p-8 border-b border-zinc-100 hover:bg-zinc-50 transition-colors rounded-3xl">
                <div className="md:col-span-1 hidden md:block text-2xl font-black text-zinc-200 group-hover:text-black transition-colors">
                  0{i + 1}
                </div>
                <div className="md:col-span-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-0.5 rounded-md">{pub.tag}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold mb-2 leading-tight">{pub.title}</h4>
                  <p className="text-zinc-500 font-medium">{pub.authors} | <span className="text-zinc-800 italic">{pub.venue}</span></p>
                </div>
                <div className="md:col-span-3 flex justify-end">
                  <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader subtitle="Technical" title="Mastering the tools of the trade." />
          <div className="grid md:grid-cols-3 gap-6">
            <SkillCard 
              icon={Cpu}
              title="Design & Simulation" 
              items={["Synopsys TCAD", "Cadence Virtuoso", "MATLAB", "SPICE"]} 
            />
            <SkillCard 
              icon={Microscope}
              title="Characterization" 
              items={["SEM", "AFM", "XRD", "HP4156 (Parameter Analyzer)"]} 
            />
            <SkillCard 
              icon={Zap}
              title="Fabrication" 
              items={["Photolithography", "E-beam Evaporator", "ALD (Cleanroom 인증)"]} 
            />
          </div>
          
          <div className="mt-12 bg-white p-12 rounded-[3rem] border border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Language Proficiency</p>
              <h4 className="text-3xl font-black">Connecting globally.</h4>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-black">NATIVE</span>
                <span className="text-sm font-bold text-zinc-400">한국어 (Korean)</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-black">IH</span>
                <span className="text-sm font-bold text-zinc-400">OPIc / TOEIC 920</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Footer Contact */}
      <section className="py-24 px-6 bg-black text-white rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <SectionHeader light subtitle="Recognition" title="Awards & Honors" />
              <div className="space-y-8">
                {[
                  { title: "SKKU 대학원생 우수논문상", year: "2024", org: "성균관대학교" },
                  { title: "삼성전자 산학 장학생 선정", year: "2023", org: "삼성전자 DS부문" },
                  { title: "반도체 소자 설계 경진대회 장려상", year: "2021", org: "대한전자공학회" }
                ].map((award, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-zinc-800 pb-6">
                    <div>
                      <h4 className="text-xl font-bold">{award.title}</h4>
                      <p className="text-zinc-500 font-medium text-sm">{award.org}</p>
                    </div>
                    <span className="text-zinc-300 font-bold">{award.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <SectionHeader light subtitle="Contact" title="Let's build the future together." />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ContactItem icon={Mail} label="Email" value="sg.kim@skku.edu" href="mailto:sg.kim@skku.edu" />
                  <ContactItem icon={Phone} label="Phone" value="010-9876-5432" />
                  <ContactItem icon={Linkedin} label="LinkedIn" value="sgkim-skku" href="https://linkedin.com/in/sgkim-skku" />
                  <ContactItem icon={MapPin} label="Address" value="성균관대 자연과학캠퍼스" />
                </div>
              </div>

              <div className="mt-20 pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                  <h5 className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-4">References</h5>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold">이지능 교수 <span className="text-zinc-500 font-medium">| jn.lee@skku.edu</span></p>
                    <p className="font-bold">최삼성 박사 <span className="text-zinc-500 font-medium">| s.choi@samsung.com</span></p>
                  </div>
                </div>
                <p className="text-zinc-600 text-sm font-medium">© 2025 Seong-gyun Kim. Crafted for Excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
