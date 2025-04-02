<template>
  <ul class="footer-socials">
    <span class="footer-socials__text">Follow us</span>
    <div class="footer-socials__line"></div>
    <li>
      <a href="https://vk.com/nderevyanko15" target="blank">
        <InIcon />
      </a>
    </li>
    <li>
      <a href="https://vk.com/nderevyanko15" target="blank">
        <FacebookIcon />
      </a>
    </li>
    <li>
      <a href="https://vk.com/nderevyanko15" target="blank">
        <InstagramIcon />
      </a>
    </li>
    <li>
      <a href="https://vk.com/nderevyanko15" target="blank">
        <TwitterIcon />
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import FacebookIcon from "SvgComponents/FacebookIcon.vue";
import InIcon from "SvgComponents/InIcon.vue";
import InstagramIcon from "SvgComponents/InstagramIcon.vue";
import TwitterIcon from "SvgComponents/TwitterIcon.vue";
</script>

<style lang="scss" scoped>
.footer-socials {
  display: flex;
  flex-direction: row;
  gap: 30px;

  &__text {
    display: none;
  }

  &__line {
    display: none;
    height: 11px;
    width: 47px;
    border-bottom: 1px solid black;
  }
}

@media (width <= 376px) {
  .footer-socials {
    gap: 16px;

    &__text {
      display: block;
    }

    &__line {
      display: block;
    }
  }

  li:nth-child(3) {
    display: none;
  }
}
</style>
