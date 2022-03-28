<template>
  <div class="list">
    <template v-if="items.length > 0">
      <VListItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        @comment="$emit('comment-click', item.id)"
        @edit="$emit('edit-click', item.id)"
        @status="$emit('status', { id: item.id, isDone: $event })"
      />
    </template>
    <div
      v-else
      class="list--empty"
    >
      <slot name="empty" />
    </div>
  </div>
</template>

<script>
import VListItem from './VListItem.vue';

export default {
  name: 'VList',
  components: {
    VListItem,
  },
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  &--empty {
    margin-top: 10px;
  }
}
</style>
