<script setup lang="ts">
import { useGLTF } from "@tresjs/cientos";

const { nodes } = await useGLTF("/models/Cube.glb", { draco: true });
const model = nodes.Cube;


</script>

<template>
    <primitive :object="model" />
</template>