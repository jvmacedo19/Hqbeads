<template>
    <div class="main">
        <HQMenu></HQMenu>
        <PropriedadeBanner></PropriedadeBanner>
        <PropriedadeSobre></PropriedadeSobre>
        <PropriedadeInfo></PropriedadeInfo>
        <PropriedadeModeloDois></PropriedadeModeloDois>
        <PropriedadeVizinhanca></PropriedadeVizinhanca>
        <PropriedadeCarrossel></PropriedadeCarrossel>
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
    }
</script>

<script setup lang="ts">
    const robots = process.env.ROBOTS;

    const seo = {
        title: 'HQSites - Template de site #1',
        description: 'Navegue pelo nosso template, pensado exclusivamente para impulsionar o desempenho da sua pousada!',
        image: 'https://olive-wren-636935.hostingersite.com/wp-content/uploads/2024/12/image-1.webp'
    }

    useHead({
        meta: [
            { name: 'robots', content: robots }
        ]
    })

    useSeoMeta({
        title: seo.title,
        ogTitle: seo.title,
        description: seo.description,
        ogDescription: seo.description,
        ogImage: seo.image,
        ogType: 'website',
        twitterCard: 'summary_large_image',
        twitterTitle: seo.title,
        twitterDescription: seo.description,
        twitterImage: seo.image
    })
</script>