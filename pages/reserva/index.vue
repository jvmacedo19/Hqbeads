<template>
    <div class="main">
        <HQMenu></HQMenu>
        <ReservaBanner></ReservaBanner>
        <ReservaIframe></ReservaIframe>
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