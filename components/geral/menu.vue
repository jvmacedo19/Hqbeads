<template>
    <div id="HQ-menu">
        <div class="menu">
            <div class="logo">
                <a href="/">
                    <img src="~@/public/assets/homepage/hqbeds_logo_1 2.webp" alt="logo HQ" />
                </a>
            </div>
            <div style="display: flex;">
                <a href="/" class="menu-item">Home</a>
                <div class="dropdown">
                    <a href="/propriedade
                    
                    " class="menu-item">
                        Sobre a propriedade
                    </a>
                </div>
                <a href="/acomodacoes" class="menu-item">Acomodações</a>
                <a href="/atracoes" class="menu-item">Atrações</a>
                <a href="/galeria" class="menu-item">Galeria</a>
                <a href="/reserva" class="menu-item">Reserva</a>
            </div>
            <div class="menu-svg">
                <a href="">
                    <v-icon color="white" style="width: 20px; margin-right: 10px;text-decoration: none;">mdi-instagram</v-icon>
                </a>
                <a href="">
                    <v-icon color="white" style="width: 20px; margin-right: 10px;text-decoration: none;">mdi-facebook</v-icon>
                </a>
                <a href="">
                    <v-icon color="white" style="width: 20px; margin-right: 10px;text-decoration: none;">mdi-pinterest</v-icon>
                </a>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div class="mobile-menu">
            <button @click="toggleMenu" class="menu-button" >
                <div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <img src="public/assets/homepage/hqbeds_logo_1 2.webp" style="height: 30px;">
            </button>
            <div v-if="menuOpen" class="mobile-links">
                <a href="/" class="menu-item">Home</a>
                <a href="/propriedade" class="menu-item">Sobre a propriedade</a>
                <a href="/acomodacoes" class="menu-item">Acomodações</a>
                <a href="/atracoes" class="menu-item">Atrações</a>
                <a href="/galeria" class="menu-item">Galeria</a>
                <a href="/reserva" class="menu-item">Reserva</a>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'HQMenu',
    data() {
        return {
            menuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
    },
};
</script>

<style lang="scss" scoped>
#HQ-menu {
    .menu {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100vw;
        padding: 20px 0;
        position: absolute;
        top: 0;
        z-index: 99;
        transition: background-color 0.3s ease;
        background-color: transparent;

        @media screen and (max-width: 800px) {
            display: none;
        }

        .dropdown {
            position: relative;
            display: inline-block;
        }

        .dropdown-content {
            display: block;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            z-index: 1;
        }

        .dropdown-content a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }

        .dropdown-content a:hover {
            background-color: #f1f1f1;
        }

        .logo img {
            width: 100%;
            height: 40px;

            &:hover {
                opacity: 100%;
            }
        }

        .menu-item {
            text-decoration: none;
            color: #fff;
            margin-right: 50px;
            font-size: 16px;
            font-weight: bold;
            font-weight: 500;
            transition: color 0.3s, text-shadow 0.3s;

            &:hover {
                color: #fff;
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.65),
                    0 0 10px rgba(255, 255, 255, 0.65),
                    0 0 15px rgba(255, 255, 255, 0.65),
                    0 0 20px rgba(255, 255, 255, 0.65);
            }
        }

        .menu-svg {
            display: flex;

            .svg-image1 {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 10px;
                width: 40px;
                height: 40px;
                background-color: #fff;
                border-radius: 50%;
                background-size: 25px 25px;
                background-position: center;
            }

            .svg-image {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 10px;
                width: 40px;
                height: 40px;
                background-color: #fff;
                border-radius: 50%;

                img {
                    width: 20px;
                    height: auto;
                }
            }
        }
    }

    .mobile-menu {
        display: none;

        @media screen and (max-width: 800px) {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 10px;
            background: #6C563F;

            .menu-button {
                display: flex;
                justify-content: space-between;
                align-items: center;
                /* Para alinhar verticalmente os elementos */
                width: 100%;
                /* Certifique-se de que a largura seja suficiente */
                background: none;
                border: none;
                cursor: pointer;
                padding: 10px;

                .line {
                    width: 30px;
                    height: 3px;
                    background: #fff;
                    margin: 5px 0;
                }

                img {
                    height: 30px;
                    /* Certifique-se de que a imagem tenha dimensões */
                }
            }


            .mobile-links {
                display: flex;
                flex-direction: column;
                gap: 10px;

                .menu-item {
                    text-decoration: none;
                    color: #fff;
                    font-size: 16px;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>