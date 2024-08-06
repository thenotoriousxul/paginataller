<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-card>
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Michael_Jordan.jpg/220px-Michael_Jordan.jpg"
            alt="Profile Image"
            class="profile-image"
          ></v-img>
          <v-card-title class="card-title">Mi Perfil</v-card-title>
          <v-card-text>
            <v-form>
              <template v-if="!editing">
                <div class="info-item"><strong>Nombre:</strong> {{ user.name }}</div>
                <div class="info-item"><strong>Correo Electrónico:</strong> {{ user.email }}</div>
                <div class="info-item"><strong>Teléfono:</strong> {{ user.phone }}</div>
                <div class="info-item"><strong>Dirección:</strong> {{ user.address }}</div>
                <v-btn @click="editing = true">Modificar</v-btn>
              </template>
              <template v-else>
                <v-text-field
                  v-model="user.name"
                  label="Nombre"
                  :rules="[rules.required]"
                  class="text-field"
                ></v-text-field>
                <v-text-field
                  v-model="user.email"
                  label="Correo Electrónico"
                  :rules="[rules.required, rules.email]"
                  class="text-field"
                ></v-text-field>
                <v-text-field
                  v-model="user.phone"
                  label="Teléfono"
                  :rules="[rules.required]"
                  class="text-field"
                ></v-text-field>
                <v-text-field
                  v-model="user.address"
                  label="Dirección"
                  :rules="[rules.required]"
                  class="text-field"
                ></v-text-field>
                <v-btn @click="saveProfile">Guardar Cambios</v-btn>
                <v-btn @click="editing = false">Cancelar</v-btn>
              </template>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="9">
        <v-tabs>
          <v-tab>Mis Vehículos</v-tab>
          <v-tab>Mis Órdenes</v-tab>

          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <!-- Contenido de Mis Vehículos -->
                <v-data-table
                  :headers="vehicleHeaders"
                  :items="vehicles"
                  item-key="id"
                >
                  <template v-slot:body="{ items }">
                    <tbody>
                      <tr v-for="item in items" :key="item.id">
                        <td>{{ item.make }}</td>
                        <td>{{ item.model }}</td>
                        <td>{{ item.year }}</td>
                        <td>{{ item.color }}</td>
                        <td>{{ item.registration }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <!-- Contenido de Mis Órdenes -->
                <v-data-table
                  :headers="orderHeaders"
                  :items="orders"
                  item-key="id"
                >
                  <template v-slot:body="{ items }">
                    <tbody>
                      <tr v-for="item in items" :key="item.id">
                        <td>{{ item.description }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.status }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>
