<template>
  <div class="privacy-policy">
    <h1>Privacy Policy</h1>
    <p>
      Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
      sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
      pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et,
      placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac
      sodales lectus placerat quis.
    </p>
    <div class="privacy-policy__section">
      <h2>Security</h2>
      <p>
        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
        sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
        pellentesque risus scelerisque.
      </p>
    </div>
    <div class="privacy-policy__section">
      <h2>Cookies</h2>
      <ul>
        <li>
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin.
        </li>
        <li>
          Nam fringilla molestie velit, eget pellentesque risus scelerisque a
        </li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts" setup>
useHead({
  title: 'Privacy police'
});
</script>
<style lang="scss" scoped>
.privacy-policy {
  display: flex;
  flex-direction: column;
  gap: 39px;
  max-width: 670px;
  margin: auto;
  margin-bottom: 250px;
  line-height: var(--line-height-h5);

  h1 {
    margin: auto;
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: 24px;

    & ul {
      margin-left: 15px;

      li {
        margin-left: 15px;
        list-style-type: disc;
      }
    }
  }
}
</style>
