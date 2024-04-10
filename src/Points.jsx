import { MeshWobbleMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { Fragment, useEffect, useRef, useState } from "react";

const Points = ({ cameraPosition, position, color, handleNewLocation }) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  const circle = useRef();

  useFrame((_, delta) => {
    circle.current.rotation.x += delta;
  });
  return (
    <Fragment>
      {/*Primer Punto*/}
      <mesh
        position={position}
        ref={circle}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={() => handleNewLocation(position, cameraPosition)}
      >
        <sphereGeometry args={[2, 64, 64]} />
        <MeshWobbleMaterial color={color} speed={1.2} factor={3} />
      </mesh>
    </Fragment>
  );
};

export default Points;
