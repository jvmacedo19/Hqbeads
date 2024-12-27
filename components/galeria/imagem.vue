<template>
    <div>
        <div id="imagem-galeria">
            <div class="row">
                <div class="row-image">
                    <img src="public/assets/atracoes/Group 37.webp">
                </div>
                <div class="row-image2">
                    <img src="public/assets/atracoes/Group 37-2.webp">
                </div>
            </div>
            <div class="row2">
                <div class="row-image">
                    <div class="imagem"></div>
                    <div class="imagem2"></div>
                </div>
                <div class="row-image2">
                </div>
            </div>
            <div class="row3">
                <div class="row-image">
                    <img src="public/assets/propriedade/image 7.webp">
                </div>
                <div class="row-image2">
                    <img src="public/assets/propriedade/image (1).webp">
                </div>
            </div>
        </div>

        <div class="galeria-mobile">
            <h2 style="text-align: center; font-size: 48px;">Galeria:</h2>

            <div class="carossel-container">
                <v-carousel delimiter-icon="mdi-minus" height="40vh" :show-arrows="false">
                    <v-carousel-item src="public/assets/atracoes/Group 37.webp" cover></v-carousel-item>
                    <v-carousel-item src="public/assets/atracoes/Group 37-2.webp" cover></v-carousel-item>
                    <v-carousel-item src="public/assets/atracoes/Group 37-1.webp" cover></v-carousel-item>
                    <v-carousel-item src="public/assets/propriedade/image-2.webp" cover></v-carousel-item>
                    <v-carousel-item src="public/assets/propriedade/image 7.webp" cover></v-carousel-item>
                    <v-carousel-item src="public/assets/atracoes/Group 37-3.webp" cover></v-carousel-item>
                    <v-carousel-item src="public/assets/propriedade/image (1).webp" cover></v-carousel-item>
                </v-carousel>
            </div>
        </div>

    </div>
</template>

<script>
export default {

    name: "ImagemGaleria",

};
</script>

<style lang="scss" scoped>
#imagem-galeria {
    padding: 2.5% 10%;

    @media screen {
        @media (max-width: 800px) {
            display: none;
        }
    }

    .row {
        display: flex;
        gap: 35px;
        justify-content: center;
        align-items: center;

        .row-image,
        .row-image2 {
            height: 650px;
            display: flex;
            /* Certifique-se de que o contêiner também use flexbox */
            justify-content: center;
            align-items: center;

            img {
                width: 100%;
                /* Ocupa toda a largura do contêiner */
                height: 100%;
                /* Ocupa toda a altura do contêiner */
                object-fit: cover;
            }
        }

        .row-image {
            flex: 30%;
        }

        .row-image2 {
            flex: 70%;
        }
    }

    .row2 {
        display: flex;
        gap: 35px;
        margin-top: 35px;
        justify-content: center;
        align-items: center;

        .row-image {
            height: 650px;
            display: flex;
            flex-direction: column;

            .imagem {
                background-image: url("public/assets/atracoes/Group 37-1.webp");
                height: 50%;
                margin-bottom: 35px;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }

            .imagem2 {
                background-image: url("public/assets/propriedade/image-2.webp");
                height: 50%;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }
        }

        .row-image2 {
            height: 650px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url("public/assets/atracoes/Group 37-3.webp");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }

        .row-image {
            flex: 50%;
        }

        .row-image2 {
            flex: 50%;
        }
    }

    .row3 {
        margin-top: 35px;
        display: flex;
        gap: 35px;
        justify-content: center;
        align-items: center;

        .row-image,
        .row-image2 {
            height: 650px;
            display: flex;
            /* Certifique-se de que o contêiner também use flexbox */
            justify-content: center;
            align-items: center;

            img {
                width: 100%;
                /* Ocupa toda a largura do contêiner */
                height: 100%;
                /* Ocupa toda a altura do contêiner */
                object-fit: cover;
            }
        }

        .row-image {
            flex: 70%;
        }

        .row-image2 {
            flex: 30%;
        }
    }
}

.galeria-mobile {
    padding: 5% 10% 10% 10%;

    @media screen {
        @media (min-width: 800px) {
            display: none;
        }
    }

    .carossel-container {
        padding: 30px 0;
        background-color: #f1f1f1;
        border-radius: 15px;
        box-shadow: 1px 2px #ccc;
    }
}
</style>