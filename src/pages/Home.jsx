import React from 'react'

function Home() {
  return (
    <div className="relative w-full">
      {/* Bakgrundsbilden */}
      <img src="/webShop-bakground.png" alt="Background" className="w-full object-cover" />
    
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-10">
      <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
        Expert på smarta hem i Sverige</h1>

        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
        Optimera ditt hem idag
      </button>
    </div>
    </div>
  )
}

export default Home

