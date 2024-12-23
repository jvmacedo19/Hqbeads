<template>
    <div class="main">
        <HQMenu></HQMenu>
        <HomepageBanner :title="landing.title" :subtitle="landing.subtitle"></HomepageBanner>
        <HomepageInfo :title="info.title" :description="info.description" :cards="info.cards"></HomepageInfo>
        <HomepageCard :ctas="ctas"></HomepageCard>
        <HomepageCarrossel :testimonials="testimonials" :gallery="gallery" :location="location"></HomepageCarrossel>
        <HQFooter></HQFooter>
    </div>
</template>

<script lang="ts">

import HQMenu from "@/components/geral/menu.vue"
import HQFooter from "@/components/geral/footer.vue"
import { ref } from 'vue';

export const metaTitle = ref('');
export const metaDescription = ref('');

export default {
    name: 'homepage',
    components: {
        HQMenu,
        HQFooter,
    },
    data() {
        return {
            landing: {
                title:null,
                subtitle:null
            },
            info: {
                title:null,
                description:null,
                cards: [
                    {
                        title:null,
                        description:null,
                        icon:null,
                        background:null
                    },
                    {
                        title:null,
                        description:null,
                        icon:null,
                        background:null
                    },
                    {
                        title:null,
                        description:null,
                        icon:null,
                        background:null
                    },
                    {
                        title:null,
                        description:null,
                        icon:null,
                        background:null
                    }
                ]
            },
            ctas: {
                acomodacoes:null,
                atracoes:null
            },
            testimonials: [],
            gallery: {
                title:null,
                description:null,
                image:null
            },
            location: {
                title:null,
                description:null,
                link:null
            }
        }
    },
    async mounted() {
        const query = await GqlHomePage({ slug: "home-page" });
        console.log(query);

        this.landing.title = query.pageBy?.camposHomePage?.fraseDeAterrissagem;
        this.landing.subtitle = query.pageBy?.camposHomePage?.subtituloDeAterrissagem;

        this.info.title = query.pageBy?.camposHomePage?.tituloSegundaDobra;
        this.info.description = query.pageBy?.camposHomePage?.descricaoSegundaDobra;
        
        this.info.cards[0].title = query.pageBy?.camposHomePage?.card1.titulo;
        this.info.cards[0].description = query.pageBy?.camposHomePage?.card1.descricao;
        this.info.cards[0].icon = `mdi-${query.pageBy?.camposHomePage?.card1.icone}`;
        this.info.cards[0].background = (query.pageBy?.camposHomePage?.card1?.imagemDeFundo?.node.sourceUrl) ? (`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${query.pageBy?.camposHomePage?.card1?.imagemDeFundo?.node.sourceUrl}') no-repeat center/cover`) : ('#6c563f');

        this.info.cards[1].title = query.pageBy?.camposHomePage?.card2.titulo;
        this.info.cards[1].description = query.pageBy?.camposHomePage?.card2.descricao;
        this.info.cards[1].icon = `mdi-${query.pageBy?.camposHomePage?.card2.icone}`;
        this.info.cards[1].background = (query.pageBy?.camposHomePage?.card2?.imagemDeFundo?.node.sourceUrl) ? (`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${query.pageBy?.camposHomePage?.card2?.imagemDeFundo?.node.sourceUrl}') no-repeat center/cover`) : ('#6c563f');

        this.info.cards[2].title = query.pageBy?.camposHomePage?.card3.titulo;
        this.info.cards[2].description = query.pageBy?.camposHomePage?.card3.descricao;
        this.info.cards[2].icon = `mdi-${query.pageBy?.camposHomePage?.card3.icone}`;
        this.info.cards[2].background = (query.pageBy?.camposHomePage?.card3?.imagemDeFundo?.node.sourceUrl) ? (`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${query.pageBy?.camposHomePage?.card3?.imagemDeFundo?.node.sourceUrl}') no-repeat center/cover`) : ('#6c563f');

        this.info.cards[3].title = query.pageBy?.camposHomePage?.card4.titulo;
        this.info.cards[3].description = query.pageBy?.camposHomePage?.card4.descricao;
        this.info.cards[3].icon = `mdi-${query.pageBy?.camposHomePage?.card4.icone}`;
        this.info.cards[3].background = (query.pageBy?.camposHomePage?.card4?.imagemDeFundo?.node.sourceUrl) ? (`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${query.pageBy?.camposHomePage?.card4?.imagemDeFundo?.node.sourceUrl}') no-repeat center/cover`) : ('#6c563f');

        this.ctas.acomodacoes = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${query.pageBy?.camposHomePage?.callToActions?.acomodacoes?.node.sourceUrl}') no-repeat center/cover`;
        this.ctas.atracoes = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${query.pageBy?.camposHomePage?.callToActions?.atracoes?.node.sourceUrl}') no-repeat center/cover`;

        query.pageBy?.camposHomePage?.depoimentos?.forEach((dep) => {
            this.testimonials.push(dep.depoimento);
        });

        this.gallery.title = query.pageBy?.camposHomePage?.galeria?.titulo;
        this.gallery.description = query.pageBy?.camposHomePage?.galeria?.descricao;
        this.gallery.image = query.pageBy?.camposHomePage?.galeria?.imagemEmDestaque?.node.sourceUrl;

        this.location.title = query.pageBy?.camposHomePage?.localizacao?.titulo;
        this.location.description = query.pageBy?.camposHomePage?.localizacao?.descricao;
        this.location.link = query.pageBy?.camposHomePage?.localizacao?.linkDoMapa;

        metaTitle.value = 'Título da página';
        metaDescription.value = 'Descrição da página';
    }
}
</script>

<script setup lang="ts">
    const robots = process.env.ROBOTS;

    async function setupPage() {
        const props = await GqlHomePageSEO({ slug: "home-page" });

        useSeoMeta({
            title: props.pageBy?.seo?.title,
            ogTitle: props.pageBy?.seo?.title,
            description: props.pageBy?.seo?.metaDesc,
            ogDescription: props.pageBy?.seo?.metaDesc,
            ogImage: props.pageBy?.featuredImage?.node.sourceUrl,
            ogType: 'website',
            twitterCard: 'summary_large_image',
            twitterTitle: props.pageBy?.seo?.title,
            twitterDescription: props.pageBy?.seo?.metaDesc,
            twitterImage: props.pageBy?.featuredImage?.node.sourceUrl
        })
    }

    setupPage();

    useHead({
        meta: [
            { name: 'robots', content: robots }
        ]
    })
</script>

<style></style>