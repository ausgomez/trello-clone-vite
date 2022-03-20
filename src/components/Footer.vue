<script lang="ts">
import { defineComponent, SetupContext } from "vue";

export default defineComponent({
    props: {
        title: {
            type: String,
            default: ""
        }
    },
    setup() {

    }
})
</script>

<template>
    <div class="text-white text-center w-full">
        Clone made by
        <a href="https://github.com/Anstroy" class="pl-1 font-semibold">Anstroy</a>
        <br />
        <a
            href="https://github.com/Anstroy/trello-clone-vite"
            class="pl-1 font-semibold"
        >View Source Code</a>
    </div>
</template>