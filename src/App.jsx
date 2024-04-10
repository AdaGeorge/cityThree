import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

function App() {
  return (
    <div className="container">
      <Canvas
        shadows
        camera={{
          fov: 75,
          near: 0.01,
          far: 1000,
          position: [33, 35, 45],
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
