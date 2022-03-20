<script lang="ts">
import { defineComponent, ref, SetupContext } from "vue";
import Card from './Card.vue';

export default defineComponent({
    name: "Column",
    components: {
        Card
    },
    props: {
        title: {
            type: String,
            default: ""
        }
    },
    setup(props: any, ctx: SetupContext) {
        const isAddingNewCard = ref(false);
        const isEditingTitle = ref(false);


        return {
            isAddingNewCard,
            isEditingTitle
        }
    }
})
</script>

<template>
    <div class="rounded bg-slate-200 flex-no-shrink w-64 p-2 mr-3" style="min-width: 16rem;">
        <div class="flex justify-between py-1">
            <h3 class="text-sm" @click="isEditingTitle = true" v-if="!isEditingTitle">{{ title }}</h3>
            <input v-else type="text" v-model="title" />
            <svg
                class="h-4 fill-current text-grey-dark cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path
                    d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"
                />
            </svg>
        </div>
        <div class="mb-2 space-y-2">
            <Card title="Do homework" />
            <Card title="Do homework" />
            <Card title="Do homework" />
            <Card title="Do homework" />
            <Card title="Do homework" />
        </div>
        <div class="overflow-hidden text-sm" v-if="isAddingNewCard">
            <textarea
                class="rounded p-2 w-full"
                placeholder="Enter a title for this card"
                rows="4"
            />
        </div>
        <div class="text-sm mt-2">
            <p
                class="mt-3 text-grey-dark cursor-pointer"
                @click="isAddingNewCard = true"
                v-if="!isAddingNewCard"
            >Add a card...</p>
            <div class="flex space-x-4" v-else>
                <p
                    class="py-3 px-2 w-1/3 bg-blue-500 rounded text-white font-semibold"
                    @click="isAddingNewCard = true"
                >Add card</p>
                <button @click="isAddingNewCard = false">X</button>
            </div>
        </div>
    </div>
</template>