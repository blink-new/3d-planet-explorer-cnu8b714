import { X, Globe, Orbit, Clock } from 'lucide-react'
import { Planet } from '../App'

interface PlanetInfoProps {
  planet: Planet
  onClose: () => void
}

export function PlanetInfo({ planet, onClose }: PlanetInfoProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-2xl border border-gray-700 max-w-md w-full max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-6 border-b border-gray-700">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="flex items-center gap-4">
            <div 
              className="w-16 h-16 rounded-full flex-shrink-0"
              style={{ backgroundColor: planet.color }}
            />
            <div>
              <h2 className="text-2xl font-bold text-white">{planet.name}</h2>
              <p className="text-gray-400">{planet.type}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">About</h3>
            <p className="text-gray-300 leading-relaxed">{planet.description}</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Globe size={16} className="text-blue-400" />
                <span className="text-sm text-gray-400">Size</span>
              </div>
              <span className="text-white font-medium">
                {planet.size}x Earth
              </span>
            </div>

            <div className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Orbit size={16} className="text-purple-400" />
                <span className="text-sm text-gray-400">Distance</span>
              </div>
              <span className="text-white font-medium">
                {planet.distance} AU
              </span>
            </div>

            {planet.moons && (
              <>
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4 rounded-full bg-gray-500" />
                    <span className="text-sm text-gray-400">Moons</span>
                  </div>
                  <span className="text-white font-medium">{planet.moons}</span>
                </div>

                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock size={16} className="text-green-400" />
                    <span className="text-sm text-gray-400">Type</span>
                  </div>
                  <span className="text-white font-medium">{planet.type}</span>
                </div>
              </>
            )}
          </div>

          {/* Interesting Facts */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Interesting Facts</h3>
            <ul className="space-y-2">
              {planet.facts.map((fact, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}