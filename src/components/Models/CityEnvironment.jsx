import React from 'react'
import {useState, Suspense} from "react";
import {OrbitControls, Preload, useGLTF, Html, OrthographicCamera} from '@react-three/drei'
import {Canvas} from "@react-three/fiber";
import cityModel from "../../assets/models/lowpoly_city_in_the_night.glb";
import { FcHome ,FcAbout } from "react-icons/fc";
import Loader from '../Loader';
import * as THREE from "three";


const CityEnvironment = () => {
const models = useGLTF(cityModel)
    return (
       <group>
           <primitive
               object={models.scene}
               scale={[-6,-8,-6]}
               position-y={-50}
               rotation-y={33}
               rotation-x={3.3}
               rotation-z={-6}
               position-z={-120}
               position-x={40}
           >
               <Html position={[70,5 ,3]} className='w-96' dir='rtl'>
                   <h1 className='text-white text-3xl font-extrabold whitespace-nowrap'>Welcome to my user environment</h1>
               </Html>
               <Html position={[88,4,-3]}>
                   <a href="/main">
                       <FcHome className='text-center text-4xl hover:text-6xl transition delay-300'/>
                   </a>
               </Html>
               <Html position={[88,4,-12]}>
                   <a href="/about">
                       <FcAbout className='text-center text-4xl hover:text-6xl transition delay-300'/>
                   </a>
               </Html>

           </primitive>
       </group>
    )
}


export const MyWorkSpace = ()=>{
    const [isDragging , setIsDragging] = useState(false)
    const floorType = new THREE.Plane(new THREE.Vector3(0,1,0) , 0)
    return(
        <div className='w-full h-screen bg-gradient-to-r from-blue-950 via-blue-700 to-blue-300 bg-blue-400 cursor-grabbing'>
            <Canvas dpr={[0,2]} camera={{position:[-3,0.5,30]}}>

                <Suspense fallback={<Loader />}>
                    <OrthographicCamera makeDefault zoom={3} position={[2,-100,900]}/>
                    <OrbitControls minZoom={1} maxZoom={5} enabled={!isDragging}/>
                    <CityEnvironment setIsDragging={setIsDragging} floorType={floorType}/>
                </Suspense>
                <Preload all/>
            </Canvas>

        </div>
    )
}