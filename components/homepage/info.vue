<template>
    <div id="HQ-info">
        <div class="info-texto">
            <h2>Sua aventura começa aqui</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat erat nisi, ut ornare lorem
                sagittis sed. Sed at mi ac odio luctus imperdiet nec at nisi. Mauris scelerisque lorem et volutpat
                ultrices. Vivamus placerat ultricies felis, sed mattis nulla maximus gravida. Quisque turpis ipsum,
                ultrices vel justo et, scelerisque vulputate risus. Nam sodales, diam ut fringilla cursus, nibh lacus
                feugiat leo, vitae varius sapien sapien ut felis. Phasellus ut augue non augue finibus fermentum sit
                amet ut justo.
            </p>
            <h2>Reserve já</h2>
        </div>
        <div id="about-solucoes">
            <div class="aboutarea programacoes">
                <v-icon size="75" color="#fff">mdi-compass</v-icon>
                <div class="text">
                    <h2>Programações</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div class="aboutarea tv-filmes">
                <v-icon size="75" color="#fff">mdi-television</v-icon>
                <div class="text">
                    <h2>TV e Filmes</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div class="aboutarea cafe">
                <v-icon size="75" color="#fff">mdi-coffee</v-icon>
                <div class="text">
                    <h2>Café da Manhã</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div class="aboutarea preco">
                <v-icon size="75" color="#fff">mdi-currency-usd</v-icon>
                <div class="text">
                    <h2>Melhor Preço Garantido</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import HQButton from '@/components/geral/button.vue';

export default {
    name: 'HomepageInfo',
    components: {
        HQButton
    }
}

</script>

<style lang="scss" scoped>
#HQ-info {
    padding: 5% 10%;
    background-image: url("public/assets/homepage/FUNDO-BRANCO.webp");
    background-size: cover;
    background-repeat: no-repeat;
}

.info-texto {
    text-align: center;

    h2 {
        font-size: 48px;
        margin-bottom: 5%;
    }

    p {
        font-size: 18px;
        margin-bottom: 5%;
    }
}

#about-solucoes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* 2 colunas */
    grid-template-rows: repeat(2, 300px);
    /* 2 linhas com altura fixa */
    gap: 20px;
    /* Espaço entre os cards */
    padding: 20px;

    @media screen {
        @media (max-width: 800px) {
            grid-template-columns: auto;
            grid-template-rows: auto;

        }
    }
}

.aboutarea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    background-size: cover;
    background-position: center;

    @media screen {
        @media (max-width: 800px) {
            padding: 20% 0;
        }
    }

    .text {
        color: #fff;

        h2 {
            font-size: 24px;
            margin-bottom: 10px;
            color: #fff;
        }

        p {
            font-size: 16px;
        }
    }
}

/* Estilos individuais para os cards com imagens */
.programacoes {
    background-color: #695641;
}

.tv-filmes {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("public/assets/homepage/image 6.webp");
    background-size: cover;
    background-repeat: no-repeat;
}

.cafe {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("public/assets/homepage/image.webp");
    background-size: cover;
    background-repeat: no-repeat;
}

.preco {
    background-color: #695641;
}
</style>