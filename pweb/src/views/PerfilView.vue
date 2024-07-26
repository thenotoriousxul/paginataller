<script setup>
import { ref } from 'vue';
const tipoPersona = ref(['Fisico','Moral'])
</script>

<template>
    <div>
        <div class="first-container">
            <v-card class="card">  
                <v-card-title id="card-title">Perfil</v-card-title>
                <div class="contenido-datos-personales">
                    <v-col>
                        <v-row>
                            <v-col>
                                <v-card-text>Nombre Completo</v-card-text>
                                <v-text-field variant="solo"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-card-text> Direccion</v-card-text>       
                                <v-text-field variant="solo"></v-text-field>   
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-card-text>Teléfono</v-card-text>
                                <v-text-field variant="solo"></v-text-field>   
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-card-text>Tipo De Cliente</v-card-text>
                                <v-select variant="solo" :items="tipoPersona" density="default" label="Persona"> </v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-btn id="btn-agregar" @click="Agregar">Agregar</v-btn>
                            </v-col>
                        </v-row>
                        

                </v-col>

                    
                </div>
                
                
            </v-card>
        </div>
    </div>
   
</template>
<style scoped>
.first-container{
    height: 100vh;
    width: 100vw;
}
.card{
    background-color: white;
    width: 56vw;
    height: 100vh;
    margin-left: 270px;
    justify-content: center;
    align-items: center;
}
#card-title{
    margin-top: 10px;
    font-size: xx-large;
    background-color: white;

}
.contenido-datos-personales{
    height: 100%;
    width: 100%;
    justify-content: center;
}
#btn-agregar{
    background-color: rgb(220, 224, 245);
}
</style>