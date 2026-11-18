import React, { useEffect, useRef, useState } from 'react';

/**
 * Reliable, high-FPS HTML5 Video Surface.
 * - Guarantees silent muted autoplay across Chrome, Safari, Edge, and mobile browsers.
 * - Plays automatically when visible in viewport (IntersectionObserver) and pauses when scrolled far away.
 * - Smoothly reveals live video over poster once frames decode so there is never a black flicker.
 */
export default function VideoSurface({
  src,
  poster,
  alt = '',
  className = '',
  videoClassName = '',
  shouldPlay = true,
  muted = true,
  loop = true,
  preload = 'metadata',
}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsReady(false);
    setHasError(false);
  }, [src]);

  // Pause offscreen videos far from viewport to keep scrolling silky smooth
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setIsInView(entries[0].isIntersecting);
      },
      { rootMargin: '250px 0px', threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Ensure muted + autoplay on mount and when visible
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src || hasError) return;

    video.defaultMuted = true;
    video.muted = muted;

    if (shouldPlay && isInView) {
      const attempt = video.play();
      if (attempt && typeof attempt.catch === 'function') {
        attempt.catch(() => {
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    } else if (!video.paused) {
      video.pause();
    }
  }, [shouldPlay, isInView, src, hasError, muted]);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden bg-[#1D0407] ${className}`}>
      {/* Poster Fallback Layer */}
      {poster && (
        <img
          src={poster}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover ${videoClassName}`}
        />
      )}

      {/* Live Auto-Running HTML5 Video Layer */}
      {src && !hasError && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={shouldPlay}
          muted={muted}
          loop={loop}
          playsInline
          preload={isInView ? 'auto' : preload}
          onLoadedData={() => setIsReady(true)}
          onCanPlay={() => setIsReady(true)}
          onPlaying={() => setIsReady(true)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isReady ? 'opacity-100' : 'opacity-0'
          } ${videoClassName}`}
        />
      )}
    </div>
  );
}
