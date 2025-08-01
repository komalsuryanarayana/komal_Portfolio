import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export function Scene3D() {
  return (
    <Canvas className="h-[400px]">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Sphere args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#d5b4ed"
          attach="material"
          distort={0.5}
          speed={3}
          roughness={0}
        />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}
