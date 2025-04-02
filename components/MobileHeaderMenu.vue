<template>
  <transition name="slide">
    <div v-if="props.openMenu" class="header__mobile-menu" @click.stop>
      <ul class="header__mobile-list">
        <li class="header__mobile-item">
          <NuxtLink
            to="/mainpage"
            @click="$emit('toggle-dropdown')"
            class="header__mobile-link"
            >Home
          </NuxtLink>
        </li>
        <li class="header__mobile-item">
          <NuxtLink
            to="/shop"
            @click="$emit('toggle-dropdown')"
            class="header__mobile-link"
            >Shop
          </NuxtLink>
        </li>
        <li class="header__mobile-item">
          <NuxtLink
            to="/ourstory"
            @click="$emit('toggle-dropdown')"
            class="header__mobile-link"
            >About
          </NuxtLink>
        </li>
        <li class="header__mobile-item">
          <NuxtLink
            to="/blog"
            @click="$emit('toggle-dropdown')"
            class="header__mobile-link"
            >Blog
          </NuxtLink>
        </li>
        <li class="header__mobile-item">
          <NuxtLink
            to="/login"
            @click="$emit('toggle-dropdown')"
            class="header__mobile-link"
            >Help
          </NuxtLink>
        </li>
        <li class="header__mobile-item">
          <NuxtLink
            to="/contacts"
            @click="$emit('toggle-dropdown')"
            class="header__mobile-link"
            >Contact
          </NuxtLink>
        </li>
        <li class="header__mobile-item">
          <NuxtLink
            to="/login"
            @click="$emit('toggle-dropdown')"
            class="header__mobile-link"
            >Search
          </NuxtLink>
        </li>
      </ul>
      <ul class="header__mobile-list">
        <li class="header__mobile-item">
          <NuxtLink
            to="/login"
            @click="$emit('toggle-dropdown')"
            class="header__account-link"
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

    & li:last-child {
      margin-bottom: 40px;
    }
  }

  &__account-link {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
}
</style>
