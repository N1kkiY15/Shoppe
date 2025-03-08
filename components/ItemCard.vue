<template>
    <div class="item-card">
      <img src='assets/pictures/cover.png' class="item-card__image"/> 
      <div class="item-card__description">
        <h3>Name</h3>
        <span>$ 20,00</span>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  </script>
  
  <style lang="scss" scoped>
  .item-card {
     display: flex;
     flex-direction: column;
     gap: 24px;
     max-width: 300px;

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
  