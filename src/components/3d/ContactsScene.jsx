import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text, RoundedBox } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function ContactIcon({ icon, position, label }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    const time = state.clock.elapsedTime
    meshRef.current.rotation.y = Math.sin(time + position[0]) * 0.3
    meshRef.current.rotation.x = Math.cos(time * 0.5) * 0.2
  })

  return (
    <group position={position}>
      <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
        {/* 3D иконка */}
        <RoundedBox
          ref={meshRef}
          args={[1, 1, 0.5]}
          radius={0.15}
          smoothness={4}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial
            color={hovered ? '#f093fb' : '#667eea'}
            emissive={hovered ? '#f093fb' : '#667eea'}
            emissiveIntensity={hovered ? 0.6 : 0.3}
            roughness={0.2}
            metalness={0.9}
          />
        </RoundedBox>

        {/* Иконка */}
        <Text
          position={[0, 0, 0.3]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {icon}
        </Text>

        {/* Подпись */}
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        >
          {label}
        </Text>
      </Float>
    </group>
  )
}

function ContactForm3D() {
  const formRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    const time = state.clock.elapsedTime
    formRef.current.rotation.y = Math.sin(time * 0.3) * 0.1
  })

  return (
    <group position={[0, 0, -3]}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        {/* 3D форма */}
        <RoundedBox
          ref={formRef}
          args={[4, 3, 0.2]}
          radius={0.2}
          smoothness={4}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial
            color={hovered ? '#764ba2' : '#667eea'}
            emissive={hovered ? '#764ba2' : '#667eea'}
            emissiveIntensity={hovered ? 0.4 : 0.2}
            roughness={0.3}
            metalness={0.7}
            transparent
            opacity={0.9}
          />
        </RoundedBox>

        {/* Заголовок */}
        <Text
          position={[0, 1, 0.15]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        >
          Свяжитесь со мной
        </Text>

        {/* Поля формы (декоративные) */}
        <Text
          position={[-1.2, 0.3, 0.15]}
          fontSize={0.12}
          color="#ccc"
          anchorX="left"
          anchorY="middle"
        >
          Имя: _________
        </Text>

        <Text
          position={[-1.2, -0.1, 0.15]}
          fontSize={0.12}
          color="#ccc"
          anchorX="left"
          anchorY="middle"
        >
          Email: _________
        </Text>

        <Text
          position={[-1.2, -0.5, 0.15]}
          fontSize={0.12}
          color="#ccc"
          anchorX="left"
          anchorY="middle"
        >
          Сообщение: _____
        </Text>

        {/* Кнопка */}
        <RoundedBox
          position={[0, -1.1, 0.15]}
          args={[1.5, 0.4, 0.1]}
          radius={0.05}
          smoothness={4}
        >
          <meshStandardMaterial
            color="#f093fb"
            emissive="#f093fb"
            emissiveIntensity={0.5}
          />
        </RoundedBox>

        <Text
          position={[0, -1.1, 0.2]}
          fontSize={0.12}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Отправить
        </Text>
      </Float>
    </group>
  )
}

function ContactScene() {
  const contacts = [
    { icon: '📧', position: [-4, 1, 0], label: 'Email' },
    { icon: '📱', position: [-4, -1.5, 0], label: 'Telegram' },
    { icon: '💼', position: [4, 1, 0], label: 'LinkedIn' },
    { icon: '🐙', position: [4, -1.5, 0], label: 'GitHub' },
  ]

  return (
    <>
      {contacts.map((contact) => (
        <ContactIcon key={contact.label} {...contact} />
      ))}
      <ContactForm3D />
    </>
  )
}

export default function Contacts3DScene() {
  return (
    <div className="contacts-3d-container">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 0, -5]} intensity={0.5} color="#f093fb" />
        
        <ContactScene />
        
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0.5} intensity={1.4} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
