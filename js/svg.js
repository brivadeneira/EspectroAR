//CONSTANTES
		var w = 1200; //ancho
		var h = 15250; //alto
		var izq= 130; //margen izquiero svg
	
d3.json("json/espectro.json", function(error, dataset) {

	//Set N (cantidad de atribuciones a la misma banda), P (posición en banda) y Color (según Modalidad)
	var len = dataset.length;
	for (var i = 0; i < len; i++) {
		switch(dataset[i].Modalidad){
			case "Radionavegación":
	 			dataset[i].Color="blue"
			break;
			case "Radiolocalización":
				dataset[i].Color="red"
			break;
			case "Móvil Marítimo":
				dataset[i].Color="green"
			break;
			case "Fijo":
				dataset[i].Color="purple"
			break;
			case "No atribuída":
				dataset[i].Color="black"
			break;
			default:
				dataset[i].Color="orange"
		}

	}


	//ESCALA
		var scale = d3.scale.linear()
			      .domain([d3.min(dataset, function(d) { return (d.Frecuencia_Hasta-d.Frecuencia_Desde); }), d3.max(dataset, function(d) { return (d.Frecuencia_Hasta-d.Frecuencia_Desde); })])
			      .range([30,70]); 
	
	var i=0; var j=1; var N=1; h_ant=12;
	while (i < len){
		dataset[i].P=0; 
		while ((i+j)<len && dataset[i].Rango==dataset[(i+j)].Rango && dataset[i].Frecuencia_Desde==dataset[(i+j)].Frecuencia_Desde && dataset[i].Frecuencia_Hasta==dataset[i+j].Frecuencia_Hasta) {
			dataset[i+j].P=dataset[i+j-1].P+1;
			N=N+1; j=j+1;
		}
		for (var k=i; k<i+j; k++){
			dataset[k].N=N;
			dataset[k].h_ant=h_ant;
		}
		h_ant=h_ant+scale(dataset[i].Frecuencia_Hasta-dataset[i].Frecuencia_Desde);
		i=i+j;
		N=1; j=1;
	}
	console.log(h_ant+scale(dataset[len-1].Frecuencia_Hasta-dataset[len-1].Frecuencia_Desde));

	//SVG
		var svg = d3.select("body")
			    .append("svg")
			    .attr("width", w)
			    .attr("height", h);
	//BARRAS
		svg.selectAll("rect")
		   .data(dataset)
		   .enter()
		   .append("rect")
		   .attr("x", function(d){
				return (((w/2)/d.N)*d.P+izq);
			      })
		   .attr("y",  function(d) {
				return d.h_ant;
		   })
		   .attr("width", function(d) {
					return ((w/2)/d.N);
				  })
		   .attr("height", function(d) {
		   		return scale(d.Frecuencia_Hasta-d.Frecuencia_Desde);
		   })
		   .attr("stroke", "white")
		   .attr("stroke-width", 1)
		   .attr("fill", function(d){
					return d.Color;
				});
	//TEXTO
		//Atribución
		svg.selectAll("atribucion")
		   .data(dataset)
		   .enter()
		   .append("text")
		   .text(function(d) {
		   		return d.Modalidad;
		   })
		   .attr("x", function(d) {
					return (((w/2)/d.N)*d.P+izq+1);
				  })
		   .attr("y",  function(d) {
				return d.h_ant+0.6*scale(d.Frecuencia_Hasta-d.Frecuencia_Desde);
		   })
		   .attr("font-family", "sans-serif")
		   .attr("font-size", function(d) {
				return Math.min((45/d.N),0.5*scale(d.Frecuencia_Hasta-d.Frecuencia_Desde));
		   })
		   .attr("fill", "white");
		
		//Eje frecuencia
		svg.selectAll("frec")
		   .data(dataset)
		   .enter()
		   .append("text")
		   .text(function(d) {
		   		if (d.P==0) {
					return (d.Frecuencia_Desde+" "+d.Unidad);
				}
		   })
		   .attr("x", 0)
		   .attr("y", function(d) {
				return (d.h_ant);
		   })
		   .attr("font-family", "sans-serif")
		   .attr("font-size", 15)
		   .attr("fill", "white");
		//Lineas
		svg.selectAll("lineas")
		   .data(dataset)
		   .enter()
		   .append("line")
		   .attr("x1", 0)
		   .attr("y1",  function(d) {
				if(d.P==0){
					return (d.h_ant);
				}
		   })
		   .attr("x2", izq)
		   .attr("y2",  function(d) {
				if(d.P==0){
					return (d.h_ant);
				}
		   })
		   .attr("stroke-width",1)	
		   .attr("stroke", "white");

});
