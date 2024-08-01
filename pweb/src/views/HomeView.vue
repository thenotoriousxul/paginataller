<template>

  <header class="header">

    <div class="header__contenedor">

        <div class="contenedor__imagen">
          <a href="">
          <img src="@/img/logo blanco.png" class="logo">
        </a>
        </div>
        <div class="navegacion">
          <a class="navegacion__letras" href="#inicio">Inicio</a>
          <a class="navegacion__letras" href="#conocenos">Conocenos</a>
          <a class="navegacion__letras" href="#citas">Citas</a>
          <a class="navegacion__letras" href="#contactanos">Contacto</a>

        </div>

      <div class="usuario">
          <a  href="#" class="usuario__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
          </a>  
    </div>
        
    <div class="somos">
                <h2>EN</h2>
                <h2>DE LA ROSA MOTORS </h2>
                <h2 >SOMOS TU MEJOR OPCIÓN</h2>
              </div>
  </div>
</header>
  
  <main class="contenedor">

      <section class="servicios">

      <div class="servicios__informacion">
        <div class="servicios__informacion__texto">
        <h2 class="informacion-titulo centrar-texto">AQUÍ EN DE LA ROSA MOTORS SOMOS EXPERTOS EN AUTOS.</h2>
        <ul class="servicios__informacion__texto--lista">
          <li>Mecánica en general</li>
          <li>Afineaciones</li>
          <li>Frenos</li>
          <li>Suspensiones</li>
          <li>Transmisiones y direcciones</li>
          <li>Reparación de motores</li>
          <li>Clutch</li>
          <li>Distribución</li>
          <li>Fuel injection</li>
          <li>Servicio de escáner</li>
          <li>Restauración de motores</li>
        </ul>
      </div>
        <div class="informacion__imagen">
          <img  src="@/img/image.png" alt="informacion-imagen">
        </div>
    </div>
   </section>



    <section class="conocenos">


      <div class="contenedor-conocenos">

              <h1 class="centrar-texto">CONOCE UN POCO DE NUESTRA HISTORIA...</h1>

              <p class="texto-principal centrar-texto">
                La historia comienza en 1978 con un joven Manuel De La Rosa.
                Para sacar adelante a su familia con sus habilidades en atención al detalle, dando soluciones a pequeñas reparaciones de automóviles y motocicletas,
                así como la resolución de complejos problemas electrónicos con un enfoque amigable, flexible y adaptable en su propio taller mecánico.
                Desde entonces, se han enfocado en ofrecer servicios de reparación, revisiones generales, asistencia en carretera y mantenimiento preventivo.
              </p>
              <p class="texto-principal centrar-texto">
                Con el paso del tiempo, y el arduo trabajo y dedicación, fueron ganando prestigio en la comunidad.
                Siguiendo el ejemplo de su fundador, sus hijos decidieron formarse en mecánica automotriz para continuar con el legado de su padre.
                Hoy en día, los hijos de Manuel De La Rosa,
                habiendo aprendido todas sus habilidades y contando con conocimientos en nuevas tecnologías,
                están al frente del negocio ofreciendo soluciones eficientes y manteniendo la misma atención al detalle que caracterizaba a su padre.
              </p>
        </div>

        <div class="contenedor__imagenes_taller">
          <img class="imagen_taller" src="@/img/taller1.jpeg" alt="">
          <img class="imagen_taller" src="@/img/taller2.jpeg" alt="">
          <img class="imagen_taller" src="@/img/taller3.jpeg" alt="">
            </div>
    </section>



    <section class="cita">
        <div class="cita__contenedor">
          <div class="cita__contenedor--texto">
            <h1 class="titulo-cita centrar-texto">Agenda Tu Cita</h1>
            <p class="centrar-texto">Agenda una cita con Nosotros</p>
            <p class="centrar-texto">Tenemos estos Horarios Disponibles:</p>
            <p class="centrar-texto">De 3 p.m a 5 p.m</p>
            <div class="contenedor-boton">
            <a class="boton-agendar " href="#">Agendar Cita</a>
          </div>
          <p class="informacion-cita">Para poder hacer una cita tienes que tener un perfil creado en la pagina, si necesitas mas informacion por favor contactanos</p>
        </div>

        <div class="contenedor__imagen--cita">
          <img src="@/img/imagen-taller.jpeg" alt="">
        </div>

      </div>
      </section>


      <section class="contactos">

      <h1 class=" titulo-c centrar-texto"> Contacto</h1>
    <div class="contacto">
      <div class="contacto__informacion">
        <div class="contacto__informacion--texto">
        <p class="contacto-titulo">Direccion</p>
        <p>Tlahuacas 290, Santa María, 27020, Torreón, Coah.</p>
      </div>
      <div class="contacto__informacion--texto">
        <p class="contacto-titulo">Correo Electronico</p>
        <p>Delarosamotors@gmail.com</p>
      </div>
        <div class="contacto__informacion--texto">
        <p class="contacto-titulo">Telefonos</p>
        <p>871-896-7175</p>
        <p>871-220-1575</p>
      </div>
        <div class="contacto__informacion--texto">
        <p class="contacto-titulo">Horarios</p>
        <p>Lunes-Viernes: 10:30 AM a 6:00 PM</p>
        <p>Sabado: 10:30 AM a 1:00 PM</p>
      </div>
      </div>

      <div class="contacto__mapa">
        <iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.8647938548273!2d-103.42430253048818!3d25.55638590848562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdbb4681aac8b%3A0x1649ebebea998f9!2sTlahuacas%20220%2C%20Santa%20Mar%C3%ADa%2C%2027020%20Torre%C3%B3n%2C%20Coah.!5e0!3m2!1ses-419!2smx!4v1722271861156!5m2!1ses-419!2smx" width="380" height="380" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>



  <footer class="footer">
        <div class="contenedor__footer">
          <h3  class="centrar-texto"> CONTACTANOS</h3>
          <h3  class="centrar-texto"> Telefono: 871-220-1575</h3>
          <h3  class="centrar-texto"> Correo: Delarosamotors@gmail.com</h3>
        </div>
    </footer>

  </main>




