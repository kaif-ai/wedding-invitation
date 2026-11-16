import React from 'react';
import { Icon } from '@iconify/react';

export default function MusicToggle({ isPlaying, onToggle }) {
  return (
    <button
      id="musicToggle"
      className={`music-toggle ${isPlaying ? 'playing' : ''}`}
      onClick={onToggle}
      aria-label="Toggle music"
    >
      <Icon
        icon={isPlaying ? 'solar:music-note-4-bold-duotone' : 'solar:volume-cross-bold-duotone'}
        className="music-icon-svg"
      />
    </button>
  );
}
