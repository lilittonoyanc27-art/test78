import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, Calculator, Clock,
  ArrowRight, Star,
  Sparkles, BookOpen, Layers,
  ChevronRight,
  ClipboardList
} from 'lucide-react';
import GameView from './GameView';
import VocabView from './VocabView';
import { 
  PREPOSITION_CHALLENGES, 
  TIME_CHALLENGES, 
  PRESENT_CHALLENGES 
} from './vocabData';

export type AppScreen = 'menu' | 'vocab' | 'game-prep' | 'game-time' | 'game-present';

function MainMenu({ setScreen }: { setScreen: (s: AppScreen) => void }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:py-20 text-center space-y-16">
      <div className="space-y-8">
        <div className="flex justify-center gap-4">
           {[...Array(3)].map((_, i) => (
             <motion.div 
               key={i}
               animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
               transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
             >
               <Star className="w-8 h-8 text-blue-400 fill-blue-400 opacity-20" />
             </motion.div>
           ))}
        </div>
        <div className="space-y-4">
            <h1 className="text-4xl xs:text-5xl sm:text-8xl md:text-9xl font-black text-slate-950 tracking-tighter uppercase italic leading-none">
            ԻՍՊԱՆԵՐԵՆԻ <br/><span className="text-blue-600">ՎԱՐԺԱՐԱՆ</span>
          </h1>
          <p className="text-xs sm:text-2xl md:text-3xl font-bold text-slate-400 uppercase tracking-[0.2em]">
            A1+ ՄԱԿԱՐԴԱԿԻ ՎԱՐԺՈՒԹՅՈՒՆՆԵՐ
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 max-w-2xl mx-auto">
        {/* Vocab/Grammar section */}
        <motion.button 
          whileHover={{ scale: 1.02, y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setScreen('vocab')}
          className="group relative bg-white p-6 sm:p-8 rounded-[40px] shadow-xl border-2 border-slate-100 overflow-hidden text-left"
        >
          <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex items-center gap-6 text-slate-900">
            <div className="p-5 bg-blue-100 rounded-[32px] shadow-inner rotate-3 group-hover:rotate-12 transition-transform">
              <BookOpen className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600" />
            </div>
            <div className="space-y-1 flex-1">
              <h3 className="text-2xl sm:text-4xl font-black italic uppercase tracking-tighter leading-tight group-hover:text-blue-600 transition-colors">ԳԼԽԱՎՈՐ ԲԱՌԱՐԱՆ</h3>
              <p className="text-slate-400 text-sm sm:text-base font-bold italic leading-tight">20 ամենակարևոր բայերը և քերականություն:</p>
            </div>
            <ArrowRight className="w-8 h-8 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all hidden sm:block text-blue-500" />
          </div>
        </motion.button>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ModuleButton 
            title="ՆԱԽԴԻՐՆԵՐ" 
            desc="Verb + Prep" 
            icon={<Layers />} 
            onClick={() => setScreen('game-prep')} 
            color="indigo"
          />
          <ModuleButton 
            title="ԺԱՄԱՆԱԿ" 
            desc="Telling Time" 
            icon={<Clock />} 
            onClick={() => setScreen('game-time')} 
            color="emerald"
          />
          <ModuleButton 
            title="ՆԵՐԿԱ" 
            desc="Present Tense" 
            icon={<ClipboardList />} 
            onClick={() => setScreen('game-present')} 
            color="rose"
          />
        </div>
      </div>
    </div>
  );
}

function ModuleButton({ title, desc, icon, onClick, color }: { title: string, desc: string, icon: any, onClick: () => void, color: string }) {
  const colors: Record<string, string> = {
    indigo: "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-100",
    emerald: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-100",
    rose: "bg-rose-600 hover:bg-rose-500 shadow-rose-100"
  };

  return (
    <motion.button
      whileHover={{ y: -8, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${colors[color]} p-8 rounded-[40px] text-white flex flex-col items-center gap-4 shadow-2xl transition-all h-full`}
    >
      <div className="p-4 bg-white/20 rounded-2xl">
        {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8" })}
      </div>
      <div className="text-center">
        <h4 className="text-xl font-black italic uppercase tracking-tighter">{title}</h4>
        <p className="text-xs font-bold opacity-60 uppercase">{desc}</p>
      </div>
    </motion.button>
  );
}

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('menu');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <AnimatePresence mode="wait">
        {screen === 'menu' && (
          <motion.div key="menu" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <MainMenu setScreen={setScreen} />
          </motion.div>
        )}
        
        {screen === 'vocab' && (
          <motion.div key="vocab" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
            <VocabView onBack={() => setScreen('menu')} onPlayPreps={() => setScreen('game-prep')} />
          </motion.div>
        )}

        {screen === 'game-prep' && (
          <motion.div key="game-prep" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}>
            <GameView challenges={PREPOSITION_CHALLENGES} moduleTitle="ՆԱԽԴԻՐՆԵՐ" moduleColor="indigo" onBack={() => setScreen('menu')} />
          </motion.div>
        )}
        {screen === 'game-time' && (
          <motion.div key="game-time" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}>
            <GameView challenges={TIME_CHALLENGES} moduleTitle="ԺԱՄԱՆԱԿ" moduleColor="emerald" onBack={() => setScreen('menu')} />
          </motion.div>
        )}
        {screen === 'game-present' && (
          <motion.div key="game-present" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}>
            <GameView challenges={PRESENT_CHALLENGES} moduleTitle="ՆԵՐԿԱ ԺԱՄԱՆԱԿ" moduleColor="rose" onBack={() => setScreen('menu')} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-full px-8 py-5 flex items-center gap-8 sm:gap-12 max-w-[95vw] overflow-x-auto no-scrollbar">
        <NavButton 
          active={screen === 'menu'} 
          icon={<Home />} 
          label="Գլխավոր" 
          onClick={() => setScreen('menu')} 
          color="blue"
        />
        <NavButton 
          active={screen === 'vocab'} 
          icon={<BookOpen />} 
          label="Բառարան" 
          onClick={() => setScreen('vocab')} 
          color="blue"
        />
        <NavButton 
          active={['game-prep', 'game-time', 'game-present'].includes(screen)} 
          icon={<Star />} 
          label="Վարժանք" 
          onClick={() => setScreen('game-prep')} 
          color="blue"
        />
      </nav>

      {/* Decorative background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-50">
        <div className="absolute top-[-15%] left-[-15%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-15%] w-[50%] h-[50%] bg-slate-100 rounded-full blur-[140px]" />
      </div>

      <footer className="px-4 py-24 text-center pb-32">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">
           &copy; 2026 ԻՍՊԱՆԵՐԵՆԻ ՈՒՍՈՒՑՈՒՄ: A1+ ՎԱՐԺԱՐԱՆ
        </p>
      </footer>
    </div>
  );
}

function NavButton({ active, icon, label, onClick, color = 'indigo' }: { active: boolean, icon: any, label: string, onClick: () => void, color?: string }) {
  const activeColor = color === 'blue' ? 'bg-blue-600' : 'bg-indigo-600';
  const textColor = color === 'blue' ? 'text-blue-600' : 'text-indigo-600';

  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1.5 group transition-all ${active ? 'scale-110' : 'opacity-40 hover:opacity-100'}`}
    >
      <div className={`p-2.5 rounded-2xl transition-colors ${active ? `${activeColor} text-white shadow-xl shadow-blue-100` : 'text-slate-600'}`}>
        {React.cloneElement(icon, { size: 20, strokeWidth: 2.5 })}
      </div>
      <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${active ? textColor : 'text-slate-500'}`}>
        {label}
      </span>
    </button>
  );
}
