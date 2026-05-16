import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Stars, Environment } from '@react-three/drei';
import * as THREE from 'three';

function DNAHelix() {
    const groupRef = useRef();
    const nodesRef = useRef();
    const bondsRef = useRef();

    const basePairs = 24; // Reduced from 30
    const radius = 1.3;
    const height = 10;
    const turn = Math.PI * 2 * 1.5;

    const { curve1, curve2, nodeData, bondData } = useMemo(() => {
        const pts1 = [];
        const pts2 = [];
        const nodeData = [];
        const bondData = [];
        
        for (let i = 0; i < basePairs; i++) {
            const t = i / (basePairs - 1);
            const angle = t * turn;
            const y = (t - 0.5) * height;
            
            const p1 = new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
            const p2 = new THREE.Vector3(Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius);
            
            pts1.push(p1);
            pts2.push(p2);
            nodeData.push(p1, p2);
            
            const center = p1.clone().lerp(p2, 0.5);
            const dist = p1.distanceTo(p2);
            const dir = p2.clone().sub(p1).normalize();
            const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
            bondData.push({ pos: center, quat, dist });
        }
        
        return {
            curve1: new THREE.CatmullRomCurve3(pts1),
            curve2: new THREE.CatmullRomCurve3(pts2),
            nodeData,
            bondData
        };
    }, []);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = time * 0.2;
        }

        // Update Node Instances
        nodeData.forEach((pos, i) => {
            dummy.position.copy(pos);
            dummy.scale.setScalar(1);
            dummy.updateMatrix();
            nodesRef.current.setMatrixAt(i, dummy.matrix);
        });
        nodesRef.current.instanceMatrix.needsUpdate = true;

        // Update Bond Instances
        bondData.forEach((data, i) => {
            dummy.position.copy(data.pos);
            dummy.quaternion.copy(data.quat);
            dummy.scale.set(1, data.dist, 1);
            dummy.updateMatrix();
            bondsRef.current.setMatrixAt(i, dummy.matrix);
        });
        bondsRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
            <group ref={groupRef} scale={[0.8, 0.8, 0.8]} rotation={[0, 0, Math.PI / 8]}>
                {/* Backbones */}
                <mesh>
                    <tubeGeometry args={[curve1, 40, 0.08, 6, false]} />
                    <meshStandardMaterial color="#0284c7" metalness={0.8} roughness={0.2} />
                </mesh>
                <mesh>
                    <tubeGeometry args={[curve2, 40, 0.08, 6, false]} />
                    <meshStandardMaterial color="#0284c7" metalness={0.8} roughness={0.2} />
                </mesh>

                {/* Instanced Nodes */}
                <instancedMesh ref={nodesRef} args={[null, null, basePairs * 2]}>
                    <sphereGeometry args={[0.2, 12, 12]} />
                    <meshPhysicalMaterial 
                        transparent 
                        opacity={0.6} 
                        roughness={0} 
                        metalness={0.1} 
                        transmission={0.9} 
                        thickness={0.5} 
                        color="#e0f2fe" 
                    />
                </instancedMesh>

                {/* Instanced Bonds */}
                <instancedMesh ref={bondsRef} args={[null, null, basePairs]}>
                    <cylinderGeometry args={[0.04, 0.04, 1, 6]} />
                    <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={0.5} />
                </instancedMesh>
            </group>
        </Float>
    );
}

function FloatingMolecules() {
    const count = 30; // Reduced from 40
    const mesh = useRef();
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({ 
                t: Math.random() * 100, 
                factor: 10 + Math.random() * 50, 
                speed: 0.005 + Math.random() / 500, 
                xFactor: -12 + Math.random() * 24, 
                yFactor: -12 + Math.random() * 24, 
                zFactor: -8 + Math.random() * 16 
            });
        }
        return temp;
    }, [count]);

    useFrame(() => {
        if (!mesh.current) return;
        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
            t = particle.t += speed;
            const s = Math.max(0.2, Math.cos(t) * 0.5 + 0.5);
            dummy.position.set(
                xFactor + Math.cos((t / 10) * factor),
                yFactor + Math.sin((t / 10) * factor),
                zFactor + Math.cos((t / 10) * factor)
            );
            dummy.scale.setScalar(s);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshStandardMaterial color="#38bdf8" roughness={0.5} metalness={0.5} />
        </instancedMesh>
    );
}

export default function Hero3D() {
    return (
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-primary-900 pointer-events-none">
            <Canvas 
                camera={{ position: [0, 0, 10], fov: 45 }} 
                gl={{ antialias: false, powerPreference: "high-performance" }}
                dpr={1}
            >
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <DNAHelix />
                <FloatingMolecules />
                <Stars radius={50} depth={50} count={600} factor={2} saturation={0} fade speed={0.1} />
            </Canvas>
        </div>
    );
}
