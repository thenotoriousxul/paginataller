<script setup>

</script>


<template>
    <div id="container">
        <v-card class="card">
            <v-card-title id="card-title">Vehiculos</v-card-title>
            <v-col>
                <v-row>
                    <v-col>

                        <v-data-table-virtual
                        :headers="headers"
                        :items="datos"
                        height="400"
                        item-value="name"
                        ></v-data-table-virtual>

                    </v-col>
                </v-row>
            </v-col>

        </v-card>
    </div>
</template>
<style scoped>
#container{
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    height: 100vh;
}
.card{
    grid-column: 2; /* Coloca la tarjeta en la segunda columna */
    width: 56vw;
    height: 100vh;
    overflow-y: auto;
}
#card-title{
    margin-top: 10px;
    text-align:start;
    font-size: xx-large;
}
</style>