<template>
  <VModal
    :title="isEditMode ? task.title : 'New task'"
    @close="$emit('close')"
  >
    <form @submit.prevent="onSubmit">
      <VFormControl
        name="title"
        label="Title:"
      >
        <input
          id="title"
          v-model="taskToEdit.title"
          required
          type="text"
          maxlength="200"
        >
      </VFormControl>
      <VFormControl
        name="description"
        label="Description:"
      >
        <textarea
          id="description"
          v-model="taskToEdit.description"
          rows="3"
          maxlength="200"
        />
      </VFormControl>
      <VFormControl
        name="todo-date"
        label="Set due date:"
      >
        <input
          id="due-date"
          v-model="taskToEdit.todoDate"
          required
          type="date"
        >
      </VFormControl>
      <VFormControl
        name="priority"
        label="Priority:"
      >
        <select
          id="priority"
          v-model="taskToEdit.priority"
          required
        >
          <option
            v-for="p in Object.keys(priority)"
            :key="p"
            :value="priority[p]"
          >
            {{ priority[p] }}
          </option>
        </select>
      </VFormControl>
      <div class="form__footer">
        <VButton :label="isEditMode ? 'Edit task' : 'Add a new task'" />
      </div>
    </form>
  </VModal>
</template>

<script>
import { PRIORITY } from '@/const';

import VModal from '@/components/Modal/VModal.vue';
import VButton from '@/components/Button/VButton.vue';
import VFormControl from '@/components/FormControl/VFormControl.vue';

export default {
  name: 'TodoListCrudModal',
  components: {
    VModal,
    VButton,
    VFormControl,
  },
  props: {
    task: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      priority: Object.freeze(PRIORITY),
      taskToEdit: {},
    };
  },

  computed: {
    isEditMode() {
      return !!this.task.id;
    },
  },

  created() {
    if (this.task) {
      this.taskToEdit = { ...this.task };
    }
  },

  methods: {
    onSubmit() {
      this.$emit(this.isEditMode ? 'edit' : 'add', this.taskToEdit);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  &__footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
