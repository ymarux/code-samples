// コントローラとして呼び出されるメソッドの定義
function HelloController($scope) {
	$scope.greeting = { text : "hello world" };
}
// 'app'モジュールにHelloControllerコントローラの登録
angular.module('app', [])
	.controller('HelloController', HelloController);
