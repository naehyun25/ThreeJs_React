import React from "react";
import {Canvas} from '@react-three/fiber';

const Three01 = () => {
// fiber를 쓰고 있기 때문에 대문자-> 소문자로 바꿔준다. (docs랑 fiberdocs 비교하면서 소문자로 바꿔줘야 함)
    return(
        <div>
            <Canvas>
                {/* 조명 */}
                    {/*1. 태양광->그림자없음 */}
                <ambientLight intensity={0.1}></ambientLight>
                    {/* 2.방향이 있는 빛-> 그림자있음:색도있음 */}
                <directionalLight color="red" position={[0,0,5]} ></directionalLight>
                {/* mesh-> object 그룹 */}
                <mesh>
                    <boxGeometry></boxGeometry>
                    <meshStandardMaterial></meshStandardMaterial>

                </mesh>
            </Canvas>
        </div>
    )
};

export default Three01;
