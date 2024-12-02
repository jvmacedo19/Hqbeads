<template>
    <div class='modelo-sobre'>
        <div class="texto">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem
                sagittis sed. Sed at mi ac odio luctus imperdiet nec at nisi. Mauris scelerisque lorem et volutpat
                scelerisque ultrices. Mauris scelerisque lorem et volutpat
                scelerisque ultrices. Mauris scelerisque lorem et volutpat
                scelerisque ultrices.</p>
        </div>
        <div class='container'>
            <div class='sobre-item2'>
                <div class="carossel-container">
                    <v-carousel delimiter-icon="mdi-minus" height="60vh" :show-arrows="false">
                        <v-carousel-item src="public/assets/atracoes/Group 37.webp" cover></v-carousel-item>
                        <v-carousel-item src="public/assets/atracoes/Group 37.webp" cover></v-carousel-item>
                        <v-carousel-item src="public/assets/atracoes/Group 37.webp" cover></v-carousel-item>
                    </v-carousel>
                </div>
            </div>
            <div class='sobre-item1'>
                <p>A partir de <br> <span style="color: #695641; font-weight: 500;">R$ 350</span> <br> por noite</p>
                <HQButton valor="Reserve já"></HQButton>
            </div>
        </div>
        <div class="modelo-info">
            <hr>
            <div class="info">
                <h2>Descrição:</h2>
                <p>Acomoda 2 pessoas</p>
                <p>1 cama Queen</p>
                <p>Área de 15m<sup>2</sup></p>
                <p></p>
            </div>
            <hr>
            <div class="info">
                <h2>Mais informações:</h2>
                <p style="width: 40%;">A preços acessíveis. Nossas Suítes Superior é a opção perfeita, oferece o espaço
                    extra que você
                    precisa para relaxar e curtir a vista panorâmica da cidade de tirar o fôlego.</p>
            </div>
            <hr>
            <div class="info">
                <h2>Amenidades:</h2>
                <div>
                    <div>
                        <p>Ar Condicionado</p>
                    </div>
                    <div>
                        <p>Frigobar</p>
                    </div>
                    <div>
                        <p>Cofre</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>TV</p>
                    </div>
                    <div>
                        <p>WiFi</p>
                    </div>
                    <div>
                        <p>Toalhas de banho</p>
                    </div>
                </div>
            </div>
            <hr>
            <div class="info">
                <h2>Condições:</h2>
                <a style="text-decoration: underline;">Leia nossas políticas</a>
            </div>
            <hr>

        </div>
    </div>
</template>

<script>

import HQButton from "@/components/geral/button.vue"


export default {
    components: {
        HQButton,
    }


};

</script>

<style lang="scss">
.modelo-sobre {
    display: flex;
    flex-direction: column;
    padding: 5% 10%;
    background-image: url("public/assets/homepage/FUNDO-BRANCO.webp");
    background-size: cover;
    background-repeat: no-repeat;

    .texto {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 5%;

        p {
            font-size: 18px;
        }
    }

    .container {
        display: flex;
        gap: 5%;
        margin-bottom: 5%;

        @media screen {
            @media (max-width: 800px) {
                flex-direction: column;
            }
        }

        .sobre-item1 {
            display: flex;
            flex: 20%;
            flex-direction: column;
            align-items: center;
            background-color: #f0f0f0;
            box-shadow: 2px 3px #CCC;
            padding: 2.5%;
            border-radius: 20px;
            margin: 30px 0;


            p {
                font-size: 27px;
                margin-bottom: 25px;
                color: #000;
                text-align: center;
                font-weight: 200;
            }

        }

        .sobre-item2 {
            flex: 80%;

            .carossel-container {
                padding: 30px 0;
                background-color: #f0f0f0;
                box-shadow: 2px 3px #CCC;
                border-radius: 20px;
            }
        }
    }

    .modelo-info {
        .info {
            display: flex;
            padding: 5% 0;
            align-items: center;

            @media screen {
                @media (max-width: 800px) {
                    display: block;
                }
            }

            h2 {
                font-size: 36px;
                width: 20%;

                @media screen {
                    @media (max-width: 800px) {
                        width: 100% !important;
                    }
                }
            }

            p {
                margin-right: 30px;
                font-size: 18px;

                @media screen {
                    @media (max-width: 800px) {
                        width: 100% !important;
                    }
                }
            }

            a {
                font-size: 18px;
            }
        }
    }
}
</style>