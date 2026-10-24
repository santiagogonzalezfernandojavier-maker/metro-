# Tracción y cámaras 77

Mandos sencillos aplican tracción real al modelo dinámico (25 % por pulsación, deslizador de 0 a 100 %) y liberan el freno de servicio. Frenar quita tracción y aumenta el freno 25 %; Inercia quita ambos; Detener aplica 100 % de freno. No sustituyen estas órdenes por una consigna de velocidad. Los límites didácticos de 80/60 km/h permanecen.

Una orden válida de tracción reanuda la simulación pausada tanto en Sencillos como en Avanzados. No libera una emergencia, puertas abiertas ni falta de alimentación. El reconocimiento del aviso sintético no aplica freno por tiempo en vigilancia asistida. La asistencia ATO sigue siendo opcional en Avanzados.

Cámaras completas junto a la vista 3D: estación, andén fijo, seguir tren, cabina, mirar andén e interior. La cámara Cabina permanece disponible en todos los modos. La cabina sigue al tren; el contador de desplazamiento permite verificar movimiento aunque el convoy no cambie de posición en pantalla.

La cadena de fotogramas se agenda antes de actualizar los paneles para evitar que un error de dibujo detenga definitivamente el avance. Pruebas usan el setup y bucle real de app.js, no sólo llamadas directas al motor.
