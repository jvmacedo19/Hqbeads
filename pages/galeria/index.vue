<template>
    <div class="main">
        <HQMenu></HQMenu>
        <GaleriaBanner :title="landing.title" :subtitle="landing.subtitle" :background="landing.background"></GaleriaBanner>
        <GaleriaImagem :images="images"></GaleriaImagem>
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
    data() {
        return {
            landing: {
                title:null,
                subtitle:null,
                background:null
            },
            images: []
        }
    },
    methods: {
        async consultLanding() {
            const query = await GqlGaleriaLanding();

            this.landing.title = query.pageBy?.camposGaleria?.titulo;
            this.landing.subtitle = query.pageBy?.camposGaleria?.subtitulo;
            this.landing.background = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${query.pageBy?.camposGaleria?.imagemDeFundo?.node.sourceUrl}') no-repeat center/cover`;
        },
        async consultGallery() {
            const query = await GqlGaleriaImages();

            query.pageBy?.camposGaleria?.galeria?.nodes.forEach((img) => {
                this.images.push(img.sourceUrl);
            })
        }
    },
    async mounted() {
        this.consultLanding();
        this.consultGallery();
    }
};

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