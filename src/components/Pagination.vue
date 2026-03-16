<script setup lang="ts">
import { ref } from 'vue'

const { total = 0 } = defineProps<{ total?: number }>()
const emits = defineEmits<{
  requestNewRecord: [page: number, pageSize: number],
}>()

const page = ref(1)
const pageSize = ref(10)
const changePage = (value: number) => {
  emits('requestNewRecord', value, pageSize.value)
}
</script>

<template>
  <el-pagination
      :total="total"
      layout="prev, pager, next, jumper, slot"
      v-model:current-page="page"
      @update:current-page="changePage"
      :page-size="pageSize"
      hide-on-single-page>
    页/共 {{ total }} 条
  </el-pagination>
</template>

<style scoped lang="scss">
.el-pagination {
  --el-pagination-button-width: 44px;
  --el-pagination-button-height: 44px;
  --el-pagination-bg-color: transparent;
  --el-pagination-button-disabled-bg-color: transparent;
  --el-pagination-button-color: var(--app-title-color);
  --el-pagination-hover-color: var(--app-color-primary);

  margin: 32px 0;
  justify-content: center;

  &:deep(button) {
    background: url("@/assets/images/btn-left.png") center / contain no-repeat;

    > .el-icon {
      display: none;
    }

    &.btn-next {
      background-image: url("@/assets/images/btn-right.png");
    }
  }

  &:deep(ul) {
    gap: 8px;

    > li {
      border: 1px dashed var(--app-icon-color);
      transition: border var(--app-transition-time), font-weight var(--app-transition-time);

      &:hover, &.is-active {
        border-color: var(--app-color-primary);
      }
    }
  }

  &:deep(.el-pagination__jump) {
    --el-text-color-regular: var(--app-title-color);

    margin-left: 0;

    &::before {
      content: "第";
      padding-right: 8px;
    }

    > .el-pagination__goto {
      display: none;
    }

    > .el-input {
      --el-input-height: 28px;

      width: 44px;

      > .el-input__wrapper {
        --el-input-bg-color: transparent;
        --el-input-border-color: transparent;
        --el-input-hover-border-color: transparent;
        --el-input-focus-border-color: transparent;

        border: 1px dashed var(--app-icon-color);
      }
    }
  }
}
</style>