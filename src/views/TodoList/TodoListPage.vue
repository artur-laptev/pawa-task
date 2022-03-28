<template>
  <div class="todo-page">
    <div class="todo-page__header">
      <div class="todo-page__header-title">
        PawaTask
      </div>
      <VButton
        label="Add a new task"
        @click="showCrudModal"
      />
    </div>
    <VList
      :items="taskList"
      @edit-click="onEditClick"
      @comment-click="onCommentClick"
      @status="onStatusChange"
    >
      <template #empty>
        You do not have any tasks
        <span
          class="todo-page__list--empty-btn"
          @click="showCrudModal"
        >add a new task</span>
      </template>
    </VList>
    <TodoListCrudModal
      v-if="isCrudModalVisible"
      :task="taskToEdit"
      @close="hideCrudModal"
      @add="onTaskAdd"
      @edit="onTaskEdit"
    />
    <TodoListCommentModal
      v-if="isCommentModalVisible"
      :task="taskToComment"
      @close="hideCommentModal"
      @comment="onTaskComment"
      @edit="onTaskEditFromComment"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import VButton from '@/components/Button/VButton.vue';
import VList from '@/components/List/VList.vue';
import TodoListCrudModal from './components/TodoListCrudModal.vue';
import TodoListCommentModal from './components/TodoListCommentModal.vue';

export default {
  name: 'TodoListPage',
  components: {
    VButton,
    VList,
    TodoListCrudModal,
    TodoListCommentModal,
  },
  data() {
    return {
      isCrudModalVisible: false,
      isCommentModalVisible: false,
      taskToEdit: {},
      taskToComment: {},
    };
  },

  computed: {
    ...mapState({
      taskList: (state) => state.tasks.tasks,
    }),
  },

  created() {
    this.loadTasks();
  },

  methods: {
    ...mapActions({
      loadTasks: 'tasks/loadTasks',
      addNewTask: 'tasks/addNewTask',
      updateTask: 'tasks/updateTask',
      addTaskComment: 'tasks/addTaskComment',
    }),

    showCrudModal() {
      this.isCrudModalVisible = true;
    },

    hideCrudModal() {
      this.isCrudModalVisible = false;
      this.taskToEdit = {};
    },

    showCommentModal() {
      this.isCommentModalVisible = true;
    },

    hideCommentModal() {
      this.isCommentModalVisible = false;
      this.taskToComment = {};
    },

    onTaskAdd(task) {
      this.hideCrudModal();
      this.addNewTask(task);
    },

    onTaskEdit(task) {
      this.hideCrudModal();
      this.updateTask({
        id: task.id,
        properties: task,
      });
    },

    onTaskEditFromComment(id) {
      this.hideCommentModal();
      this.onEditClick(id);
    },

    onTaskComment(data) {
      this.addTaskComment(data);
    },

    onEditClick(id) {
      const task = this.taskList.find((item) => item.id === id);

      if (task) {
        this.taskToEdit = task;
        this.showCrudModal();
      }
    },

    onCommentClick(id) {
      const task = this.taskList.find((item) => item.id === id);

      if (task) {
        this.taskToComment = task;
        this.showCommentModal();
      }
    },

    onStatusChange({ id, isDone }) {
      this.updateTask({
        id,
        properties: {
          isDone,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  &__list {
    &--empty-btn {
      color: var(--BrandDefault);
      cursor: pointer;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--Highlight);

    &-title {
      font-size: 24px;
      font-weight: bold;
      color: var(--TextDefault);
    }
  }
}
</style>
