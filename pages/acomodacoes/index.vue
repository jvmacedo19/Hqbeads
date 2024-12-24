<template>
    <div class="main">
        <HQMenu></HQMenu>
        <AcomodacoesBanner :title="landing.title" :subtitle="landing.subtitle" :background="landing.background"></AcomodacoesBanner>
        <template v-for="(room, i) in rooms" :key="i">
            <AcomodacoesModeloUm :title="room.title" :description="room.description" :number="room.number" :gallery="room.gallery" v-if="i % 2 === 0" />
            <AcomodacoesModeloDois :title="room.title" :description="room.description" :number="room.number" :gallery="room.gallery" v-else />
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
            rooms: []
        }
    },
    methods: {
        async consultLanding() {
            const query = await GqlAcomodacoesLanding();

            this.landing.title = query.pageBy?.camposAcomodacoes?.titulo;
            this.landing.subtitle = query.pageBy?.camposAcomodacoes?.subtitulo;
            this.landing.background = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${query.pageBy?.camposAcomodacoes?.imagemDeFundo?.node.sourceUrl}') no-repeat center/cover`;
        },
        async consultRooms() {
            const query = await GqlAcomodacoesRooms();

            query.pageBy?.camposAcomodacoes?.acomodacoes?.forEach((room) => {
                let images = [];

                room?.galeria?.nodes.forEach((img) => {
                    images.push(img.sourceUrl);
                })

                this.rooms.push({
                    title: room?.titulo,
                    description: room?.descricao,
                    number: (room.capacidade > 1) ? `até ${room.capacidade} pessoas` : "até 1 pessoa",
                    gallery: images
                })
            });
        }
    },
    async mounted() {
        this.consultLanding();
        this.consultRooms();
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