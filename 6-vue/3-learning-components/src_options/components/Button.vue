<script>
export default {
  // props: ['label']
  // props: {
  //   label: String
  // }
  props: {
    label: {
      type: String,
      required: true
    },
    number: {
      type: Number
    },
    applyClass: {
      type: Boolean,
      default: false
    }
  },
  emits: ['meuEvento']
}
</script>

<template>
  <div>
    <button class="base-button" :class="{ button: applyClass }" @click="$emit('meuEvento', 123)">
      <slot></slot>
      <!-- <slot name="meuSlot"></slot> -->
    </button>
    <!-- <p><slot name="outroSlot"></slot></p> -->
  </div>
</template>

<style>
.base-button {
  border: 1px solid green;
}

.button {
  color: blue;
  background-color: bisque;
  border-radius: 50%;
}
</style>
