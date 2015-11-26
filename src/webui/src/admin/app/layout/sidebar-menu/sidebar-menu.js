angular.module('app.admin.layout')
    .directive('sidebarMenu', function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            templateUrl: 'app/layout/sidebar-menu/sidebar-menu.tpl.html',
            controller: ['$scope', '$location', function($scope, $location) {
            	$scope.tabs = [
            		{
            			"title": "首页",
            			"key": "home",
            			"icon": "fa-home",
            			"active": false,
            			"childs": []
            		},
            		{         			
            			"title": "内容管理",
            			"key": "article, category",
            			"icon": "",
            			"active": false,
            			"childs": [
            				{
            					"title": "类别管理",
            					"key": "category",
            					"icon": "",
            					"active": false
            				},
            				{
            					"title": "文章管理",
            					"key": "article",
            					"icon": "",
            					"active": false
            				}
            			]
            		},
            	];
            	
            	$scope.initController = function(){
            		$scope.initTabs();
            	};

            	$scope.initTabs = function(){
            		var path = $location.url();
	            	$scope.tabs = _.each($scope.tabs, function(tab){
	            		if(path.indexOf(tab.key) > -1){
	            			tab.active = true;
	            		}
	            		return _.each(tab.childs, function(child){
	            			if(path.indexOf(child.key) > -1){
	            				tab.active = true;
	            				child.active = true;
	            			}
	            			return tab;
	            		});
	            	});
            	};

            	$scope.initController();
            }]
        }
    });