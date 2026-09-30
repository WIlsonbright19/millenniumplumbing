import React, { useState } from 'react';
import { ARTICLES, ArticleItem, BUSINESS_INFO } from '../data/content';
import { ArrowUpRight, BookOpen, Clock, Calendar, X, Wrench, PhoneCall } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <section id="insights" className="py-20 sm:py-28 bg-[#FAFAF7] border-t border-[#E7E7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#1B4D3E] mb-2">
              <span>EXPERT ADVICE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-tight text-[#191C1E]">
              Homeowner Guides & Plumbing Insights
            </h2>
            <p className="mt-3 text-base text-[#555C56]">
              Practical advice from Georgia Master Plumbers on protecting your property, lowering water bills, and avoiding catastrophic water damage.
            </p>
          </div>

          <div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#191C1E] bg-white border border-[#D5D5CD] hover:border-[#191C1E] px-4 py-2.5 rounded-full transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#1B4D3E]" />
              <span>Ask a Master Plumber</span>
            </a>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {ARTICLES.map((art) => (
            <article
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-white rounded-3xl p-7 border border-[#E7E7DF] flex flex-col justify-between hover:border-[#1B4D3E]/40 hover:shadow-xs transition-all duration-300 cursor-pointer group"
            >
              <div>
                {/* Visual Header */}
                <div className="h-40 rounded-2xl bg-[#F4F6F4] border border-[#E1E6E1] flex items-center justify-center mb-6 relative overflow-hidden group-hover:bg-[#EBF2EC] transition-colors">
                  <div className="w-16 h-16 rounded-full border border-[#1B4D3E]/20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border border-[#1B4D3E]/40 flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-[#1B4D3E]" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3 text-[11px] font-mono text-[#1B4D3E]">
                    {art.category}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#191C1E] leading-snug group-hover:text-[#1B4D3E] transition-colors">
                  {art.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#555C56] leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F2F2EE] flex items-center justify-between text-xs text-[#8D928A]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{art.date}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#FAFAF7] group-hover:bg-[#EBF2EC] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#191C1E]" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-title"
          >
            <button
              onClick={() => setSelectedArticle(null)}
              type="button"
              aria-label="Close dialog"
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#1B4D3E] mb-2">
              <span>{selectedArticle.category}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <h3 id="article-title" className="font-serif text-2xl sm:text-3xl text-[#191C1E] font-medium leading-tight">
              {selectedArticle.title}
            </h3>

            <div className="flex items-center gap-2 text-xs text-[#8D928A] mt-2 mb-6">
              <span>By {selectedArticle.author}</span>
              <span>·</span>
              <span>{selectedArticle.date}</span>
            </div>

            <div className="prose prose-sm text-[#464B48] leading-relaxed space-y-4 border-t border-[#E7E7DF] pt-4">
              <p className="font-medium text-[#191C1E]">
                {selectedArticle.excerpt}
              </p>
              <p>
                In the humid climate and clay-heavy terrain of Atlanta, residential plumbing infrastructures face distinct challenges. From aging galvanized pipes in historic 1920s bungalows to high water pressure surges along the municipal mains, proactive maintenance is vital.
              </p>
              <p>
                If you suspect issues with low pressure, damp flooring, or inconsistent hot water, never wait until drywall or foundation damage occurs. Our licensed team at Millennium Plumbing provides rapid diagnostic sweeps across Midtown, Buckhead, and Metro Atlanta.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E7E7DF] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#555C56]">
                Need immediate help with this issue?
              </span>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#1B4D3E] hover:bg-[#13392E] text-white text-xs sm:text-sm font-semibold rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call (678) 412-9962</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
