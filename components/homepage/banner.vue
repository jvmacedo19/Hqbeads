<template>
    <div id="homepage-banner">
        <div class="homepage-principal">
            <div class='banner'>
                <div class='list'>
                    <div class='item'>
                        <div class='content'>
                            <div class='text'>
                                <h1>Uma frase muito interessante</h1>
                                <h2>Algo muito bacana vai acontecer aqui</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import HQButton from '@/components/geral/button.vue';

export default {
    name: 'HomepageBanner',
    components: {
        HQButton
    }
}

</script>

<style lang="scss" scoped>
$bg-color-light: #eee;
$text-color-light: #251E46;
$bg-color-dark: #111;
$text-color-dark: #fff;

:root {
    --bg-color: #{$bg-color-light};
    --text-color: #{$text-color-light};
}

[data-theme='dark'] {
    --bg-color: #{$bg-color-dark};
    --text-color: #{$text-color-dark};
}

#homepage-banner {
    background-size: cover !important;
    background-repeat: no-repeat !important;

    @media screen {
        @media (max-width: 800px) {
            background-position: center;
        }

        @media(prefers-color-scheme:dark) {
            filter: grayscale(100%);
            background: linear-gradient(rgba(17, 17, 17, 0.8), rgba(0, 0, 0, 0.8)), url('public/assets/homepage/banner (1) (1).webp');
        }

        @media(prefers-color-scheme:light) {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('public/assets/homepage/banner (1) (1).webp');
        }

    }

    .homepage-principal {
        .banner {
            height: 100vh;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;

            @media screen {
                @media (max-width: 800px) {
                    padding: 0 5%;
                    height: 55vh;
                }
            }

            .list {
                .item {
                    .content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        width: 100%;
                        color: #FFF;
                        text-shadow: 0 5px 10px #0004;

                        .text {
                            h1 {
                                font-size: 45px;
                                font-weight: 400;

                                @media screen {
                                    @media (max-width: 800px) {
                                        font-size: 30px;
                                        text-align: center;
                                    }
                                }
                            }

                            h2 {
                                font-size: 27px;
                                font-weight: 300;

                                @media screen {
                                    @media (max-width: 800px) {
                                        font-size: 21px;
                                        text-align: center;
                                    }
                                }
                            }
                        }

                        .v-btn {
                            justify-content: center;
                            align-items: center;
                            background-color: transparent;
                            border-radius: 10px;
                            font-weight: 500;
                            font-size: 1.25em;
                            margin-top: 25px;
                            padding: 35px 50px;
                            display: flex;
                            border: 1px solid #FFF;
                            color: #FFF;
                        }
                    }
                }
            }
        }
    }
}
</style>