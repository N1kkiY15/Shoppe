<template>
  <transition name="slide">
    <div v-if="props.openMenu" class="header__mobile-menu" @click.stop>
      <div class="header__mobile-list">
        <NuxtLink
          v-for="(item, index) in mobileItems"
          :key="index"
          :to="item.link"
          class="header__mobile-link"
          @click="$emit('toggle-dropdown')"
        >
          {{ item.name }}
        </NuxtLink>
      </div>

      <ul class="header__mobile-list">
        <li class="header__mobile-item">
          <NuxtLink
            to="/login"
            class="header__account-link"
            @click="$emit('toggle-dropdown')"
          >
            <ProfileIcon @click="$emit('toggle-dropdown')" />
            My account
          </NuxtLink>
        </li>
        <li class="header__mobile-item">
          <NuxtLink class="header__account-link">
            <LogOutIcon />
            Logout
          </NuxtLink>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script setup lang="ts">
import LogOutIcon from "../assets/pictures/svg/SvgComponents/LogOutIcon.vue";
import ProfileIcon from "../assets/pictures/svg/SvgComponents/ProfileIcon.vue";

const mobileItems = [
  {
    link: "/mainpage",
    name: "Home",
  },
  {
    link: "/shop",
    name: "Shop",
  },
  {
    link: "/ourstory",
    name: "About",
  },
  {
    link: "/blog",
    name: "Blog",
  },
  {
    link: "/login",
    name: "Help",
  },
  {
    link: "/contacts",
    name: "Contact",
  },
  {
    link: "/login",
    name: "Search",
  },
];

interface Props {
  openMenu: boolean;
}

const props = defineProps<Props>();

defineEmits(["toggle-dropdown"]);
</script>

<style scoped lang="scss">
.header {
  &__mobile-menu {
    position: fixed;
    top: 110px;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    z-index: 3;
    overflow-y: auto;
    padding: 16px;
  }

  &__mobile-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-size: 20px;

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-decorative);
      margin-bottom: 24px;
    }
  }

  &__mobile-link:last-child {
    margin-bottom: 40px;
  }

  &__account-link {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
}
</style>
