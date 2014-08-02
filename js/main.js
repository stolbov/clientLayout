var mainApp = angular.module('mainApp', []);

mainApp.controller('mainController', function($scope, $window, $http) {
    var mainNode = document.getElementById('mainWr'),
        mapWrNode = document.getElementById('mapWr'),
        mapNode = document.getElementById('map');

    $scope.resizeMsg = 'Развернуть';
    $scope.resizeWideClass = 'openMap';
    $scope.resizer = function(){
        if($scope.resizeMsg == 'Развернуть'){
            mainNode.style.width = "20%";
            mapWrNode.style.marginLeft = "20%";
            mapNode.style.width = "80%";
            mapNode.style.width = "80%";
            $scope.resizeMsg = 'Свернуть';
            $scope.resizeWideClass = 'closeMap';
        }else{
            mainNode.style.width = "70%";
            mapWrNode.style.marginLeft = "70%";
            mapNode.style.width = "30%";
            mapNode.style.width = "30%";
            $scope.resizeMsg = 'Развернуть';
            $scope.resizeWideClass = 'openMap';
        }
        map.resize();
    };

    $scope.clearSearchShow = false;
    $scope.searchCleaner = function(){
        if($scope.search){
            $scope.clearSearchShow = true;
        }else{
            $scope.clearSearchShow = false;
        }
    };

    $scope.emptySearch = function(){
        $scope.search = '';
        $scope.clearSearchShow = false;
    };

    $scope.searchView = 'hide';
    $scope.openSearch = function($event){
        $scope.searchView = 'open';
        $scope.search = '';
    };

    $scope.searcher = function(){
        console.log($scope.search);
        $scope.searchView = 'hide';
    };

    $scope.openLayer = 'hide';
    $scope.layersOpener = function(){
        if($scope.openLayer == 'hide'){
            $scope.openLayer = 'show';
        }else{
            $scope.openLayer = 'hide';
        }
    }

    $scope.showEditor = 'hide';
    $scope.closeEditor = function(){
        $scope.showEditor = 'hide';
    }

    $scope.editLayer = function(){
        $scope.showEditor = 'show';
    }
});

require(["esri/map","esri/symbols/PictureMarkerSymbol","dojo/domReady!"],
    function(Map,PictureMarkerSymbol) {

        var helper = null;
        var geoEnabled = true;

        map = new Map("map", {
            basemap: "topo",
            center: [47.336, 56.009],
            zoom: 10
        });

        map.on("load",init);

        function init(){
            map.reposition();
            map.resize();
        }

    }
);