

function Home() {
  return (
    <div>
    <div className="relative w-full">
      {/* Bakgrundsbilden */}
      <img src="/webShop-bakground.png" alt="Background" className="w-full object-cover" />
    
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-10">
      <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
        Expert på smarta hem i Sverige</h1>

        <button className="bg-white text-black px-8 py-2 rounded-full hover:bg-brandturkos hover:text-white transition">
        Optimera ditt hem idag
      </button>
    </div>
    </div>
   <div className="text-center px-4 max-w-6xl mx-auto mt-20">
    <h1 className="text-4xl font-bold mb-10">Upptäck vad Techflow Innovation kan göra för dig</h1>
    <p className="text-lg">Gör ditt hem smartare med Techflow Innovations avancerade smarta hub. Den fungerar som hjärtat i ditt smarta hem och kopplar samman alla dina enheter – från belysning och uppvärmning till säkerhetssystem och röstassistenter. Med en stabil och säker uppkoppling ser huben till att dina enheter kommunicerar sömlöst med varandra, oavsett märke eller plattform. Skapa automatiserade rutiner som förenklar din vardag och anpassa ditt hem precis som du vill ha det.</p>

    <img src="Variant2.png" alt="Smarthub" className="mt-10 rounded-2xl" />

    <p className="text-lg mt-10">Gör ditt hem smartare med Techflow Innovations avancerade smarta hub. Den fungerar som hjärtat i ditt smarta hem och kopplar samman alla dina enheter – från belysning och uppvärmning till säkerhetssystem och röstassistenter. Med en stabil och säker uppkoppling ser huben till att dina enheter kommunicerar sömlöst med varandra, oavsett märke eller plattform. Skapa automatiserade rutiner som förenklar din vardag och anpassa ditt hem precis som du vill ha det.</p>
    </div>
    </div>
  )
}

export default Home

