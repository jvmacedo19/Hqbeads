<template>
    <div class='empreendimento'>
        <div class='empreedimentoimage'>
            <div class='empreendimentoitem1' :style="{background: ctas.atracoes}">
                <p>Atrações</p>
                <HQButton valor="Reserve já"></HQButton>
            </div>
            <div class='empreendimentoitem2' :style="{background: ctas.acomodacoes}">
                <p>Acomodações</p>
                <HQButton valor="Reserve já"></HQButton>
            </div>
        </div>
    </div>
</template>

<script>

import HQButton from "@/components/geral/button.vue"


export default {
    name: 'HomepageCard',
    props: {
        ctas: Object
    },
    components: {
        HQButton,
    }


};

</script>

<style lang="scss">
.empreendimento {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: auto;
    padding: 5% 10%;
    background-image: url("public/assets/homepage/FUNDO-MARROM.webp");
    background-size: cover;
    background-repeat: no-repeat;

    h2 {
        padding: 2.5% 0;
        font-size: 36px;
        font-weight: 400;

        @media screen {

            @media (max-width:800px) {
                font-size: 38px;
            }
        }
    }

    .empreedimentoimage {
        display: flex;
        gap: 3%;

        @media screen {
            @media (max-width:800px) {
                flex-direction: column;
            }
        }

        .empreendimentoitem1 {
            flex: 1;
            height: 80vh;
            padding: 5%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            flex-direction: column;

            @media screen {
                @media (max-width:800px) {
                    flex: auto;
                    height: 350px;
                    margin-bottom: 5%;
                }
            }

            span {
                color: #FFF;
                font-size: 18px;
                font-weight: 300;
            }

            p {
                color: #FFF;
                font-size: 72px;
                font-weight: 300;
                font-family: "Moon Dance", cursive;


                @media screen {
                    @media (max-width: 800px) {
                        font-size: 40px;
                    }
                }
            }

        }

        .empreendimentoitem2 {
            flex: 1;
            height: 80vh;
            padding: 5%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            flex-direction: column;

            @media screen {
                @media (max-width:800px) {
                    flex: auto;
                    height: 350px;
                }
            }

            span {
                color: #FFF;
                font-size: 18px;
                font-weight: 300;
            }

            p {
                color: #FFF;
                font-size: 72px;
                font-weight: 300;
                font-family: "Moon Dance", cursive;


                @media screen {
                    @media (max-width: 800px) {
                        font-size: 40px;
                    }
                }

            }
        }
    }

}
</style>