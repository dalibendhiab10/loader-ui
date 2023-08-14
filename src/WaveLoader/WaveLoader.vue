<template>
    <div class="waveform" :style="{ '--uib-color': color }">
      <div class="waveform__bar"></div>
      <div class="waveform__bar"></div>
      <div class="waveform__bar"></div>
      <div class="waveform__bar"></div>
    </div>
  </template>
  
  <script>
  import './WaveLoader.css';
  
  export default {
    name: 'WaveLoader',
    props: {
      color: {
        type: String,
        default: '#000'
      },
      visible: {
        type: Boolean,
        default: true
      }
    }
  };
  </script>
  