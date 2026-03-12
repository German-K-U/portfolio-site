import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text, RoundedBox } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function ProjectCard({ project, index, total }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  // Распределяем карточки по кругу
  const angle = (index / total) * Math.PI * 2
  const radius = 3.5
  const x = Math.cos(angle) * radius
  const z = Math.sin(angle) * radius - 2

  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    // Вращение всей карусели
    meshRef.current.rotation.y = time * 0.1 + angle
    
    // Пульация при наведении
    if (hovered) {
      meshRef.current.scale.lerp({ x: 1.1, y: 1.1, z: 1.1 }, 0.1)
    } else {
      meshRef.current.scale.lerp({ x: 1, y: 1, z: 1 }, 0.1)
    }
  })

  return (
    <group position={[x, 0, z]} ref={meshRef}>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* Карточка проекта */}
        <RoundedBox
          args={[2.2, 2.8, 0.15]}
          radius={0.1}
          smoothness={4}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial
            color={hovered ? '#f093fb' : '#667eea'}
            emissive={hovered ? '#f093fb' : '#667eea'}
            emissiveIntensity={hovered ? 0.5 : 0.2}
            roughness={0.3}
            metalness={0.8}
          />
        </RoundedBox>

        {/* Название проекта */}
        <Text
          position={[0, 0.8, 0.1]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        >
          {project.title}
        </Text>

        {/* Описание */}
        <Text
          position={[0, 0, 0.1]}
          fontSize={0.12}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
          textAlign="center"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        >
          {project.description}
        </Text>

        {/* Технологии */}
        <Text
          position={[0, -0.8, 0.1]}
          fontSize={0.1}
          color="#ffd700"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        >
          {project.tech}
        </Text>
      </Float>
    </group>
  )
}

function PortfolioCarousel() {
  const projects = [
    { title: 'E-Shop', description: 'Интернет-магазин с корзиной', tech: 'React • Node.js' },
    { title: 'Dashboard', description: 'Аналитическая панель', tech: 'Vue • D3.js' },
    { title: 'Mobile App', description: 'Приложение для доставки', tech: 'React Native' },
    { title: 'Landing', description: 'Промо страница продукта', tech: 'HTML • GSAP' },
    { title: 'CRM', description: 'Система управления клиентами', tech: 'Angular • Firebase' },
    { title: 'Game', description: 'Браузерная 2D игра', tech: 'Phaser • JS' },
  ]

  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          index={index}
          total={projects.length}
        />
      ))}
    </>
  )
}

export default function Portfolio3DScene() {
  return (
    <div className="portfolio-3d-container">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[0, -5, 0]} intensity={0.5} color="#764ba2" />
        
        <PortfolioCarousel />
        
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0.4} intensity={1.3} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
