<template>
    <div class="race-by" :style="{ '--uib-color': color }"></div>
  </template>
  
  <script>
  import './RaceByLoader.css';
  
  export default {
    name: 'RaceByLoader',
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
  