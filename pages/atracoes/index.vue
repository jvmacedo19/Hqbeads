<template>
    <div class="main">
        <HQMenu></HQMenu>
        <AtracoesBanner :title="landing.title" :subtitle="landing.subtitle" :background="landing.background"></AtracoesBanner>
        <template v-for="(attraction, i) in attractions" :key="i">
            <AtracoesModeloUm :title="attraction.title" :description="attraction.description" :number="attraction.number" :gallery="attraction.gallery" v-if="i % 2 === 0" />
            <AtracoesModeloDois :title="attraction.title" :description="attraction.description" :number="attraction.number" :gallery="attraction.gallery" v-else />
        </template>
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
                attractions: []
            }
        },
        methods: {
            async consultLanding() {
                const query = await GqlAtracoesLanding();

                this.landing.title = query.pageBy?.camposAtracoes?.titulo;
                this.landing.subtitle = query.pageBy?.camposAtracoes?.subtitulo;
                this.landing.background = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${query.pageBy?.camposAtracoes?.imagemDeFundo?.node.sourceUrl}') no-repeat center/cover`;
            },
            async consultAttractions() {
                const query = await GqlAtracoesAttractions();

                query.pageBy?.camposAtracoes?.atracoes?.forEach((attraction) => {
                    let images = [];

                    attraction?.galeria?.nodes.forEach((img) => {
                        images.push(img.sourceUrl);
                    })

                    this.attractions.push({
                        title: attraction?.titulo,
                        description: attraction?.descricao,
                        gallery: images
                    })
                });
            }
        },
        async mounted() {
            this.consultLanding();
            this.consultAttractions();
        }
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