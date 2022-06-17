<template>
    <a-dropdown>
        <span>
            <slot></slot>
        </span>
        <template></template>
    </a-dropdown>
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue";
import { Dropdown, Menu, Popconfirm } from "ant-design-vue";

const ADropdown = Dropdown;
</script>
