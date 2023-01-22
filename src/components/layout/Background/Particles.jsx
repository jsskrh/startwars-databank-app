import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = (props) => {
  const mesh = useRef();
  // const cross = useLoader(TextureLoader, "/images/plus.png");

  const particlesCount = 5000;
  const positionArr = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    // positionArr[i] = Math.random();
    // positionArr[i] = Math.random() - 0.5;
    // positionArr[i] = (Math.random() - 0.5) * 5;
    // positionArr[i] = (Math.random() - 0.5) * (Math.random() * 5);
    positionArr[i] = (Math.random() - 0.5) * (Math.random() * 15);
  }

  function randSign() {
    return Math.random() >= 0.5 ? 1 : -1;
  }

  const randY = (randSign() * Math.random()) / 10;
  const randX = (randSign() * Math.random()) / 10;

  useFrame(({ clock, pointer }) => {
    const elapsedTime = clock.getElapsedTime();
    mesh.current.rotation.y = randY * elapsedTime * 0.1;
    mesh.current.rotation.x = randX * elapsedTime * 0.1;
    if (pointer.x !== 0) {
      mesh.current.rotation.x = -pointer.y * (elapsedTime * 0.0024);
      mesh.current.rotation.y = -pointer.x * (elapsedTime * 0.0024);
    }
  });

  return (
    <points {...props} ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positionArr.length / 3}
          array={positionArr}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.005}
        /* map={cross} */ transparent={true}
        color={props.color}
      />
      {/* <Rig /> */}
    </points>
  );
};

export default Particles;
