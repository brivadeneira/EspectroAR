//CONSTANTES
function () {
	var w = 1200; //ancho
	var h = 11000; //alto
	var izq= 80; //margen izquiero svg
	d3.json("json/espectro.json", function(dataset) {
		var len = dataset.length;
	}		
	return(w, h, izq, len);
}
