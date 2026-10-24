Revisión 26 · Movimiento y afluencia

La demanda horaria sigue leyendo demanda_horaria.json, derivado del Excel aportado. Se mantiene la integración de llegadas por hora, incluido el cambio de franja, y el descuento de embarques. La cola inicial representa tres minutos previos a la hora seleccionada. La afluencia por hora no equivale a ocupación simultánea. Se mantienen las fuentes explícitas, promedios de intermedias L1 e históricos L8 donde faltan perfiles; no se han inventado nuevas cifras.

Se amplía la representación de grupos con una curva de densidad que crece con la espera, hasta 144 figuras base de andén. El indicador 3D muestra hora, ingresos/h, espera estimada y representación aproximada. Los grupos familiares y pasajeros dentro del tren se cuentan como figuras adicionales. La capacidad total sigue siendo 220; el intercambio en puertas tiene prioridad.

Los caminantes recorren ocho metros por carriles interiores del andén, frenan, esperan y giran antes de regresar. Los acompañantes infantiles siguen al adulto. Los personajes en espera tienen pequeños cambios de orientación y brazos. Los desplazamientos de intercambio duran hasta seis segundos y respetan el estado de puertas, parada y pausa. El modo inicial es 1×; el ascenso y descenso se acelera si se selecciona un multiplicador del reloj.

Verificado por scripts/verificar_afluencia26.mjs, verificar_personas21.mjs y verificar_integracion18.mjs: franjas del Excel, integración en cambio de hora, conservación de cantidades, diferencia de densidad, recorridos, límites del andén, pausa, puertas, presupuesto de figuras, geometría y circulación. No se dispone de verificación visual WebGL en este entorno. Los modelos siguen siendo procedurales; no se han creado nuevos modelos fotorealistas de Blender.
