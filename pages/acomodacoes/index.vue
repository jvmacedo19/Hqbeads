<template>
    <div class="main">
        <HQMenu></HQMenu>
        <AcomodacoesBanner></AcomodacoesBanner>
        <AcomodacoesModeloUm></AcomodacoesModeloUm>
        <AcomodacoesModeloDois></AcomodacoesModeloDois>
        <AcomodacoesModeloTres></AcomodacoesModeloTres>
        <AcomodacoesModeloQuatro></AcomodacoesModeloQuatro>
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