<script setup lang="ts">
import { OrbitControls, Stars } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'
import Cube from './Cube.vue'

const gl = {
    clearColor: "#181C3E",
    shadows: true,
    alpha: true,
    shadowMapType: BasicShadowMap,
    outputColorSpace: SRGBColorSpace,
    toneMapping: NoToneMapping,
}
</script>
<template>
    <div>Hello World</div>
    <div class="tres-container">
        Hello

        <TresCanvas v-bind="gl">
            <TresPerspectiveCamera :position="[0, 5, 5]" :look-at="[0, 1, 1]" />
            <Stars />
            <OrbitControls />
            <Suspense>
                <Cube />
            </Suspense>
            <TresAmbientLight :color="0xffffff" :intensity="1.5" />
            <TresDirectionalLight :color="0xffffff" :intensity="1" :position="[-4, -2, 2]" cast-shadow />
            <TresDirectionalLight :color="0xffffff" :intensity="2" :position="[4, 6, 4]" />

        </TresCanvas>
    </div>
</template>

<style>
.tres-container {
    width: 100%;
    height: 100%;
    background-color: red;
}

canvas {
    width: 100%;
    height: 100%;
}
</style>