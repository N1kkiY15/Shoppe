<template>
  <footer>
    <div class="footer__container">
      <div class="footer__section">
        <ul class="footer__section-links">
          <li>CONTACT</li>
          <li>TERMS OF SERVICES</li>
          <li>SHIPPING AND RETURNS</li>
        </ul>
        <p>© 2021 Shelly. Terms of use and privacy policy.</p>
      </div>
      <div class="footer__section footer__section--right">
        <input type="text" class="footer__input" placeholder="Give an email, get the newsletter."/>
        <ul class="footer__socials">
          <li><InIcon /></li>
          <li><FacebookIcon /></li>
          <li><InstagramIcon /></li>
          <li><TwitterIcon /></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import FacebookIcon from './SvgComponents/FacebookIcon.vue';
import InIcon from './SvgComponents/InIcon.vue';
import InstagramIcon from './SvgComponents/InstagramIcon.vue';
import TwitterIcon from './SvgComponents/TwitterIcon.vue';


</script>

<style scoped lang="scss">

footer {
  padding: 52px 0 10px;
  border-top: 1px solid var(--color-text);
  color: var(--color-text);
  
  .footer__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    .footer__section {
      display: flex;
      flex-direction: column;
      gap: 48px;
      
      &--right {
        align-items: end;
      }
      
      .footer__section-links {
        display: flex;
        flex-direction: row;
        gap: 41px;
      }
      
      .footer__input {
        height: 20px;
        width: 396px;
        border-bottom: 1px solid var(--color-text);
      }
      
      .footer__socials {
        display: flex;
        flex-direction: row;
        gap: 30px;
      }
    }
  }
}
</style>
