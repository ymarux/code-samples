// �R���g���[���Ƃ��ČĂяo����郁�\�b�h�̒�`
function HelloController($scope) {
	$scope.greeting = { text : "hello world" };
}
// 'app'���W���[����HelloController�R���g���[���̓o�^
angular.module('app', [])
	.controller('HelloController', HelloController);
