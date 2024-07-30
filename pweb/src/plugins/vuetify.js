import { createVuetify } from "vuetify";
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'; // Importa los iconos de Material Design

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


export default createVuetify({
    components,
    directives,
    icons: {
      iconfont: 'mdi', // Utiliza el conjunto de iconos de Material Design Icons
    },
  });   