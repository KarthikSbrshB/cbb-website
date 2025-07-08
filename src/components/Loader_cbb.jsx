import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white/10 backdrop-blur-sm">
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 flex items-center justify-center animate-spin">
          <img 
            src="/src/assets/img/outer-ring.png" 
            alt="Loading ring" 
            className="w-full h-full object-contain"
            style={{ 
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))',
              animation: 'spin 12s linear infinite'
            }}
          />
        </div>
        
        {/* Static CB text in center */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img 
            src="/src/assets/img/cb-text.png" 
            alt="CB" 
            className="w-28 h-28 object-contain"
            style={{ 
              filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15))'
            }}
          />
        </div>
        
        {/* Optional pulsing effect for the center */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div 
            className="w-28 h-28 rounded-full bg-white/20 animate-pulse"
            style={{
              animation: 'pulse 12s ease-in-out infinite'
            }}
          />
        </div>
      </div>
      
      {/* Loading text */}
      <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
        <p className="text-slate-600 font-medium text-lg tracking-wide animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;