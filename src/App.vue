<template>
    <ConfigProvider :locale="getAntdLocale">
        <AppProvider>
            <RouterView />
        </AppProvider>
    </ConfigProvider>
</template>
<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue";
import { AppProvider } from "@/components/Application";

const getAntdLocale = "en_US";
</script>

