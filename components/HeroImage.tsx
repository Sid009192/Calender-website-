interface HeroImageProps {
  month: string;
  year: number;
}

export default function HeroImage({ month, year }: HeroImageProps) {
  return (
    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 shadow-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <img
        src="https://picsum.photos/800/300?random=calendar"
        alt="Calendar"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-4 left-4 text-white">
        <h1 className="text-3xl font-bold tracking-wide">
          {month} {year}
        </h1>
      </div>
    </div>
  );
}
