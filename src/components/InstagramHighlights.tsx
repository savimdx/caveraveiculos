import React, { useState, useEffect } from 'react';
import { INSTAGRAM_HIGHLIGHTS, STORE_INFO, generateGeneralWhatsAppLink } from '../data/storeData';
import { Sparkles, Percent, ShieldCheck, MapPin, ArrowLeftRight, X, ChevronRight, ChevronLeft, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface InstagramHighlightsProps {
  onSelectCategory?: (category: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-4 h-4 text-red-500" />,
  Percent: <Percent className="w-4 h-4 text-red-600" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-zinc-900" />,
  MapPin: <MapPin className="w-4 h-4 text-red-600" />,
  ArrowLeftRight: <ArrowLeftRight className="w-4 h-4 text-zinc-800" />,
};

export const InstagramHighlights: React.FC<InstagramHighlightsProps> = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  // Auto-progress story like Instagram
  useEffect(() => {
    if (activeStoryIndex === null) {
      setProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Go to next story or close
          if (activeStoryIndex < INSTAGRAM_HIGHLIGHTS.length - 1) {
            setActiveStoryIndex(activeStoryIndex + 1);
            return 0;
          } else {
            setActiveStoryIndex(null);
            return 0;
          }
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [activeStoryIndex]);

  const currentStory = activeStoryIndex !== null ? INSTAGRAM_HIGHLIGHTS[activeStoryIndex] : null;

  return (
    <section className="bg-slate-50 border-b border-zinc-200/80 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Profile Header Strip on White/Light Canvas */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200 mb-4">
          <div className="flex items-center gap-3.5">
            {/* Profile Avatar with Red & Chrome Racing Border */}
            <div className="p-0.5 rounded-full bg-gradient-to-tr from-red-600 via-zinc-900 to-red-600 shadow-md">
              <div className="w-13 h-13 rounded-full bg-zinc-950 border-2 border-white overflow-hidden flex items-center justify-center text-white font-black font-display text-sm tracking-tighter">
                <span className="text-white">CV</span>
                <span className="text-red-500">.</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-zinc-950 tracking-tight text-sm sm:text-base">
                  {STORE_INFO.instagram}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-red-50 text-red-600 border border-red-200">
                  Loja Oficial
                </span>
              </div>
              <p className="text-xs text-zinc-600 mt-0.5">
                {STORE_INFO.tagline} · <span className="text-zinc-950 font-bold">Paracatu - MG</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={`https://instagram.com/${STORE_INFO.instagram.replace('@', '')}`}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-zinc-50 text-xs font-bold text-zinc-800 transition-colors flex items-center gap-1.5 border border-zinc-300 shadow-sm"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              <span>Ver no Instagram</span>
            </a>
            <a
              href={generateGeneralWhatsAppLink('Olá! Vim pelo Instagram da Cavera Veículos e gostaria de ver o estoque disponível em Paracatu.')}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-xs font-bold text-white transition-colors flex items-center gap-1.5 shadow-sm shadow-[#25D366]/20"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
              <span>Contato Direto</span>
            </a>
          </div>
        </div>

        {/* Stories / Destaques Row */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
            <span>Destaques da Loja</span>
            <span className="text-[10px] text-zinc-400 font-normal">(Clique para abrir)</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-1 scrollbar-none">
            {INSTAGRAM_HIGHLIGHTS.map((highlight, index) => (
              <button
                key={highlight.id}
                onClick={() => {
                  setActiveStoryIndex(index);
                  setProgress(0);
                }}
                className="flex flex-col items-center gap-2 group shrink-0 focus:outline-none cursor-pointer"
              >
                {/* Red/Chrome ring */}
                <div className="p-0.5 rounded-full bg-gradient-to-tr from-red-600 via-zinc-800 to-red-500 group-hover:scale-105 transition-transform duration-200 shadow-sm">
                  <div className="w-16 h-16 sm:w-17 sm:h-17 rounded-full bg-white p-0.5 flex items-center justify-center overflow-hidden relative">
                    <img
                      src={highlight.coverImage}
                      alt={highlight.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-full group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center border border-zinc-200 shadow-sm">
                        {iconMap[highlight.icon] || <Sparkles className="w-3.5 h-3.5 text-red-600" />}
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-zinc-800 group-hover:text-red-600 transition-colors whitespace-nowrap">
                  {highlight.title}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Instagram Story Interactive Modal */}
      {currentStory && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-sm sm:max-w-md h-[580px] bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl border border-red-600/40 flex flex-col">
            
            {/* Story Progress Bar */}
            <div className="absolute top-3 left-3 right-3 z-30 flex items-center gap-1.5">
              {INSTAGRAM_HIGHLIGHTS.map((item, idx) => (
                <div key={item.id} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-100 ease-linear"
                    style={{
                      width:
                        idx < activeStoryIndex!
                          ? '100%'
                          : idx === activeStoryIndex
                          ? `${progress}%`
                          : '0%',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Story Header */}
            <div className="absolute top-6 left-3 right-3 z-30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-black text-xs">
                  CV
                </div>
                <div>
                  <span className="text-xs font-extrabold text-white">{STORE_INFO.instagram}</span>
                  <span className="text-[10px] text-zinc-300 block">{currentStory.title}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveStoryIndex(null)}
                className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Fechar story"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Story Visual Backdrop */}
            <div className="relative flex-1 bg-zinc-950">
              <img
                src={currentStory.coverImage}
                alt={currentStory.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-black/60" />

              {/* Story Content Bottom */}
              <div className="absolute bottom-6 left-5 right-5 z-20 space-y-3">
                <div className="inline-block px-2.5 py-1 rounded bg-red-600/30 text-red-300 border border-red-500/40 text-xs font-bold uppercase tracking-wider">
                  {currentStory.badge}
                </div>
                <h3 className="text-xl font-black text-white font-display">
                  {currentStory.title}
                </h3>
                <p className="text-sm text-zinc-200 leading-relaxed">
                  {currentStory.storyText}
                </p>

                <div className="pt-2">
                  <a
                    href={generateGeneralWhatsAppLink(`Olá! Vi o destaque de "${currentStory.title}" no site da Cavera Veículos e gostaria de conversar.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/30 transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 shrink-0" />
                    Chamar no WhatsApp agora
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation buttons inside modal */}
            {activeStoryIndex !== null && activeStoryIndex > 0 && (
              <button
                onClick={() => {
                  setActiveStoryIndex(activeStoryIndex - 1);
                  setProgress(0);
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {activeStoryIndex !== null && activeStoryIndex < INSTAGRAM_HIGHLIGHTS.length - 1 && (
              <button
                onClick={() => {
                  setActiveStoryIndex(activeStoryIndex + 1);
                  setProgress(0);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
