# Revisión 95 — arranque y ritmo

El selector del ritmo de simulación solo ofrece 1×, 2× y 5×. Las opciones 10×, 20× y 60× se retiran. El bucle rechaza valores ajenos a la lista y vuelve a 1×; 5× es el máximo incluso ante un valor programático incorrecto. El velocímetro continúa mostrando la velocidad física en km/h. El ritmo puede elegirse tanto al observar como al conducir.

Se corrige un fallo del modo automático: launchTrainExperience dejaba running=false al entrar en Observar la red. Ahora ambos modos arrancan el reloj; el modo operador mantiene freno hasta accionar Acelerar. En observación, los trenes estacionados completan su parada antes de salir.

Se añade espera explícita del motor de datos al entrar desde el menú antes de que termine la inicialización. La pantalla de carga indica que prepara datos y recorrido; si falla durante 15 segundos ofrece Reintentar. Volver al menú cancela el lanzamiento pendiente.

Pruebas nuevas: ejecutar app.js completo con HTML, datos, motor, sistemas de cabina y mandos reales en un entorno DOM simulado. Para NM-22, NM-79 y MP-82 se comprueban marcha automática, botón Acelerar, frenado, pausa, continuación, ritmos 1×/2×/5× y rechazo de 60×. Se cargan los seis GLB reales y se construyen/clonan convoyes completos de nueve coches mediante el ensamblado de producción: 144 hojas de puerta y 36 portales de embarque en ambos sentidos. Se comprueban espera de inicialización, reintento y navegación.

Los registros del servidor no mostraron errores recientes. Estas pruebas no ejecutan WebGL ni verifican CSS en navegador; no acreditan que se hayan resuelto todos los fallos visuales del equipo del usuario.
