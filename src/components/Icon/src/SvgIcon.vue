<template>
    <svg :class="[prefixCls, $attr.class, spin && 'svg-icon-spin']" :style="getStyles">
        <use :xlink:href="symbolId" />
    </svg>
</template>

<script lang="ts">
import type { CSSProperties } from 'vue'
import { defineComponent, computed } from "vue"
import { useDesign } from "@/hooks/web/useDesign"

export default defineComponent({
    name: 'SvgIcon',
    props: {
        prefix: {
            type: String,
            default: 'icon'
        },
        name: {
            type: String,
            required: true
        },
        spin: {
            type: Boolean,
            default: false
        },
        size: {
            type: [Number, String],
            default: 16
        }
    },
    setup(props) {
        const { prefixCls } = useDesign('svg-icon');
        const symbolId = computed(()=> `#${props.prefix}-${props.name}`)
        const getStyles = computed(():CSSProperties => {
            const { size } = props;
            let s = `${size}`;
            s = `${s.replace('px', '')}px`
            return {
                width: s,
                height: s,  
            }
        })

        return {
            prefixCls,
            symbolId,
            getStyles
        }
    }
})

</script>
