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
          <h4 class="span-accent">$ {{ data }}</h4>
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

    <div class="item-container__pages">
      <div class="item-container__pages-headings pages-headings">
        <h3 class="pages-headings__underline"><a>Description</a></h3>
        <h3 class="pages-headings__underline"><a>Aditional information</a></h3>
        <h3 class="pages-headings__underline"><a>Reviews(0)</a></h3>
      </div>

    </div>

    <div class="item-container__similar"></div>
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

const route = useRoute();

const currentId: number = Number(route.params.id) || 0;
const { isLoading, data, fetchByURL } = useFetch(
  `https://fakestoreapi.com/products/${currentId}`
);

onMounted(async () => {
  await fetchByURL();
  console.log(data.value);
});

// const fetchProductById = async (id: number) => {
//   try {
//     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//     if (!response.ok) throw new Error("Product not found");
//     products.value = await response.json(); // Store directly
//     console.log(products.value[0].id) // Now this works
//     console.log(products.value) // Now this works
//   } catch (error) {
//   }
// }
</script>

<style lang="scss" scoped>
.item-container {
  display: flex;
  flex-direction: column;
  gap: 123px;

  &__info {
  }

  &__pages {
    position: relative;
    display: flex;
    flex-direction: column;

    &-headings {
      display: flex;
      flex-direction: row;
      gap: 96px;
      margin-bottom: 34px;
    }
  }

  &__similar {
  }
}

.pages-headings { 
  position: relative;
  margin-bottom: 28px;
  border-bottom: 2px solid #000;
  z-index: 2;

  &__underline { 
    position: relative;
    border-bottom: 2px solid #000;
    z-index: 2;
  }
}

.header__border {
  margin-bottom: 80px;
  border-bottom: 1px solid var(--color-decorative);
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
