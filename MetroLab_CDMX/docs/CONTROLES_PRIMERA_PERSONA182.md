# Mantenimiento en primera persona

En Subestación → Mantenimiento, pulsa **Entrar en primera persona**. El navegador solicita capturar el mouse únicamente tras ese clic. Mueve el mouse para orientar la vista sin mantener botones. Si no admite la captura, sigue disponible el arrastre con botón derecho.

- **WASD**: caminar con las colisiones existentes.
- **Shift**: paso rápido. **Ctrl**: agacharse mientras se mantiene. **C**: alternar postura.
- **E** o clic izquierdo: interactuar apuntando al equipo. En primera persona, E requiere una pieza del objetivo a un máximo de 2.5 unidades de la cámara.
- **Tab**: bolsa física. **1–9**: seleccionar herramienta. **Q**: guardarla.
- **J**: abrir/cerrar el plan, elegir una intervención y consultar todos sus pasos.
- **H**: ayuda. **Esc**: liberar cursor y cancelar la acción.

El panel ya no ocupa una columna permanente: se abre sobre la escena. El objetivo actual y la respuesta de la práctica se muestran en una tarjeta breve. El plan conserva el checklist y los controles de lectura/interpretación. Para arrastres precisos de piezas y herramientas también se conserva la interacción con cursor libre.

Comprobación automatizada: `node --experimental-loader ./scripts/test-loader.mjs scripts/verificar_controles181.mjs`, además de imports, andén, mantenimiento de trenes y servidor. Las pruebas CPU/DOM no certifican el rendimiento gráfico en un navegador con GPU.

## Corrección de entrada y colisiones (183)

Al terminar la carga de la práctica se enfoca el canvas después de desbloquear la interfaz: WASD funciona sin hacer clic primero en otro botón. También puedes activar la captura del mouse con el primer clic sobre la escena; Esc conserva el modo de cursor libre para trabajar con precisión.

Las mallas grandes exportadas desde Blender pueden agrupar objetos separados. La colisión ahora usa cajas por triángulo en esas mallas y un índice espacial, para no convertir el espacio entre equipos en una pared. La posición inicial busca un lugar libre con espacio delante; se conservan colisiones con los equipos sólidos.
