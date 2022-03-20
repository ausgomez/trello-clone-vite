<script lang="ts">
import Column from './components/Column.vue';
import Navbar from './components/Navbar.vue';
import Toolbar from './components/Toolbar.vue';
import { defineComponent, SetupContext } from 'vue';

export default defineComponent({
  components: {
    Column,
    Navbar,
    Toolbar
  },
  props: {
  },
  setup(props: any, ctx: SetupContext) {

  }
})
</script>

<template>
  <div class="bg-blue-400 w-full h-screen font-sans">
    <Navbar />
    <Toolbar />
    <div class="flex px-4 pb-8 overflow-x-scroll">
      <Column title="default" />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
    </div>
  </div>
</template>

<style>
</style>
