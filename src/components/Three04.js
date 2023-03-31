import React,{useState, useRef} from "react";
import {Canvas,useFrame} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import { MeshBasicMaterial } from "three";
const Box=() => {
    const boxRef=useRef();
    const [hover,setHover]=useState(false);
    const [active,setActive]=useState(false);

    useFrame(() => {
        if(hover){
            boxRef.current.rotation.y+=0.01;
            boxRef.current.rotation.x-=0.02;
        }
    })

    return(
        <group ref={boxRef} >
            <mesh
            onPointerOver={() => {
                console.log("dd");
                setHover(true);
            }}
            onPointerOut={() => {
                setHover(false);
            }}
            onClick={() => {
                setActive(!active);
            }}
            >
                <torusGeometry attach="geometry"/>
                <meshBasicMaterial 
                attach="material"
                color={active? "green" :"blue" } />
            </mesh>
        </group>
    )
}

const Three04 = () => {

    return(
            <Canvas
              style={{ height: 500, width: 900 }}
              camera={{ fov:90/* , near:0.1,far:30, */, position: [1,1,1] }}
            >
                <ambientLight intensity={0.2} />
                <pointLight position={[1, 15, 10]} />
                <Box />
                <OrbitControls />
            </Canvas>
    )
};

export default Three04;
