import React from 'react';

export default function SectionTitle({
  eyebrow,
  title,
  scriptWord,
  subtitle,
  align = 'center',
  theme = 'light' // 'light' or 'dark'
}) {
  const isDark = theme === 'dark';
  const alignClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end'
  }[align] || 'text-center items-center';

  return (
    <div className={`flex flex-col ${alignClasses} max-w-3xl ${align === 'center' ? 'mx-auto' : ''} mb-10 sm:mb-14`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 border backdrop-blur-sm transition-all shadow-sm"
          style={{
            borderColor: isDark ? 'rgba(212, 175, 55, 0.4)' : 'rgba(122, 15, 27, 0.2)',
            backgroundColor: isDark ? 'rgba(74, 9, 16, 0.7)' : 'rgba(255, 255, 255, 0.8)',
            color: isDark ? '#F5D26B' : '#7A0F1B'
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight ${
        isDark ? 'text-white' : 'text-ink'
      }`}>
        {title}{' '}
        {scriptWord && (
          <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-gold-deep italic stroke-underline text-[#B8901F] inline-block px-1">
            {scriptWord}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className={`mt-3.5 text-base sm:text-lg leading-relaxed ${
          isDark ? 'text-cream-200/90' : 'text-muted'
        } max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
