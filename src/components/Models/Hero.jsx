import {useState, Suspense} from 'react'
import {OrbitControls, Preload, useGLTF, Html, OrthographicCamera} from '@react-three/drei'
import {Canvas} from "@react-three/fiber";
import * as THREE from "three";
import HeroModel from "../../assets/models/computer_and_laptop.glb";
import Loader from "../Loader.jsx";


const Hero = () => {
    const model = useGLTF(HeroModel)

    return (
        <group>
            <primitive object={model.scene}
                       scale={[-5, -8, -4]}
                       position-y={-40}
                       rotation-x={28.6}
                       rotation-y={25.3}
                       rotation-z={-6.3}
                       position-z={-400}
                       position-x={100}
            >

            </primitive>
        </group>
    )
}

export const HeroSection = () => {
    const [isDragging, setIsDragging] = useState(false)
    const floorType = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
    return (
        <div className="h-screen cursor-grabbing">
            <Canvas camera={{position:[4, 0.1, 1, 2]}} dpr={[1,2]} shadows>
                <directionalLight position={[2, 1, 10]} intensity={0.5} castShadow />
                <ambientLight intensity={0.5} color={'yellow'} />
                <hemisphereLight color={'blue'} intensity={1} />
                <pointLight color={'white'} position={[1, 3, 20]} intensity={10} />
                <mesh  rotation={[-Math.PI / 2.0, 0]}
                       position={[0, -0, 1, 0]}
                       receiveShadow
                >

                    <meshPhongMaterial
                        attach="material"
                        color="#000"
                        side={THREE.DoubleSide}
                        receiveShadow
                    />

                </mesh>

                <Suspense fallback={<Loader />}>
                    <OrthographicCamera makeDefault zoom={2} position={[-100, 30, 800]} />
                    <OrbitControls minZoom={1} maxZoom={5} enabled={!isDragging} />
                    <Hero setIsDragging={setIsDragging} floorType={floorType} />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}