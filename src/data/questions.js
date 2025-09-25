export const questionsAndAnswers = [
  {
    q: "1- ¿Qué es una VLAN?",
    a:
      "Una VLAN (Virtual LAN) es una red lógica dentro de una red física que permite segmentar el tráfico por grupos lógicos, mejorando seguridad y reduciendo broadcast domains. Los switches administrables etiquetan tráfico (802.1Q) para separar VLANs sobre la misma infraestructura física.",
  },
  {
    q: "2- ¿Qué es una VPN?",
    a:
      "Una VPN (Virtual Private Network) crea un túnel seguro y cifrado sobre una red insegura (como Internet) para conectar redes o usuarios remotos como si estuvieran en la misma red privada. Se usan protocolos como IPsec, OpenVPN o WireGuard.",
  },
  {
    q: "3- ¿Qué es una SAN?",
    a:
      "SAN (Storage Area Network) es una red dedicada de alto rendimiento para conectar servidores a dispositivos de almacenamiento (arrays). Proporciona acceso rápido a bloques de datos y separación del tráfico de red normal.",
  },
  {
    q:
      "4- Diferencias entre un Hub, Repetidor, Router y SWITCH. Explicar las diferencias.",
    a:
      "Hub: dispositivo simple que repite señales a todos los puertos (nivel físico) — no inteligente. Repetidor: amplifica/recupera la señal para extender distancia (nivel físico). Switch: dispositivo con conmutación por MAC que envía tramas solo al puerto destino (nivel de enlace), reduce colisiones. Router: conecta redes diferentes y encaminan paquetes entre subredes basados en IP (nivel de red), maneja rutas y NAT/firewall básico.",
  },
  {
    q: "5- ¿Qué es un protocolo de comunicaciones?",
    a:
      "Conjunto de reglas y formatos que definen cómo se comunican dispositivos en una red: mensajes, secuencias, manejo de errores y sincronización (ej. TCP, HTTP, IP).",
  },
  {
    q: "6- Explique TCP/IP y NetBIOS, resuma sus diferencias.",
    a:
      "TCP/IP: suite de protocolos para comunicación en redes (IP para direccionamiento, TCP/UDP para transporte). NetBIOS: API y servicio de nombres y sesiones históricamente usado en redes Microsoft para compartir recursos; puede funcionar sobre TCP/IP (NetBIOS over TCP/IP). Diferencias: TCP/IP es la base universal de Internet; NetBIOS es una capa de compatibilidad/servicio orientada a nombres y sesiones en entornos Windows (menos escalable y más antiguo).",
  },
  {
    q: "7- ¿Cómo está formado un paquete de datos en TCP/IP? ¿Qué es un flag en un paquete de TCP/IP?",
    a:
      "Paquete TCP/IP: capa de enlace (trama), capa IP (cabecera IP + payload), capa transporte (TCP/UDP con su cabecera). En TCP la cabecera contiene puertos, número de secuencia, ack, ventana y flags. Un 'flag' es un bit que indica control (SYN, ACK, FIN, RST, PSH, URG) usado para gestionar conexiones y control de flujo.",
  },
  {
    q: "8- Defina la red según su geografía. Explicar distintas variantes.",
    a:
      "Clasificación por alcance geográfico: PAN (Personal Area Network) — pocos metros; LAN (Local Area Network) — edificio; MAN (Metropolitan) — ciudad; WAN (Wide Area Network) — regiones/países; CAN (Campus) — campus universitario. Varían en latencia, ancho de banda y tecnologías usadas.",
  },
  {
    q: "9- Defina una red según su topología. Explicar distintas variantes.",
    a:
      "Topologías lógicas/físicas: Estrella (todos conectados a un switch/router), Bus (segmento compartido), Anillo (cada nodo a dos vecinos), Malla (enlaces redundantes entre nodos). Cada una afecta redundancia, fallos y complejidad de cableado.",
  },
  {
    q: "10- Explicar el servicio de DHCP.",
    a:
      "DHCP (Dynamic Host Configuration Protocol) asigna automáticamente IP, máscara, gateway y DNS a clientes cuando se conectan, simplificando administración y evitando conflictos de IP estáticas.",
  },
  {
    q: "11- Explicar el servicio de DNS.",
    a:
      "DNS (Domain Name System) traduce nombres de host legibles (ej. ejemplo.com) a direcciones IP. Es una jerarquía de servidores autoritativos, caches y resolutores que permiten localizar servicios en Internet.",
  },
  {
    q: "12- Explicar las tecnologías Wireless, y sus estándares.",
    a:
      "Wireless: redes sin cable, principalmente Wi-Fi (IEEE 802.11 family). Estándares comunes: 802.11a/b/g/n/ac/ax (Wi-Fi 6) con distintas bandas (2.4GHz/5GHz/6GHz), velocidades y alcance. También Bluetooth (PAN), LTE/4G/5G (celular) para movilidad y WAN inalámbrica.",
  },
  {
    q: "13- ¿Qué es un Proxy?",
    a:
      "Proxy: intermediario entre cliente y destino que reenvía solicitudes (puede cachear, filtrar, registrar o anonimizar tráfico). Hay proxies HTTP, SOCKS y proxies inversos (reverse proxy) para balanceo/seguridad.",
  },
  {
    q: "14- Explicar el protocolo Spanning Tree.",
    a:
      "Spanning Tree Protocol (STP) previene loops en redes con switches creando una topología lógica sin ciclos. Algunos enlaces se bloquean para evitar bucles y se activa redundancia en caso de fallo. Variantes: RSTP, MSTP.",
  },
  {
    q: "15- Explicar el protocolo de comunicaciones OSPF.",
    a:
      "OSPF (Open Shortest Path First) es un protocolo de enrutamiento interior (IGP) link-state usado en redes IP. Distribuye información de estado de enlaces, calcula rutas con algoritmo SPF (Dijkstra), soporta áreas, convergencia rápida y métricas basadas en costo.",
  },
  {
    q: "16- Explicar el protocolo ARP.",
    a:
      "ARP (Address Resolution Protocol) traduce direcciones IP a direcciones MAC en una red local. Un host envía un ARP request broadcast y el dueño de la IP responde con ARP reply que contiene la MAC.",
  },
  {
    q: "17- ¿Qué es un Firewall?",
    a:
      "Firewall es un sistema que controla tráfico entre redes según reglas de seguridad (permitir/bloquear puertos, IPs, protocolos). Puede ser basado en host, network, stateful (inspecciona sesiones) o aplicación (WAF).",
  },
  {
    q: "18- ¿Qué es una DMZ?",
    a:
      "DMZ (Demilitarized Zone) es una zona de red aislada donde se colocan servidores accesibles desde Internet (web, correo) para proteger la red interna; normalmente hay reglas estrictas entre DMZ y LAN.",
  },
  {
    q: "19- ¿Qué es un Gateway?",
    a:
      "Gateway es un punto que conecta dos redes diferentes (a menudo con diferentes protocolos). En redes comunes, el 'default gateway' es el router que conecta la LAN a otras redes/internet.",
  },
  {
    q: "20- Según Microsoft, ¿qué significa NBL?",
    a:
      "NBL suele referirse a 'Network Basic Input/Output System' (NetBIOS) en contextos antiguos; sin embargo Microsoft también usa siglas de diagnostico y librerías internas. En redes académicas, confirmar la sigla en el material de Microsoft específico.",
  },
  {
    q:
      "21- Tipos de enlace: MPLS, LAN to LAN, microonda, VSAT. a. Explique cada uno. b. Agregue dos más. c. Ranking (1 mejor a 6 peor) por criterios. d. Elección por escenarios.",
    a:
      "a) MPLS: backbone con etiquetas para priorizar/encaminar tráfico; LAN-to-LAN: conexión punto a punto (IPsec VPN por ejemplo); Microonda: enlace inalámbrico punto a punto para enlaces urbanos; VSAT: satelital para zonas remotas. b) Agregar: Fibra oscura/directa y LTE/4G/5G como enlace celular. c) Ranking (ej. performance): 1-Fibra, 2-MPLS, 3-Microonda, 4-LAN-to-LAN VPN sobre Internet, 5-LTE/4G, 6-VSAT (por latency/costo). Por económico puede cambiar (LTE y VSAT varían). d) Escenarios: 1) Call centers ↦ MPLS o VPN sobre internet con QoS/MPLS si hay presupuesto; 2) Pozos petroleros 15 min/día ↦ VSAT o LTE (dependiendo cobertura) por bajo uso; 3) Dos edificios enfrentados ↦ Microonda o fibra directa si se puede tender cable.",
  },
  {
    q: "22- Describir la tecnología LTE.",
    a:
      "LTE es tecnología móvil de banda ancha 4G con alta velocidad y baja latencia comparada con 3G, emplea OFDMA y MIMO, y ofrece data, voz via VoLTE y gestión de movilidad entre celdas.",
  },
  {
    q: "23- Explique la solución de Microsoft Teams.",
    a:
      "Microsoft Teams es plataforma de colaboración que integra chat, videoconferencia, llamadas VoIP, colaboración en archivos (SharePoint/OneDrive) y aplicaciones. Usa servicios en la nube (Azure), ofrece seguridad empresarial, integración con Active Directory y soporte de PSTN/integración telefónica.",
  },
  {
    q: "24- ¿Qué significa aplicar calidad en un enlace MPLS?",
    a:
      "Aplicar calidad: usar QoS (clases de servicio), SLAs (latencia, jitter, loss), clasificación/colocación de tráfico por etiquetas MPLS para priorizar voz/tiempo real y garantizar niveles de servicio.",
  },
  {
    q: "25- ¿Qué diferencias entre Coaxial, UTP o Fibra?",
    a:
      "Coaxial: cable blindado para RF/banda amplia, moderate bandwidth; UTP (cable par trenzado): barato, fácil, usado en LAN (Cat5e/Cat6), limitado en distancia a 100m; Fibra óptica: mayor ancho de banda, larga distancia, inmune a interferencias, más caro y requiere equipos específicos.",
  },
  {
    q:
      "26- Según Cisco: ¿qué significa CCENT, CCNA y CCNP? Breve descripción de Track Routing & Switching y otro a elección.",
    a:
      "CCENT (obsoleto): entry-level; CCNA: certificación de nivel asociado en networking (fundamentos, switching, routing); CCNP: profesional avanzado (diseño/implementación). Routing & Switching (ahora parte de Enterprise Track) cubre protocolos, diseño y troubleshooting. Otros tracks: Security, Wireless, Cloud.",
  },
  {
    q: "27- Explique el modelo OSI.",
    a:
      "Modelo OSI: 7 capas para conceptualizar comunicación: 7-Aplicación, 6-Presentación, 5-Sesión, 4-Transporte (TCP/UDP), 3-Red (IP), 2-Enlace (Ethernet/ARP), 1-Física (cableado/modulación). Cada capa ofrece servicios a la superior.",
  },
  {
    q: "28- Explicar estándar IEEE 802.3 (Ethernet). Implementación, ventajas y desventajas.",
    a:
      "IEEE 802.3 define Ethernet (capa física + enlace), especifica velocidades, framing, CSMA/CD (históricamente). Ventajas: ubiquidad, rendimiento, interoperabilidad. Desventajas: limitaciones de distancia en cobre, requiere switches/routers para segmentación y problemas de broadcast sin segmentación.",
  },
  {
    q: "29- Explicar el estándar IEEE 802.4.",
    a:
      "IEEE 802.4 fue el estándar para Token Bus (metodo de acceso determinístico), usado en algunas redes industriales. Hoy está obsoleto comparado con Ethernet y otras tecnologías.",
  },
  {
    q: "30- ¿Qué protocolos se usan para enviar y recibir correo?",
    a:
      "Enviar: SMTP (Simple Mail Transfer Protocol). Recepción/entrega local: POP3 o IMAP para acceder correos desde el cliente; además MTA entre servidores usa SMTP.",
  },
  {
    q: "31- ¿Qué protocolo puede usarse para leer correo recibido?",
    a:
      "POP3 (descarga simple) y IMAP (sincronización y manejo en servidor). IMAP es preferido para múltiples dispositivos.",
  },
  {
    q: "32- Diferencias entre IPv4 e IPv6",
    a:
      "IPv4: direcciones 32-bit (escasez), NAT común; IPv6: 128-bit (muchas direcciones), autoconfiguración, mejor soporte para QoS y seguridad integrada (IPsec opcional). Formato, encabezados y manejo de broadcast/multicast difieren.",
  },
  {
    q: "33- Experiencia individual en redes (pregunta abierta para cada integrante).",
    a:
      "Respuesta abierta: cada integrante debe detallar experiencia práctica (configuración de routers caseros, tareas en el trabajo, proyectos de redes, manejo de Wi-Fi y dispositivos, o indicar no experiencia).",
  },
];