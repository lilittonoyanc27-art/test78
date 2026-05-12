import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, BookOpen, Star, 
  ChevronRight, Bookmark, 
  Languages, 
  Zap,
  GraduationCap
} from 'lucide-react';
import { TOP_VERBS } from './vocabData';

export default function VocabView({ onBack, onPlayPreps }: { onBack: () => void, onPlayPreps: () => void }) {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-40 pt-8 space-y-12">
      {/* Arithmetic Header */}
      <section className="text-center space-y-6 relative">
        <motion.div 
            initial={{ rotate: -10, scale: 0.8 }}
            animate={{ rotate: 10, scale: 1 }}
            transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }}
            className="inline-flex p-4 bg-blue-100 rounded-3xl shadow-xl text-blue-700 border-2 border-blue-200"
        >
           <Languages className="w-12 h-12" />
        </motion.div>
        
        <div className="space-y-2">
            <h2 className="text-4xl sm:text-7xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
              ԲԱՌԱՐԱՆ
            </h2>
            <p className="text-blue-600 font-black italic uppercase tracking-[0.3em] text-[10px] sm:text-sm">
              20 ԱՄԵՆԱԿԱՐԵՎՈՐ ԲԱՅԵՐԸ
            </p>
        </div>
      </section>

      <div className="grid sm:grid-cols-2 gap-4">
        {TOP_VERBS.map((verb, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-lg flex items-center justify-between group hover:border-blue-500/50 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 font-black shadow-inner">
                {i + 1}
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900 italic uppercase tracking-tighter">{verb.v}</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{verb.t}</p>
              </div>
            </div>
            <Zap className="w-5 h-5 text-slate-100 group-hover:text-amber-400 transition-colors" />
          </motion.div>
        ))}
      </div>

      {/* Grammar Tips */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-black text-slate-900 italic uppercase">ՔԵՐԱԿԱՆԱԿԱՆ ՀՈՒՇՈՒՄՆԵՐ</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div className="bg-slate-900 text-white p-8 rounded-[40px] shadow-2xl space-y-4">
            <h4 className="text-xl font-black text-emerald-400 uppercase italic tracking-tighter">ԺԱՄԱՆԱԿ (LA HORA)</h4>
            <ul className="space-y-2 text-sm font-medium text-slate-300 italic">
              <li>• Es la una (Ժամը մեկն է - Եզակի)</li>
              <li>• Son las dos/tres... (Հոգնակի)</li>
              <li>• ...y cuarto (անց քառորդ)</li>
              <li>• ...y media (անց կես)</li>
              <li>• ...menos cuarto (քառորդ պակաս)</li>
            </ul>
          </motion.div>

          <motion.div className="bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 space-y-4">
            <h4 className="text-xl font-black text-blue-600 uppercase italic tracking-tighter">ՆԵՐԿԱ ԺԱՄԱՆԱԿ</h4>
            <ul className="space-y-2 text-sm font-medium text-slate-500 italic">
              <li>• -AR: -o, -as, -a, -amos, -áis, -an</li>
              <li>• -ER: -o, -es, -e, -emos, -éis, -en</li>
              <li>• -IR: -o, -es, -e, -imos, -ís, -en</li>
              <li>• Yo hablo, Tú comes, Nosotros vivimos</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Info Box */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-600 text-white rounded-[40px] sm:rounded-[48px] p-6 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden border-b-[8px] sm:border-b-[12px] border-blue-700"
      >
        <p className="text-xl sm:text-4xl font-black italic uppercase leading-tight max-w-2xl mx-auto">
          ՍՈՎՈՐԻՐ <span className="text-yellow-300">ԿԱՅՈՒՆ</span> ԿԱՊԱԿՑՈՒԹՅՈՒՆՆԵՐԸ
        </p>
        <p className="text-blue-100 font-bold opacity-80 italic text-xs sm:text-lg">
          Որոշ բայեր միշտ պահանջում են որոշակի նախդիրներ: Օրինակ` Sueño <span className="underline">con</span>...
        </p>
      </motion.div>

      {/* CTA section */}
      <section className="bg-slate-900 rounded-[40px] sm:rounded-[48px] p-6 sm:p-12 text-white text-center space-y-6 sm:space-y-8 shadow-2xl relative overflow-hidden border-t-4 border-blue-500/30">
        <div className="relative z-10 space-y-4">
          <h3 className="text-2xl sm:text-5xl font-black italic uppercase tracking-tighter leading-tight">ՊԱՏՐԱ՞ՍՏ ԵՍ ՎԱՐԺԱՆՔԻՆ</h3>
          <p className="text-slate-400 font-bold italic uppercase tracking-widest text-[9px] sm:text-xs">Ստուգիր քո գիտելիքները տարբեր բաժիններում:</p>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button 
            onClick={onPlayPreps}
            className="bg-blue-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black italic uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-blue-400"
          >
            ՍԿՍԵԼ ՆԱԽԴԻՐՆԵՐԸ
          </button>
          <button 
            onClick={onBack}
            className="bg-slate-800 text-white border border-slate-700 px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black italic uppercase tracking-widest hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> ՀԵՏ
          </button>
        </div>
      </section>
    </div>
  );
}
