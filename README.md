# Mapa del espectro radioeléctrico en Argentina
*Versión digital del mapa de las atribuciones del espectro radioeléctrico en Argentina.* Surge de la necesidad de disponer de material de consulta de Telecomunicaciones.

A partir de datos fuente referentes a las atribuciones del espectro radioeléctrico provistas por [ENACOM](https://www.enacom.gob.ar/) en su sitio web, se generan gráficos vectoriales escalables que conforman el mapa, y así una representación visual de consulta rápida.

## Capturas
![](https://github.com/brivadeneira/EspectroAR.github.io/blob/master/img/CapturaEspectro.png?raw=true)

## Tecnología empleada

Los gráficos que conforman el mapa son del tipo [SVG](https://es.wikipedia.org/wiki/Scalable_Vector_Graphics), instanciado como un objeto en una estructura HTML, mediante la librería [D3](https://d3js.org/) orientada a visualización de datos.

## Tareas a realizar

- [x] Conformar mapa del espectro con barras etiquetadas de dimensiones proporcionales a la banda de frecuencia de la atribución que representan, así como el correspondiente eje de frecuencias.
- [x] Clasificar por color diferentes atribuciones.
- [ ] Corregir campo de frecuencias de datos fuente, mediante conversión de unidades según sus equivalencias en múltiplos de Hz a fin de que el mismo sea lo más conciso posible, según recomendación de nomenclatura de bandas de frecuencias de la UIT.
- [ ] Añadir comportamiento dinámico a las barras: zoom al apoyar el cursor, ventana emergente con información del servicio correspondiente a la banda en cuestión.
- [ ] Adosar al sitio material de interes de Telecomunicaciones.

## Licencia

```
    This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

    This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

```