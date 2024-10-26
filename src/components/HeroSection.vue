<script setup lang="ts">
import { ref } from 'vue';

const ViconSRC = ref<string>('off');

const VidElement = ref<HTMLVideoElement | null>(null);

function ViconHandler(): void {
  if (ViconSRC.value === 'off') {
    ViconSRC.value = 'on';
    if (VidElement.value) VidElement.value.muted = false;
  } else {
    ViconSRC.value = 'off';
    if (VidElement.value) VidElement.value.muted = true;
  }
}
</script>

<template>
  <section id="HSsection">
    <div class="HSoverlay">
      <div class="JJLogoDiv">
        <img src="/JJBA_Logo.png" alt="JJBA Logo" />
      </div>
    </div>
    <video ref="VidElement" autoplay loop muted>
      <source src="/hsVideoIntro.mp4" type="video/mp4" />
    </video>
    <button class="VideoVolume" type="button" @click="ViconHandler">
      <img
        id="Volume_image"
        :src="`/Volume_${ViconSRC}_Icon.svg`"
        alt="Volume On Icon"
      />
    </button>
  </section>
</template>

<style scoped>
#HSsection {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.HSoverlay {
  width: 100%;
  height: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.397);
  position: absolute;
  top: 0;
  z-index: 2;
}

.JJLogoDiv {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.JJLogoDiv > img {
  max-width: 500px;
  min-width: 300px;
}

video {
  position: absolute;
  bottom: 0;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  transform: translateX(-50%);
  z-index: 1;
}

img {
  height: 50%;
  object-fit: contain;
}

.VideoVolume {
  width: 50px;
  height: 50px;
  background-color: blueviolet;
  border-radius: 50px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: 0.5s ease;
  z-index: 3;
}

.VideoVolume:hover {
  cursor: pointer;
  transform: scale(1.2);
}
</style>
