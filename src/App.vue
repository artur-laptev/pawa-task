<template>
  <div
    id="app"
    class="app"
  >
    <TodoListPage />
  </div>
</template>

<script>
import TodoListPage from './views/TodoList/TodoListPage.vue';

export default {
  name: 'App',
  components: {
    TodoListPage,
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/base.scss';

.app {
  height: 100%;
  background-color: var(--Layer0);
}
</style>
