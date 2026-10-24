# Revisión 118 — visibilidad y mantenimiento didáctico

- Aviso de recorrido compacto, con altura acotada al contenido y sin el halo de fondo extendido. Conserva próxima estación, distancia, estado de puertas y progreso.
- Cámara de conducción y vista hacia el andén calculadas en el marco rígido del vagón delantero al renderizar curvas. Antes se deformaban la posición del ojo y el destino por separado; podían diferir de la orientación del propio vagón.
- Se unifica la importación de GameShell105: simulación y entrada principal ya no crean dos instancias con URL de módulo distinta.
- El objeto de obstrucción del banco es ahora una bolsa con correa y costuras, en el plano de cierre. Las hojas comienzan separadas en un 12%; gomas y testigo ámbar/verde hacen visible el fallo y el resultado.
- El guante agarra un punto lateral de la correa. En arrastre, la extracción hacia el usuario se calcula sobre un plano trasladado; la pieza conserva la referencia del mouse. El guante acompaña la pieza también al colocarla mediante dos clics.
- La intervención conserva la bolsa retirada en la bandeja. El ensayo solamente termina con apertura completa y cierre completo; ya no se declara completado al alcanzar el 95% del recorrido.
- Las cuatro misiones incluyen una explicación del paso y una acción principal conectada al mismo controlador de la escena. En escritorio ancho, la columna de instrucciones queda fuera del área del banco. F permite acercarse al objetivo sin movimiento automático.
- Adiciones de geometría ligeras: el banco GLB de puertas pasa de 21 a 25 mallas. Sin descargar texturas grandes adicionales ni cambiar la calidad de todos los trenes de forma indiscriminada.

## Verificación
Pruebas CPU de geometría, render pose, interacción real por raycasting de los GLB, arrastre/cancelación y estados; pruebas DOM de misiones, interfaz y conducción. No se dispone de verificación visual en navegador/WebGL en este entorno; no se afirma hiperrealismo ni FPS medidos. Las adiciones se construyen sobre los GLB de Blender existentes en tiempo de carga; no se ha regenerado el archivo .blend original en esta revisión.
