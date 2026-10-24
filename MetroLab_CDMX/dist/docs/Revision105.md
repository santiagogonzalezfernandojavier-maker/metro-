# Revisión 105 · Metro / Operaciones

## Menús de juego en todas las áreas

Portada cinematográfica sobre el depósito 3D real, cámara más baja y menú vertical. Estilo industrial con grafito, metal, ámbar y acentos fríos. Progreso de taller basado en las cuatro misiones completadas, no en cifras inventadas.

El mismo diseño se extiende a selección de tren, exploración y sus seis cámaras, mantenimiento, conducción, observación de la red, biblioteca, carga y diálogos. Los controles existentes conservan sus acciones.

Barra de contexto con experiencia activa y datos reales del escenario. HUD compacto para dar espacio a la vista y HUD ampliado para acceder a indicadores y ajustes del escenario. En conducción de escritorio, el panel queda junto a la vista, con desplazamiento interno para los mandos avanzados.

Menú de pausa con Esc: continuar, ajustes y volver a portada. Detiene el recorrido y suspende las animaciones 3D; al volver restituye la marcha solo si antes estaba activa. Los ajustes abiertos desde el menú de pausa no arrancan el tren. Los movimientos de mantenimiento conservan su tiempo pendiente al reanudar. Esc sigue permitiendo cancelar la pieza en mano antes de abrir el menú. Pantalla completa mediante acción del usuario cuando el navegador la admite.

## Imagen y rendimiento

- Reflejos de entorno en los trenes del depósito, luz principal cálida y relleno frío.
- Iluminación más contenida en túneles, estaciones cubiertas e interiores; fondo atmosférico según el entorno. La exposición es ajustable.
- Sombras de contacto suaves bajo los convoyes y en las vías de selección. Son una aproximación visual eficiente, no trazado de rayos.
- Materiales de piel y tejidos con respuesta de rugosidad más natural, conservando los colores y mapas existentes.
- Se unifican las URLs de entrada del taller y la galería para evitar inicializaciones y cachés duplicados.

Perfiles guardados en el navegador:

| Perfil | Límite de resolución relativa | Frecuencia gráfica objetivo |
| --- | --- | --- |
| Rendimiento | 0.85× | hasta 30 Hz |
| Equilibrado | 1.2× | hasta 60 Hz en taller y mantenimiento |
| Cinematográfico | 1.6× | hasta 60 Hz en taller y mantenimiento |

La resolución respeta la densidad real de la pantalla y se reduce ante cuadros lentos. La red y la conducción mantienen su presupuesto gráfico de 30 Hz. Estos son límites configurados; no una medición de FPS garantizada en el equipo del usuario. La física y el ritmo 1×/2×/5× son independientes del render.

## Verificación

Pruebas de los botones reales del menú: pausa, restauración de marcha, ajustes dentro de pausa, regreso a portada, HUD, exposición y perfiles de resolución. Validación de entradas ESM coherentes y ausencia de IDs duplicados. Pruebas de navegación entre los cuatro modos, las seis cámaras, arranque/conducción/frenado, puertas y convoyes de nueve carros. Las cuatro prácticas de mantenimiento completan sus secuencias de interacción 3D.

Se revisaron estructuras 3D y lógica con pruebas de CPU/DOM. No se realizó una revisión visual interactiva en navegador. Esta revisión mejora la dirección visual y la iluminación; no equivale a una reconstrucción fotogramétrica ni acredita hiperrealismo completo de cada estación y personaje.
