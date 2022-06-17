<template>
    <div class="anticon"></div>
</template>
<script lang="ts" setup>
import { computed, unref } from "vue";

const props = defineProps({
    theme: "",
    showTitle: ""
});
</script>
