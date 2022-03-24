<template>
    <div class="bg-blue-400 w-full h-screen font-sans">
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
            <Draggable v-for="column in columnsList" :key="column.id">
                <Column :column-obj="column" />
            </Draggable>
        </Container>
        <Footer />
    </div>
</template>

<script lang="ts">
import Column from '../components/Column.vue';
import Navbar from '../components/Navbar.vue';
import Toolbar from '../components/Toolbar.vue';
import Footer from '../components/Footer.vue';
import { defineComponent, SetupContext, ref } from 'vue';
import { applyDrag, dragStart } from "./utils";
import { Container, Draggable } from "vue-dndrop";
import { columns } from '../data.json'


export default defineComponent({
    name: 'home-page',
    components: {
        Column,
        Navbar,
        Toolbar,
        Footer,
        Container,
        Draggable
    },
    props: {
    },
    setup(props: any, ctx: SetupContext) {

        const upperDropPlaceholderOptions = {
            className: "cards-drop-preview",
            animationDuration: "150",
            showOnTop: true,
        }

        const columnsList = ref([...columns]);

        const onColumnDrop = (dropResult: any) => {
            columnsList.value = applyDrag(columnsList.value, dropResult);
        }

        return {
            columnsList,
            onColumnDrop,
            dragStart,
            upperDropPlaceholderOptions
        }
    }
})
</script>