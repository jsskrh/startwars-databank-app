import React from "react";
import { Canvas } from "@react-three/fiber";

import Particles from "./Particles";

function Scene({ color }) {
  return (
    <Canvas className="scene">
      <Particles color={color} />
      <pointLight position={[2, 3, 4]} color={0xffffff} intensity={0.1} />
      <perspectiveCamera position={[0, 0, 2]} />
    </Canvas>
  );
}

export default Scene;
