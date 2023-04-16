import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Door() {
  const PATH = "/static/textures/wall/";

  const props = useTexture({
    map: PATH + "baseColor.jpg",
    normalMap: PATH + "normal.jpg",
    roughnessMap: PATH + "roughness.jpg",
    aoMap: PATH + "ao.jpg",
  });

  return (
    <mesh castShadow={true} rotation-y={Math.PI / 12}>
      <sphereGeometry args={[1, 34, 64]} />
      <meshStandardMaterial {...props} side={DoubleSide} />
    </mesh>
  );
}
