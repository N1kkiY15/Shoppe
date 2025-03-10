<template>
    <div class="item-card">
      <img :src=props.image class="item-card__image"/> 
      <div class="item-card__description">
        <h3>{{props.title}}</h3>
        <span>$ {{props.price}}</span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">

import { defineProps } from "vue";

interface CardInfo {
  title: string;
  image: string;
  price: number;
}

const props = defineProps<CardInfo>();

  </script>
  
  <style lang="scss" scoped>
  .item-card {
     display: flex;
     flex-direction: column;
     gap: 24px;
     width: 300px;

     &__image { 
        background-color: aqua;
        width: 300px;
        height: 300px;

     }

     &__description { 
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
  }
  </style>
  