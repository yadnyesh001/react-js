import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-center overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 left-1/4 top-1/4"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 right-1/4 bottom-1/4"></div>
        <div className="absolute w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob left-1/3 bottom-1/3"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-12 w-full max-w-2xl mx-4 border border-white/20">
        <h1 className="text-5xl font-bold text-white mb-12 text-center tracking-wider">
          Stopwatch
        </h1>
        
        {/* Timer display */}
        <div className="bg-white/5 backdrop-blur rounded-2xl p-8 mb-10">
          <div className="text-7xl font-mono text-center text-white tracking-widest">
            <span className="inline-block w-32 bg-white/5 rounded-lg px-4 py-2">
              {("0" + Math.floor((time/60000) % 60)).slice(-2)}
            </span>
            <span className="text-white/60 mx-2">:</span>
            <span className="inline-block w-32 bg-white/5 rounded-lg px-4 py-2">
              {("0" + Math.floor((time/1000) % 60)).slice(-2)}
            </span>
            <span className="text-white/60 mx-2">:</span>
            <span className="inline-block w-32 bg-white/5 rounded-lg px-4 py-2">
              {("0" + Math.floor((time/10) % 100)).slice(-2)}
            </span>
          </div>
          <div className="text-center mt-4">
            <span className="text-white/60 text-sm tracking-wider">MINUTES</span>
            <span className="text-white/60 text-sm tracking-wider mx-24">SECONDS</span>
            <span className="text-white/60 text-sm tracking-wider">MILLISECONDS</span>
          </div>
        </div>

        {/* Control buttons */}
        <div className="flex gap-6 justify-center">
          {running ? (
            <button 
              onClick={() => {setRunning(false)}}
              className="px-10 py-4 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 shadow-lg hover:shadow-red-500/30"
            >
              Stop
            </button>
          ) : (
            <button 
              onClick={() => {setRunning(true)}}
              className="px-10 py-4 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 shadow-lg hover:shadow-emerald-500/30"
            >
              Start
            </button>
          )}
          <button 
            onClick={() => {setTime(0)}}
            className="px-10 py-4 rounded-full bg-white/10 backdrop-blur text-white font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 shadow-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App