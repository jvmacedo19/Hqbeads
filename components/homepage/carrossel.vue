<template>
    <div id='HQ-carrossel'>
        <h2>O que nossos hóspedes dizem</h2>
        <div class="avaliacao">
            <v-carousel height="400" cycle hide-delimiters>
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                    <v-sheet :color="colors[i]" height="100%">
                        <div class="d-flex fill-height justify-center align-center">
                            <div class="texto">
                                {{ slide }}
                            </div>
                        </div>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </div>
        <HQButton style="padding: 2.5% 0;" valor="Reserve já"></HQButton>
        <div class="linha"></div>
        <div class="galeria">
            <img src="~@/public/assets/homepage/image 4.webp" fetchpriority="low" alt="imagem galeria" loading="lazy">
            <div class="texto-galeria">
                <h2>Nossa galeria</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem
                    sagittis sed. Sed at mi ac odio luctus imperdiet nec at nisi. Mauris scelerisque lorem et volutpat
                    ultrices.Mauris scelerisque lorem et volutpat
                    ultrices..Mauris scelerisque lorem et volutpat
                    ultrices.
                </p>
                <HQButton valor="Reserve já" style="margin-top: 15px;"></HQButton>
            </div>
        </div>
        <div class="linha"></div>
        <div class="mapa">
            <h2>Onde estamos</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem
                sagittis sed. Sed at mi ac odio luctus imperdiet nec at nisi.
            </p>
            <div style="width: 80vw;">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13476.178095853405!2d-117.16661169999999!3d32.7180984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d953e7e8e96f59%3A0x4e9e391baad12c80!2sCloudbeds!5e0!3m2!1sen!2sus!4v1696119432384!5m2!1sen!2sus"
                    width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade" title="google maps">

                </iframe>
            </div>
        </div>
    </div>
</template>

<script>

import HQButton from "@/components/geral/button.vue"

export default {
    name: "HomepageCarrossel",
    data() {
        return {
            colors: [
                "#f7ebda",
                "#f7ebda",
                "#f7ebda",
            ],
            slides: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem',
            ],
        }
    },
    components: {
        HQButton,
    }
}

</script>

<style lang="scss">
#HQ-carrossel {
    padding: 5% 10% 7% 10%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-image: url("public/assets/homepage/FUNDO-BRANCO.webp");
    background-size: cover;
    background-repeat: no-repeat;

    h2 {
        text-align: center;
        margin-bottom: 5%;
        font-size: 48px;
    }

    .avaliacao {
        display: contents;

        .v-carousel {
            border-radius: 20px;
            @media(max-width:800px) {
                margin-bottom: 5%;
            }
        }

        .texto {
            font-family: "Montserrat", sans-serif;
            font-size: 24px;
            font-weight: 300;
            width: 80%;
            text-align: center;

            @media(max-width:800px) {
                font-size: 16px;
            }
        }

        .v-btn--variant-elevated {
            box-shadow: none;
            background: none;
        }
    }

    span {
        font-size: 18px;
    }

    .linha {
        width: 40%;
        height: 2px;
        background-color: #6f5d48;
        margin-top: 2.5%;

        @media screen {
            @media (max-width: 800px) {
                margin-top: 5%;
                margin-bottom: 5%;
            }
        }
    }

    .galeria {
        display: flex;
        margin: 5% 0;
        justify-content: center;
        align-items: center;

        @media screen {
            @media (max-width: 800px) {
                flex-direction: column;
            }
        }

        img {
            height: 400px;
            margin-right: 30px;
            flex: 1;
            border-radius: 10px;

            @media screen {
                @media (max-width: 800px) {
                    width: 280px;
                    margin-right: 0;
                }
            }


        }

        .texto-galeria {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;

            @media screen {
                @media (max-width: 800px) {
                    align-items: center;
                }
            }

            h2 {
                text-align: start;

                @media screen {
                    @media (max-width: 800px) {
                        text-align: center;
                    }
                }
            }

            p {

                margin-bottom: 5%;

                @media screen {
                    @media (max-width: 800px) {
                        width: 100%;
                        text-align: center;
                    }
                }

            }
        }
    }

    .mapa {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
            padding: 5% 0 0 0;
            @media(max-width:800px) {
                padding: 0;
            }
        }

        p {
            text-align: center;
            margin-bottom: 5%;
            width: 35%;

            @media screen {
                @media (max-width: 800px) {
                    width: 100%;
                    margin-bottom: 10%;
                }
            }
        }
    }
}
</style>