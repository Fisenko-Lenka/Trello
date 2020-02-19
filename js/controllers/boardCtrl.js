    
angular.module('app').controller('boardCtrl', function (boardFactory) {
    console.log('boardCtrl');
    this.boards = boardFactory.getBoard();

    this.addBoard = function () {
        boardFactory.addBoard(this.boardName);
        this.boardName = '';
    };

});
