<template>
  <button
    class="button"
    v-on="$listeners"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 15px;
  background-color: var(--BrandDefault);
  color: var(--BrandText);
  border: none;
  font-weight: bold;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    @media (hover: hover) and (pointer: fine) {
      background-color: var(--BrandHighlight);
    }
  }
}
</style>
