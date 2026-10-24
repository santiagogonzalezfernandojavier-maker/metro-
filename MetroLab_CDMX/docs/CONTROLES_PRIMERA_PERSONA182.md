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
