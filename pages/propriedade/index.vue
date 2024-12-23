<template>
    <div class="main">
        <HQMenu></HQMenu>
        <PropriedadeBanner :title="landing.title" :subtitle="landing.subtitle" :background="landing.background"></PropriedadeBanner>
        <PropriedadeSobre :title="about.title" :description="about.description" :image="about.image"></PropriedadeSobre>
        <PropriedadeInfo :title="benefits.title" :benefits="benefits.benefits"></PropriedadeInfo>
        <PropriedadeModeloDois :title="gallery.title" :description="gallery.description" :images="gallery.images"></PropriedadeModeloDois>
        <PropriedadeVizinhanca :title="neighbourhood.title" :description="neighbourhood.description" :image="neighbourhood.image"></PropriedadeVizinhanca>
        <PropriedadeCarrossel :testimonials="testimonials"></PropriedadeCarrossel>
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
                testimonials: [],
                landing: {
                    title:null,
                    subtitle:null,
                    background:null
                },
                about: {
                    title:null,
                    description:null,
                    image:null
                },
                benefits: {
                    title:null,
                    benefits:[
                        {
                            title:null,
                            description:null,
                            icon:null
                        },
                        {
                            title:null,
                            description:null,
                            icon:null
                        },
                        {
                            title:null,
                            description:null,
                            icon:null
                        },
                        {
                            title:null,
                            description:null,
                            icon:null
                        }
                    ]
                },
                gallery: {
                    title:null,
                    description:null,
                    images:[]
                },
                neighbourhood: {
                    title:null,
                    description:null,
                    image:null
                }
            }
        },
        methods: {
            async consultLanding() {
                const query = await GqlPropriedadeLanding();
                
                this.landing.title = query.pageBy?.camposPropriedade?.aterrissagem?.titulo;
                this.landing.subtitle = query.pageBy?.camposPropriedade?.aterrissagem?.subtitulo;
                this.landing.background = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${query.pageBy?.camposPropriedade?.aterrissagem?.imagemDeFundo?.node.sourceUrl}') no-repeat center/cover`;
            },
            async consultAbout() {
                const query = await GqlPropriedadeAbout();
                
                this.about.title = query.pageBy?.camposPropriedade?.sobreNos?.titulo;
                this.about.description = query.pageBy?.camposPropriedade?.sobreNos?.descricao;
                this.about.image = `url('${query.pageBy?.camposPropriedade?.sobreNos?.imagem?.node.sourceUrl}')`;
            },
            async consultBenefits() {
                const query = await GqlPropriedadeBenefits();
                
                this.benefits.title = query.pageBy?.camposPropriedade?.beneficios?.titulo;

                this.benefits.benefits[0].title = query.pageBy?.camposPropriedade?.beneficios?.beneficio1?.titulo;
                this.benefits.benefits[0].description = query.pageBy?.camposPropriedade?.beneficios?.beneficio1?.descricao;
                this.benefits.benefits[0].icon = `mdi-${query.pageBy?.camposPropriedade?.beneficios?.beneficio1?.icone}`;

                this.benefits.benefits[1].title = query.pageBy?.camposPropriedade?.beneficios?.beneficio2?.titulo;
                this.benefits.benefits[1].description = query.pageBy?.camposPropriedade?.beneficios?.beneficio2?.descricao;
                this.benefits.benefits[1].icon = `mdi-${query.pageBy?.camposPropriedade?.beneficios?.beneficio2?.icone}`;

                this.benefits.benefits[2].title = query.pageBy?.camposPropriedade?.beneficios?.beneficio3?.titulo;
                this.benefits.benefits[2].description = query.pageBy?.camposPropriedade?.beneficios?.beneficio3?.descricao;
                this.benefits.benefits[2].icon = `mdi-${query.pageBy?.camposPropriedade?.beneficios?.beneficio3?.icone}`;

                this.benefits.benefits[3].title = query.pageBy?.camposPropriedade?.beneficios?.beneficio4?.titulo;
                this.benefits.benefits[3].description = query.pageBy?.camposPropriedade?.beneficios?.beneficio4?.descricao;
                this.benefits.benefits[3].icon = `mdi-${query.pageBy?.camposPropriedade?.beneficios?.beneficio4?.icone}`;
            },
            async consultGallery() {
                const query = await GqlPropriedadeGallery();
                
                this.gallery.title = query.pageBy?.camposPropriedade?.areasComuns?.titulo;
                this.gallery.description = query.pageBy?.camposPropriedade?.areasComuns?.descricao;
                
                query.pageBy?.camposPropriedade?.areasComuns?.imagem?.nodes.forEach((img) => {
                    this.gallery.images.push(img.sourceUrl);
                })
            },
            async consultNeighbourhood() {
                const query = await GqlPropriedadeNeighbourhood();
                
                this.neighbourhood.title = query.pageBy?.camposPropriedade?.vizinhanca?.titulo;
                this.neighbourhood.description = query.pageBy?.camposPropriedade?.vizinhanca?.descricao;
                this.neighbourhood.image = `url('${query.pageBy?.camposPropriedade?.vizinhanca?.imagem?.node.sourceUrl}')`
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
            this.consultAbout();
            this.consultBenefits();
            this.consultGallery();
            this.consultNeighbourhood();
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