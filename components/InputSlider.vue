<template>
  <div class="input-slider">
    <div class="input-slider__container">
      <input
        id="left-thumb"
        type="range"
        :min="min"
        step="20"
        :max="max"
        :value="leftValue"
        @input="updateRange"
      />
      <input
        id="right-thumb"
        type="range"
        :min="min"
        step="20"
        :max="max"
        :value="rightValue"
        @input="updateRange"
      />
      <div class="slider-track" :style="trackStyle"></div>
    </div>
    <div class="input-slider__legend">
      <div>
        Price: <span id="selected-range">${{ selectedRange }}</span>
      </div>
      <div class="span-accent">Filter</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

// Constants for min and max values
const min = 0;
const max = 180;

// Refs for the range values and selected range
const leftValue = ref<number>(min);
const rightValue = ref<number>(max);
const selectedRange = ref<string>(`${min} - ${max}`);

const trackStyle = computed(() => {
  const leftPercent = ((leftValue.value - min) / (max - min)) * 100;
  const rightPercent = ((rightValue.value - min) / (max - min)) * 100;
  return {
    background: `linear-gradient(to right, 
      var(--color-decorative) ${leftPercent}%, 
      black ${leftPercent}%, 
      black ${rightPercent}%, 
      var(--color-decorative) ${rightPercent}%)`,
  };
});

// Update the range when the sliders are moved
function updateRange() {
  const leftThumb = document.getElementById("left-thumb") as HTMLInputElement;
  const rightThumb = document.getElementById("right-thumb") as HTMLInputElement;
  const selectedRangeElement = document.getElementById("selected-range");

  if (leftThumb && rightThumb && selectedRangeElement) {
    const left = parseInt(leftThumb.value);
    const right = parseInt(rightThumb.value);

    // Ensure the left thumb doesn't exceed the right thumb
    if (left > right) {
      leftThumb.value = right.toString();
      leftValue.value = right;
    } else {
      leftValue.value = left;
    }

    // Ensure the right thumb doesn't go below the left thumb
    if (right < left) {
      rightThumb.value = left.toString();
      rightValue.value = left;
    } else {
      rightValue.value = right;
    }

    // Update the displayed range
    selectedRange.value = `${leftThumb.value} - ${rightThumb.value}`;
    selectedRangeElement.textContent = selectedRange.value;
  }
}

// Initialize the slider values on mount
onMounted(() => {
  const leftThumb = document.getElementById("left-thumb") as HTMLInputElement;
  const rightThumb = document.getElementById("right-thumb") as HTMLInputElement;

  if (leftThumb && rightThumb) {
    leftThumb.value = min.toString();
    rightThumb.value = max.toString();
  }
});
</script>

<style lang="scss" scoped>
.input-slider {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
}

.input-slider__container {
  position: relative;
  width: 100%;
  height: 20px;
}

.slider-track {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-decorative);
  transform: translateY(-50%);
  z-index: -1;
}

input[type="range"] {
  position: absolute;
  top: 50%;
  width: 100%;
  background: transparent;
  pointer-events: none;
  appearance: none;
  z-index: 1;
  transform: translateY(-50%);
}

input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 2px;
  height: 10px;
  background: var(--color-main);
  pointer-events: auto;
  cursor: pointer;
}

.input-slider__legend {
  display: flex;
  justify-content: space-between;
  margin-top: 20px; // Adjust spacing as needed
  text-align: center;
  font-size: 14px;
  color: var(--color-text);
}

.range-input-slider {
  width: 100%;
  height: 2px;
  background: var(--color-decorative);
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
}
</style>
