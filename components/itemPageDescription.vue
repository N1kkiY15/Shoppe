<template>
  <p>
    {{ props.text }}
  </p>
</template>

<script lang="ts" setup>
interface Props {
  text: string;
}

const props = defineProps<Props>();
</script>
<style lang="scss" scoped></style>