</template>

<style scoped>

 /** Globales **/
 .contenedor{
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
 }

 h1,h2,h3,h4{
    line-height: 1.2;
 }

 ul{
  list-style-type: none;
 }

 img{
    max-width: 100%;
 }
 .no-margin{
    margin: 0;
 }
 .no-padding{
    padding: 0;
 }
 .centrar-texto{
    text-align: center;
 }








/*Header*/

.logo {
  height: 90px;
  margin:10px;
}

.header{
  background-image: url(@/img/tools-tool-tray-repairing-cars.jpg);
    height: 600px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
   padding-bottom:30px;

}

 .header__contenedor{
    margin: 0 auto;
    display: grid;
    grid-template-columns:1fr 3fr 1fr ;
    align-items: center;


 }
 .navegacion {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
}
 .navegacion__letras{
  text-align: center;
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 20px;
  border-radius: 10px;
  padding: 5px;
 }
 .navegacion__letras:hover{
  cursor: pointer;
  background-color: white;
  color: black;
}

 .usuario{
  display: grid;
  grid-template-columns: repeat(3,1fr);
 }

 .usuario__icon:hover{
  cursor: pointer;
 }

.usuario__icon{
  max-width:60px;
  grid-column: 3 / 4;
  align-items: center;
  padding-left: 10px;
}



@media (min-width: 768px) {
  .somos{
    color: white;
  padding-top: 100px;
  padding-left: 50px;
    }
}

/*----------------------------------------------------------------------------------------------------------------*/

/*Informacion*/

.servicios{
padding-top:120px ;
}

.informacion-titulo{
  padding-top: 85px;
}
.servicios__informacion{
  background-color: #1A1A1A;
  color: white;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 20px;
  padding-bottom: 120px;
}

.servicios__informacion__texto--lista{
  padding-left: 20px;
  padding-top:10px; 
  font-size: 20px;
}

.informacion__imagen{
  padding-top: 50px;
padding-right: 50px;
}




/*Conocenos*/

.conocenos{
  padding-top: 120px;
}

.contenedor-conocenos{
  display: grid;
  color: white;
  padding-top: 60px;
padding-bottom: 20px;
  background-color: #1A1A1A
}



.texto-principal{
  font-size: 20px;
  padding-bottom:20px ;
  color: white;
  margin: 20px
}

.contenedor__imagenes_taller{
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 20px;
}







.contactos{
  padding-top: 120px;
  padding-bottom: 120px;
}


.contacto{
  background-color: #1A1A1A;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap:20px;
  align-items: center;
  padding-bottom: 80px;
}
.titulo-c{
padding-top: 20px;
background-color: #1A1A1A;
color: white;
}
.contacto-titulo{
font-weight: bold;
color: white;

}

.contacto__informacion--texto{
  padding-bottom: 20px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  padding-left:30px ;
}

.contacto__mapa{
  display: grid;
  grid-template-columns:repeat(3,1fr);

}
.mapa{
  padding-top: 30px;
  grid-column: 2 / 3;
}


/*footer*/


.contenedor__footer{
  width: 100%;
    width: 100%;
  
  padding:30px;
  background-color: #1A1A1A;
  color: white;
}

.cita{
  padding-top: 120px;
  padding-bottom: 120px;
}

.cita__contenedor{
  background-color: #1A1A1A;
  color: white;
  display: grid;
  grid-template-columns: repeat(2,1fr);

}

.titulo-cita{
  padding-bottom: 20px;
}

.cita__contenedor--texto{
  margin: 100px;
  padding-bottom: 20px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  padding-left:30px ;

}

.contenedor__imagen--cita img{
  height: 500px;
}

.contenedor__imagen--cita{
display: flex;
flex-direction: row;
align-items: center;
padding-left: 120px;
}
.contenedor-boton{
  padding-top: 20px;
  padding-bottom: 40px;
}

.boton-agendar{
  margin: 120px;
  text-decoration: none;
  background-color: #413f3f;
  color: white;
  align-items: center;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  
}

.boton-agendar:hover{
  background-color: white;
  color: black;
  cursor: pointer;

  
}

.informacion-cita{
  background-color: red;
  font-size: 15px;
  text-align: center;
}
</style>

