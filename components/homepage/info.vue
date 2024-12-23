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
                    <div class='aboutarea' :style="{background: cards[0].background}">
                        <v-icon size="75" >{{ cards[0].icon }}</v-icon>
                        <div class='text'>
                            <h2 style="color: #fff;">{{ cards[0].title }}</h2>
                            <p>{{ cards[0].description }}</p>
                        </div>
                    </div>
                    <div class='aboutarea' :style="{background: cards[1].background}">
                        <v-icon size="75" >{{ cards[1].icon }}</v-icon>
                        <div class='text'>
                            <h2 style="color: #fff;">{{ cards[1].title }}</h2>
                            <p>{{ cards[1].description }}</p>
                        </div>
                    </div>
                </div>
                <div class="solucoes2">
                    <div class='aboutarea' :style="{background: cards[2].background}">
                        <v-icon size="75">{{ cards[2].icon }}</v-icon>
                        <div class='text'>
                            <h2 style="color: #fff;">{{ cards[2].title }}</h2>
                            <p>{{ cards[2].description }}</p>
                        </div>
                    </div>
                    <div class='aboutarea' :style="{background: cards[3].background}">
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
                        margin-left:0px !important;
                    }
                }
            }

            .solucoes1,
            .solucoes2 {
                @media screen {
                    @media (max-width:800px) {
                        width:100%;
                    }

                    @media (min-width:800px) {
                        width:50%;
                    }
                }
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