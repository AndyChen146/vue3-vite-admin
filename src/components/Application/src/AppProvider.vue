<script lang="ts">
import { defineComponent, toRefs, ref, unref } from "vue";
import { createAppProviderContext } from "./useAppContext";
const props = {
    prefixCls: {
        type: String,
        default: ""
    }
};

export default defineComponent({
    name: "AppProvider",
    inheritAttrs: false,
    props,
    setup(props, { slots }) {
        const isMobile = ref(false);
        const isSetState = ref(false);
        const { prefixCls } = toRefs(props);
        createAppProviderContext({ prefixCls, isMobile });
        return () => slots.default?.();
    }
});
</script>
