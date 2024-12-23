<template>
    <div id='propriedade-carrossel'>
        <h2>O que nossos hóspedes dizem</h2>
        <div class="avaliacao">
            <v-carousel height="400" cycle hide-delimiters>
                <v-carousel-item v-for="(slide, i) in testimonials" :key="i">
                    <v-sheet color="#f7ebda" height="100%">
                        <div class="d-flex fill-height justify-center align-center">
                            <div class="texto">
                                {{ slide }}
                            </div>
                        </div>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </div>
        <HQButton style="padding: 2.5% 0; margin-top: 2.5%; margin-bottom: 2.5%;" valor="Reserve já"></HQButton>
    </div>
</template>

<script>

import HQButton from "@/components/geral/button.vue"

export default {
    name: "PropriedadeCarrossel",
    props: {
        testimonials: Array
    },
    data() {
        return {}
    },
    components: {
        HQButton,
    }
}

</script>

<style lang="scss">
#propriedade-carrossel {
    padding: 5% 10%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-image: url("public/assets/homepage/FUNDO-BRANCO.webp");
    background-size: cover;
    background-repeat: no-repeat;

    h2 {
        text-align: center;
        margin-bottom: 30px;
        font-size: 48px;

        @media (max-width: 800px) {
            margin-bottom: 2.5%;
        }
    }

    .avaliacao {
        display: contents;
        

        .texto {
            font-family: "Montserrat", sans-serif;
            font-size: 24px;
            font-weight: 300;
            width: 80%;
            text-align: center;
        }

        .v-btn--variant-elevated {
            box-shadow: none;
            background: none;
            margin-top: 2.5%;
        }
    }

    span {
        font-size: 18px;
    }

}
</style>