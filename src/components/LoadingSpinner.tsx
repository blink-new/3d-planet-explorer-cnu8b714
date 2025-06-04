export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-20 h-20 border-4 border-gray-700 rounded-full animate-spin border-t-blue-500" />
          
          {/* Inner ring */}
          <div className="absolute inset-2 w-12 h-12 border-4 border-gray-600 rounded-full animate-spin border-t-purple-500 animation-delay-150" />
          
          {/* Center dot */}
          <div className="absolute inset-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <p className="text-white mt-4 text-lg font-medium">
          Initializing Solar System...
        </p>
        <p className="text-gray-400 mt-1 text-sm">
          Loading planets and celestial bodies
        </p>
      </div>
    </div>
  )
}