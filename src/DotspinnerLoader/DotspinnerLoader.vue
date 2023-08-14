<template>
    <div class="dot-spinner" :style="{ '--uib-color': color }">
      <div class="dot-spinner__dot" v-for="index in 8" :key="index"></div>
    </div>
  </template>
  
  <script>
  import './DotspinnerLoader.css';
  
  export default {
    name: 'DotspinnerLoader',
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
  