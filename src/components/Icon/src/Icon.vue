<template>
    <SvgIcon
        v-if="isSvgIcon"
        :size="size"
        :name="getSvgIcon"
        :spin="spin"
        :class="[$attr.class, 'anticon']"
    ></SvgIcon>
    <span v-else ref="elRef" :style="getWrapStyle"></span>
</template>

<script lang="ts">
import type { PropType } from "vue";
import {defineComponent, computed, ref, CSSProperties } from "vue";
import SvgIcon from "./SvgIcon.vue";
import { isString } from "@/utils/is"
import { propTypes } from "@/utils/propTypes"

const SVG_END_WITH_FLAG = '|svg';

export default defineComponent({
    name: 'Icon',
    components: { SvgIcon },
    props: {
        icon: propTypes.string,
        color: propTypes.string,
        spin: propTypes.bool.def(false)
    },
    setup(props) {
        const elRef = ref<ElRef>(null);
        const isSvgIcon = computed(()=> props.icon?.endsWith(SVG_END_WITH_FLAG));
        const getSvgIcon = computed(()=> props.icon.replace(SVG_END_WITH_FLAG, ''));

        const getWrapStyle = computed((): CSSProperties => {
            const { size, color } = props;
            let fs = size;
            if(isString(size)) {
                fs = parseInt(size, 10)
            }
            return {
                fontSize: `${fs}px`,
                color: color,
                display: 'inline-flex'
            }

        })

        return {
            elRef,
            isSvgIcon,
            getSvgIcon,
            getWrapStyle
        }
    }
    
})


</script>
