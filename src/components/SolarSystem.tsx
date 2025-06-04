import { useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useRef } from 'react'
import { Group } from 'three'
import { Planet } from './Planet'
import { Sun } from './Sun'
import { Planet as PlanetType } from '../App'

interface SolarSystemProps {
  onPlanetClick: (planet: PlanetType) => void
}

export const planetsData: PlanetType[] = [
  {
    id: 'mercury',
    name: 'Mercury',
    size: 0.38,
    distance: 8,
    color: '#8C7853',
    rotationSpeed: 0.02,
    orbitSpeed: 0.04,
    type: 'Terrestrial',
    description: 'The smallest planet in our solar system and the closest to the Sun.',
    facts: [
      'No atmosphere or moons',
      'Surface temperatures range from -427°F to 800°F',
      'One day on Mercury equals 59 Earth days'
    ]
  },
  {
    id: 'venus',
    name: 'Venus',
    size: 0.95,
    distance: 12,
    color: '#FFC649',
    rotationSpeed: -0.01,
    orbitSpeed: 0.03,
    type: 'Terrestrial',
    description: 'The hottest planet in our solar system with a thick, toxic atmosphere.',
    facts: [
      'Rotates backwards (retrograde rotation)',
      'Surface pressure is 90 times that of Earth',
      'One day on Venus equals 243 Earth days'
    ]
  },
  {
    id: 'earth',
    name: 'Earth',
    size: 1,
    distance: 16,
    color: '#6B93D6',
    rotationSpeed: 0.02,
    orbitSpeed: 0.025,
    type: 'Terrestrial',
    moons: 1,
    description: 'Our home planet, the only known planet to harbor life.',
    facts: [
      '71% of surface is covered by water',
      'Has one natural satellite - the Moon',
      'Only planet known to support life'
    ]
  },
  {
    id: 'mars',
    name: 'Mars',
    size: 0.53,
    distance: 20,
    color: '#CD5C5C',
    rotationSpeed: 0.018,
    orbitSpeed: 0.02,
    type: 'Terrestrial',
    moons: 2,
    description: 'The Red Planet, known for its rusty color from iron oxide.',
    facts: [
      'Has the largest volcano in the solar system',
      'Two small moons: Phobos and Deimos',
      'A day on Mars is about 24 hours and 37 minutes'
    ]
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    size: 11.2,
    distance: 28,
    color: '#D8CA9D',
    rotationSpeed: 0.04,
    orbitSpeed: 0.015,
    type: 'Gas Giant',
    moons: 95,
    description: 'The largest planet in our solar system, a massive gas giant.',
    facts: [
      'Has a Great Red Spot - a giant storm',
      'Has at least 95 known moons',
      'Could fit all other planets inside it'
    ]
  },
  {
    id: 'saturn',
    name: 'Saturn',
    size: 9.4,
    distance: 36,
    color: '#FAD5A5',
    rotationSpeed: 0.038,
    orbitSpeed: 0.012,
    type: 'Gas Giant',
    moons: 146,
    description: 'Known for its spectacular ring system and low density.',
    facts: [
      'Has the most spectacular ring system',
      'Low density - would float in water',
      'Has at least 146 known moons'
    ]
  },
  {
    id: 'uranus',
    name: 'Uranus',
    size: 4,
    distance: 44,
    color: '#4FD0E7',
    rotationSpeed: 0.03,
    orbitSpeed: 0.009,
    type: 'Ice Giant',
    moons: 27,
    description: 'An ice giant that rotates on its side, making it unique.',
    facts: [
      'Rotates on its side at 98-degree angle',
      'Has faint rings discovered in 1977',
      'Made of water, methane, and ammonia ices'
    ]
  },
  {
    id: 'neptune',
    name: 'Neptune',
    size: 3.9,
    distance: 52,
    color: '#4B70DD',
    rotationSpeed: 0.032,
    orbitSpeed: 0.006,
    type: 'Ice Giant',
    moons: 16,
    description: 'The windiest planet with speeds reaching up to 2,100 km/h.',
    facts: [
      'Windiest planet in the solar system',
      'Takes 165 Earth years to orbit the Sun',
      'Has 16 known moons, largest is Triton'
    ]
  }
]

export function SolarSystem({ onPlanetClick }: SolarSystemProps) {
  const systemRef = useRef<Group>(null)

  useFrame(() => {
    if (systemRef.current) {
      // Gentle rotation of the entire system
      systemRef.current.rotation.y += 0.001
    }
  })

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 0]} intensity={2} />
      
      {/* Space Background */}
      <Stars 
        radius={300} 
        depth={60} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade={true}
      />

      {/* Camera Controls */}
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={10}
        maxDistance={200}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
      />

      {/* Solar System */}
      <group ref={systemRef}>
        {/* Sun */}
        <Sun />

        {/* Planets */}
        {planetsData.map((planetData) => (
          <Planet
            key={planetData.id}
            data={planetData}
            onClick={() => onPlanetClick(planetData)}
          />
        ))}
      </group>
    </>
  )
}