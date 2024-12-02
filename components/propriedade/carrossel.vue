<template>
    <div id='propriedade-carrossel'>
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
    </div>
</template>

<script>

import HQButton from "@/components/geral/button.vue"

export default {
    name: "PropriedadeCarrossel",
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
        }
    }

    span {
        font-size: 18px;
    }

}
</style>