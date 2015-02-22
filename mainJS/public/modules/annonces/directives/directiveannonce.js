'use strict';

angular.module('annonces').directive('directiveannonce', ['d3','$http','shape','_', function(d3,$http,shape,_){
    return {
      restrict : 'E',
      link: link
    };
    function link(scope, el, attrs){
    
              $http.get('lib/shape/app/data/eure.json',{responseType : 'json'}).success(function(attributes) {
              	
              	
               
              //affichage
              var screen_width = 1200, screen_height = 815;
        
	var svg = d3.select('directiveannonce')
			.append("svg")
			.attr("width", screen_width)
			.attr("height", screen_height)
			.call(d3.behavior.zoom().scaleExtent([0.5, 8]).on("zoom", zoom))
			.append('g')
			.attr('transform', 'scale('+(screen_width/(1.2*screen_width))+')');
			
	
        function zoom() {
  svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
         };
           
	var page_1 = "/building ";
		var buildings, totalArea, naturals, amenities, roads, attributes;
		buildings = _.where(attributes, {'building':true})
				.map(shape.createBuilding);
	
		//console.log(buildings);
			var a = svg.selectAll('.shape')
			.data(buildings)
			.enter()
			.append("svg:a")
			.classed("item", 1)
			.attr("xlink:href", function(d, i) {
					return page_1 + " Id =" + d.getId();
					
				});
		a.append("svg:path")
			.classed("building", 1)
			.attr("id", function(d, i) {
						return d.getId();
					})
			.attr("d", function(d, i) {
				return d.toSVGPath();
			   });

		a.append("svg:text")
		 .append("svg:textPath")
		.attr("xlink:href", function(d, i) {
				return "#" + d.getId();
				})
		 .classed("bulle", 1)
		 .text(function(d, i) {
				return "Une description " + d.getId();
			});
		//narurals
		naturals = _.where(attributes, 'natural').map(shape.createNatural);
		svg.selectAll('.shape')
			.data(naturals)
			.enter()
			.append("path")
			.classed("natural", 1)
			.attr("d", function(d, i) {
					return d.toSVGPath();
				   });
				   
	    

		//amenities
		amenities = _.where(attributes, 'amenity').map(shape.createAmenity);
		svg.selectAll('.shape')
			.data(amenities)
			.enter()
			.append("path")
			.classed("amenity", 1)
			.attr("d", function(d, i) {
					return d.toSVGPath();
				   });

		//roads
		roads = _.where(attributes, 'highway').map(shape.createRoad);
		svg.selectAll('.shape')
			.data(roads)
			.enter()
			.append("path")
			.classed("highway", 1)
			.attr("d", function(d, i) {
					return d.toSVGPath();
				   });
				   
		function Hidden(theForm, key, value){

	if(document.getElementById(key)==null)
	{
		var input = document.createElement('input');
		input.type = 'hidden';
		input.name = key;
		input.id= key;
		input.value = value;
		document.getElementById(theForm).appendChild(input);
	}
	else
	{var annoncImmo = document.getElementById(key);

		annoncImmo.value = value;
	}

};		   
				   
		       });
        };
    }]);		   
				  //fin affichage
				  
				  //carteview
				  angular.module('annonces').directive('carteview', ['d3','$http','shape','_', function(d3,$http,shape,_){
    return {
      restrict : 'E',
      link: link,
      scope: false
    };
    function link(scope, el, attrs){

              $http.get('lib/shape/app/data/eure.json',{responseType : 'json'})
              .success(function(attributes) {
      
                var data = response;
                
                var screen_width = 1200, screen_height = 815;
        
	var svg = d3.select('carteview')
			.append("svg")
			.attr("width", screen_width)
			.attr("height", screen_height)
			.call(d3.behavior.zoom().scaleExtent([0.5, 8]).on("zoom", zoom))
			.append('g')
			.attr('transform', 'scale('+(screen_width/(1.2*screen_width))+')');
			//svg.setCenter(zoom);
			
	
        function zoom() {
  svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
         };
           
	var page_1 = "/building ";
		var buildings, totalArea, naturals, amenities, roads, attributes;
		 //var zoom = 19;
		
             //attributes.setzoom(15);  
		buildings = _.where(attributes, {'building':true})
				.map(shape.createBuilding);
	
		//console.log(buildings);
		var a = svg.selectAll('.shape')
			.data(buildings)
			.enter()
			.append("svg:a")
			.classed("item", 1)
			//.attr(location.href="view-annonce.client.view.html");
			.attr("xlink:href", function(d, i) {
					return page_1 + 'Id ='+ d.getId();
				});

		a.append("svg:path")
			.classed("building", 1)
			.attr("id", function(d, i) {
						return d.getId();
					})
			.attr("d", function(d, i) {
				return d.toSVGPath();
			   });
			   Hidden('annonc','annoncImmo','');

		a.append("svg:text")
		 .append("svg:textPath")
		 .classed("building", 1)
		 .on("click", function(d,i){
		d3.selectAll(".buildings").classed("select",0);
		d3.select(this)
			.classed("select",1);
		addHidden("annonc","annoncImmo",this.id);
		})
	.on("dblclick", function(d,i){
		d3.select(this)
			.classed("select",0);
		})
	.on("mouseover", function(d, i){
			d3.select(this)
				.classed("over", 1);
		})
		.on("mouseout", function(d, i){
			d3.select(this)
				.classed("over", 0);
				});
		

		//narurals
		naturals = _.where(attributes, 'natural').map(shape.createNatural);
		svg.selectAll('.shape')
			.data(naturals)
			.enter()
			.append("path")
			.classed("natural", 1)
			.attr("d", function(d, i) {
					return d.toSVGPath();
				   });
				   
	    

		//amenities
		amenities = _.where(attributes, 'amenity').map(shape.createAmenity);
		svg.selectAll('.shape')
			.data(amenities)
			.enter()
			.append("path")
			.classed("amenity", 1)
			.attr("d", function(d, i) {
					return d.toSVGPath();
				   });

		//roads
		roads = _.where(attributes, 'highway').map(shape.createRoad);
		svg.selectAll('.shape')
			.data(roads)
			.enter()
			.append("path")
			.classed("highway", 1)
			.attr("d", function(d, i) {
					return d.toSVGPath();
				   });
                
                
                scope.$watch(function(scope) {

				document.getElementById(scope.annonces.annoncImmo).style.fill = 'black'; return scope.annonces.annoncImmo;

		},function() {});
		
		
              });
        };
    }]);
