import React,{useRef} from "react";
import {Canvas,useFrame} from '@react-three/fiber';

const AnimateBox = () => {
    // react 컴포넌트에 객체화시켜서 함수한번더 사용하려고 useref를 사용함,  ref를 프롭으로 전달
    const ref=useRef();
    useFrame(({clock}) => {//clock=> 객체라서 객체로 부름
        //elapsedTime=>경과시간 , ()붙여서 method로 사용
        const a = clock.getElapsedTime();
        ref.current.rotation.x=a;

    })
    return(
        <mesh ref={ref}>
            {/* <ringGeometry args={[2,1,2]}/> */}
            <boxGeometry args={[1,1.5,1]}></boxGeometry>
            {/* <meshPhongMaterial color="blue"></meshPhongMaterial> */}
            <meshBasicMaterial ></meshBasicMaterial>
        </mesh>
    )
}

const Three02 = () => {

    return(
        <div>
            <Canvas>
            <ambientLight intensity={0.1}></ambientLight>
            <directionalLight color="red" position={[0,0,5]} ></directionalLight>
            <AnimateBox/>
            </Canvas>
        </div>
    )
};

export  {Three02, AnimateBox};
