<template>
  <VModal @close="$emit('close')">
    <template #title>
      {{ task.title }}
      <span
        class="comment__title-edit-btn"
        @click="$emit('edit', task.id)"
      >
        Edit task
      </span>
    </template>
    <div class="comment__task-content">
      {{ task.description }}
      <div class="comment__task-info">
        <div>
          <strong>Date:</strong> {{ getLocalDate(task.todoDate) }}
        </div>
        <div>
          <strong>Priority:</strong> {{ task.priority }}
        </div>
      </div>
    </div>
    <div class="comment__list">
      <div
        v-for="comment in task.comments"
        :key="comment.id"
        class="comment__list-item"
      >
        <div>
          <strong>{{ comment.author }}</strong>
          <span class="comment__list-item-date">{{ getLocalDateTime(comment.date) }}</span>
        </div>
        {{ comment.text }}
      </div>
    </div>
    <form
      class="comment__form"
      @submit.prevent="onSubmit"
    >
      <VFormControl class="comment__form-input">
        <input
          id="comment"
          v-model="newCommentText"
          placeholder="Write a comment"
          required
          type="text"
          maxlength="200"
        >
      </VFormControl>
      <VButton label="Add comment" />
    </form>
  </VModal>
</template>

<script>
import { getLocalDate, getLocalDateTime } from '@/utils/time';

import VModal from '@/components/Modal/VModal.vue';
import VButton from '@/components/Button/VButton.vue';
import VFormControl from '@/components/FormControl/VFormControl.vue';

export default {
  name: 'TodoListCommentModal',
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
      newCommentText: '',
    };
  },

  methods: {
    getLocalDate,
    getLocalDateTime,

    onSubmit() {
      this.$emit('comment', {
        taskId: this.task.id,
        text: this.newCommentText,
      });
      this.newCommentText = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.comment {
  &__title-edit-btn {
    margin-left: 8px;
    color: var(--BrandDefault);
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
  }

  &__task {
    &-content {
      color: var(--TextDefault);
    }

    &-info {
      display: flex;
      margin: 16px 0;
      justify-content: space-between;
    }
  }

  &__list {
    padding-top: 16px;
    border-top: 1px solid var(--Highlight);

    &-item {
      margin-bottom: 24px;
      color: var(--TextDefault);

      &-date {
        margin-left: 8px;
        color: var(--TextSecondary)
      }
    }
  }

  &__form {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: 801px) {
      &-input {
        margin: 0 16px 0 0;
      }
    }

    @media only screen and (max-width: 800px) {
      flex-direction: column;
    }
  }
}
</style>
