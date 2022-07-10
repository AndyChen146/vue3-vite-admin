<template>
    <a-dropdown :trigger="trigger" v-bind="$attrs">
        <span>
            <slot></slot>
        </span>
        <template #overlay>
            <a-menu :selectedKeys="selectedKeys">
                <template v-for="item in dropMenuList" :key="`${item.event}`">
                    <a-menu-item
                        v-bind="getAttr(item.event)"
                        @click="handleClickMenu(item)"
                        :disabled="item.disabled"
                    >
                        <a-popconfirm v-if="popconfirm && item.popConfirm"></a-popconfirm>
                        <template v-else></template>
                    </a-menu-item>

                    <a-menu-divider v-if="item.divider" :key="`d-${item.event}`"></a-menu-divider>
                </template>
            </a-menu>
        </template>
    </a-dropdown>
</template>

<script lang="ts" setup>
import { computed, PropType, defineProps, defineEmits } from "vue";
import { Dropdown, Menu, Popconfirm } from "ant-design-vue";

const ADropdown = Dropdown;
const AMenu = Menu;
const AMenuItem = Menu.Item;
const AMenuDivider = Menu.Divider;
const APopconfirm = Popconfirm;

const props = defineProps({
    trigger: {
        type: [Array] as PropType<("contextmenu" | "hover" | "click")[]>,
        default: () => {
            return ["contextmenu"];
        }
    },
    selectedKeys: {
        type: Array as PropType<string[]>,
        default: () => []
    },
    dropMenuList: {
        type: Array,
        default: () => []
    }
});

const emit = defineEmits(["menuEvent"]);

function handleClickMenu(item) {
    const { event } = item;
    const menu = props.dropMenuList.find(
        item => `${item.event}` === `${event}`
    );
    emit("menuEvent", menu);
    item.onclick?.();
}

const getAttr = (key: string | number) => ({ key });
</script>
