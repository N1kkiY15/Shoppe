<template>
  <div class="about">
    <div class="about__description">
      <div class="about__headings">
        <h1>About</h1>
        <h3>Who we are and why we do what we do!</h3>
      </div>
      <p class="about__text">
        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
        sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
        pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et,
        placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac
        sodales lectus placerat quis.
      </p>
    </div>

    <div class="about__card">
      <h2 class="about__card-heading">Top trends</h2>
      <img
        src="assets/pictures/OurStory/Img_01.webp"
        class="about__card-image"
      />
      <p class="about__card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis.
      </p>
      <ul>
        <li>consectetur adipiscing elit. Aliquam placerat</li>
        <li>Lorem ipsum dolor sit amet consectetur</li>
      </ul>
    </div>

    <div class="about__card">
      <h2 class="about__card-heading">Produced with care</h2>
      <img
        src="assets/pictures/OurStory/Img_02.webp"
        class="about__card-image"
      />
      <p class="about__card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
        in molestie diam bibendu.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  max-width: 670px;
  margin: 0 auto 250px;
  gap: var(--spacing-paragraph);

  &__headings {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 46px;
    margin-bottom: 39px;
  }

  &__card {
    display: flex;
    flex-direction: column;
    margin-bottom: 39px;

    &-text {
      margin-bottom: 16px;
    }

    ul {
      margin-left: 15px;
      list-style-type: disc;
      line-height: var(--line-height-h5);
    }

    li {
      margin-left: 15px;
    }

    &-heading {
      margin-bottom: 23px;
    }

    &-image {
      max-height: 300px;
      max-width: 670px;
      margin-bottom: 48px;
    }
  }

  &__text {
    font-size: var(--font-size-text-large);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-h5);
  }
}
</style>
