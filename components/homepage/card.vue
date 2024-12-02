<template>
    <div class='empreendimento'>
        <div class='empreedimentoimage'>
            <div class='empreendimentoitem1'>
                <p>Atrações</p>
                <HQButton valor="Reserve já"></HQButton>
            </div>
            <div class='empreendimentoitem2'>
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
        gap: 5%;

        @media screen {
            @media (max-width:800px) {
                flex-direction: column;
            }
        }

        .empreendimentoitem1 {
            flex: 1;
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("public/assets/homepage/image 3.webp");
            background-size: cover;
            background-repeat: no-repeat;
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
                font-weight: 500;
            }

            p {
                color: #FFF;
                font-size: 48px;
                font-weight: 300;

                @media screen {
                    @media (max-width: 800px) {
                        font-size: 40px;
                    }
                }
            }

        }

        .empreendimentoitem2 {
            flex: 1;
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("public/assets/homepage/image 2.webp");
            background-size: cover;
            background-repeat: no-repeat;
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
                font-weight: 500;
            }

            p {
                color: #FFF;
                font-size: 48px;
                font-weight: 300;

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