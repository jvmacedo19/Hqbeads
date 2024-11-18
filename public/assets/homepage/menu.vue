<template>
    <div id="HQ-menu">
        <div class="menu">
            <div class="logo">
                <a href="/">
                    <img src="~@/public/assets/homepage/hqbeds_logo_1 2.webp" alt="logo HQ" />
                </a>
            </div>
            <div style="display: flex;">
                <a href="/sobre-nos" class="menu-item">Home</a>
                <div class="dropdown">
                    <a href="#" class="menu-item">
                        Sobre a propriedade
                    </a>
                </div>
                <a href="/blog" class="menu-item">Acomodações</a>
                <a href="/contato" class="menu-item">Atrações</a>
            </div>
            <div class="menu-svg">
                <a href="">
                    <img src="~@/public/assets/homepage/instagram.svg" alt="ícone instagram" style="width: 20px; margin-right: 10px"/>
                </a>
                <a href="">
                    <img src="~@/public/assets/homepage/facebook-circle-svgrepo-com.svg" alt="ícone facebook" style="width: 20px;margin-right: 10px"/>
                </a>
                <a href="">
                    <img src="~@/public/assets/homepage/pinterest-svgrepo-com.svg" alt="ícone pinterest" style="width: 20px;margin-right: 10px"/>
                </a>
            </div>
        </div>
        <div class="hidden">
            <div class="menuhidden">
                <div class="navbar-logo">
                    <img src="~@/public/assets/homepage/menu-bar.svg" alt="Image logo" />
                </div>
                <div :class="navbarClasses" id="navbar-links ">
                    <a href="#" class="menu-item"
                        style="color: #fff;text-decoration: none; margin: 10% 0 0 0;font-size: 16px;">Sobre
                        Nós</a>
                    <a href="#" class="menu-item"
                        style="color: #fff;text-decoration: none; margin: 10% 0 0 0;font-size: 16px;">Soluções</a>
                    <a href="#" class="menu-item"
                        style="color: #fff;text-decoration: none; margin: 10% 0 0 0;font-size: 16px;">Projetos</a>
                    <a href="#" class="menu-item">Blog</a>
                    <a href="#" class="menu-item"
                        style="color: #fff;text-decoration: none; margin: 10% 0 0 0;font-size: 16px;">Contato</a>
                </div>
            </div>
            <div class="logohidden">
                <a href="/"><img src="~@/public/assets/homepage/hqbeds_logo_1 2.webp" alt="logo HQ" /></a>
            </div>
            <div class="svghidden">
                <div class="svgimagehidden">
                    <div class="svg-hidden-image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HQMenu',

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
            height: 55px;
            opacity: 75%;

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
            font-weight: 300;
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

    .scroll {
        box-shadow: 0px 2px 3px #000;

    }

    .hidden {
        display: none;
    }

    @media (max-width: 800px) {
        .menu {
            display: none;
        }

        .hidden {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            padding: 20px;
        }

        .navbar-logo {
            display: flex;
            justify-content: center;
        }

        .navbar-logo img {
            width: 40px;
            cursor: pointer;
        }

        .navbar-links {
            display: none;
        }

        .navbar-links {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            width: 100vw;
            height: 56vh;
            background-color: #111;
            z-index: 1;
        }

        .navbar-links:visited {
            text-decoration: none;
            color: #fff;
        }

        .link {
            margin-top: 10%;
        }

        .logohidden img {
            width: 100%;
            height: 50px;
        }

        .svghidden .svgimagehidden {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            width: 40px;
            height: 40px;

            .svg-hidden-image {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 10px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-size: 30px 30px;
                background-position: center;
            }
        }


        .svgimagehidden2 {
            display: none;
        }
    }
}
</style>