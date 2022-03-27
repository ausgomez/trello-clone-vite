<template>
    <div>
        <div class="flex justify-around">
            <router-link to="/">back</router-link>
            <button v-for="tab in tabs" :key="tab" @click="selectedTab = tab">{{ tab }}</button>
        </div>
        <component :is="selectedTab"></component>
    </div>
</template>


<script lang="ts">
import { computed, defineComponent, reactive, ref, SetupContext } from "vue";
import tab1 from '../components/tab1.vue'
import tab2 from '../components/tab2.vue'

export default defineComponent({
    name: "test",
    components: {
        tab1, tab2
    },
    props: {

    },
    setup() {

        const tabs = ['tab1', 'tab2']
        const selectedTab = ref('tab1');

        const stringValue = ref('')
        const stringValue2 = ref('')

        return {
            stringValue,
            stringValue2,
            selectedTab,
            tabs
        }
    }
})
</script>