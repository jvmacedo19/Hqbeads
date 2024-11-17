<template>
    <div id="HQ-footer">
        <div class="footer">
            <div class="footer-area">
                <img src="~@/public/assets/homepage/unify.svg" alt="logo HQ" />
            </div>
            <div class="footer-area">
                <h3>endereço</h3>
                <p>Rua Não Sei Qual, 33<br />Cidade, ES, Brasil</p>
                <p><a href="mailto:email@unify.com">email@unify.com</a></p>
                <p>+55 00 0000-0000</p>
            </div>
            <div class="footer-area">
                <h3>mapa do site</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Acomodações</a></li>
                    <li><a href="#">Atrações</a></li>
                </ul>
            </div>
            <div class="footer-area">
                <h3>funcionamento</h3>
                <p>Nosso time está disponível<br />das 8:00 às 18:00.</p>
                <HQButton valor="Reserve agora"></HQButton>
            </div>
        </div>
        <div class="copy">
            <p>Todos os direitos reservados © 2024</p>
        </div>
    </div>
</template>

<script>

import HQButton from '@/components/geral/button.vue';

export default {
    name: "HQFooter",
    components: {
        HQButton
    }
};
</script>

<style lang="scss" scoped>
#HQ-footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 25vh;
    padding: 2% 10%;
    background-color: #f7ebda;

    .footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        height: 100%;

        .footer-area {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: baseline;

            h3 {
                text-transform: uppercase;
                font-size: 1.2rem;
                margin-bottom: 10px;
            }

            p,
            a {
                font-size: 1rem;
                line-height: 1.5;
                color: #333;
                text-decoration: none;
            }

            ul {
                list-style: none;
                padding: 0;

                li {
                    margin-bottom: 5px;

                    a {
                        color: #333;
                        text-decoration: none;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }

            }
        }
    }

    .copy {
        margin-top: 20px;
        font-size: 0.9rem;
        color: #555;
        text-align: center;
    }
}
</style>