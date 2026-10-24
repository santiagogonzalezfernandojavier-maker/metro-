# Tablero, puertas y anuncios · revisión 65

El tablero junto a la vista de conducción incorpora un velocímetro con aguja de 0–100 km/h y lectura digital, ambos ligados a la velocidad real del motor del escenario. Incluye estado de puertas y cuenta regresiva. El tablero es una interfaz didáctica, sin afirmar que reproduce el pupitre físico de los tres modelos.

En conducción manual, cerrar desde puertas abiertas inicia una fase de advertencia de cinco segundos con puertas completamente abiertas, seguida de 1.5 segundos de cierre. El tren permanece inmóvil hasta completar ambas fases. La emergencia o la falta de alimentación congelan la secuencia; la pausa detiene el audio y al continuar se reproduce el tiempo restante del aviso.

La advertencia utiliza las grabaciones de cierre ya integradas: NM-79 y MP-82 corresponden a sus referencias; el NM-22 utiliza la referencia NM-16 aportada anteriormente. Los fragmentos existentes, de aproximadamente dos segundos, se repiten durante los cinco segundos solicitados. No se sintetizó un aviso nuevo.

La entrada a conducción solicita activar audio desde el clic del usuario. Si el navegador impide su activación, se indica activar sonido. El botón Cerrar puertas solicita activación y precarga antes de iniciar la advertencia; si no se consigue, conserva puertas abiertas e informa el problema. El volumen elegido por el usuario se respeta.

Los anuncios de próxima estación siguen al tren seleccionado y se disparan durante aproximación, una vez por visita, antes de detenerse; se conservan las grabaciones por estación existentes y sus límites de procedencia. No se dispara un anuncio nuevo estando ya detenido. Se conserva el tiempo de aviso automático anterior; la nueva secuencia de cinco segundos corresponde al mando manual.

Verificación: aviso y puertas en ambas líneas, retención de tracción durante la secuencia, audio programado cinco segundos, reanudación por tiempo restante, anuncio único en aproximación manual y sin repetición en llegada. Regresión de anuncios automáticos (L1/L8, tiempo real y acelerado), grabaciones de cierre no silenciosas y distintas, operación e integración aprobadas. Sin verificación visual/sonora interactiva en navegador.
