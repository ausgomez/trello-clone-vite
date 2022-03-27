<script lang="ts">
import { computed, defineComponent, reactive, ref, SetupContext } from "vue";
import Card from './Card.vue';
import { Container, Draggable } from "vue-dndrop";
import { applyDrag, log } from "../pages/utils";
import { Task } from "../classes/Task";
import { useBoardStore } from "../store";


export default defineComponent({
    name: "Column",
    props: {
        columnId: {
            type: String
        }
    },
    components: {
        Card,
        Container,
        Draggable
    },
    setup(props: any, ctx: SetupContext) {
        /* VARIABLES */
        const boardStore = useBoardStore()
        // const cards = boardStore.columns[0]
        const column = computed(() => boardStore.columnById(props.columnId))

        const isAddingNewCard = ref(false);
        const isEditingTitle = ref(false);

        const cards = computed(() => boardStore.getTasksByColumnId(props.columnId))

        const newCardObj = reactive({
            data: "",
        });

        /* METHODS */
        function onClickAway() {
            isAddingNewCard.value = false;
            isEditingTitle.value = false;
        }

        function saveNewCard() {
            const task = new Task()
            task.data = newCardObj.data
            boardStore.addNewTaskToColumnById(props.columnId, task)
            newCardObj.data = ""
            isAddingNewCard.value = false
        }
        // https://amendx.github.io/vue-dndrop/examples/cards.html

        const onCardDrop = (dropResult: any) => {
            if (column.value === null) return;
            if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
                const newTasksList = applyDrag(cards.value, dropResult);

                boardStore.updateTasksInColumnById(column.value!.id, newTasksList)
            }
        }

        return {
            column,
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
    <div
        class="rounded bg-slate-200 flex-no-shrink w-64 p-2 mr-3 h-auto"
        style="min-width: 16rem;"
        v-if="column"
    >
        <div class="flex justify-between py-1">
            <h3
                class="text-sm w-full font-semibold text-slate-700"
                @dblclick="isEditingTitle = true"
                v-if="!isEditingTitle"
            >{{ column.name }}</h3>
            <input
                v-else
                type="text"
                class="text-sm px-2 w-full"
                v-model="column.name"
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
            <Draggable v-for="(card, index) in cards" :key="index">
                <Card :card="card" />
            </Draggable>
        </Container>
        <div class="overflow-hidden text-sm" v-if="isAddingNewCard">
            <textarea
                class="rounded p-2 w-full"
                placeholder="Enter a title for this card"
                rows="4"
                v-model="newCardObj.data"
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