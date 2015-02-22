;
(function() {
	var shape, _, VERSION = '0.0.1';

	if (typeof window === 'undefined') {
		_ = require('lodash'); 

	} else {
		_ = window._;
	}

        var shape;
	function createShape(attributes) {
		attributes = attributes || {};
		attributes._id = attributes._id || 0;
		attributes.name = attributes.name || "";
		attributes.nodes = attributes.nodes || [];

		var shape = {};

		shape.getName = function() {
			return attributes.name;
		};

		shape.getId = function() {
			return attributes._id;
		};

		shape.toString = function() {
			return "id = " + attributes._id +
			       "  name = " + '"' + attributes.name + '"' + 
			       "  nodes = " + "[" + attributes.nodes.join("; ") + "]";
		};

		shape.toSVGPath = function() {
			return 'M ' + _.map(attributes.nodes, function(point) {
				return point.x + ' ' + point.y;
			}).join(' L ');
		};
		return shape;
	}




	function createBuilding(attributes) {
		var building = createShape(attributes), area = 0, i = 0;

		if((attributes.nodes[i].x === attributes.nodes[attributes.nodes.length - 1].x) &&
   		   (attributes.nodes[i].y === attributes.nodes[attributes.nodes.length - 1].y))
			for (i = 0; i < attributes.nodes.length - 1; i++) {
				area += attributes.nodes[i].x * attributes.nodes[i + 1].y
						- attributes.nodes[i + 1].x * attributes.nodes[i].y;
			}
		area = Math.abs(area / 2);
		building.area = area;
		building.getArea = function() {
			return area;
		};
		return building;
	}

    //road
    function createRoad (attributes) {

	attributes = attributes || {};
        var road = createShape(attributes);

        road.highway = attributes.highway || '';

        var superToString = road.toString;
        road.toString = function() {
            return superToString.apply(road) +
                       '  highway = "' + road.highway + '"';
        };
        return road;

    };
	
    
    //amenity
    function createAmenity(attributes) {

    	attributes = attributes || {};
        var amenity = createShape(attributes);

        amenity.amenity = attributes.amenity || '';

        var superToString = amenity.toString;
        amenity.toString = function() {
            return superToString.apply(amenity) +
                       '  amenity = "' + amenity.amenity + '"';
        };

        return amenity;
    };
	
    
	// natural
    function createNatural(attributes) {

    	attributes = attributes || {};
        var natural = createShape(attributes);

        natural.natural = attributes.natural || '';

        var superToString = natural.toString;
        natural.toString = function() {
            return superToString.apply(natural) +
                       '  natural = "'+ natural.natural + '"';
        };

        return natural;
    };
	

	if (typeof window === 'undefined' && typeof exports !== 'undefined') {
		shape = exports;
	} else {
		window.shape = shape = {};
	}
	shape.VERSION = VERSION;
        window.shape = shape = {};
	shape.createShape = createShape;
	shape.createRoad = createRoad;
	shape.createBuilding = createBuilding;
	shape.createAmenity = createAmenity;
	shape.createNatural = createNatural;

}).call();



