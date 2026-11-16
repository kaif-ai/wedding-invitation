import React, { useRef, useState, useEffect } from 'react';
import invitationData from './data/invitationData';
import HeroSection from './components/HeroSection';
import MusicToggle from './components/MusicToggle';
import DetailsSection from './components/DetailsSection';
import CountdownSection from './components/CountdownSection';
import EventsSection from './components/EventsSection';
import RsvpSection from './components/RsvpSection';
import ComplimentsSection from './components/ComplimentsSection';
import ThankYouSection from './components/ThankYouSection';
import Footer from './components/Footer';

export default function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Play audio on invitation open
  const handleOpenInvitation = () => {
    setHasStarted(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log('Audio autoplay prevented:', err);
      });
    }
  };

  // Toggle music playback
  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  // Dynamic document title
  useEffect(() => {
    if (invitationData.bride?.fullName && invitationData.groom?.fullName) {
      document.title = `${invitationData.bride.fullName} & ${invitationData.groom.fullName} | Wedding Invitation`;
    }
  }, []);

  // Scroll animations with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible', 'show');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const animatedElements = document.querySelectorAll('.scroll-animate, .stagger-anim');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Floating heart effect on tap/click
  useEffect(() => {
    const handleTap = (e) => {
      // Don't spawn heart on clickable buttons/canvases if preferred, or spawn everywhere
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = `${clientX}px`;
      heart.style.top = `${clientY}px`;
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 1000);
    };

    window.addEventListener('click', handleTap);
    return () => window.removeEventListener('click', handleTap);
  }, []);

  return (
    <>
      {/* Background Audio */}
      <audio
        ref={audioRef}
        id="bgMusic"
        loop
        preload="auto"
        playsInline
      >
        <source src={invitationData.media.audio} type="audio/mpeg" />
      </audio>

      {/* Floating Music Button (appears once invitation is opened) */}
      {hasStarted && (
        <MusicToggle isPlaying={isPlaying} onToggle={toggleMusic} />
      )}

      {/* Hero Section */}
      <HeroSection
        videoSrc={invitationData.media.curtainVideo}
        bismillah={invitationData.bismillah}
        onOpenInvitation={handleOpenInvitation}
      />

      {/* Details Section */}
      <DetailsSection
        bismillah={invitationData.bismillah}
        invitationText={invitationData.invitationText}
        bride={invitationData.bride}
        groom={invitationData.groom}
        hadith={invitationData.hadith}
      />

      {/* Countdown Section with Heart Scratch Cards */}
      <CountdownSection
        videoSrc={invitationData.media.countdownVideo}
        bgImage={invitationData.media.backgroundImage}
        scratchCards={invitationData.scratchAndCountdown.cards}
        discoverText={invitationData.scratchAndCountdown.discoverText}
        revealButtonText={invitationData.scratchAndCountdown.revealButtonText}
        targetDate={invitationData.scratchAndCountdown.targetDate}
        displayDate={invitationData.scratchAndCountdown.displayDate}
      />

      {/* Events & Venues Section */}
      <EventsSection events={invitationData.events} />

      {/* RSVP, Compliments & Thank You wrapped in decorative background */}
      <div
        style={{
          background: `linear-gradient(to bottom, #fffbf7 0%, rgba(255, 255, 255, 0.65) 120px, rgba(255, 255, 255, 0.65) 100%), url(${invitationData.media.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* RSVP Section */}
        <RsvpSection rsvpData={invitationData.rsvp} />

        {/* Best Compliments Section */}
        <ComplimentsSection compliments={invitationData.compliments} />

        {/* Thank You Section */}
        <ThankYouSection thankYou={invitationData.thankYou} />
      </div>

      {/* Footer */}
      <Footer footer={invitationData.footer} />
    </>
  );
}
