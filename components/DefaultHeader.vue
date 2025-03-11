<template>
  <div class="header__container">
    <NuxtLink to="/MainPage" class="header__logo">shoppe</NuxtLink>
    <div class="header__info">
      <nav>
        <ul class="header__info-navigation">
          <li><NuxtLink to="/shop">Shop</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/ourstory">Our story</NuxtLink></li>
        </ul>
      </nav>
      <span class="header__line"></span>
      <div class="header__info-links">
        <SearchIcon />
        <ShoppingCartIcon />
        <ProfileIcon />
      </div>
    </div>
    <!-- <div v-if="route">sadыdasd</div> -->
  </div>
</template>

<script setup>
import ProfileIcon from './SvgComponents/ProfileIcon.vue';
import SearchIcon from './SvgComponents/SearchIcon.vue';
import ShoppingCartIcon from './SvgComponents/ShoppingCartIcon.vue';


</script>

<style scoped lang="scss">

.header__container {
  display: flex;
  flex-direction: row;
  gap: 48px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  .header__logo {
    text-transform: uppercase;
    font-family: var(--font-logo), sans-serif;
    font-size: var(--font-size-logo);
    font-weight: var(--font-weight-regular);
    color: var(--color-main);
    
    &:first-letter {
      color: var(--color-accent);
    }
  }
  
  .header__info {
    display: flex;
    flex-direction: row;
    gap: 48px;
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-text-large);
    
    .header__info-navigation {
      display: flex;
      flex-direction: row;
      gap: 64px;
      
      .header__line {
        position: relative;
        &::after {
          content: "";
          border-right: 1px solid var(--color-main);
        }
      }
    }
    
    .header__info-links {
      display: flex;
      flex-direction: row;
      gap: 39px;
    }
  }
}

</style>
