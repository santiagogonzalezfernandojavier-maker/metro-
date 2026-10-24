# Revisión 99 · Vía neumática, locales eléctricos y señalización

Referencias aportadas: image(20261015-071004).png (vía en túnel con identificación de barra guía, pista y riel de seguridad); image(20261015-071018).png (señal luminosa exterior); image(20261015-071132).png (cartel amarillo PELIGRO / NO PASE y señal a la salida). Copias originales preservadas en assets-source/referencias99 del proyecto fuente.

## Aplicación visual
- Vía continua de ambas líneas con dos pistas de rodamiento por vía, dos barras guía, dos rieles de seguridad, durmientes, fijaciones y balasto procedural. Las vías anteriores se retiran al cargar cada estación para evitar geometría superpuesta.
- Cuatro carteles amarillos No pase por estación: uno en cada extremo de cada andén lateral. Dos señales luminosas de salida por estación, una por sentido; lentes, viseras, placa y soporte modelados.
- Señales visuales didácticas: rojo por ocupación del tramo de salida del mismo sentido, emergencia, falta de alimentación o fin del trazado; verde si no se presenta ninguno de esos supuestos. El lente ámbar se modela sin atribuirle un reglamento no documentado. No implementan enclavamientos ni sustituyen el ATP; no se inventaron cambios de vía.

## Locales eléctricos
- Se conservan los 40 locales SAF ilustrativos de L1. La fuente de inventario y las limitaciones de la revisión 94 siguen aplicando.
- L8 incorpora un local ilustrativo asociado a cada una de sus 19 estaciones. Este número es una decisión de visualización solicitada, NO un inventario oficial de subestaciones ni de rectificadoras. El tipo real, número y ubicación están sin confirmar.
- En Coyuya, Iztacalco, Apatlaco, Aculco y Constitución de 1917, el local se coloca en el exterior lateral, con plataforma de apoyo y cubierta. En las otras estaciones de L8 se sitúa alrededor del centro de la interestación. Son posiciones aproximadas, no georreferenciadas.
- La visibilidad usa la distancia longitudinal del recorrido, para no ocultar locales incorrectamente al curvar el trazado.

## Calidad y límites
Las medidas de vía, separación, herrajes y posiciones de señales son aproximadas desde fotografías. No se certifican gálibos, radios, peraltes, rasantes ni señalización real. La base se representa como balasto por referencia, sin afirmar que todos los tramos reales tengan esa misma solución constructiva.
Las vías se dibujan por sectores y se ocultan a distancia para evitar renderizar la línea completa cada fotograma. Se conservan las correcciones de cámara de la revisión 98.
Pruebas: geometría finita, locales exteriores y huecos, visibilidad en coordenadas del recorrido, estados rojo/verde, retiro de vías anteriores en 39 GLB y preservación de separadores. La comprobación visual en navegador WebGL sigue pendiente.
