import React from 'react';

interface VoiceCardProps {
  bgImage: string;
  title: string;
  description: string;
  badge: string;
}

const VoiceCard: React.FC<VoiceCardProps> = ({ bgImage, title, description, badge }) => {
  return (
    <div
      className="relative w-80 h-48 rounded-lg bg-cover bg-center overflow-hidden shadow-md"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-4">
        <button
          className="bg-black text-white rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center shadow-lg hover:bg-gray-200 mr-4"
          aria-label="Play"
        >
          ▶
        </button>
        <div className="flex flex-col">
          <span className="bg-gray-800 text-white text-sm px-2 py-1 rounded mb-2 self-start">{badge}</span>
          <h2 className="text-white font-semibold text-lg">{title}</h2>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VoiceCard;