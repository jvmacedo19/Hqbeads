<template>
    <div id="HQ-button">
        <v-btn>{{ valor }}</v-btn>
    </div>
</template>

<script>


export default {
    name: 'HQButton',
    props: {
        valor: String,
    }
}

</script>

<style lang="scss" scoped>

#HQ-button {
    .v-btn {
        justify-content: center;
        align-items: center;
        background-color: #695641;
        border-radius: 10px;
        font-weight: 500;
        padding: 25px 50px;
        display: flex;
        text-transform: none;
        color: #fff;
        font-family: "Montserrat", sans-serif;

        @media screen {
            @media(max-width: 800px) {
                font-size: 15px !important;
            }
        }

    }
}
</style>
