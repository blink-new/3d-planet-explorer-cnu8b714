import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { SolarSystem } from './components/SolarSystem'
import { PlanetInfo } from './components/PlanetInfo'
import { LoadingSpinner } from './components/LoadingSpinner'
import { Interface } from './components/Interface'

export interface Planet {
  id: string
  name: string
  size: number
  distance: number
  color: string
  rotationSpeed: number
  orbitSpeed: number
  description: string
  facts: string[]
  type: string
  moons?: number
  texture?: string
  emissive?: string
  emissiveIntensity?: number
}

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null)

  return (
    <div className="h-screen w-full bg-black overflow-hidden relative">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 20, 50], fov: 60 }}
        gl={{ antialias: true, alpha: false }}
        className="absolute inset-0"
      >
        <Suspense fallback={null}>
          <SolarSystem onPlanetClick={setSelectedPlanet} />
        </Suspense>
      </Canvas>

      {/* Loading Screen */}
      <Suspense fallback={<LoadingSpinner />}>
        <div />
      </Suspense>

      {/* UI Interface */}
      <Interface />

      {/* Planet Information Panel */}
      {selectedPlanet && (
        <PlanetInfo 
          planet={selectedPlanet} 
          onClose={() => setSelectedPlanet(null)} 
        />
      )}
    </div>
  )
}

export default App