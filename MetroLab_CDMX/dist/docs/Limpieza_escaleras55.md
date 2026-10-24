# Corrección de restos de escaleras · revisión 55

Se retiraron 760 piezas de borde de peldaño (`Nariz peldaño`), 40 por estación, en las 19 estaciones de Línea 1 cuyos tramos de escaleras genéricos se habían eliminado en la revisión 54. Esas piezas se habían exportado como objetos independientes y habían quedado flotando.

Se conservaron las escaleras de Observatorio, los pasillos de la revisión 54, pisos, plafones, carteles, mapas y pantallas. Línea 8 y los trenes permanecen sin modificaciones.

La comprobación carga los 20 GLB con GLTFLoader y verifica que las estaciones sin esas escaleras no conserven peldaños, bordes, descansos, pasamanos o montantes asociados. También verifica los 64 accesos y sus pisos mediante 768 rayos. La comparación de geometría decodificada con la revisión 54 limita las diferencias a las piezas retiradas; Línea 8 y trenes se comparan por bytes.

No se realizó comprobación visual interactiva en WebGL. Esta corrección elimina restos de la geometría anterior; no convierte las ubicaciones aproximadas de accesos en planos verificados.
