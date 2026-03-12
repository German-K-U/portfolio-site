import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function AnimatedSphere() {
  const meshRef = useRef()

  useFrame((state) => {
    const time = state.clock.elapsedTime
    meshRef.current.rotation.x = time * 0.2
    meshRef.current.rotation.z = time * 0.1
  })

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.2} ref={meshRef}>
        <MeshDistortMaterial
          color="#764ba2"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function FloatingShapes() {
  return (
    <>
      <AnimatedSphere />
      
      {/* Дополнительные плавающие объекты */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1} position={[-3, 2, -2]}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color="#667eea" wireframe />
      </Float>
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5} position={[3, -1, -1]}>
        <torusGeometry args={[0.4, 0.15, 16, 32]} />
        <meshStandardMaterial color="#f093fb" emissive="#f093fb" emissiveIntensity={0.5} />
      </Float>
    </>
  )
}

export default function About3DScene() {
  return (
    <div className="about-3d-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#f093fb" />
        
        <FloatingShapes />
        
        {/* Post-processing эффекты */}
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0.5} intensity={1.5} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
