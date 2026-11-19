import React, { useRef, useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import confetti from 'canvas-confetti';
import valimaData from '../data/valimaData';

export default function HeroSection({
  videoSrc,
  bismillah,
  onOpenInvitation,
}) {
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showNames, setShowNames] = useState(false);

  const handleOpen = () => {
    setHasStarted(true);
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.currentTime = 0;
      video.play().catch(() => {});
    }

    // Celebrate with confetti - refined palette
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.55 },
      colors: ['#d4b884', '#c99a9a', '#faf7f0', '#b8965c', '#fdfcf7', '#8a9a7f'],
      scalar: 0.9,
      drift: 0.1,
    });

    if (onOpenInvitation) {
      onOpenInvitation();
    }

    // Reveal text overlay
    setTimeout(() => {
      setIsRevealed(true);
    }, 600);

    // Reveal names after text
    setTimeout(() => {
      setShowNames(true);
    }, 1400);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.currentTime > 1.2 && !isRevealed) {
      setIsRevealed(true);
      setTimeout(() => setShowNames(true), 800);
    }
  };

  // Fade out play overlay
  useEffect(() => {
    if (hasStarted) {
      const overlay = document.getElementById('playOverlay');
      if (overlay) overlay.classList.add('faded');
    }
  }, [hasStarted]);

  return (
    <section className="hero-section">
      <div className="video-container">
        <video
          ref={videoRef}
          id="curtainVideo"
          muted
          playsInline
          preload="auto"
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
          onTimeUpdate={handleTimeUpdate}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {!hasStarted && (
          <div id="playOverlay" className="overlay" onClick={handleOpen}>
            <div className="play-button">
              <Icon icon="majesticons:hand-click-line" className="hand-icon" />
            </div>
            <p className="tap-text">Open Invitation</p>
          </div>
        )}

        <div
          id="textOverlay"
          className={`text-overlay ${isRevealed ? 'reveal' : ''}`}
        >
          <div className="hero-blessing">
            <p className="hero-bismillah" lang="ar" dir="rtl">{bismillah.arabic}</p>
            <p className="hero-bismillah-translation">{bismillah.translation}</p>
            <span className="hero-divider" aria-hidden="true" />
            <p className="hero-verse" lang="ar" dir="rtl">
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
            </p>
            <blockquote className="hero-verse-translation">
              “And among His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you compassion and mercy.”
            </blockquote>
            <p className="hero-verse-reference">Surah Ar-Rum · 30:21</p>
          </div>

          {/* Couple names - elegant reveal */}
          {showNames && (
            <>
              <h1 className="hero-names" aria-label={`${valimaData.bride.fullName} and ${valimaData.groom.fullName}`}>
                {valimaData.bride.fullName} <span className="hero-ampersand">&</span> {valimaData.groom.fullName}
              </h1>
            </>
          )}
        </div>

        <a
          href="#detailsSection"
          className={`scroll-down-box ${isRevealed ? 'show' : ''}`}
        >
          <span className="scroll">Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </a>
      </div>
    </section>
  );
}