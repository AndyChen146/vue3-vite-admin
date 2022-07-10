<template>
    <Dropdown>
        <span class="cursor-pointer flex items-center">
            <Icon icon="icon.language" />
            <span v-if="showText" class="ml-1">{{ getLocaleText }}</span>
        </span>
    </Dropdown>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Dropdown } from "@/components/Dropdown";
import { Icon } from "@/components/Icon";

const props = defineProps({
    showText: { type: Boolean, default: true },
    reload: { type: Boolean }
});
</script>
