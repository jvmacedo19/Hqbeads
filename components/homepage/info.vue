<template>
    <div id="HQ-info">
        <div class="info-texto">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
            <h2>Reserve já</h2>
        </div>
        <div id="about-solucoes">
            <div class='about'>
                <div class="solucoes1">
                    <div class='aboutarea' :style="{ background: cards[0].background }">
                        <v-icon size="75">{{ cards[0].icon }}</v-icon>
                        <div class='text'>
                            <h2 style="color: #fff;">{{ cards[0].title }}</h2>
                            <p>{{ cards[0].description }}</p>
                        </div>
                    </div>
                    <div class='aboutarea' :style="{ background: cards[1].background }">
                        <v-icon size="75">{{ cards[1].icon }}</v-icon>
                        <div class='text'>
                            <h2 style="color: #fff;">{{ cards[1].title }}</h2>
                            <p>{{ cards[1].description }}</p>
                        </div>
                    </div>
                </div>
                <div class="solucoes2">
                    <div class='aboutarea' :style="{ background: cards[2].background }">
                        <v-icon size="75">{{ cards[2].icon }}</v-icon>
                        <div class='text'>
                            <h2 style="color: #fff;">{{ cards[2].title }}</h2>
                            <p>{{ cards[2].description }}</p>
                        </div>
                    </div>
                    <div class='aboutarea' :style="{ background: cards[3].background }">
                        <v-icon size="75">{{ cards[3].icon }}</v-icon>
                        <div class='text'>
                            <h2 style="color: #fff;">{{ cards[3].title }}</h2>
                            <p>{{ cards[3].description }}</p>
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
    props: {
        title: String,
        description: String,
        cards: Array
    },
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
}

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

        .solucoes1 {
            .aboutarea {
                @media(min-width:800px) {
                    margin-left: 0px !important;
                }
            }
        }

        .solucoes1,
        .solucoes2 {
            @media screen {
                @media (max-width:800px) {
                    width: 100%;
                }

                @media (min-width:800px) {
                    width: 50%;
                }
            }
        }

        .solucoes2 {
            @media (max-width: 800px) {
                
                margin: -20px 0 0 0;
            }
        }

        .aboutarea {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            border-radius: 10px;
            box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
            background-size: cover;
            background-position: center;

            @media screen {
                @media (max-width: 800px) {
                    padding: 20% 0;
                    margin: 20px 0;
                }

                @media (min-width: 800px) {
                    padding: 75px;
                    margin: 20px 10px;
                }
            }

            .text {
                color: #fff;

                h2 {
                    font-size: 24px;
                    margin-bottom: 10px;
                    color: #fff;
                }

                p {
                    font-size: 16px;
                }
            }
        }

        /* Estilos individuais para os cards com imagens */
        .programacoes {
            background-color: #695641;
        }

        .tv-filmes {
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("public/assets/homepage/image 6.webp");
            background-size: cover;
            background-repeat: no-repeat;
        }

        .cafe {
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("public/assets/homepage/image.webp");
            background-size: cover;
            background-repeat: no-repeat;
        }

        .preco {
            background-color: #695641;
        }
    }
}
</style>