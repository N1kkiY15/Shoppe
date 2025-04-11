<template>
  <div class="checkbox-slider">
    <label>{{ props.label }}</label>
    <div class="toggle-switch" @click="toggle">
      <input type="checkbox" class="toggle-input" v-model="model" />
      <span class="slider"></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineModel } from "vue";

const model = defineModel<boolean>();

interface Props {
  label: string;
  id: string;
}

const props = defineProps<Props>();

const toggle = () => {
  model.value = !model.value;
};
</script>

<style lang="scss" scoped>
.checkbox-slider {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 33px;
  height: 20px;
  cursor: pointer;
}

.toggle-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-text);
  border-radius: 34px;
  transition: background-color 0.3s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 4px;
  bottom: 3.5px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
}

.toggle-input:checked + .slider {
  background-color: #4cd964;
}

.toggle-input:checked + .slider:before {
  transform: translateX(12px);
}
</style>
