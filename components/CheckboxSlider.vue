<template>
  <label class="checkbox-slider">
    {{ props.label }}
    <div class="toggle-switch">
      <input
        type="checkbox"
        class="toggle-input"
        v-model="model"
        :id="props.id"
      />
      <span class="slider"></span>
    </div>
  </label>
</template>

<script lang="ts" setup>
import { defineModel } from "vue";

const model = defineModel<boolean>();

interface Props {
  label: string;
  id: string;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.checkbox-slider {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 33px;
  height: 20px;
}

.toggle-input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;

  &:checked + .slider {
    background-color: #4cd964;

    &:before {
      transform: translateX(13px);
    }
  }

  &:focus-visible + .slider {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-text);
  border-radius: 34px;
  transition: 0.3s;

  &:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 4px;
    bottom: 3.5px;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s;
  }
}
</style>
