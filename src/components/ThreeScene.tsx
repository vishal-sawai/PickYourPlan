'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useTheme } from '@/context/ThemeContext'

export function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Create floating spheres with gradient materials
    const spheres: THREE.Mesh[] = []
    const sphereCount = 5

    for (let i = 0; i < sphereCount; i++) {
      const geometry = new THREE.SphereGeometry(1, 32, 32)
      const material = new THREE.MeshPhongMaterial({
        color: theme === 'dark' ? 0x6366f1 : 0x818cf8,
        shininess: 100,
        opacity: 0.7,
        transparent: true,
      })
      
      const sphere = new THREE.Mesh(geometry, material)
      sphere.position.set(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 15
      )
      scene.add(sphere)
      spheres.push(sphere)
    }

    // Add ambient and point lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)

    camera.position.z = 5

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      spheres.forEach((sphere, index) => {
        sphere.rotation.x += 0.01 * (index + 1)
        sphere.rotation.y += 0.01 * (index + 1)
        sphere.position.y = Math.sin(Date.now() * 0.001 + index) * 0.5
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [theme])

  return <div ref={containerRef} className="absolute inset-0 -z-10" />
} 