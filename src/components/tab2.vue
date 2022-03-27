<template>
    <div class="bg-blue-400">
        <p class="text-4xl">Welcome to Tab 2</p>
        <p class="text-3xl">> {{ stringValue }}</p>
        <input class="bg-blue-300 text-white m-20" v-model="stringValue" type="text" />
    </div>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "tab2",
    props: {

    },
    setup() {

        const stringValue = ref('')

        return {
            stringValue,
        }
    }
})
</script>