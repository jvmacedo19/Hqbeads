<template>
    <div id="acomodacoes-banner">
        <div class="acomodacoes-principal">
            <div class='banner'>
                <div class='list'>
                    <div class='item'>
                        <div class='content'>
                            <div class='text'>
                                <h1>Nossas acomodações</h1>
                                <h2>Saiba mais sobre as acomodacoes!</h2>
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
    name: 'AcomodacoesBanner',
    components: {
        HQButton
    }
}

</script>

<style lang="scss" scoped>
#acomodacoes-banner {
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-image: url("public/assets/acomodacoes/image 2.webp");
    background-position: center;

    @media screen {
        @media (max-width: 800px) {
            background-position: center;
        }
    }

    .acomodacoes-principal {
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

                        }
                    }
                }
            }
        }
    }
}
</style>