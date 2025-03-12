<template>
  <div class="contacts">
    <div class="contacts__info">
      <h1>Contact us</h1>
      <h3>
        Say Hello send us your thoughts about our products or share your ideas
        with our Team!
      </h3>
    </div>
    <form @submit.prevent class="contacts__form">
      <div class="contacts__form-inputs">
        <input type="text" class="text-input" placeholder="First name" />
        <input type="text" class="text-input" placeholder="Last name" />
        <input type="text" class="text-input" placeholder="Email" />
        <input type="text" class="text-input" placeholder="Subject" />
        <input type="textarea" class="text-input" placeholder="Message" />
      </div>
      <ButtonComp variant="primary" size="xl">SEND</ButtonComp>
    </form>
  </div>
</template>

<script lang="ts" setup>

useHead({
  title: 'Contacts'
});

</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-direction: column;
  max-width: 908px;
  gap: 108px;
  margin: auto;
  margin-bottom: 250px;

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    max-width: 560px;
    gap: 39px;

    h3 {
      text-align: center;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 96px;
    align-items: center;
    &-inputs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 116px;
      row-gap: 94px;
      width: 100%;
    }
  }
}

.text-input:last-child {
  grid-column: span 2;
  height: 71px;
}
</style>
