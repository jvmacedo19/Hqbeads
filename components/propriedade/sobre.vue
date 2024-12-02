<template>
    <div id='sobre-propriedade'>
        <div class="background">

        </div>
        <div class="texto">
            <h2>Sobre nós</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem
                sagittis sed. Sed at mi ac odio luctus imperdiet nec at nisi. Mauris scelerisque lorem et volutpat
                scelerisque ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat
                nisi, ut ornare lorem
                sagittis sed. Sed at mi ac odio luctus imperdiet nec at nisi. Mauris scelerisque lorem et volutpat
                scelerisque ultrices.</p>
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
#sobre-propriedade {
    display: flex;
    padding: 5% 10%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.10)), url("public/assets/homepage/FUNDO-BRANCO.webp");
    height: 90vh;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    overflow: hidden;

    @media screen {
            @media (max-width: 800px) {
               padding: 5%;
            }
        }

    .background {
        flex: 1;
        background-image: url("public/assets/propriedade/image (1).webp");
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;

        @media screen {
            @media (max-width: 800px) {
                display: none;
            }
        }
    }

    .texto {
        flex: 1;
        background-color: #fff;
        padding: 2.5%;
        margin-left: -5%;
        width: calc(100% + 15%);

        @media screen {
            @media (max-width: 800px) {
               margin-left: 0;
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: center;
               text-align: center;
            }
        }

        h2 {
            font-size: 64px;
        }

        p {
            margin-bottom: 30px;
            font-size: 18px;
            width: 95%;
        }
    }
}
</style>