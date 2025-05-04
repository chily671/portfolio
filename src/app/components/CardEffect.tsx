// components/CardEffect.tsx

const CardEffect = () => {
    return (
      <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-2 flex items-center justify-center space-x-2 animate-rotate">
          {/* Card 1 */}
          <div className="relative w-24 h-36 border-2 border-[#8ef9fc] rounded-lg overflow-hidden transform translate-z-[calc(50px+150px)]">
            <div className="w-full h-full bg-gradient-to-r from-[#8ef9fc] to-[#8efbcc] opacity-50"></div>
          </div>
  
          {/* Card 2 */}
          <div className="relative w-24 h-36 border-2 border-[#8efcc9] rounded-lg overflow-hidden transform translate-z-[calc(50px+150px)]">
            <div className="w-full h-full bg-gradient-to-r from-[#8efcc9] to-[#8efb9d] opacity-50"></div>
          </div>
  
          {/* Card 3 */}
          <div className="relative w-24 h-36 border-2 border-[#8efc9d] rounded-lg overflow-hidden transform translate-z-[calc(50px+150px)]">
            <div className="w-full h-full bg-gradient-to-r from-[#8efc9d] to-[#8efb72] opacity-50"></div>
          </div>
  
          {/* Card 4 */}
          <div className="relative w-24 h-36 border-2 border-[#d7fc8e] rounded-lg overflow-hidden transform translate-z-[calc(50px+150px)]">
            <div className="w-full h-full bg-gradient-to-r from-[#d7fc8e] to-[#d7fc5c] opacity-50"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardEffect;
  