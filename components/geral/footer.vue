<template>
    <div id="HQ-footer">
        <div class="footer">
            <div class="footer-area">
                <img src="~@/public/assets/homepage/hqbeds_logo_1 2.webp" alt="logo HQ" />
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
                <HQButton valor="Reserve agora" style="margin-top: 15px;"></HQButton>
                <div class="menu-svg">
                    <a href="">
                        <img src="~@/public/assets/homepage/instagram copy.svg" alt="ícone instagram"
                            style="width: 20px; margin-right: 10px" />
                    </a>
                    <a href="">
                        <img src="~@/public/assets/homepage/facebook-circle-svgrepo-com copy.svg" alt="ícone facebook"
                            style="width: 20px;margin-right: 10px" />
                    </a>
                    <a href="">
                        <img src="~@/public/assets/homepage/pinterest-svgrepo-com copy.svg" alt="ícone pinterest"
                            style="width: 20px;margin-right: 10px" />
                    </a>
                </div>
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
    padding: 2.5% 10%;
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

            @media screen {
                @media (max-width: 800px) {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin: auto;
                    padding: 15px;
                    text-align: center;
                }
            }
        }

        img {
            width: 250px;

            @media screen {
                @media (max-width: 800px) {
                    padding: 15px;
                    margin: auto;
                }
            }
        }

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
            font-weight: 500;
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

        .menu-svg {
            display: flex;
            margin-top: 10px;
        }
    }
}

.copy {
    margin-top: 20px;
    font-size: 0.9rem;
    color: #555;
    text-align: center;

    p {
        font-weight: 500 !important;
    }
}

</style>