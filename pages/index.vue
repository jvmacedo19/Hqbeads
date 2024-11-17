<template>
    <div class="main">
       <HQMenu></HQMenu>
       <HomepageBanner></HomepageBanner>
       <HomepageInfo></HomepageInfo>
       <HomepageCard></HomepageCard>
       <HomepageCarrossel></HomepageCarrossel>
       <HQFooter></HQFooter>
    </div>
</template>

<script lang="ts">

import HQMenu from "@/components/geral/menu.vue"
import HQFooter from "@/components/geral/footer.vue"

export default {
    name: 'homepage',
    components: {
       HQMenu,
       HQFooter,
    },
};

</script>

<style>


</style>