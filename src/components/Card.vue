<script lang="ts">
import { defineComponent, SetupContext } from "vue";

export default defineComponent({
    props: {
        card: {
            type: Object,
        }
    },
    setup() {

    }
})
</script>

<template>
    <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-slate-200">
        {{ card?.data }}
        <div class="text-grey-darker mt-2 ml-2 flex justify-between items-start">
            <span class="text-xs flex items-center">
                <svg
                    class="h-4 fill-current mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                >
                    <path
                        d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z"
                    />
                </svg>
                3/5
            </span>
            <img class="w-8 h-8 rounded-full" src="https://picsum.photos/100/100?grayscale" />
        </div>
    </div>
</template>