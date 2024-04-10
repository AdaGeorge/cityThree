import City from "./City";
import * as THREE from "three";

import { Fragment, useEffect, useRef, useState } from "react";
//debug
import { useControls, button } from "leva";

//drei
import { CameraControls, PositionalAudio } from "@react-three/drei";
import Points from "./Points";

const Scene = () => {
  const cameraRef = useRef();
  const lightRef = useRef();

  const [play, setPlay] = useState(false);

  useEffect(() => {
    cameraRef.current.setLookAt(50, 60, 80, 0, 0, -15, true);
    cameraRef.current.mouseButtons = {
      left: undefined,
      right: undefined,
      wheel: undefined,
      middle: undefined,
    };
  }, []);

  const handleNewLocation = (lookAt, lookFrom) => {
    cameraRef.current.setLookAt(...lookFrom, ...lookAt, true);
  };

  const cameraControls = useControls("controls", {
    Fullview: button(() => {
      cameraRef.current.setLookAt(50, 60, 80, 0, 0, -15, true);
    }),
    sound: button(() => {
      setPlay(!play);
    }),
  });
  return (
    <Fragment>
      {play && (
        <PositionalAudio
          url={"/assets/sound/city.mp3"}
          autoplay={true}
          loop
          distance={5}
        />
      )}
      <CameraControls
        ref={cameraRef}
        rotate={cameraControls.horizontalRotation}
        smoothTime={1}
      />
      <directionalLight
        castShadow
        position={[35, 95, 12]}
        color="white"
        intensity={3}
        ref={lightRef}
      />

      <City castShadow />
      <Points
        cameraPosition={[-65, 15, 12]}
        position={[-10, 35, -5]}
        color={"pink"}
        handleNewLocation={handleNewLocation}
      />
      <Points
        cameraPosition={[10, 20, 20]}
        position={[12.5, 42, -27]}
        color={"red"}
        handleNewLocation={handleNewLocation}
      />
    </Fragment>
  );
};

export default Scene;
