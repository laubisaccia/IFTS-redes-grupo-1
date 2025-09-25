export const questionsAndAnswers = [
   {
    q: "1- ¿Qué es una VLAN?",
    a: `Una VLAN (Virtual Local Area Network) es una red lógica creada dentro de una misma infraestructura física.
Permite segmentar la red en grupos de dispositivos que se comunican entre sí como si estuvieran en una red independiente, aunque compartan el mismo switch.
De esta manera se controla el tráfico de datos y se evita que circule innecesariamente hacia equipos que no forman parte de ese grupo.`
  },
  {
    q: "2- ¿Qué es una VPN?",
    a: `Una VPN (Virtual Private Network) es una conexión segura que permite extender una red privada sobre una red pública, como Internet.
Permite que los dispositivos remotos se comuniquen con la red privada como si estuvieran conectados directamente a ella, manteniendo la integridad y confidencialidad de los datos transmitidos.
De esta manera se facilita el acceso remoto a recursos internos de la red, asegurando que la información viaje cifrada y sin exposición a terceros no autorizados.`
  },
  {
    q: "3- ¿Qué es una SAN?",
    a: `Una SAN (Storage Area Network) es una red especializada que conecta servidores con dispositivos de almacenamiento de datos de alta capacidad.
Permite que los servidores accedan a los datos de forma rápida y centralizada, como si fueran unidades locales, pero distribuidas en la red.
De esta manera se optimiza el rendimiento del almacenamiento, se facilita la gestión de grandes volúmenes de información y se garantiza disponibilidad y confiabilidad de los datos.`
  },
  {
    q: "4- Diferencias entre un Hub, Repetidor, Router y SWITCH. Explicar las diferencias.",
    a: `Repetidor: Es un dispositivo que amplifica y regenera señales para que puedan transmitirse a mayores distancias dentro de la misma red.

Hub: Es un dispositivo que conecta varios equipos dentro de una red local y envía los datos recibidos a todos los puertos, sin distinguir el destinatario.

Switch: Es un dispositivo que conecta múltiples equipos dentro de una red local y envía los datos únicamente al puerto correspondiente, identificando cada dispositivo mediante su dirección MAC.

Router: Es un dispositivo que interconecta distintas redes y determina la ruta más adecuada para enviar los datos desde la red de origen hasta la red de destino, manejando direcciones IP.`
  },
  {
    q: "5- ¿Qué es un protocolo de comunicaciones?",
    a: `Un protocolo de comunicaciones es un conjunto de reglas y normas que definen cómo los dispositivos de una red deben intercambiar información.
Establece procedimientos, formatos y secuencias para el envío y recepcion de datos, asegurando que los dispositivos se entiendan correctamente.
Así se permite la comunicación ordenada y confiable entre dos o más equipos dentro de la misma red o entre redes distintas.`
  },
  {
    q: "6- Explique TCP/IP y NetBios, resuma sus diferencias.",
    a: `TCP/IP: Es un conjunto de protocolos que permite la comunicación entre dispositivos en redes locales y en Internet. Divide los datos en paquetes, los envía por la red y los reensambla en el destino, asegurando la entrega correcta de la información.

NetBIOS: Es un protocolo que permite la comunicación y el intercambio de información entre equipos dentro de redes locales, identificando dispositivos por nombre.

TCP/IP se utiliza en redes grandes y en Internet, manejando direcciones IP y rutas entre redes, mientras que NetBIOS se limita principalmente a redes locales pequeñas y depende de nombres de equipos, no de direcciones IP.`
  },
  {
    q: "7- ¿Cómo está formado un paquete de datos en TCP/IP? ¿Qué es un “flag” en un paquete de TCP/IP?",
    a: `Un paquete TCP/IP está compuesto por dos partes principales: la cabecera (header), que contiene información de control como direcciones de origen y destino, número de secuencia y control de errores; y los datos (payload), que son la información que se quiere transmitir.
Un flag es un indicador dentro de la cabecera que señala condiciones especiales o acciones que deben realizarse, como iniciar o finalizar una conexión, o indicar prioridad de los datos.
Así los paquetes permiten que los datos se transmitan de forma ordenada, controlada y confiable entre dispositivos de la red.`
  },
  {
    q: "8- Defina la red según su geografía. Explicar distintas variantes.",
    a: `Las redes se clasifican según el área geográfica que abarcan:
LAN (Local Area Network): Red de alcance local, como oficinas o viviendas, con alta velocidad y costos bajos.
MAN (Metropolitan Area Network): Red que conecta varias LAN dentro de una ciudad o área metropolitana, utilizada por instituciones o proveedores de servicios.
WAN (Wide Area Network): Red que interconecta regiones, países o continentes, como Internet.
PAN (Personal Area Network): Red personal que conecta dispositivos de un mismo usuario, como teléfono y auriculares Bluetooth.
CAN (Campus Area Network): Red que conecta varias LAN dentro de un campus o recinto, como una universidad.
SAN (Storage Area Network): Red especializada para la conexión de servidores con dispositivos de almacenamiento.

La clasificación geográfica permite organizar, gestionar y dimensionar las redes según el área de cobertura y los recursos necesarios.`
  },
  {
    q: "9- Defina una red según su topología. Explicar distintas variantes.",
    a: `La topología de red se refiere a la forma en que los dispositivos están conectados entre sí dentro de la red.
Bus: Todos los dispositivos están conectados a un único cable principal; los datos circulan en ambas direcciones por ese cable.
Estrella: Todos los dispositivos se conectan a un nodo central (switch o hub), que administra el tráfico de datos.
Anillo: Los dispositivos están conectados en un circuito cerrado; los datos circulan pasando por cada nodo hasta llegar al destino.
Doble Anillo: Variante del anillo con dos rutas, aumentando la redundancia y confiabilidad.
Árbol: Conexión jerárquica de nodos, combinando estructuras de bus y estrella.
Malla: Cada dispositivo se conecta directamente con varios otros, aumentando la redundancia y resistencia a fallos.
T-Conexa y Mixta: Combinaciones de topologías anteriores para adaptarse a necesidades específicas de la red.

La topología influye en el rendimiento, la confiabilidad y la facilidad de administración de la red.`
  },
  {
    q: "10- Explicar el servicio de DHCP.",
    a: `El DHCP (Dynamic Host Configuration Protocol) es un servicio de red que asigna automáticamente direcciones IP y otros parámetros de configuración a los dispositivos que se conectan a la red.
Permite que los equipos obtengan su dirección IP, máscara de subred, puerta de enlace y servidores DNS sin intervención manual.
De esta manera se facilita la administración de la red y se evita conflictos de direcciones IP.`
  },
  {
    q: "11- Explicar el servicio de DNS.",
    a: `El DNS (Domain Name System) es un servicio que traduce nombres de dominio legibles por humanos en direcciones IP que utilizan los dispositivos para comunicarse en la red.
Permite que los usuarios accedan a sitios web y servicios sin recordar direcciones numéricas, simplificando la navegación y garantizando la correcta localización de los recursos de la red.`
  },
  {
    q: "12- Explicar las tecnologías Wireless, y sus estándares.",
    a: `Las tecnologías Wireless permiten la transmisión de datos sin cables, utilizando ondas de radio u otras señales electromagnéticas.
Se rigen por estándares que determinan velocidad, frecuencia y alcance de la conexión.
Así se proporciona conectividad flexible y movilidad a los dispositivos dentro de un área determinada.`
  },
  {
    q: "13- ¿Qué es un Proxy?",
    a: `Un Proxy es un servidor intermedio que recibe solicitudes de los usuarios y las reenvía hacia el destino correspondiente.
Permite filtrar contenido, mejorar el rendimiento mediante almacenamiento en caché y ocultar la identidad de los equipos clientes.
De esta manera se controla y optimiza el acceso a recursos externos y se protege la red interna.`
  },
  {
    q: "14- Explicar el protocolo Spanning tree.",
    a: `El Spanning Tree Protocol (STP) es un protocolo que evita bucles en redes con topologías de malla o estrella conectadas por múltiples switches.
Detecta y bloquea rutas redundantes, dejando solo caminos activos hacia cada dispositivo.
De esta manera se mantiene la conectividad sin causar colisiones ni loops de datos.`
  },
  {
    q: "15- Explicar el protocolo de comunicaciones OSPF.",
    a: `El OSPF (Open Shortest Path First) es un protocolo de enrutamiento interno que permite a los routers intercambiar información sobre rutas dentro de una misma red autónoma.
Calcula la ruta más corta y eficiente hacia cada destino. De esta manera se optimiza el encaminamiento de paquetes y se actualizan dinámicamente las rutas ante cambios en la red.`
  },
  {
    q: "16- Explicar el protocolo ARP.",
    a: `El ARP (Address Resolution Protocol) es un protocolo que traduce direcciones IP a direcciones MAC en una red local.
Permite que los dispositivos encuentren la dirección física de un equipo a partir de su dirección lógica (IP).
De esta manera se facilita la comunicación dentro de la red LAN y se garantiza que los datos lleguen al dispositivo correcto.`
  },
  {
    q: "17- ¿Qué es un Firewall?",
    a: `Un Firewall es un sistema de seguridad que controla el tráfico de datos entre redes, permitiendo o bloqueando paquetes según reglas predefinidas.
Protege la red interna de accesos no autorizados, ataques externos y transmisión de información no deseada, manteniendo la integridad, confidencialidad y disponibilidad de recursos de la red.`
  },
  {
    q: "18- ¿Qué es una DMZ?",
    a: `Una DMZ (Demilitarized Zone) es una zona de la red que se encuentra entre la red interna y la red pública, donde se ubican servicios accesibles desde Internet, como servidores web o correo.
Permite que estos servicios sean alcanzables externamente sin exponer la red interna.
De esta manera se protege la infraestructura interna y se controla el acceso a los servicios públicos.`
  },
  {
    q: "19- ¿Qué es un Gateway?",
    a: `Un Gateway es un dispositivo que conecta redes diferentes y permite la comunicación entre ellas, traduciendo protocolos o formatos si es necesario.
Actúa como punto de entrada y salida de la red, dirigiendo el tráfico hacia la red de destino.
De esta manera se facilita la interconexión entre redes heterogéneas y se garantiza la comunicación correcta de los datos.`
  },
  {
    q: "20- Según Microsoft, ¿qué significa NBL?",
    a: `Según Microsoft, NBL (Network Buffer List) es una estructura de datos utilizada por el sistema operativo para manejar paquetes de red en memoria.
Permite almacenar y organizar los datos recibidos o por enviar dentro del stack de red del sistema.
Se optimiza el procesamiento de paquetes y se asegura la correcta transmisión y recepción en el sistema operativo.`
  },
  {
    q: "21- Tipos de enlace: MPLS, LAN to LAN, microonda, VSAT...",
    a: `a. Explicación de cada tipo de enlace:
MPLS (Multiprotocol Label Switching): Enlace de alta eficiencia que dirige paquetes según etiquetas en lugar de direcciones IP, optimizando velocidad y confiabilidad en redes corporativas.
LAN to LAN: Conexión directa entre dos redes locales mediante Internet o enlaces dedicados, permite comunicación segura y constante entre oficinas.
Microonda: Transmisión de datos mediante ondas de radio en línea de vista; se utiliza para distancias medias y requiere antenas en puntos elevados.
VSAT (Very Small Aperture Terminal): Enlace satelital que permite comunicación en zonas remotas mediante antenas pequeñas, aunque con mayor latencia.

b. enlaces adicionales:
Fibra óptica: Transmisión de datos mediante luz, alta velocidad y gran capacidad de distancia.
Coaxial: Cableado con conductor central y malla de protección, usado para internet y televisión.

c. Ranking de enlaces (1 = mejor, 6 = peor):
Económico: LAN to LAN, Microonda, VSAT, MPLS, Fibra, Coaxial
Performance: Fibra, MPLS, LAN to LAN, Microonda, Coaxial, VSAT
Mayor capacidad: Fibra, MPLS, LAN to LAN, Microonda, VSAT, Coaxial
Mejor configuración/restricciones: MPLS, Fibra, LAN to LAN, Microonda, Coaxial, VSAT
Soporte a mayor distancia: VSAT, Microonda, MPLS, Fibra, LAN to LAN, Coaxial
Menor esfuerzo de configuración: LAN to LAN, MPLS, VSAT, Microonda, Fibra, Coaxial

d. Tipo de enlace recomendado por escenario:
Call centers con data center: MPLS (alta confiabilidad y rendimiento).
Pozos petroleros 15 minutos/día: VSAT (remoto y temporal).
Dos edificios enfrentados en la misma calle: Microonda (distancia corta y directa).`
  },
  {
    q: "22- Describir la tecnología LTE.",
    a: `LTE (Long Term Evolution) es una tecnología de comunicación móvil de cuarta generación (4G) que proporciona alta velocidad de datos y baja latencia.
Permite transmisión eficiente de voz, video y datos en redes móviles, soportando movilidad y gran cantidad de usuarios simultáneos.
Mejora la experiencia de navegación y la conectividad móvil en comparación con tecnologías anteriores (3G).`
  },
  {
    q: "23- Explique la solución de Microsoft Teams.",
    a: `Microsoft Teams es una plataforma de colaboración que integra chat, videollamadas, almacenamiento de archivos y herramientas de productividad.
Permite la comunicación y coordinación de equipos en tiempo real, integrándose con aplicaciones de Office 365 y servicios en la nube.
De esta manera centraliza el trabajo colaborativo, facilita reuniones virtuales y el intercambio de información dentro de organizaciones.`
  },
  {
    q: "24- ¿Qué significa aplicar calidad en un enlace MPLS?",
    a: `Aplicar calidad de servicio en un enlace MPLS significa priorizar el tráfico según su tipo (voz, video, datos críticos).
Permite que los paquetes importantes lleguen a destino con menor retardo, pérdida mínima y ancho de banda garantizado. Se asegura el rendimiento constante y predecible para aplicaciones críticas.`
  },
  {
  q: "25- ¿Qué diferencias puede encontrar entre una conexión Coaxial, UTP o Fibra?",
  a: "Coaxial: Conductor central con malla de protección; buena para televisión e internet, velocidad y distancia medias.\nUTP (Unshielded Twisted Pair): Cable de cobre trenzado, económico y fácil de instalar, usado en LANs; limitado en distancia y susceptible a interferencias.\nFibra: Transmisión por luz; muy alta velocidad, gran capacidad y alcance; más costosa y frágil que los anteriores.",
},
{
  q: "26- Según Cisco, ¿qué significa CCENT, CCNA y CCNP? Descripción breve del Track Routing & Switching y de algún otro a elección (ej. Wireless, Security, Cloud, etc).",
  a: "CCENT (Cisco Certified Entry Networking Technician): Nivel inicial en redes, cubre fundamentos básicos de routing, switching y seguridad.\n\nCCNA (Cisco Certified Network Associate): Nivel intermedio; profundiza en configuración de routers, switches y protocolos de red.\n\nCCNP (Cisco Certified Network Professional): Nivel avanzado; especialización en routing, switching y otras áreas como seguridad, wireless o cloud.\n\nTracks de especialización: Routing & Switching, Security, Wireless, Cloud, etc., cada uno enfocado en áreas específicas del networking profesional.",
},
{
  q: "27- Explique el modelo OSI.",
  a: "El modelo OSI (Open Systems Interconnection) es un marco de referencia que divide la comunicación en redes en 7 capas:\nFísica: transmisión de bits.\nEnlace de datos: detección y corrección de errores.\nRed: direccionamiento y encaminamiento.\nTransporte: entrega confiable de datos.\nSesión: administración de conexiones.\nPresentación: traducción de formatos y cifrado.\nAplicación: interfaz con el usuario y aplicaciones.",
},
{
  q: "28- Explicar el estándar IEEE 802.3 regula la red. Cómo se implementa, ventajas y desventajas.",
  a: "El estándar IEEE 802.3 regula redes Ethernet cableadas, definiendo velocidades, tipos de cable y protocolos de acceso al medio.\nSe implementa usando switches, NICs y cables UTP o fibra, permitiendo transmisión de datos confiable y eficiente.\nVentajas: alta compatibilidad, fácil escalabilidad, bajo costo.\nDesventajas: limitada movilidad y alcance en comparación con redes inalámbricas.",
},
{
  q: "29- Explicar el estándar IEEE 802.4 regula la red.",
  a: "El estándar IEEE 802.4 regula redes Token Bus, donde los dispositivos transmiten datos siguiendo un token que circula por el bus.\nSe implementa en entornos industriales y de automatización donde se requiere control de acceso al medio.\nVentajas: control de colisiones y transmisión ordenada.\nDesventajas: complejidad en la implementación y menor flexibilidad frente a Ethernet.",
},
{
  q: "30- ¿Qué protocolos se usan para enviar y recibir correo?",
  a: "Enviar correo: SMTP (Simple Mail Transfer Protocol).\nRecibir correo: POP3 (Post Office Protocol) e IMAP (Internet Message Access Protocol).",
},
{
  q: "31- ¿Qué protocolo puede usarse para leer correo recibido?",
  a: "POP3: Descarga los correos al dispositivo y generalmente los elimina del servidor.\nIMAP: Mantiene los correos en el servidor y permite acceder desde múltiples dispositivos, sincronizando cambios.",
},
{
  q: "32- Diferencias entre IPv4 e IPv6",
  a: "IPv4: Direcciones de 32 bits, permite 4 mil millones de direcciones únicas; usa notación decimal con puntos.\nIPv6: Direcciones de 128 bits, permite muchas más direcciones; usa notación hexadecimal con dos puntos.\nDiferencias: IPv6 soporta más dispositivos, simplifica el enrutamiento y ofrece mejoras en seguridad y autoconfiguración.",
},
{
  q: "33- (Individual para cada integrante del grupo) ¿Qué experiencia tienen en redes?",
  a: "Laura: no tengo ninguna experiencia en redes.\n\nGonzalo: sin experiencia en redes.\n\nSantiago: sin experiencia en redes.\n\nSelena: sin experiencia en redes.",
},
];