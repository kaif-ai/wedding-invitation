import React, { useCallback, useRef, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function HeartScratchCard({ title, onComplete, forceReveal }) {
  const canvasRef = useRef(null);
  const cardRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const isDrawing = useRef(false);
  const lastPoint = useRef(null);
  const revealedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const { width, height } = canvas;
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#f3b6c3');
    gradient.addColorStop(0.5, '#e5a0ae');
    gradient.addColorStop(1, '#d88b9c');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.82)';
    ctx.font = '600 13px Montserrat, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('SCRATCH TO REVEAL', width / 2, height / 2);
  }, []);

  const triggerReveal = useCallback(() => {
    if (revealedRef.current) return;
    revealedRef.current = true;
    setIsRevealed(true);
    isDrawing.current = false;
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.transition = 'opacity 0.35s ease';
      canvas.style.opacity = '0';
      window.setTimeout(() => {
        if (canvasRef.current === canvas) canvas.style.display = 'none';
      }, 350);
    }
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      confetti({
        particleCount: 32,
        spread: 70,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
        colors: ['#e5a0ae', '#f3b6c3', '#faf2e6', '#d4af37', '#ffffff', '#c43360'],
        disableForReducedMotion: true,
      });
    }
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    if (forceReveal && !revealedRef.current) triggerReveal();
  }, [forceReveal, triggerReveal]);

  const getPosition = (event) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * canvas.width,
      y: ((event.clientY - rect.top) / rect.height) * canvas.height,
    };
  };

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || revealedRef.current) return;
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    let sampled = 0;
    for (let i = 3; i < data.length; i += 16) {
      sampled += 1;
      if (data[i] < 32) transparent += 1;
    }
    if (transparent / sampled >= 0.18) triggerReveal();
  };

  const handlePointerDown = (event) => {
    if (revealedRef.current) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    isDrawing.current = true;
    lastPoint.current = getPosition(event);
    scratchTo(lastPoint.current);
  };

  const scratchTo = (point) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || !point || revealedRef.current) return;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = Math.max(30, canvas.width * 0.19);
    ctx.beginPath();
    if (lastPoint.current) {
      ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
      ctx.lineTo(point.x, point.y);
    } else {
      ctx.moveTo(point.x, point.y);
      ctx.lineTo(point.x + 0.1, point.y + 0.1);
    }
    ctx.stroke();
    lastPoint.current = point;
    checkScratchPercentage();
  };

  const handlePointerMove = (event) => {
    if (!isDrawing.current || revealedRef.current) return;
    scratchTo(getPosition(event));
  };

  const handlePointerUp = (event) => {
    isDrawing.current = false;
    lastPoint.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    checkScratchPercentage();
  };

  return (
    <div
      ref={cardRef}
      className={`heart-scratch-card ${isRevealed ? 'scratched-pop' : ''}`}
    >
      <div className="heart-border">
        <div className="heart-shape">
          <div className="scratch-base">
            <span className={`scratch-date ${title.length > 5 ? 'long-title' : ''}`}>
              {title}
            </span>
          </div>
          <canvas
            ref={canvasRef}
            className="scratch-canvas heart-canvas"
            width="180"
            height="180"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            aria-label={`Scratch to reveal ${title}`}
          />
        </div>
      </div>
    </div>
  );
}
