import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text, MeshDistortMaterial } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function ServiceCard({ title, icon, position, index }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    const time = state.clock.elapsedTime
    meshRef.current.rotation.y = Math.sin(time / 3 + index) * 0.2
    meshRef.current.position.y = position[1] + Math.sin(time + index * 2) * 0.1
  })

  return (
    <group position={position}>
      <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* 3D карточка */}
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <boxGeometry args={[2.5, 1.8, 0.1]} />
          <MeshDistortMaterial
            color={hovered ? '#f093fb' : '#667eea'}
            attach="material"
            distort={hovered ? 0.3 : 0.1}
            speed={3}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
        
        {/* Текст на карточке */}
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        >
          {title}
        </Text>
        
        {/* Иконка */}
        <Text
          position={[0, -0.4, 0.06]}
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {icon}
        </Text>
      </Float>
    </group>
  )
}

function ServicesCards() {
  const services = [
    { title: 'Web Dev', icon: '💻', position: [-3, 1, 0] },
    { title: 'Mobile', icon: '📱', position: [0, 2, 0] },
    { title: 'Design', icon: '🎨', position: [3, 1, 0] },
    { title: 'SEO', icon: '🚀', position: [-1.5, -1, 0] },
    { title: 'Support', icon: '⚙️', position: [1.5, -1, 0] },
  ]

  return (
    <>
      {services.map((service, index) => (
        <ServiceCard key={service.title} {...service} index={index} />
      ))}
    </>
  )
}

export default function Services3DScene() {
  return (
    <div className="services-3d-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#764ba2" />
        
        <ServicesCards />
        
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0.5} intensity={1.2} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
