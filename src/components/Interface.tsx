import { Orbit, ZoomIn, RotateCcw } from 'lucide-react'

export function Interface() {
  return (
    <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="pointer-events-auto">
            <h1 className="text-3xl font-bold text-white mb-2">
              3D Planet Explorer
            </h1>
            <p className="text-gray-300">
              Explore our solar system in stunning 3D
            </p>
          </div>
          
          <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg p-4 pointer-events-auto">
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Orbit size={16} />
                <span>Click planets for details</span>
              </div>
              <div className="flex items-center gap-2">
                <ZoomIn size={16} />
                <span>Scroll to zoom</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw size={16} />
                <span>Drag to orbit</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
        <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg p-4 pointer-events-auto">
          <p className="text-white font-medium">Solar System Status</p>
          <p className="text-green-400 text-sm">All planets in stable orbit</p>
        </div>
        
        <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg p-4 pointer-events-auto">
          <p className="text-white font-medium">Scale</p>
          <p className="text-blue-400 text-sm">Approximate (not to scale)</p>
        </div>
      </div>
    </div>
  )
}