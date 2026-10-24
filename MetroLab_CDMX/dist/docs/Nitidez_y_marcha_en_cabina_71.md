# Avisos y ambiente de marcha en cabina · revisión 71

Se procesan las 36 grabaciones de estación activas del manifiesto anterior, el aviso de cierre y el mensaje manual aportado: filtrado de graves molestos y agudos superiores a la banda de voz, reducción moderada de ruido y nivelado. Se mantienen los tiempos, contenido, aviso único durante aproximación y cinco segundos de advertencia previos al cierre. El procesamiento no recupera información ausente ni elimina todos los defectos de la grabación original.

Se retiran el oscilador triangular y el ruido aleatorio usados por el ambiente anterior. La marcha usa un fragmento de 46–58 s del video del usuario, dentro del bloque «Un tren pasando». Se prepara un bucle de 11.65 s con unión cruzada de 350 ms para evitar saltos. Es una grabación exterior adaptada al punto de vista de cabina; no se dispone de una grabación interior específica de NM-22, NM-79 o MP-82 ni de sonidos separados de cada equipo.

El ambiente se divide por filtros en una banda baja y una banda de rodadura. Sus niveles aumentan suavemente con velocidad; se evita una entrada brusca al arrancar y se silencia el ambiente con el tren detenido o la simulación pausada. La rodadura se conserva mientras el tren se mueve por inercia o frena; la banda baja disminuye si no hay alimentación. La reproducción varía moderadamente con velocidad y no acelera con el factor de tiempo del simulador.

Las vistas frontal, lateral de cabina e interior escuchan al tren seleccionado. Las vistas exteriores aplican atenuación por distancia. Durante un anuncio, mensaje manual o advertencia de cierre, el ambiente baja al 30 % para facilitar la comprensión. Se respetan volumen y silencio elegidos por el usuario.

Verificación: todos los archivos activos procesados existen, marcha audible y sin saturación, duración del bucle, ausencia de síntesis/ruido aleatorio, silencio detenido, entrada gradual, variación por velocidad, atenuación de voz y rodadura por inercia. Pasaron regresiones de anuncios en ambas líneas, aviso de cierre, mensaje manual y operación. No se realizó escucha comparativa humana ni prueba interactiva en navegador.
