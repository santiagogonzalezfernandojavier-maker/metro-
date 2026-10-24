# Revisión 100 · Interiores L8 y acabado visual general

Referencia: captura image(20261015-072906).png, preservada en assets-source/referencias100/interior_linea8.png del proyecto fuente.

## Corrección geométrica
Se corrigieron los cuatro archivos GLB vigentes de NM-79 y MP-82 (cabecera e intermedio), conservando motores, puertas laterales, cerraduras fotográficas y formación. Se retiraron las palancas antiguas del testero que coexistían con la cerradura incorporada en la revisión 92; se trasladaron las bisagras del extremo positivo al lado contrario de la cerradura y se añadieron remates superiores entre el testero y el cielo interior. Se conservaron los huecos de las ventanas y sus cristales; ver otro coche a través de ellos no constituye por sí mismo una obstrucción.
Los marcos y paneles de testero ahora reutilizan mapas PBR ya incrustados en cada GLB. Los archivos editables de assets-source/trenes se actualizaron al mismo contenido que los GLB comprimidos distribuidos. Geometría y dimensiones aproximadas desde referencias; no es un plano de fabricación.

## Mejora general del render
Una pasada común mejora las propiedades de reflexión del acero y herrajes, conserva las texturas y colores originales, y añade microestructura de normales y rugosidad únicamente donde faltaban mapas en superficies identificadas de metal, paneles y piso. Usa dos conjuntos compartidos de mapas procedurales de 64 × 64; no añade archivos de texturas pesadas. Los mapas compartidos sobreviven a la descarga de estaciones.
Se aplica a trenes en circulación, modelos del taller y menú de selección, estaciones y texturas de los pasajeros. La anatomía y animaciones de pasajeros existentes se conservan; no se afirma haber reconstruido todos los personajes ni cada estación.
Las vistas interiores incorporan tres luces locales suaves, sin sombras en tiempo real, que siguen la posición de la cámara sobre las curvas y se apagan en vistas exteriores. Se equilibró la iluminación ambiental del interior. El taller mantiene su ambiente de reflexión propio. Se conservan el encuadre manual y la visibilidad por sectores de las revisiones 98 y 99.

## Verificación y límites
Pruebas de rayos sobre los cuatro GLB: palancas anteriores ausentes, remates superiores presentes, ventanillas sin parches opacos. Se comprueba una cerradura fotográfica por extremo, mapas/UV válidos, materiales idempotentes, colores preservados, luces sobre el trazado curvo y liberación segura de mapas compartidos. Pruebas de regresión de convoyes, cámaras, navegación y modelos mecánicos.
La mejora es geométrica y de materiales e iluminación; no certifica fotorealismo, iluminación medida ni mejora de FPS. La inspección visual WebGL en navegador permanece pendiente.
