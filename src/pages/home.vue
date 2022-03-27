<template>
    <div class="bg-blue-400 w-full font-sans" style="min-height: 95vh;">
        <Navbar />
        <Toolbar />
        <Container
            class="flex px-4 pb-8 overflow-x-scroll"
            @drop="onColumnDrop($event)"
            @drag-start="dragStart"
            drag-handle-selector=".column-drag-handle"
            orientation="horizontal"
            :drop-placeholder="upperDropPlaceholderOptions"
        >
            <Draggable v-for="{ id } in columns" :key="id">
                <Column class="column-drag-handle" :column-id="id" />
            </Draggable>
        </Container>
    </div>
</template>

<script lang="ts">
import Column from '../components/Column.vue';
import Navbar from '../components/Navbar.vue';
import Toolbar from '../components/Toolbar.vue';
import { defineComponent, SetupContext, ref, onBeforeMount } from 'vue';
import { applyDrag, dragStart } from "./utils";
import { Container, Draggable } from "vue-dndrop";
import { useBoardStore } from '../store';
import { computed } from '@vue/reactivity';


export default defineComponent({
    name: 'home-page',
    components: {
        Column,
        Navbar,
        Toolbar,
        Container,
        Draggable
    },
    props: {
    },
    setup(props: any, ctx: SetupContext) {

        const boardStore = useBoardStore()

        onBeforeMount(() => {
            boardStore.fetchColumns()
        })


        const columns = computed(() => boardStore.columns)

        const upperDropPlaceholderOptions = {
            className: "cards-drop-preview",
            animationDuration: "150",
            showOnTop: true,
        }

        const onColumnDrop = (dropResult: any) => {
            // create a method that overrides all the columns on store
            const newBoard = applyDrag(columns.value, dropResult)
            boardStore.updateColumnsWithNewChanges(newBoard)
        }

        return {
            columns,
            onColumnDrop,
            dragStart,
            upperDropPlaceholderOptions
        }
    }
})
</script>