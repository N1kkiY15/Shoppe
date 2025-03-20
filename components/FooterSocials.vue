<template>
  <ul class="footer-socials">
    <li>
      <a href="https://vk.com/nderevyanko15" target="blank"><InIcon /></a>
    </li>
    <li>
      <a href="https://vk.com/nderevyanko15" target="blank"><FacebookIcon /></a>
    </li>
    <li>
      <a href="https://vk.com/nderevyanko15" target="blank"
        ><InstagramIcon
      /></a>
    </li>
    <li>
      <a href="https://vk.com/nderevyanko15" target="blank"><TwitterIcon /></a>
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
}
</style>
