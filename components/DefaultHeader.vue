<template>
  <div class="header" :class="{ header__border: showElement }">
    <div class="header__container">
      <NuxtLink to="/MainPage" class="header__logo">shoppe</NuxtLink>
      <div class="header__info">
        <nav>
          <ul class="header__info-navigation">
            <li>
              <NuxtLink
                to="/shop"
                :class="{ 'active-page-slider': route.path === '/shop' }"
                >Shop
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/blog"
                :class="{ 'active-page-slider': route.path === '/blog' }"
                >Blog
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/ourstory"
                :class="{ 'active-page-slider': route.path === '/ourstory' }"
                >Our story
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <span class="header__info-line"></span>
        <div class="header__info-links">
          <SearchIcon />
          <ShoppingCartIcon />
          <ProfileIcon />
        </div>
      </div>

      <div class="header__container-mobile">
          <ShoppingCartIcon />
          <MenuList />
      </div>
      <!-- здесь контейнер с инфой для мобилки?  -->
    </div>

    <div class="header__input">
      <input type="text" class="header__input-text" placeholder="Search" />
      <SearchIconMobile class="header__input-icon"/>
    </div>

  </div>
</template>

<script setup>
import ProfileIcon from "SvgComponents/ProfileIcon.vue";
import SearchIcon from "SvgComponents/SearchIcon.vue";
import ShoppingCartIcon from "SvgComponents/ShoppingCartIcon.vue";
import MenuList from "../assets/pictures/svg/SvgComponents/MenuList.vue";
import SearchIconMobile from "../assets/pictures/svg/SvgComponents/SearchIconMobile.vue";

const route = useRoute();
const showElement = computed(() => !route.meta?.isHomePage);

// const { $breakpoints } = useNuxtApp();

// const placeholderText = computed(() => {
//   return $breakpoints.s
//     ? 'Введите адрес или название'
//     : 'Введите адрес или название проекта';
// });
</script>

<style scoped lang="scss">
.header {
  position: relative; // zaebisto - skinul v TG
  display: flex;
  flex-direction: column;

  &__container {
    display: flex;
    flex-direction: row;
    gap: 48px;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;

    &-mobile {
      display: none;
      flex-direction: row;
      gap: 13px;
      align-items: center;
    }
  }

  &__input {
    display: none;
    position: relative;

    &-text {
      background-color: #EFEFEF;
      border-radius: 4px;
      padding: 5px 0 5px 30px;
      height: 32px;
      width: 100%;
      margin-bottom: 16px;
    }

    &-icon {
      position: absolute;
      top: 10px;
      left: 10px;
    }
  }

  &__logo {
    text-transform: uppercase;
    font-family: var(--font-logo);
    font-size: clamp(1.563rem, 1.384rem + 0.893vw, 2.188rem);
    font-weight: var(--font-weight-regular);
    color: var(--color-main);

    &:first-letter {
      color: var(--color-accent);
    }
  }

  .header__info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 48px;
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-text-large);

    &-navigation {
      display: flex;
      flex-direction: row;
      gap: 64px;
    }

    &-links {
      display: flex;
      flex-direction: row;
      gap: 39px;
    }

    &-line::after {
      content: "";
      border-right: 1px solid var(--color-main);
    }
  }
}

.header__border {
  margin-bottom: 80px;
  border-bottom: 1px solid var(--color-decorative);
}

@media (width <= 376px) {
  .header {
    .header__info {
      display: none;
    }

    &__container {
      margin-bottom: 16px;
      &-mobile {
        display: flex;
      }
    }

    &__input { display: block}
  }
}
</style>
