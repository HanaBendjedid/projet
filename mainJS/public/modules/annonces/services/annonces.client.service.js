'use strict';

//Annonces service used to communicate Annonces REST endpoints
angular.module('annonces').factory('Annonces', ['$resource',
	function($resource) {
		return $resource('annonces/:annonceId', { annonceId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
])
.factory('d3',['$window',function($window)
{
  return $window.d3;
}
])
.factory('shape',['$window',function($window)
{
  return $window.shape;
}
])
.factory('_', function()
{
  return window._;
}
);
;


/*'use strict';

//Anns service used to communicate Anns REST endpoints
angular.module('annonces').factory('Annonces', ['$resource',
	function($resource) {
		return $resource('annonces/:annoncesId', { annonceId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
])

.factory('d3',['$window',function($window)
{
  return $window.d3;
}
])
.factory('shape',['$window',function($window)
{
  return $window.shape;
}
])
.factory('_', function()
{
  return window._;
}
);
*/
