<template>
    <div id="notfound-banner" :style="{background: background}">
        <div class="notfound-principal">
            <div class='banner'>
                <div class='list'>
                    <div class='item'>
                        <div class='content'>
                            <div class='text'>
                                <h1>{{ title }}</h1>
                                <h2>{{ subtitle }}</h2>
                                <v-btn href="/" tag="button">Voltar</v-btn>
                            </div>
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
    name: 'NotfoundBanner',
    props: {
        title: String,
        subtitle: String,
        background: String
    },
    components: {
        HQButton
    }
}

</script>

<style lang="scss" scoped>
#notfound-banner {
    .notfound-principal {
        .banner {
            height: 100vh;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;

            @media screen {
                @media (max-width: 800px) {
                    padding: 0 5%;
                    height: 55vh;
                }
            }

            .list {
                .item {
                    .content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        width: 100%;
                        color: #FFF;
                        text-shadow: 0 5px 10px #0004;

                        .text {
                            text-align:center;

                            h1 {
                                font-size: 75px;
                                font-weight: 400;
                                font-family: "Moon Dance", cursive;

                                @media screen {
                                    @media (max-width: 800px) {
                                        font-size: 36px;
                                        text-align: center;
                                    }
                                }
                            }

                            h2 {
                                font-size: 27px;
                                font-weight: 500;
                                font-family: "Montserrat", sans-serif;
                                color: #FFF !important;

                                @media screen {
                                    @media (max-width: 800px) {
                                        font-size: 18px;
                                        text-align: center;
                                    }
                                }
                            }

                            .v-btn {
                                background-color: #695641;
                                margin:auto;
                                border-radius: 5px;
                                font-weight: 300;
                                padding: 25px 45px;
                                display: flex;
                                text-transform: none;
                                color: #fff;
                                font-family: "Montserrat", sans-serif;
                                font-size: 18px;
                                width: 200px !important;

                                @media screen {
                                    @media(max-width: 800px) {
                                        font-size: 15px !important;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>