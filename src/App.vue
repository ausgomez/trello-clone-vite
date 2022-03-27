<script lang="ts">
import { defineComponent, SetupContext } from 'vue';

export default defineComponent({
  components: {
  },
  props: {
  },
  setup(props: any, ctx: SetupContext) {

  }
})
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="['test', 'tab1', 'tab2']">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style>
</style>
