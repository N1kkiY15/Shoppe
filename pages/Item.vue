<template>
  <div class="item-container">
    <div class="item-container__info item-card">
      <div class="item-card__photos">
        <div class="item-card__photos-menu">
          <img
            src="assets/pictures/Img 01.png"
            class="item-card__photos-menu-card"
          />
          <img
            src="assets/pictures/Img 01.png"
            class="item-card__photos-menu-card"
          />
          <img
            src="assets/pictures/Img 01.png"
            class="item-card__photos-menu-card"
          />
          <img
            src="assets/pictures/Img 01.png"
            class="item-card__photos-menu-card"
          />
        </div>

        <div class="item-card__photos-main">
          <img
            src="assets/pictures/Img 01.png"
            class="item-card__photos-main-picture"
          />
        </div>
      </div>
      <div class="item-card__description item-description">
        <div class="item-description__headings">
          <h2>Lira Earrings</h2>
          <h4 class="span-accent">$ 20,00</h4>
        </div>

        <div class="item-description__rewiew">
          <div class="item-description__rewiew-line">
            <div class="item-description__rewiew-stars">
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarPool />
            </div>
            <span>1 customer review</span>
          </div>
          <div class="item-description__rewiew-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis consequat sed eu felis.
            </p>
          </div>
        </div>

        <div class="item-description__add">
          <div class="item-description__add-count"></div>
          <div class="item-description__add-button">
            <ButtonComp variant="secondary" size="xl">ADD TO CART</ButtonComp>
          </div>
        </div>

        <div class="item-description__socials">
          <div class="item-description__socials-like">
            <Hearth />
          </div>
          <div class="item-description__socials-line"></div>
          <div class="item-description__socials-icons">
            <Letter />
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>

        <div class="item-description__details">
          <span>SKU: 12</span>
          <span>Categories: Fashion, Style</span>
        </div>
      </div>
    </div>

    <div class="item__pages"></div>

    <div class="item__similar"></div>
  </div>
</template>

<script lang="ts" setup>
import Hearth from "SvgComponents/Hearth.vue";
import Letter from "SvgComponents/Letter.vue";
import FacebookIcon from "SvgComponents/FacebookIcon.vue";
import InstagramIcon from "SvgComponents/InstagramIcon.vue";
import TwitterIcon from "SvgComponents/TwitterIcon.vue";
import StarFilled from "SvgComponents/StarFilled.vue";
import StarPool from "SvgComponents/StarPool.vue";
</script>

<style lang="scss" scoped>
.item-container {
  display: flex;
  flex-direction: column;
  gap: 96px;

  &__info {
  }
}

.item-card {
  display: flex;
  flex-direction: row;
  gap: 62px;

  &__photos {
    display: flex;
    flex-direction: row;
    width: auto; 
    flex: 0 0 auto; 
    gap: 39px;

    &-menu {
      display: flex;
      flex-direction: column;
      gap: 40px;

      &-card {
        max-width: 120px;
        max-height: 120px;
      }
    }

    &-main {
      max-width: 540px;
      max-height: 600px;

      &-picture {
        width: 540px;
        height: 100%;
      }
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    flex: 1; 
  }
}

.item-description {
  &__headings {
    display: flex;
    flex-direction: column;
    gap: 23px;
    margin-bottom: 64px;
  }

  &__rewiew {
    margin-bottom: 48px;

    &-line {
      display: flex;
      flex-direction: row;
      gap: 24px;
      margin-bottom: 19px;
    }

    &-stars {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
  }

  &__add {
    margin-bottom: 80px;
  }

  &__socials {
    display: flex;
    gap: 39px;
    margin-bottom: 38px;

    &-line::after {
      content: "";
      border-right: 1px solid var(--color-main);
    }

    &-icons {
      display: flex;
      flex-direction: row;
      gap: 24px;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
}
</style>
