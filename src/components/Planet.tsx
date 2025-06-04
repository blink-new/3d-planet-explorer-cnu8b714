import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import { Mesh } from 'three'
import { Planet as PlanetType } from '../App'

interface PlanetProps {
  data: PlanetType
  onClick: () => void
}

export function Planet({ data, onClick }: PlanetProps) {
  const planetRef = useRef<Mesh>(null)
  const orbitRef = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    
    if (planetRef.current) {
      // Planet rotation
      planetRef.current.rotation.y += data.rotationSpeed
    }

    if (orbitRef.current) {
      // Orbital motion
      const angle = time * data.orbitSpeed
      orbitRef.current.position.x = Math.cos(angle) * data.distance
      orbitRef.current.position.z = Math.sin(angle) * data.distance
    }
  })

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    onClick()
  }

  return (
    <group ref={orbitRef}>
      {/* Orbit path visualization */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[data.distance - 0.05, data.distance + 0.05, 64]} />
        <meshBasicMaterial color="#333333" transparent opacity={0.2} />
      </mesh>

      {/* Planet */}
      <group position={[data.distance, 0, 0]}>
        <Sphere
          ref={planetRef}
          args={[data.size, 32, 32]}
          onClick={handleClick}
          onPointerOver={(e) => {
            e.stopPropagation()
            document.body.style.cursor = 'pointer'
          }}
          onPointerOut={() => {
            document.body.style.cursor = 'default'
          }}
        >
          <meshPhongMaterial 
            color={data.color}
            shininess={data.id === 'earth' ? 20 : 5}
            specular={data.id === 'earth' ? '#ffffff' : '#222222'}
          />
        </Sphere>

        {/* Atmospheric glow effect */}
        <Sphere args={[data.size + 0.1, 32, 32]}>
          <meshBasicMaterial 
            color={data.color}
            transparent 
            opacity={0.1}
          />
        </Sphere>

        {/* Planet rings for Saturn */}
        {data.id === 'saturn' && (
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[data.size + 2, data.size + 4, 64]} />
            <meshBasicMaterial 
              color="#D4AF37" 
              transparent 
              opacity={0.6}
              side={2}
            />
          </mesh>
        )}
      </group>
    </group>
  )
}