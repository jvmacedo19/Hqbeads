<template>
    <div id="HQ-info">
        <div class="info-texto">
            <h2>Sua aventura começa aqui</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem
                sagittis sed. Sed at mi ac odio luctus imperdiet nec at nisi. Mauris scelerisque lorem et volutpat
                ultrices.
                Vivamus placerat ultricies felis, sed mattis nulla maximus gravida. Quisque turpis ipsum, ultrices vel
                justo
                et, scelerisque vulputate risus. Nam sodales, diam ut fringilla cursus, nibh lacus feugiat leo, vitae
                varius
                sapien sapien ut felis. Phasellus ut augue non augue finibus fermentum sit amet ut justo.</p>
            <h2>Reserve já</h2>
        </div>
        <div id="about-solucoes">
            <div class='about'>
                <div class="solucoes1">
                    <div class='aboutarea'
                        style="background: #6c563f;background-size: cover;background-repeat: no-repeat; ">
                        <v-icon size="75" >mdi-compass</v-icon>
                        <div class='text'>
                            <h2 style="color: #fff;">Programações</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut
                                ornare lorem sagittis sed. </p>
                        </div>
                    </div>
                    <div class='aboutarea'
                        style="background-image:linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('assets/homepage/image.webp');background-size: cover;background-repeat: no-repeat; ">
                        <v-icon size="75" >mdi-television</v-icon>
                        <div class='text'>
                            <h2 style="color: #fff;">TV e filmes</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut
                                ornare lorem sagittis sed. </p>
                        </div>
                    </div>
                </div>
                <div class="solucoes2">
                    <div class='aboutarea'
                        style="background-image:linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('assets/homepage/image 6.webp');background-size: cover;background-repeat: no-repeat; ">
                        <v-icon size="75">mdi-television</v-icon>
                        <div class='text'>
                            <h2 style="color: #fff;">Café da manhã</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut
                                ornare lorem sagittis sed. </p>
                        </div>
                    </div>
                    <div class='aboutarea'
                        style="background: #6c563f;background-size: cover;background-repeat: no-repeat; ">
                        <v-icon size="75" >mdi-currency-usd</v-icon>
                        <div class='text'>
                            <h2 style="color: #fff;">Melhor preço garantido</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut
                                ornare lorem sagittis sed. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import HQButton from '@/components/geral/button.vue';

export default {
    name: 'HomepageInfo',
    components: {
        HQButton
    }
}

</script>

<style lang="scss" scoped>
#HQ-info {
    padding: 5% 10%;
    background-image: url("public/assets/homepage/FUNDO-BRANCO.webp");
    background-size: cover;
    background-repeat: no-repeat;

    .info-texto {
        text-align: center;

        h2 {
            font-size: 48px;
            margin-bottom: 5%;
        }

        p {
            font-size: 18px;
            margin-bottom: 5%;
        }
    }

    #about-solucoes {

        @media(max-width:800px) {
            margin: auto;
        }

        .about {
            display: flex;
            color: #fff;

            @media(max-width:800px) {
                flex-direction: column;
            }

            .aboutarea {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                flex: 1;
                border-radius: 10px;
                padding: 40px;
                margin: 0 0 40px 40px;
                box-shadow: 3px 3px 3.5px rgba(0, 0, 0, 0.16);

                @media (min-width: 801px) and (max-width: 1440px) {
                    padding: 20px;
                }

                @media(max-width:800px) {
                    margin-left: 0;
                    padding: 20px;
                    margin-bottom: 5%;
                }

                .image1 {
                    width: 90px;
                    height: 90px;
                    background-position: center;
                    background-size: cover;

                    @media (min-width: 801px) and (max-width: 1440px) {
                        width: 60px;
                        height: 60px;
                        margin-bottom: 10px;
                    }
                }

                .image2 {
                    width: 90px;
                    height: 90px;
                    background-position: center;
                    background-size: cover;

                    @media (min-width: 801px) and (max-width: 1440px) {
                        width: 60px;
                        height: 60px;
                        margin-bottom: 10px;
                    }
                }

                .image3 {
                    width: 90px;
                    height: 90px;
                    background-position: center;
                    background-size: cover;

                    @media (min-width: 801px) and (max-width: 1440px) {
                        width: 60px;
                        height: 60px;
                        margin-bottom: 10px;
                    }
                }

                .text {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    color: #fff;
                    padding: 0 0 2.5% 0;

                    h2 {
                        font-size: 36px;

                        @media (min-width: 801px) and (max-width: 1440px) {
                            font-size: 36px
                        }
                    }

                    p {
                        font-size: 18px;
                        font-weight: 300;
                        margin: 15px 0;
                        text-align: center;
                        color: var(--text-color2);

                        @media (min-width: 801px) and (max-width: 1440px) {
                            font-size: 18px;
                        }
                    }
                }
            }

            .aboutarea:hover {
                background: #695641;
            }
        }
    }
}
</style>