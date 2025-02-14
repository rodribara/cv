<script setup lang="ts">
import { Levioso, OrbitControls, Stars } from '@tresjs/cientos'
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
    <div class="tres-container">

        <TresCanvas v-bind="gl">
            <TresPerspectiveCamera :position="[0, 6, 5]" :look-at="[0, 0, 0]" />
            <Stars />
            <OrbitControls />
            <TresGroup :position="[4, 0, 0]" :rotation="[0, -Math.PI / 4, 0]">
                <Levioso speed=7.5>
                    <Suspense>
                        <Cube />
                    </Suspense>
                </Levioso>
            </TresGroup>
            <TresAmbientLight :color="0xffffff" :intensity="1.5" />
            <TresDirectionalLight :color="0xffffff" :intensity="1" :position="[-4, -2, 2]" cast-shadow />
            <TresDirectionalLight :color="0xffffff" :intensity="2" :position="[4, 6, 4]" />

        </TresCanvas>
    </div>
</template>

<style>
.tres-container {
    width: 100%;
    height: 400px;
}

canvas {
    width: 100%;
    height: 100%;
}
</style>