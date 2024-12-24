<template>
    <div id="HQ-footer">
        <div class="footer">
            <div class="footer-area">
                <img src="~@/public/assets/homepage/hqbeds_logo_1 2.webp" alt="logo HQ" />
            </div>
            <div class="footer-area">
                <h3>endereço</h3>
                <p>{{ address.street }}, {{ address.number }}<br />{{ address.city }}, {{ address.state }}, {{ address.country }}</p>
                <p v-if="contact.email"><v-icon size="32" color="#695640">mdi-email</v-icon> <a :href="`mailto:${contact.email}`">{{ contact.email }}</a></p>
                <p v-if="contact.phone"><v-icon size="32" color="#695640">mdi-phone</v-icon><a :href="`tel:${contact.phone}`">{{ contact.phone }}</a></p>
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
                <p>Nosso time está disponível<br />das {{ operation.start }} às {{ operation.end }}.</p>
                <v-btn color="#695640">Reserve agora</v-btn>
                <div class="menu-svg">
                    <a v-if="socials.instagram" :href="socials.instagram">
                        <img src="~@/public/assets/homepage/instagram copy.svg" alt="ícone instagram"
                            style="width: 20px; margin-right: 10px" />
                    </a>
                    <a v-if="socials.facebook" :href="socials.facebook">
                        <img src="~@/public/assets/homepage/facebook-circle-svgrepo-com copy.svg" alt="ícone facebook"
                            style="width: 20px;margin-right: 10px" />
                    </a>
                    <a v-if="socials.pinterest" :href="socials.pinterest">
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
    },
    data() {
        return {
            socials: {
                facebook:null,
                instagram:null,
                pinterest:null
            },
            contact: {
                email:null,
                phone:null
            },
            address: {
                street:null,
                number:null,
                city:null,
                state:null,
                country:null
            },
            operation: {
                start:null,
                end:null
            }
        }
    },
    methods: {
        async consultSocials() {
            const query = await GqlSocials();

            this.socials.facebook = query.metadadoBy.linksDeRedesSociais.facebook;
            this.socials.instagram = query.metadadoBy.linksDeRedesSociais.instagram;
            this.socials.pinterest = query.metadadoBy.linksDeRedesSociais.pinterest;
        },
        async consultFields() {
            const query = await GqlFooter();

            this.contact.email = query.metadadoBy.camposRodape.contato.eMail;
            this.contact.phone = query.metadadoBy.camposRodape.contato.telefone;

            this.address.street = query.metadadoBy.camposRodape.endereco.rua;
            this.address.number = query.metadadoBy.camposRodape.endereco.numero;
            this.address.city = query.metadadoBy.camposRodape.endereco.cidade;
            this.address.state = query.metadadoBy.camposRodape.endereco.estado;
            this.address.country = query.metadadoBy.camposRodape.endereco.pais;

            this.operation.start = query.metadadoBy.camposRodape.funcionamento.horarioDeAbertura;
            this.operation.end = query.metadadoBy.camposRodape.funcionamento.horarioDeEncerramento;
        }
    },
    async mounted() {
        this.consultSocials();
        this.consultFields();
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
        .v-btn{
            text-transform: none;
            font-weight: 300;
        }
    }
}

.copy {
    margin-top: 2.5%;
    font-size: 0.9rem;
    color: #555;
    text-align: center;

    p {
        font-weight: 500 !important;
    }
}

</style>