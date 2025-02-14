<script setup lang="ts">
import { useGLTF } from "@tresjs/cientos";
import { useSeek } from "@tresjs/core";
import { Box3, ShaderMaterial } from "three";
import vertexShader from '../shaders/Cube/vertex.glsl';
import fragmentShader from '../shaders/Cube/fragment.glsl';


const { nodes } = await useGLTF("/models/Cube.glb", { draco: true });
const model = nodes.Cube;
/* const { nodes } = await useGLTF("/models/houston.glb", { draco: true });
const model = nodes.Houston; */

const { seekByName } = useSeek();
const outline = seekByName(model, "Cube");
console.log(outline);
const bbox = new Box3().setFromObject(model);

outline.material = new ShaderMaterial(
    {
        uniforms: {
            bboxMin: { value: bbox.min },
            bboxMax: { value: bbox.max }

        },
        vertexShader,
        fragmentShader

    }
)

</script>

<template>
    <primitive :object="model" />
</template>