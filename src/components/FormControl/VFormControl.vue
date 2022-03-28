<template>
  <div class="form-control">
    <label
      v-if="label"
      :for="name"
      class="form-control__label"
    >
      {{ label }}
    </label>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VFormControl',
  props: {
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.form-control {
  width: 100%;
  margin-bottom: 16px;

  &__label {
    display: block;
    margin-bottom: 4px;
    color: var(--TextDefault);
  }

  > input,
  > textarea,
  > select {
    display: block;
    width: 100%;
    padding: 12px 14px;
    color: var(--TextDefault);
    border: 1px solid var(--Highlight);
    border-radius: 5px;
  }

  > select {
    padding-right: 28px;
    vertical-align: middle;
    background: var(--White) url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 12px center/8px 10px;
    appearance: none;
  }
}
</style>
