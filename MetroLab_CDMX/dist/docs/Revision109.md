# Revisión 109 · Corte automático por cámara

Andén fijo muestra estaciones y túneles completos. Seguir tren activa automáticamente el corte de ambos entornos. No se requiere marcar casillas: en estas dos cámaras se muestra el estado automático en su lugar. Las vistas de cabina y hacia el andén continúan cerradas. Las otras cámaras conservan los controles manuales.

Pruebas: métodos reales setCamera, updateShell y updateCamera con alternancia repetida entre andén fijo, seguimiento, cabina y vista al andén; comprobación de techo y pared en rutas con diferentes orientaciones; cámara fija permanece inmóvil al cambiar la posición del tren. Sin inspección visual en navegador ni render WebGL.
