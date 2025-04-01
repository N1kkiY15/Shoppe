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

          <NuxtLink to="/login">
            <ProfileIcon />
          </NuxtLink>
        </div>
      </div>

      <div class="header__container-mobile">
        <ShoppingCartIcon />
        <button @click="toggleDropdown">
          <MenuList />
        </button>
      </div>

    </div>
    <!-- исправить -->
    <div class="header__input">
      <input type="text" class="header__input-text" placeholder="Search" />
      <SearchIconMobile class="header__input-icon" />
    </div>

    <transition name="slide">
      <div v-if="isOpen" class="mobile-menu" @click.stop>
        <ul class="mobile-menu__list">
          <li><NuxtLink to="/mainpage" @click="toggleDropdown">Home</NuxtLink></li>
          <li><NuxtLink to="/shop" @click="toggleDropdown">Shop</NuxtLink></li>
          <li><NuxtLink to="/ourstory" @click="toggleDropdown">About</NuxtLink></li>
          <li><NuxtLink to="/blog" @click="toggleDropdown">Blog</NuxtLink></li>
          <li><NuxtLink to="/login" @click="toggleDropdown">Help</NuxtLink></li>
          <li><NuxtLink to="/contacts" @click="toggleDropdown">Contact</NuxtLink></li>
          <li><NuxtLink to="/login" @click="toggleDropdown">Search</NuxtLink></li>
        </ul>
        <ul class="mobile-menu__list">
          <li>My account</li>
          <li>Logout</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import ProfileIcon from "SvgComponents/ProfileIcon.vue";
import SearchIcon from "SvgComponents/SearchIcon.vue";
import ShoppingCartIcon from "SvgComponents/ShoppingCartIcon.vue";
import MenuList from "../assets/pictures/svg/SvgComponents/MenuList.vue";
import SearchIconMobile from "../assets/pictures/svg/SvgComponents/SearchIconMobile.vue";

const route = useRoute();
const showElement = computed(() => !route.meta?.isHomePage);

const isOpen = ref<boolean>(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
  document.body.style.overflow = isOpen.value ? 'hidden' : '';
};

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
      background-color: #efefef;
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

.mobile-menu {
  position: fixed;
  top: 110px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 3;
  overflow-y: auto;
  padding: 16px;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-size: 20px;
    margin-bottom: 24px;

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-decorative);
    }

    & li:last-child {
      margin-bottom: 40px;
    }
  }
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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

    &__input {
      display: block;
    }
  }

  .header__border {
    margin-bottom: 24px;
    border-bottom: none;
  }
}
</style>
