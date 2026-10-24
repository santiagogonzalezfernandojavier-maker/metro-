# Revisión 20 · pasajeros

- Perfiles de cráneo con mandíbula y mentón, torso con hombros y cintura y extremidades con volumen gradual.
- Cabezas, ojos, orejas, manos y zapatos reducidos a proporciones más naturales.
- Adultos y niños conservan distintas alturas, colores de ropa, tonos de piel y peinados. Bebés en brazos con extremidades conectadas al cuerpo.
- Marcha con segmentos de pierna de longitud constante, flexión de rodilla y balanceo de brazos; postura de brazos para cuidadores.
- Geometría compartida mediante instancias; los pasajeros se construyen durante la ejecución, no son nuevos GLB escaneados.

Verificación: 120 fotogramas con matrices finitas y longitudes de piernas estables; inspección estática de la geometría con un render local. No se ejecutó una prueba WebGL en navegador. El acabado continúa siendo una representación optimizada y no fotorealista.
