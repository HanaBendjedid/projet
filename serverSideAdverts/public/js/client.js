var page = "/add_advert";

function displayDivInfo(text){
    if(text){
        //Détection du navigateur
        is_ie = (navigator.userAgent.toLowerCase().indexOf("msie") != -1) && (navigator.userAgent.toLowerCase().indexOf("opera") == -1);
         
        //Création d'une div provisoire
        var divInfo = document.createElement('div');
        divInfo.style.position = 'absolute';
        document.onmousemove = function(e){
            x = (!is_ie ? e.pageX-window.pageXOffset : event.x+document.body.scrollLeft);
            y = (!is_ie ? e.pageY-window.pageYOffset : event.y+document.body.scrollTop);
            divInfo.style.left = x+30+'px';
            divInfo.style.top = y+200+'px';
            divInfo.style.color = 'red';
//            divInfo.style.background = 'url(a.jpg)';

        }
        divInfo.id = 'divInfo';
        divInfo.innerHTML = text;
        document.body.appendChild(divInfo);
    }
    else{
        document.onmousemove = '';
        document.body.removeChild(document.getElementById('divInfo'));
    }
}

function DessinV() {

	var screen_width = 1000, screen_height = 525;
	var svg = d3.select('#svg1').append("svg").attr("width", screen_width).attr("height", screen_height);

	$.getJSON('data/eure.json', function(attributes) {

		var buildings, totalArea, naturals, amenities, roads, attributes;

		buildings = _.where(attributes, {'building':true}).map(shape.createBuilding);
	
		var a = svg.selectAll('.building').data(buildings).enter().append("svg:a").classed("item", 1).on("click", function(d, i) {

					console.log(d.getId());
					$("#id_building").attr("value",d.getId());
					console.log($("#id_building").val());
					

				});   
		 a.append("svg:path").classed("building", 1).attr("id", function(d, i) {
						return d.getId();
					}).attr("d", function(d, i) {
				return d.toSVGPath();
			   }).on("mouseover", function(d, i){
				displayDivInfo('Building : id = '+d.getId());   			
			   }).on("mouseout", function(d, i){
				displayDivInfo('');
   		 });
          
               //narurals
		naturals = _.where(attributes, 'natural').map(shape.createNatural);
		svg.selectAll('.natural')
			.data(naturals)
			.enter()
			.append("path")
			.classed("natural", 1)
			.attr("d", function(d, i) {
					return d.toSVGPath();
				   });

		//amenities
		amenities = _.where(attributes, 'amenity').map(shape.createAmenity);
		svg.selectAll('.amenity')
			.data(amenities)
			.enter()
			.append("path")
			.classed("amenity", 1)
			.attr("d", function(d, i) {
					return d.toSVGPath();
				   });

		//roads
		roads = _.where(attributes, 'highway').map(shape.createRoad);
		svg.selectAll('.highway')
			.data(roads)
			.enter()
			.append("path")
			.classed("highway", 1)
			.attr("d", function(d, i) {
					return d.toSVGPath();
				   });
       });
}
$(document).ready(DessinV);

