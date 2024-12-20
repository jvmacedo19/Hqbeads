<template>
    <div id="propriedade-info">
        <div class="info-texto">
            <h2>Por que escolher a gente?</h2>
        </div>
        <div id="about-solucoes">
            <div class='about'>
                <div class="solucoes1">
                    <div class='aboutarea'>
                        <div class="circulo">
                            <v-icon color="#6c563f" size="40">mdi-door-closed-lock</v-icon>
                        </div>
                        <div class='text'>
                            <h2>Cancelamento grátis</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat nisi, ut
                                ornare lorem sagittis sed. </p>
                        </div>
                    </div>
                    <div class='aboutarea'>
                        <div class="circulo">
                            <v-icon color="#6c563f" size="40">mdi-cash-lock</v-icon>
                        </div>
                        <div class='text'>
                            <h2>Pagamento seguro</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat nisi, ut
                                ornare lorem sagittis sed. </p>
                        </div>
                    </div>
                </div>
                <div class="solucoes2">
                    <div class='aboutarea'>
                        <div class="circulo">
                            <v-icon color="#6c563f" size="40">mdi-coffee</v-icon>
                        </div>
                        <div class='text'>
                            <h2>Café da manhã incluso</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat nisi, ut
                                ornare lorem sagittis sed. </p>
                        </div>
                    </div>
                    <div class='aboutarea'>
                        <div class="circulo">
                            <v-icon color="#6c563f" size="40">mdi-map-marker</v-icon>
                        </div>
                        <div class='text'>
                            <h2>Melhor localização</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat nisi, ut
                                ornare lorem sagittis sed. </p>
                        </div>
                    </div>
                </div>
            </div>
            <HQButton style="padding: 2.5% 0;display: flex; justify-content: center; align-items: center; "
                valor="Reserve já"></HQButton>
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
#propriedade-info {
    padding: 5% 10%;
    background-image: url("public/assets/homepage/FUNDO-BRANCO.webp");
    background-size: cover;
    background-repeat: no-repeat;

    @media(max-width:800px) {
        padding:15% 10%;
    }

    .info-texto {
        text-align: center;

        h2 {
            font-size: 48px;
            margin-bottom: 30px;

            @media(max-width:800px) {
                font-size: 36px;
            }
        }

        p {
            font-size: 18px;
            margin-bottom: 30px;
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
                justify-content: center;
                align-items: center;
                flex: 1;
                border-radius: 10px;
                margin: 0 0 40px 0;
                gap: 20px;

                @media (min-width: 801px) and (max-width: 1440px) {
                    padding: 20px;
                }

                @media(max-width:800px) {
                    margin-left: 0;
                    text-align: center;
                }

                .circulo {
                    height: 90px;
                    width: 125px;
                    background-color: #ccc;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    @media (max-width: 801px) {
                        display: none;
                    }
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
                        margin: 10px 0;
                        color: #000;


                        @media (min-width: 801px) and (max-width: 1440px) {
                            font-size: 18px;
                        }
                    }
                }
            }
        }
    }
}
</style>