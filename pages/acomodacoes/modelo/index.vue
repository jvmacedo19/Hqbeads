<template>
    <div class="main">
        <HQMenu></HQMenu>
        <ModeloBanner></ModeloBanner>
        <ModeloSobre></ModeloSobre>
        <HQFooter></HQFooter>
    </div>
</template>

<script lang="ts">

import HQMenu from "@/components/geral/menu.vue"
import HQFooter from "@/components/geral/footer.vue"

export default {
    components: {
        HQMenu,
        HQFooter,
    },
};

</script>

<style></style>