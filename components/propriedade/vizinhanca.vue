<template>
    <div id='vizinhanca-propriedade'>
        <div class="texto">
            <h2>Conheça a vizinhanca</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem
                sagittis sed. Sed at mi ac odio luctus imperdiet nec at nisi. Mauris scelerisque lorem et volutpat
                scelerisque ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem
                sagittis sed. Sed at mi ac odio luctus imperdiet nec at nisi. Mauris scelerisque lorem et volutpat
                scelerisque ultrices.</p>
            <HQButton valor="Reserve já"></HQButton>
        </div>
        <div class="background">

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
#vizinhanca-propriedade {
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
            height: auto;
            padding: 10%;
        }
    }

    .background {
        flex: 1;
        background-image: url("public/assets/propriedade/image-2.webp");
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
        margin-right: -15%;
        width: 100%;
        z-index: 99;

        @media screen {
            @media (max-width: 800px) {
               margin-right: 0;
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: center;
               text-align: center;
               padding: 2.5% 2.5% 10% 2.5%;
            }
        }

        h2{
            font-size: 64px;
        }
        p{
            margin-bottom: 30px;
            font-size: 18px;
            width: 95%;
        }
    }
}
</style>