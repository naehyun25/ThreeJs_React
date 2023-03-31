import "../App.css"
//suspense : react v18이상에서 비동기(통신비동기말고) 지원-hook아님(그냥기능, 클래스형, 함수형(훅만가능)모두한테 가능)
import React,{useRef,Suspense} from "react";
import {Canvas,useFrame, useLoader,} from '@react-three/fiber';
import {Environment, OrbitControls, Html, useProgress} from '@react-three/drei';
//Environment:환경설정, orbitControls 마우스로 조정가능한거
//html, useProgress 외부 이미지 로더중 프로그레스를 추가하기위한모듈(프로그레스 로드되는동안 로드중이라고 알려줌?)
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
//로드중입니다 출력할 함수
function Loader(){
    const {progress}=useProgress();
    return <Html center>{progress}%로딩완료</Html>
}
//모델을 컴포넌트화해서 넣을것->친칠라
const Model=() => {
    const gltf=useLoader(GLTFLoader,"./chinchilla/scene.gltf");
    return <primitive object={gltf.scene} scale={8} rotation={[0,0,0]} position={[0,-3.0,0]}/>;
}

const Three03 = () => {
    const handleCamera = (prop) => {
        console.log("handleCamera",prop.camera);
    }
    return(
        <div>
            <Canvas 
            onCreated={handleCamera}
            camera={{
                position:[2,0,5],
                fov:70, near:0.2,far:10
            }}
            >{/* //scene,camera내장되어있음 */}
                {/* canvas가 로딩이되어야 suspense를 읽을 수 있음 */}
                <Suspense fallback={<Loader/>}>

                <Model/>
                <Environment preset="forest" blur={0.1} background/>
                <OrbitControls/>
                </Suspense>
            </Canvas>
        </div>
    )
};

export default Three03;
