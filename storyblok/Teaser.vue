<script setup lang="ts">
defineProps({
  blok: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div
    v-editable="blok"
    :cat="$attrs.cat"
    class="py-16 mb-6 text-5xl text-center bg-neutral-200"
    data-test="teaser"
  >
    {{ blok.headline }}
  </div>
</template>
