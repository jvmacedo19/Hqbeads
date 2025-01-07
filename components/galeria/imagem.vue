<template>
    <div>
        <!-- Galeria Desktop -->
        <div id="imagem-galeria">
            <v-row>
                <!-- Primeira linha -->
                <v-col cols="4">
                    <v-img :src="images[0]" height="100%" cover></v-img>
                </v-col>
                <v-col cols="8">
                    <v-img :src="images[1]" height="100%" cover></v-img>
                </v-col>

                <!-- Segunda linha -->
                <v-col cols="6">
                    <v-img :src="images[4]" height="100%" cover></v-img>
                </v-col>
                <v-col cols="6">
                    <v-row>
                        <v-col cols="12">
                            <v-img :src="images[5]" height="100%" cover></v-img>
                        </v-col>
                        <v-col cols="12">
                            <v-img :src="images[6]" height="100%" cover></v-img>
                        </v-col>
                    </v-row>
                </v-col>

                <!-- Terceira linha -->
                <v-col cols="8">
                    <v-img :src="images[2]" height="100%" cover></v-img>
                </v-col>
                <v-col cols="4">
                    <v-img :src="images[3]" height="100%" cover></v-img>
                </v-col>

            </v-row>
        </div>

        <!-- Galeria Mobile -->
        <div class="galeria-mobile">
            <h2 style="text-align: center; font-size: 48px;">Galeria:</h2>

            <div class="carossel-container">
                <v-carousel delimiter-icon="mdi-minus" height="40vh" :show-arrows="false" cycle>
                    <v-carousel-item v-for="(img, i) in images" :key="i" :src="img" cover></v-carousel-item>
                </v-carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ImagemGaleria",
    props: {
        images: Array, // Lista de imagens passada como propriedade
    },
    computed: {
        layout() {
            const layout = [];

            for (let i = 0; i < this.images.length; i++) {
                if (i % 4 === 1 && i + 2 < this.images.length) {
                    layout.push({
                        cols: 8,
                        children: [
                            { cols: 6, url: this.images[i] },
                            { cols: 6, url: this.images[i + 1] },
                        ],
                    });

                    i += 1;
                } else {
                    layout.push({ cols: i % 3 === 0 ? 4 : 6, url: this.images[i] });
                }
            }

            return layout;
        },
    },
};
</script>

<style lang="scss" scoped>
#imagem-galeria {
    padding: 5% 10%;

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
            justify-content: center;
            align-items: center;

            img {
                width: 100%;
                height: 100%;
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
            justify-content: center;
            align-items: center;

            img {
                width: 100%;
                height: 100%;
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
