angular.module('app').controller('boardsCtrl', function (boardFactory) {
    this.removeBoards = function (board) {
     boardFactory.removeBoards(board);
    };
  
  });