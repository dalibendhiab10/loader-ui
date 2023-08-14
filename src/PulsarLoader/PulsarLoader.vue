<template>
    <div class="pulsar" :style="{ '--uib-color': color }"></div>
  </template>
  
  <script>
  import './PulsarLoader.css';
  
  export default {
    name: 'PulsarLoader',
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
  