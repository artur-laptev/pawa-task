<template>
  <div
    class="modal-wrapper"
    @click="emitClose"
    @keydown.esc="emitClose"
  >
    <div
      class="modal"
      @click.stop
    >
      <div class="modal__header">
        <div>
          <slot name="title">
            {{ title }}
          </slot>
        </div>
        <div
          class="modal__header-close"
          @click="emitClose"
        >
          &times;
        </div>
      </div>
      <div class="modal__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VModal',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    emitClose() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: relative;
  background-color: var(--White);
  margin: auto;
  padding: 20px;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0 ,0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation: animatetop 0.4s;

  &-wrapper {
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: bold;

    &-close {
      color: var(--TextDefault);
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
    }
  }

  &__content {
    margin-top: 20px;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0
  }
  to {
    top: 0;
    opacity: 1
  }
}
</style>
