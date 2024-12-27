<template>
    <div class='modeloDois'>
        <div class='container'>
            <div class='modelo-item1'>
                <h2>Nossas áreas comuns</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem
                    sagittis sed. Sed at mi ac odio luctus imperdiet nec at nisi. Mauris scelerisque lorem et volutpat
                    scelerisque ultrices.</p>
            </div>
            <div class='modelo-item2'>
                <div class="carossel-container">
                    <v-carousel delimiter-icon="mdi-minus" height="40vh" :show-arrows="false">
                        <v-carousel-item src="public/assets/propriedade/image-1.webp" cover></v-carousel-item>
                        <v-carousel-item src="public/assets/propriedade/image-1.webp" cover></v-carousel-item>
                        <v-carousel-item src="public/assets/propriedade/image-1.webp" cover></v-carousel-item>
                    </v-carousel>
                </div>
            </div>
        </div>
        <div class="botao">
            <HQButton valor="Reserve já"></HQButton>
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
.modeloDois {
    display: flex;
    flex-direction: column;
    padding: 5% 10%;
    background-image: url("public/assets/acomodacoes/FUNDO-MARROM.webp");
    background-size: cover;
    background-repeat: no-repeat;

    @media screen {
        @media (max-width: 800px) {
            padding: 5% 10% 10% 5%;
        }
    }

    .container {
        display: flex;
        gap: 5%;

        @media(max-width:800px) {
            flex-direction: column;
        }

        .modelo-item1 {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;

            h2 {
                font-size: 48px;
                font-weight: 400;
                color: #fff;
            }

            p {
                font-size: 18px;
                margin-bottom: 25px;
                color: #fff;

                @media(max-width:800px) {
                    text-align: center;
                }
            }

        }

        .modelo-item2 {
            flex: 1;

            .carossel-container {
                padding: 30px 0;
                background-color: #fff;
                border-radius: 15px;
            }
        }
    }

    .botao {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5% 0 0 0;

        .v-btn {
            background-color: #fff !important;
            color: #695641 !important;
        }
    }
}
</style>