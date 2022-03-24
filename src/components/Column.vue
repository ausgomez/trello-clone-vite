<script lang="ts">
import { computed, defineComponent, reactive, ref, SetupContext } from "vue";
import Card from './Card.vue';
import { Container, Draggable } from "vue-dndrop";
import { applyDrag, log } from "../pages/utils";

import { columns } from '../data.json'


export default defineComponent({
    name: "Column",
    props: {
        columnObj: {
            type: Object,
            default: {}
        }
    },
    components: {
        Card,
        Container,
        Draggable
    },
    setup(props: any, ctx: SetupContext) {
        /* VARIABLES */
        const isAddingNewCard = ref(false);
        const isEditingTitle = ref(false);
        const title = ref(props.columnObj.id)

        const cards = ref(props.columnObj.children);

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
            // cards.value.push(card)
            newCardObj.title = ""
            newCardObj.description = ""
            isAddingNewCard.value = false
        }
        // https://amendx.github.io/vue-dndrop/examples/cards.html

        const onCardDrop = (dropResult: any) => {
            if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
                const columnIndex = columns.findIndex(c => c.id == props.columnObj.id)
                console.log(columnIndex)
                const newColumn = columns[columnIndex]
                newColumn.children = applyDrag(cards.value, dropResult);
                console.log('>', newColumn)
                columns.splice(columnIndex, 1, newColumn);
            } else {
                console.log('nmop[e')
            }
        }

        return {
            title,
            isAddingNewCard,
            isEditingTitle,
            onClickAway,
            cards,
            newCardObj,
            saveNewCard,
            onCardDrop,
            log
        }
    }
})
</script>

<template>
    <div class="rounded bg-slate-200 flex-no-shrink w-64 p-2 mr-3 h-auto" style="min-width: 16rem;">
        <div class="flex justify-between py-1">
            <h3
                class="text-sm w-full font-semibold text-slate-700"
                @dblclick="isEditingTitle = true"
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
        <Container
            class="mb-2 space-y-2"
            group-name="col"
            @drop="(e: any) => onCardDrop(e)"
            @drag-start="(e: any) => log('drag start', e)"
            @drag-end="(e: any) => log('drag end', e)"
        >
            <Draggable v-for="(card, index) in columnObj?.children" :key="index">
                <Card :card="card" />
            </Draggable>
        </Container>
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