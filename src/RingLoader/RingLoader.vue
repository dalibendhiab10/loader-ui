<template>
    <svg class="ring" viewBox="25 25 50 50" stroke-width="5" :style="{ '--uib-color': color }">
      <circle cx="50" cy="50" r="20" />
    </svg>
  </template>
  
  <script>
  import './RingLoader.css';
  
  export default {
    name: 'RingLoader',
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
  