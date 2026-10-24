# Revisión 108 · Seguimiento visible en túnel y estación

Al entrar en seguimiento se activan los cortes de estación y túnel. Ambos controles se muestran junto a las herramientas de cámara. Se puede desactivarlos durante la sesión sin que un temporizador vuelva a activarlos. Al iniciar otra sesión de seguimiento se restablece el corte para facilitar la observación.

La pared que se retira se determina ahora respecto de la orientación local del trazado, en lugar del eje global Z. Esto corrige el lado del corte en curvas. La cabina y la vista hacia el andén conservan el entorno cerrado.

Verificación: método real updateShell del renderizador con estaciones y túneles a 0°, 90°, −90° y 180°, restitución al entrar en cabina y al desmarcar controles; entrada y cambios manuales de seguimiento; integración de controles con el motor. Sin inspección visual en navegador ni render WebGL.
