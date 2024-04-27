/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/BusinessMan.glb -o src/components/BusinessMan.jsx -r public 
*/

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useGraph } from "@react-three/fiber";
import { SkeletonUtils } from "three-stdlib";

export function BusinessMan({
  hairColor = "#3b3025",
  topColor = "#ffffff",
  jacketColor = "#191970",
  bottmColor = "#ffffff",
  ...props
}) {
  const group = useRef();
  const { scene, materials, animations } = useGLTF("/models/BusinessMan.glb");

  // Skinned meshes cannot be re-used in threejs without cloning them
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  // useGraph creates 2 flat object collections for nodes and materials
  const { nodes } = useGraph(clone);

  const { actions } = useAnimations(animations, group);

  const [animation, setAnimation] = useState("CharacterArmature|Idle");

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => actions[animation].fadeOut(0.5);
  }, [animation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group
            name="CharacterArmature"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <primitive object={nodes.Root} />
          </group>
          <skinnedMesh
            name="Suit_Legs"
            geometry={nodes.Suit_Legs.geometry}
            material={materials.Suit}
            skeleton={nodes.Suit_Legs.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <meshStandardMaterial color={bottmColor} />
          </skinnedMesh>
          <skinnedMesh
            name="Suit_Feet"
            geometry={nodes.Suit_Feet.geometry}
            material={materials.Black}
            skeleton={nodes.Suit_Feet.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <group
            name="Suit_Body"
            position={[0, 0.007, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <skinnedMesh
              name="Suit_Body_1"
              geometry={nodes.Suit_Body_1.geometry}
              material={materials.Suit}
              skeleton={nodes.Suit_Body_1.skeleton}
            >
              <meshStandardMaterial color={jacketColor} />
            </skinnedMesh>
            <skinnedMesh
              name="Suit_Body_2"
              geometry={nodes.Suit_Body_2.geometry}
              material={materials.White}
              skeleton={nodes.Suit_Body_2.skeleton}
            >
              <meshStandardMaterial color={topColor} />
            </skinnedMesh>
            <skinnedMesh
              name="Suit_Body_3"
              geometry={nodes.Suit_Body_3.geometry}
              material={materials.Tie}
              skeleton={nodes.Suit_Body_3.skeleton}
            />
            <skinnedMesh
              name="Suit_Body_4"
              geometry={nodes.Suit_Body_4.geometry}
              material={materials.Skin}
              skeleton={nodes.Suit_Body_4.skeleton}
            />
          </group>
          <group name="Suit_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Suit_Head_1"
              geometry={nodes.Suit_Head_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Suit_Head_1.skeleton}
            />
            <skinnedMesh
              name="Suit_Head_2"
              geometry={nodes.Suit_Head_2.geometry}
              material={materials.Hair}
              skeleton={nodes.Suit_Head_2.skeleton}
            >
              <meshStandardMaterial color={hairColor} />
            </skinnedMesh>
            <skinnedMesh
              name="Suit_Head_3"
              geometry={nodes.Suit_Head_3.geometry}
              material={materials.Eyebrows}
              skeleton={nodes.Suit_Head_3.skeleton}
            />
            <skinnedMesh
              name="Suit_Head_4"
              geometry={nodes.Suit_Head_4.geometry}
              material={materials.Eye}
              skeleton={nodes.Suit_Head_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/BusinessMan.glb");
