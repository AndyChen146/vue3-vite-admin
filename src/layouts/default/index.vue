<template>
    <Layout>layout</Layout>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { Layout } from "ant-design-vue";

export default defineComponent({
    name: "DefaultLayout",
    components: {
        Layout
    },
    setup() {}
});
</script>
