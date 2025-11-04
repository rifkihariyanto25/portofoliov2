import React from 'react';

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

// Komponen Lanyard Sederhana - Foto dan Nama Saja
const Lanyard: React.FC<LanyardProps> = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="lanyard-simple-wrapper">
        {/* Tali Lanyard */}
        <div className="lanyard-rope-simple"></div>
        
        {/* ID Card Sederhana */}
        <div className="lanyard-simple-card">
          {/* Clip/Hook */}
          <div className="lanyard-clip-simple"></div>
          
          {/* Photo Besar */}
          <div className="card-photo-large">
            <img 
              src="/Rifki Aditya Hariyanto_Foto.jpg" 
              alt="Rifki Aditya Hariyanto"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Nama Besar */}
          <div className="card-name-large">
            <h3>RIFKI ADITYA</h3>
            <h3>HARIYANTO</h3>
          </div>
          
          {/* Holographic effect overlay */}
          <div className="card-holographic-simple"></div>
        </div>
      </div>
    </div>
  );
}

export default Lanyard;