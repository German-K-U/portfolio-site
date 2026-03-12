import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

function ParticleField(props) {
  const ref = useRef()
  
  // Генерируем 5000 частиц в сфере
  const sphere = useMemo(() => 
    random.inSphere(new Float32Array(5000), { radius: 1.5 }), 
    []
  )

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
    
    // Пульсация частиц
    const time = state.clock.elapsedTime
    ref.current.scale.setScalar(1 + Math.sin(time * 0.5) * 0.1)
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#667eea"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  )
}

export default function Home3DBackground() {
  return (
    <div className="home-3d-background">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: 'transparent' }}
      >
        <ParticleField />
      </Canvas>
    </div>
  )
}
