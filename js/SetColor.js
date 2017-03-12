function SetColor(dataset, len){
   for (var i = 0; i < len; i++) {
	switch(dataset[i].Modalidad){
		case "Aficionados":
			dataset[i].Color="red"
		break;
		case "Aficionados por Satélite":
			dataset[i].Color="orange"
		break;
		case "Atribución Condicionada (en la Rep Argentina)":
			dataset[i].Color="grey"
		break;
		case "Ayudas a la Meteorología":
			dataset[i].Color="lawngreen"
		break;
		case "Entre Satélites":
			dataset[i].Color="lightgray"
		break;
		case "Exploración de la Tierra por Satélite":
			dataset[i].Color="silver"
		break;
		case "Fijo":
			dataset[i].Color="orange"
		break;
		case "Fijo por Satélite":
			dataset[i].Color="darkorange"
		break;
		case "Frecuencias Patrón y Señales Horarias":
			dataset[i].Color="skyblue"
		break;
		case "Investigación Espacial":
 			dataset[i].Color="purple"
		break;
		case "Meteorología por Satélite":
			dataset[i].Color="greenyellow"
		break;
		case "Móvil":
			dataset[i].Color="green"
		break;
		case "Móvil Aeronáutico":
			dataset[i].Color="sage"
		break;
		case "Móvil Aeronáutico (R)":
			dataset[i].Color="sage"
		break;
		case "Móvil Aeronáutico OR":
			dataset[i].Color="sage"
		break;
		case "Móvil Marítimo":
			dataset[i].Color="blue"
		break;
		case "Móvil por Satélite":
			dataset[i].Color="steelblue"
		break;
		case "Móvil Terrestre":
			dataset[i].Color="sienna"
		break;
		case "No atribuída":
			dataset[i].Color="black"
		break;
		case "Operaciones Espaciales":
			dataset[i].Color="darkgray"
		break;
		case "Radioastronomía":
			dataset[i].Color="lightgrey"
		break;
		case "Radiodifusión":
			dataset[i].Color="gold"
		break;
		case "Radiolocalización":
			dataset[i].Color="cadetblue"
		break;
		default:
			dataset[i].Color="orange"
	}
   }
}
