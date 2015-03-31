app.controller('ChatController', function ($rootScope, $scope, $stateParams, $state, user, bunkerData) {
	var self = this;

	this.rooms = bunkerData.rooms;

	bunkerData.$promise.then(selectRoom);
	$rootScope.$on('roomIdChanged', selectRoom);

	function selectRoom() {

		if (bunkerData.$resolved && !_.any(self.rooms, {id: $rootScope.roomId})) {
			// Functionality to allow users to join a room by entering it's URL
			//self.rooms.push({id: $rootScope.roomId});
			bunkerData.joinRoom($rootScope.roomId).then(function() {
				selectRoom();
			});
		}

		_.each(self.rooms, function (room) {
			room.$selected = room.id == $rootScope.roomId;
		});
	}
});
