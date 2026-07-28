import {useState , Suspense} from 'react'
import {OrbitControls, Preload, useGLTF, Html, OrthographicCamera} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import model from '../../assets/models/gaming_guy_room.glb'
import { FcHome ,FcAbout } from "react-icons/fc";

import * as THREE from 'three'
import Loader from '../Loader';
const CityEnviroment = () => {
const models = useGLTF(model)
  return (
      <group>
        <primitive
        object={models.scene}
        scale={[-2,-2,-1]}
        position-y={30}
        rotation-y={25.2}
        rotation-x={28.5}
        rotation-z={-6.3}
        position-z={-500}
        position-x={100}
        >
    
        </primitive>
      </group>
  )
}


export const Person = ()=>{
    const [isDragging , setIsDragging] = useState(false)
    ///vector3 [x,y,z][12]
    const floorType = new THREE.Plane(new THREE.Vector3(0,1,0) , 0)
    return(
      <div className=' h-144  cursor-grabbing'>
          <Canvas dpr={[0,2]} camera={{position:[-3,0.5,30]}}>
            <directionalLight position={[1,1,1]} intensity={1}/>
            <hemisphereLight groundColor="#000000" intensity={1}/>
            <Suspense fallback={<Loader />}>
                <OrthographicCamera makeDefault zoom={1} position={[40,-30,800]}/>
                <OrbitControls minZoom={1} maxZoom={5} enabled={!isDragging}/>
                <CityEnviroment setIsDragging={setIsDragging} floorType={floorType}/>
            </Suspense>
            <Preload all/>
        </Canvas>
       
      </div>
    )
}