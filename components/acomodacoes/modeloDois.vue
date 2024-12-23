<template>
    <div class='modeloDois'>
        <div class='container'>
            <div class='modelo-item2'>
                <div class="carossel-container">
                    <v-carousel delimiter-icon="mdi-minus" height="40vh" :show-arrows="false" cycle>
                        <v-carousel-item v-for="(img, i) in gallery" :key="i" :src="img" cover></v-carousel-item>
                    </v-carousel>
                </div>
            </div>
            <div class='modelo-item1'>
                <h2>{{ title }}</h2>
                <p>{{ description }}</p>
                <p style="font-weight: 500;">Capacidade: {{ number }}</p>
                <HQButton valor="Reserve já"></HQButton>
            </div>
        </div>
    </div>
</template>

<script>

import HQButton from "@/components/geral/button.vue"


export default {
    props: {
        title: String,
        description: String,
        number: String,
        gallery: Array
    },
    components: {
        HQButton
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

    .container {
        display: flex;
        gap: 5%;

        @media screen {

            @media (max-width:800px) {
                flex-direction: column;
                text-align: center;
            }
        }

        .modelo-item1 {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;

            @media screen {

                @media (max-width:800px) {
                    align-items: center;
                }
            }

            h2 {
                font-size: 48px;
                font-weight: 400;
                color: #fff;
            }

            p {
                font-size: 18px;
                margin-bottom: 25px;
                color: #fff;
            }

            .v-btn {
                background-color: #fff !important;
                color: #695641 !important;
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
}
</style>