<template>
  <footer>
    <div class="footer__container">
      <div class="footer__section">
        <ul class="footer__section-links">
          <li><NuxtLink to="/contacts">CONTACT</NuxtLink></li>
          <li><NuxtLink to="/contacts">TERMS OF SERVICES</NuxtLink></li>
          <li><NuxtLink to="/contacts">SHIPPING AND RETURNS</NuxtLink></li>
        </ul>
        <p><span class='text__accent'>© 2021 Shelly.</span> Terms of <NuxtLink to="/privacypolice" class="text__accent">use</NuxtLink> and privacy policy.</p>
      </div>
      <div class="footer__section footer__section--right">
        <input type="text" class="footer__input" placeholder="Give an email, get the newsletter."/>
        <ul class="footer__socials">
          <li><a href='#'><InIcon /></a></li>
          <li><a href='#'><FacebookIcon /></a></li>
          <li><a href='#'><InstagramIcon /></a></li>
          <li><a href='#'><TwitterIcon /></a></li>
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
  border-top: 1px solid var(--color-decorative);
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

        & li { 
          transition: color 0.2s ease;
        }

        & li:hover { 
          color: var(--color-main);
        }
      }
      
      .footer__input {
        height: 20px;
        width: 396px;
        border-bottom: 1px solid var(--color-decorative);
      }
      
      .footer__socials {
        display: flex;
        flex-direction: row;
        gap: 30px;
      }
    }
  }
}

.text__accent { 
  color: var(--color-main);
  font-weight: var(--font-weight-medium);
}
</style>
