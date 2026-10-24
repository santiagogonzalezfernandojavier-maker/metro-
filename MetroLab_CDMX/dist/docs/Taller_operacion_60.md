# Taller y conducción · revisión 60

La entrada del sitio es un taller dedicado al material rodante. Permite seleccionar NM-22 (Línea 1), NM-79 o MP-82 (Línea 8). El modelo seleccionado se conserva en exploración, mantenimiento y al entrar al recorrido.

## Exploración

Se utilizan los seis GLB existentes de cabecera e intermedio. Se pueden girar y acercar, seleccionar los conjuntos de carrocería, puertas, interior, cubierta/ventilación, rodaje/bajos y cabina, o elegir una pieza individual de su lista. El despiece separa visualmente los conjuntos mediante transformaciones reversibles. Se puede aislar un conjunto, ocultar las envolventes para ver el interior, enfocar una pieza y restaurar el modelo.

Las explicaciones corresponden al conjunto visual de cada pieza. Las dimensiones mostradas proceden de la geometría actual y son aproximadas. El despiece no es una lista de montaje del fabricante y no reconstruye equipos internos ausentes. Los bajos incluyen geometría de referencia compartida. Los coches intermedios no muestran elementos de cabina. No se modificaron los archivos GLB existentes.

## Mantenimiento

Tres ejercicios: obstáculo virtual en puertas, ventilación sin respuesta e incidencia visual en rodaje. El flujo requiere aislar la alimentación del ejercicio, seleccionar el conjunto pertinente, inspeccionarlo, aplicar una corrección virtual y comprobar el resultado. El registro muestra el avance y permite reiniciar. Cambiar modelo, unidad o incidencia reinicia la práctica. Los ejercicios no se pueden ejecutar durante la carga del modelo.

La alimentación, el marcador de incidencia y la comprobación pertenecen al ejercicio. No son protocolos de mantenimiento real, diagnósticos eléctricos ni simulaciones físicas del fallo. Se requiere documentación del fabricante para desarrollar los mecanismos, circuitos y procedimientos específicos.

## Operar

El botón de operación inicia un escenario con un tren por línea y control manual del tren correspondiente al modelo elegido. La cámara de conducción se sitúa en el extremo delantero del convoy y acompaña su movimiento. Los mandos son tracción, freno, apertura/cierre de puertas y emergencia; las acciones modifican velocidad, posición y estado de puertas en el motor existente.

La tracción aumenta velocidad y el freno la reduce con los parámetros provisionales existentes del escenario. Las puertas solo se abren con velocidad menor o igual a 0.08 m/s y dentro de 2.5 m de una parada. La apertura detiene el tren; el cierre usa 1.5 s, realiza el intercambio de pasajeros y habilita la salida. Energía cortada o emergencia detienen la fase de puertas. Se conserva el freno de emergencia y la separación simplificada frente a otros trenes. La posición se limita a los extremos del recorrido. Los cambios de sentido terminales siguen siendo simplificados.

La conducción usa tiempo real (1×). El avance automático a la siguiente parada y los cambios de flota se desactivan durante la práctica manual. Se puede pausar/reanudar. Volver al taller pausa el escenario y silencia el audio. También se ofrece una entrada a la operación automática existente.

El pupitre, los mandos, la señalización, los enclavamientos y las protecciones son didácticos; no replican aún los sistemas reales de cada tren. No hay mando continuo de dirección ni maniobras completas de patio. Una parada rebasada se indica en el panel del operador.

## Comprobaciones

- Carga real con GLTFLoader de las seis unidades y disponibilidad de conjuntos, puertas, cabinas e interiores texturizados.
- Orden, bloqueos y reinicio de los tres ejercicios.
- Tracción, frenado, bloqueo de apertura en movimiento/fuera de estación, cierre, corte de energía, emergencia y reinicio.
- Escenario automático comparado contra la revisión anterior durante 300 s: trenes y llegadas de pasajeros idénticos.
- Identidad de los tres modelos al pasar a operación manual/automática y regresar al taller.
- Posición y bloqueo de giro/zoom de la cámara de cabina en ambos sentidos.
- Sintaxis JavaScript, referencias de IDs y conservación de modelos/estaciones.

No se dispone de revisión visual interactiva WebGL en este entorno. Las pruebas verifican archivos, lógica y transformaciones, sin certificar el encuadre final en cada navegador.
