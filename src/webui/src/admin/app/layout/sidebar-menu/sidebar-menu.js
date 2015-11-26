angular.module('app.admin.layout')
    .directive('sidebarMenu', function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            templateUrl: 'app/layout/sidebar-menu/sidebar-menu.tpl.html',
            controller: ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
            	$scope.tabs = [
            		{
            			"title": "首页",
            			"key": "home",
            			"icon": "fa-home",
            			"active": false,
            			"expanded": false,
            			"childs": []
            		},
            		{	
            			"title": "内容管理",
            			"key": "article, category",
            			"icon": "",
            			"active": false,
            			"expanded": false,
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
            	
            	$scope.initTabs = function(){
            		var path = $location.url();
	            	$scope.tabs = _.each($scope.tabs, function(tab){
	            		if(path.indexOf(tab.key) > -1){
	            			tab.active = true;
	            		}else{
	            			tab.active = false;
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

            	$scope.expandTab = function(selectedTab){
            		$scope.tabs = _.each($scope.tabs, function(tab){
            			if(selectedTab == tab) {
            				tab.expanded = !tab.expanded;
            				tab.active = !tab.active;
            			} else {
            				tab.active = false;
            			}
            			return tab;
            		});
            	};

            	$rootScope.$on('$stateChangeSuccess', function(){
            		$scope.initTabs();
            	});
            }]
        }
    });