<template>
    <div class="kai">
      <h1 class="welcome">人物介绍篇</h1>
    </div>
    <div>
      <model :kai="kaiProps" />
      <model :kai="binProps"/>
    </div>
  </template>
  
  <script setup>
 
import model from './component/model.vue'
import { kaiData,binData } from './component/playerData'

  

  const kaiProps = kaiData()
  const binProps = binData()
  </script>
  
  <style scoped>

 .welcome {
    color: rgb(37, 152, 205);
    font-size: 50px;
    text-align: center;
    margin: 0;
    padding-top: 0;
    padding-left: 0px;
  }
  </style>