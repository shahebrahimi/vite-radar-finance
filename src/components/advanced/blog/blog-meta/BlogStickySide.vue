<script setup lang="ts">
export interface StickySideProps {
  sticky?: boolean
}

const props = defineProps<StickySideProps>()

const blockClasses = computed(() => [props.sticky && 'is-sticky'])
</script>

<template>
  <div class="blog-sticky-side" :class="blockClasses">
    <div class="blog-sticky-side-inner">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog-sticky-side {
  .blog-sticky-side-inner {
    padding-left: 3rem;
  }

  &.is-sticky {
    position: sticky;
    top: 110px;
  }
}
</style>
