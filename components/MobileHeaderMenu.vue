<template>
  <transition name="slide">
    <div v-if="props.openMenu" class="header__mobile-menu" @click.stop>
      <ul class="header__mobile-list">

        <li class="header__mobile-item">
          <NuxtLink
            to="/mainpage"
            class="header__mobile-link"
            @click="$emit('toggle-dropdown')"
            >Home
          </NuxtLink>
        </li>

        <li class="header__mobile-item">
          <NuxtLink
            to="/shop"
            class="header__mobile-link"
            @click="$emit('toggle-dropdown')"
            >Shop
          </NuxtLink>
        </li>

        <li class="header__mobile-item">
          <NuxtLink
            to="/ourstory"
            class="header__mobile-link"
            @click="$emit('toggle-dropdown')"
            >About
          </NuxtLink>
        </li>

        <li class="header__mobile-item">
          <NuxtLink
            to="/blog"
            class="header__mobile-link"
            @click="$emit('toggle-dropdown')"
            >Blog
          </NuxtLink>
        </li>

        <li class="header__mobile-item">
          <NuxtLink
            to="/login"
            class="header__mobile-link"
            @click="$emit('toggle-dropdown')"
            >Help
          </NuxtLink>
        </li>

        <li class="header__mobile-item">
          <NuxtLink
            to="/contacts"
            class="header__mobile-link"
            @click="$emit('toggle-dropdown')"
            >Contact
          </NuxtLink>
        </li>

        <li class="header__mobile-item">
          <NuxtLink
            to="/login"
            class="header__mobile-link"
            @click="$emit('toggle-dropdown')"
            >Search
          </NuxtLink>
        </li>

      </ul>
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
