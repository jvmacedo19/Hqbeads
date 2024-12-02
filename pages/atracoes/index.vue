<template>
    <div class="main">
        <HQMenu></HQMenu>
        <AtracoesBanner></AtracoesBanner>
        <AtracoesModeloUm></AtracoesModeloUm>
        <AtracoesModeloDois></AtracoesModeloDois>
        <AtracoesModeloTres></AtracoesModeloTres>
        <AtracoesModeloQuatro></AtracoesModeloQuatro>
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