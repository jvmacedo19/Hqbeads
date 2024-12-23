<template>
    <div class="main">
        <HQMenu></HQMenu>
        <HomepageBanner :title="landing.title" :subtitle="landing.subtitle" :background="landing.background"></HomepageBanner>
        <HomepageInfo :title="info.title" :description="info.description" :cards="info.cards"></HomepageInfo>
        <HomepageCard :ctas="ctas"></HomepageCard>
        <HomepageCarrossel :testimonials="testimonials" :gallery="gallery" :location="location"></HomepageCarrossel>
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
        data() {
            return {
                landing: {
                    title:null,
                    subtitle:null,
                    background:null
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
        methods: {
            async consultLanding() {
                const query = await GqlHomePageLanding();

                this.landing.title = query.pageBy?.camposHomePage?.fraseDeAterrissagem;
                this.landing.subtitle = query.pageBy?.camposHomePage?.subtituloDeAterrissagem;
                this.landing.background = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${query.pageBy?.camposHomePage?.fundoDeAterrissagem?.node.sourceUrl}') no-repeat center/cover`;
            },
            async consultInfos() {
                const query = await GqlHomePageInfos();

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
            },
            async consultCallToActions() {
                const query = await GqlHomePageCallToActions();
                
                this.ctas.acomodacoes = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${query.pageBy?.camposHomePage?.callToActions?.acomodacoes?.node.sourceUrl}') no-repeat center/cover`;
                this.ctas.atracoes = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${query.pageBy?.camposHomePage?.callToActions?.atracoes?.node.sourceUrl}') no-repeat center/cover`;
            },
            async consultGallery() {
                const query = await GqlHomePageGallery();

                this.gallery.title = query.pageBy?.camposHomePage?.galeria?.titulo;
                this.gallery.description = query.pageBy?.camposHomePage?.galeria?.descricao;
                this.gallery.image = query.pageBy?.camposHomePage?.galeria?.imagemEmDestaque?.node.sourceUrl;
            },
            async consultLocation() {
                const query = await GqlHomePageLocation();

                this.location.title = query.pageBy?.camposHomePage?.localizacao?.titulo;
                this.location.description = query.pageBy?.camposHomePage?.localizacao?.descricao;
                this.location.link = query.pageBy?.camposHomePage?.localizacao?.linkDoMapa;
            },
            async consultTestimonials() {
                const query = await GqlTestimonials();
            
                query.metadadoBy?.depoimentos?.depoimentos.forEach((dep) => {
                    this.testimonials.push(dep.depoimento);
                });
            }
        },
        async mounted() {
            this.consultLanding();
            this.consultInfos();
            this.consultCallToActions();
            this.consultGallery();
            this.consultLocation();
            this.consultTestimonials();
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