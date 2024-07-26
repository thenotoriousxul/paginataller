<<<<<<< HEAD
<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const drawer = ref(true);
const rail = ref(true);
</script>


<template>
  <div id="contenedor">
    <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link to="/VistaCliente/perfil">
            <v-list-item prepend-icon="mdi-account-group-outline" title="Mi perfil" value="users"></v-list-item>
          </router-link>

          <router-link to="/VistaCliente/MisVehiculos">
            <v-list-item prepend-icon="mdi-home-city" title="Mis vehículos" value="home"></v-list-item>
          </router-link>

          <router-link to="/VistaCliente/DetalleDeMisOrdenes">
            <v-list-item prepend-icon="mdi-account" title="Detalles de mis ordenes" value="account"></v-list-item>
          </router-link>

        </v-list>
      </v-navigation-drawer>

      <v-main class="container-right">
        <router-view></router-view>
      </v-main>
      
    </v-layout>
  </v-card>
  </div>
  
</template>

<style scoped>
.container-right{
  width: 100vw;
  height: 100vh;
  background-color: rgb(247, 249, 255);
}
</style>

=======
<template>
  <h1>AQUI VA LA VISTA DE CLIENTES</h1>
</template>

<script>

</script>

<style>

</style>
>>>>>>> 0a9462cf67b4e995cbcbe02f6b90c1a0e1a8e1b1
