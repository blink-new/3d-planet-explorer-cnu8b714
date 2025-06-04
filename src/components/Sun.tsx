import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import { Mesh } from 'three'

export function Sun() {
  const sunRef = useRef<Mesh>(null)
  const glowRef = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.005
    }

    if (glowRef.current) {
      // Pulsing glow effect
      const pulse = Math.sin(time * 2) * 0.1 + 1
      glowRef.current.scale.setScalar(pulse)
    }
  })

  return (
    <group>
      {/* Sun core */}
      <Sphere ref={sunRef} args={[3, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#FDB813" />
      </Sphere>

      {/* Sun glow layers */}
      <Sphere ref={glowRef} args={[3.2, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          color="#FFA500" 
          transparent 
          opacity={0.3}
        />
      </Sphere>

      <Sphere args={[3.5, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          color="#FF6B35" 
          transparent 
          opacity={0.2}
        />
      </Sphere>

      <Sphere args={[4, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          color="#FF4500" 
          transparent 
          opacity={0.1}
        />
      </Sphere>
    </group>
  )
}