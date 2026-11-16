import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import confetti from 'canvas-confetti';

export default function HeroSection({
  videoSrc,
  bismillah,
  onOpenInvitation,
}) {
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleOpen = () => {
    setHasStarted(true);
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.currentTime = 0;
      video.play().catch(() => {});
    }

    // Celebrate with confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#e5a0ae', '#f3b6c3', '#faf2e6', '#d4af37', '#ffffff', '#c43360'],
    });

    if (onOpenInvitation) {
      onOpenInvitation();
    }

    // Reveal names overlay after a brief delay
    setTimeout(() => {
      setIsRevealed(true);
    }, 1200);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.currentTime > 1.2 && !isRevealed) {
      setIsRevealed(true);
    }
  };

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
