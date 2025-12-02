import svgPaths from "./tape-shelf-background";
import Cassette1 from "./Cassette1";
import Cassette2 from "./Cassette2";
import Cassette3 from "./Cassette3";

interface Song {
  title: string;
  artist: string;
  color: string;
}

interface TapeDisplayProps {
  songs: Song[];
  onSelectTape: (index: number) => void;
  currentSongIndex: number;
}

// Wrapper for Cassette with selection styling
function CassetteItem({ song, index, onClick, isSelected }: { song: Song; index: number; onClick: () => void; isSelected: boolean }) {
  // Cycle through cassettes: Cassette1, Cassette2, Cassette3, Cassette1, Cassette2...
  const CassetteComponent = 
    index % 3 === 0 ? Cassette1 : 
    index % 3 === 1 ? Cassette2 : 
    Cassette3;
  
  return (
    <div 
      className={`h-[126.356px] w-[206.14px] cursor-pointer transition-all duration-200 hover:scale-105 ${isSelected ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''}`}
      onClick={onClick}
    >
      <div className="relative h-[126.356px] w-[206.14px] overflow-clip">
        <CassetteComponent songName={song.title} />
      </div>
    </div>
  );
}

export default function TapeDisplay({ songs, onSelectTape, currentSongIndex }: TapeDisplayProps) {
  return (
    <div className="relative size-full">
      {/* Shelf background */}
      <div className="absolute h-[379px] left-0 rounded-bl-[13px] rounded-br-[14px] rounded-tl-[14px] rounded-tr-[13px] top-0 w-[251px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[13px] rounded-br-[14px] rounded-tl-[14px] rounded-tr-[13px]">
          <img alt="" className="absolute h-[195.58%] left-[-39.65%] max-w-none top-[-19.05%] w-[163.12%]" src="https://raw.githubusercontent.com/khuang67/637-assets/main/394e735c96979271ec8fe821f0d8acb69d2d3a00.png" />
        </div>
      </div>
      
      {/* Dark background overlay */}
      <div className="absolute bg-[#1d1f1d] h-[340px] left-[18px] top-[20px] w-[211px] rounded-[8px]" />
      
      {/* Scrollable cassette container */}
      <div className="absolute left-[22px] top-[22px] h-[335px] w-[206.14px] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex flex-col gap-[8px] pb-[10px]">
          {songs.map((song, index) => (
            <CassetteItem
              key={index}
              song={song}
              index={index}
              onClick={() => onSelectTape(index)}
              isSelected={currentSongIndex === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}