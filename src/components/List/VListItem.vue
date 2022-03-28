<template>
  <div class="list-item">
    <div class="list-item__left">
      <input
        :id="`status-${item.id}`"
        type="checkbox"
        :checked="item.isDone"
        class="list-item__checkbox"
        @change="$emit('status', $event.target.checked)"
      >
      <label
        :for="`status-${item.id}`"
        class="list-item__checkbox-label"
      >
        {{ item.title }}
      </label>
    </div>
    <div class="list-item__right">
      <div>📅 {{ getLocalDate(item.todoDate) }}</div>
      <VButton
        label="💬"
        class="list-item__button"
        @click="$emit('comment')"
      />
      <VButton
        label="✏️"
        class="list-item__button"
        @click="$emit('edit')"
      />
    </div>
  </div>
</template>

<script>
import { getLocalDate } from '@/utils/time';

import VButton from '@/components/Button/VButton.vue';

export default {
  name: 'VListItem',
  components: { VButton },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    getLocalDate,
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  color: var(--TextDefault);
  border-bottom: 2px solid var(--Highlight);

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  &__checkbox {
    width: 18px;
    height: 18px;

    &-label {
      font-size: 18px;
      margin-left: 8px;
    }
  }

  &__button {
    margin-left: 10px;
  }
}
</style>
