import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080B12, 0.025);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Lighting System (Cinematic & Controlled Electric Blue)
    const ambientLight = new THREE.AmbientLight(0x171F2D, 1.5);
    scene.add(ambientLight);

    const blueRimLight = new THREE.PointLight(0x287BFF, 4.5, 20);
    blueRimLight.position.set(3, 3, 4);
    scene.add(blueRimLight);

    const iceWhiteKeyLight = new THREE.DirectionalLight(0xDCE6F2, 2.5);
    iceWhiteKeyLight.position.set(-4, 5, 5);
    scene.add(iceWhiteKeyLight);

    const bottomReflectLight = new THREE.PointLight(0x171F2D, 2.0, 15);
    bottomReflectLight.position.set(0, -5, -2);
    scene.add(bottomReflectLight);

    // 3. 3D Kinetic Sculpture Group
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Metallic Materials
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xDCE6F2,
      metalness: 0.95,
      roughness: 0.12,
      envMapIntensity: 1.5,
    });

    const blueEnergyMaterial = new THREE.MeshStandardMaterial({
      color: 0x287BFF,
      metalness: 0.7,
      roughness: 0.25,
      emissive: 0x1A4FC2,
      emissiveIntensity: 0.6,
      wireframe: false,
    });

    const coreWireMaterial = new THREE.MeshBasicMaterial({
      color: 0x8FA9C9,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    // Outer Ring 1
    const ring1Geo = new THREE.TorusGeometry(2.4, 0.05, 32, 100);
    const ring1 = new THREE.Mesh(ring1Geo, chromeMaterial);
    ring1.rotation.x = Math.PI / 4;
    sculptureGroup.add(ring1);

    // Middle Ring 2
    const ring2Geo = new THREE.TorusGeometry(1.9, 0.045, 32, 100);
    const ring2 = new THREE.Mesh(ring2Geo, blueEnergyMaterial);
    ring2.rotation.y = Math.PI / 3;
    sculptureGroup.add(ring2);

    // Inner Ring 3
    const ring3Geo = new THREE.TorusGeometry(1.4, 0.04, 32, 100);
    const ring3 = new THREE.Mesh(ring3Geo, chromeMaterial);
    ring3.rotation.z = Math.PI / 6;
    sculptureGroup.add(ring3);

    // Central Polyhedral Geometric Core
    const coreGeo = new THREE.IcosahedronGeometry(0.85, 0);
    const coreMesh = new THREE.Mesh(coreGeo, blueEnergyMaterial);
    sculptureGroup.add(coreMesh);

    // Surrounding Geometric Cage
    const cageGeo = new THREE.IcosahedronGeometry(1.1, 1);
    const cageMesh = new THREE.Mesh(cageGeo, coreWireMaterial);
    sculptureGroup.add(cageMesh);

    // Floating Stardust Particles
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 14;
      particlePositions[i + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x8FA9C9,
      size: 0.035,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Mouse Interactive Parallax Tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (event.clientX / innerWidth - 0.5) * 2;
      targetY = (event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 5. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth interpolation for mouse movement
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      // Group rotation
      sculptureGroup.rotation.x = currentY * 0.5 + Math.sin(time * 0.2) * 0.1;
      sculptureGroup.rotation.y = currentX * 0.6 + time * 0.25;

      // Gimbal Rings individual movement
      ring1.rotation.x += delta * 0.4;
      ring1.rotation.y += delta * 0.2;

      ring2.rotation.y -= delta * 0.5;
      ring2.rotation.z += delta * 0.3;

      ring3.rotation.z += delta * 0.6;
      ring3.rotation.x -= delta * 0.2;

      // Pulsing geometric core
      const pulse = 1 + Math.sin(time * 2) * 0.04;
      coreMesh.scale.set(pulse, pulse, pulse);
      coreMesh.rotation.y -= delta * 0.8;
      cageMesh.rotation.y += delta * 0.3;

      // Shift dynamic blue light
      blueRimLight.position.x = 3 + currentX * 2;
      blueRimLight.position.y = 3 - currentY * 2;

      // Particle slow drift
      particles.rotation.y = time * 0.02;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 6. Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      ring3Geo.dispose();
      coreGeo.dispose();
      cageGeo.dispose();
      particleGeo.dispose();
      chromeMaterial.dispose();
      blueEnergyMaterial.dispose();
      coreWireMaterial.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
