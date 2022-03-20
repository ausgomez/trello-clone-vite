<script lang="ts">
import { defineComponent, reactive, ref, SetupContext } from "vue";
import Card from './Card.vue';

export default defineComponent({
    name: "Column",
    components: {
        Card
    },
    props: {
    },
    setup(props: any, ctx: SetupContext) {
        /* VARIABLES */
        const isAddingNewCard = ref(false);
        const isEditingTitle = ref(false);
        const title = ref('Edit me')

        const cards = ref([
            {
                order: 0,
                title: "Do homework",
                description: ""
            },
            {
                order: 1,
                title: "Do Laundry",
                description: ""
            },
            {
                order: 2,
                title: "Do Else",
                description: ""
            }
        ]);

        const newCardObj = reactive({
            title: "",
            description: ""
        });

        /* METHODS */
        function onClickAway() {
            console.log('clicking away')
            isAddingNewCard.value = false;
            isEditingTitle.value = false;
        }

        function saveNewCard() {
            const card = { order: 3, ...newCardObj }
            cards.value.push(card)
            newCardObj.title = ""
            newCardObj.description = ""
            isAddingNewCard.value = false
        }


        return {
            title,
            isAddingNewCard,
            isEditingTitle,
            onClickAway,
            cards,
            newCardObj,
            saveNewCard
        }
    }
})
</script>

<template>
    <div class="rounded bg-slate-200 flex-no-shrink w-64 p-2 mr-3 h-auto" style="min-width: 16rem;">
        <div class="flex justify-between py-1">
            <h3
                class="text-sm w-full font-semibold text-slate-700"
                @click="isEditingTitle = true"
                v-if="!isEditingTitle"
            >{{ title }}</h3>
            <input
                v-else
                type="text"
                class="text-sm px-2 w-full"
                v-model="title"
                v-click-away="onClickAway"
            />
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
            <Card v-for="(card, index) in cards" :key="index" :title="card.title" />
        </div>
        <div class="overflow-hidden text-sm" v-if="isAddingNewCard">
            <textarea
                class="rounded p-2 w-full"
                placeholder="Enter a title for this card"
                rows="4"
                v-model="newCardObj.title"
            />
        </div>
        <div class="text-sm mt-2">
            <p
                class="mt-3 text-grey-dark cursor-pointer"
                @click="isAddingNewCard = true"
                v-if="!isAddingNewCard"
            >Add a card...</p>
            <div class="flex space-x-4" v-else>
                <button
                    class="py-3 px-2 w-1/3 bg-blue-500 rounded text-white font-semibold"
                    @click="saveNewCard"
                >Add card</button>
                <button @click="isAddingNewCard = false">X</button>
            </div>
        </div>
    </div>
</template>