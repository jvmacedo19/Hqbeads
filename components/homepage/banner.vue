<template>
    <div id="homepage-banner">
        <div class="homepage-principal">
            <div class='banner'>
                <div class='list'>
                    <div class='item'>
                        <div class='content'>
                            <div class='text'>
                                <h1>Uma frase muito interessante</h1>
                                <h2>Algo muito bacana vai acontecer aqui</h2>
                                <div class="reserva">
                                    <v-text-field label="Check-in" type="date" variant="solo"></v-text-field>
                                    <v-text-field label="Check-out" type="date" variant="solo"></v-text-field>
                                    <HQButton valor="Reservar agora"></HQButton>
                                </div>
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
    name: 'HomepageBanner',
    components: {
        HQButton
    }
}

</script>

<style lang="scss" scoped>
#homepage-banner {
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("public/assets/homepage/image 1.webp");

    @media screen {
        @media (max-width: 800px) {
            background-position: center;
        }
    }

    .homepage-principal {
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

                            .reserva {
                                display: flex;
                                background-color: #FFF;
                                justify-content: space-between;
                                align-items: center;
                                padding: 25px;
                                border-radius: 15px;
                                margin-top: 25px;
                                gap: 20px;

                                @media screen {
                                    @media (max-width: 800px) {
                                        flex-direction: column;
                                    }
                                }

                                ::v-deep(.v-field--variant-solo, .v-field--variant-solo-filled) {
                                    box-shadow: none;
                                    border: 1px solid #ccc;

                                }
                            }

                        }

                        .v-btn {
                            justify-content: center;
                            align-items: center;
                            background-color: transparent;
                            border-radius: 10px;
                            font-weight: 500;
                            margin-top: 25px;
                            display: flex;
                            border: 1px solid #FFF;
                            color: #FFF;
                        }

                        #HQ-button {
                            .v-btn {
                                padding: 20px !important;
                            }
                        }
                    }
                }
            }
        }
    }

    ::v-deep .v-input__details {
        display: none;
    }

    ::v-deep(.v-label) {
        color: #000; // Substitua pelo código da cor desejada
        opacity: 100%;
    }
}
</style>