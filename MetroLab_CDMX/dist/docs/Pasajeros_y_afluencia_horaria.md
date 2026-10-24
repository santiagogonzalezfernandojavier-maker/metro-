# Pasajeros y afluencia horaria · versión 14

El archivo aportado incluye 15 filas útiles, 20 intervalos y 300 valores horarios: 14 estaciones específicas y el promedio de intermedias de L1. Se conserva sin modificar en Afluencia_por_hora.xlsx. demanda_horaria.json conserva nombre, fila, columna de origen, sumas, picos y SHA-256.

La cabecera se interpreta como hora de inicio. El último 00:00 corresponde al intervalo 00:00–01:00 del siguiente día de servicio. Para filas Excel, 01:00–05:00 no aporta llegadas al escenario; esto expresa ausencia de valores, no un conteo observado cero. El archivo no documenta fecha, tipo de día, método de conteo o sentido. Los valores se usan como llegadas equivalentes, no ocupación del andén.

El modo Excel usa cifras absolutas de las 14 estaciones. Las otras 14 estaciones de L1 usan la fila Intermedia Prom. como aproximación explícita. Las 11 restantes de L8 mantienen la referencia histórica con reparto uniforme en 18 h; no se inventó un perfil horario. El selector de modo conserva separado el histórico mensual, que también puede seguir utilizándose. Excel e histórico no se suman. El multiplicador de demanda modifica ambos escenarios y se muestra en personas/h.

El motor integra cada intervalo por separado, también al cruzar una hora o medianoche. El reloj muestra la hora del escenario; la cola inicial corresponde a las llegadas de los tres minutos previos. Cambiar la hora o el modo reinicia el escenario.

Los usuarios se construyen en passenger-models.js con 17 componentes instanciados y hasta 220 figuras visibles. Tienen torso perfilado, cadera, cabeza, nariz, ojos, orejas, cabello, cuello, brazos, manos, piernas, calzado y mochila en algunas variantes. Cambian altura, anchura, vestuario y tonos; los identificadores mantienen la apariencia durante cada recorrido. Caminan con balanceo de brazos y flexión de rodillas. Son modelos estilizados para tiempo real, no reproducciones fotográficas.

La espera se distribuye en posiciones separadas en los corredores de andén. Las figuras se mantienen detrás del borde, desplazan poco su posición al esperar y dejan el paso por los portales activos. El embarque y descenso siguen usando las puertas reales del GLB; no atraviesan puertas cerradas. La vista reconoce el tren detenido en la estación aunque no sea el seleccionado. Las figuras representan grupos; el conteo numérico del motor se muestra por separado. La vista no muestra cada persona real ni constituye un modelo de evacuación o de flujo peatonal calibrado.

models/usuarios/Usuarios_anden_variantes.glb contiene seis variantes en pose estática, exportadas desde la misma geometría de la escena. Puede importarse en Blender. La animación activa permanece en JavaScript; este GLB no contiene un esqueleto ni clips de animación.

Verificación: correspondencia de estaciones, 300 valores del Excel, sumas, integración al cruzar horas y medianoche, respaldo de las 39 estaciones, conservación de pasajeros en el motor, cruce por puertas, límites del andén y matrices finitas para 220 figuras. No se ha medido el rendimiento en el equipo del usuario.

## Familias · versión 15

Se añadieron variantes de mujeres (cabello largo, coleta, pantalón o falda), niños con cabeza y extremidades de proporción infantil y bebés envueltos en una manta, cargados por mujeres u hombres. La vestimenta y los colores varían entre figuras. La variedad visual se distribuye en ambos andenes; no procede de un desglose demográfico del Excel.

Los niños de los grupos familiares mantienen un identificador de acompañante. En espera caminan a su lado y se mantienen lejos del borde; al subir y bajar siguen al adulto por el mismo portal con 0.45 s de diferencia. Se reserva tiempo antes del cierre y se separan sus posiciones de espera y de llegada. Los bebés pertenecen a la transformación del adulto, que mantiene los brazos flexionados para sostenerlos: no caminan ni aparecen solos en las vías.

Se conservan 220 figuras como máximo y se usan 27 componentes instanciados. No se aumentaron las cifras de afluencia ni se creó una distribución real de edades. El GLB de variantes se actualizó con mujeres, un niño y dos adultos con bebés en pose estática.

Verificación adicional: 53,660 apariciones de niños con acompañante presente y a menos de 1.4 m, 42 cruces infantiles por el portal con puertas abiertas, geometría infantil menor que la adulta y bebé unido al desplazamiento del adulto. El cálculo horario sigue pasando sus comprobaciones.
