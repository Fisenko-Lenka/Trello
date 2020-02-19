angular.module('app').factory('boardFactory', function () {
    var service = {};
  
    var boards = [
      {
        id: 1,
        boardName: 'Понедельник'
      }
    ];
  
    service.getBoard = function () {
      return boards;
    };
  
    service.addBoard = function (boardName) {
      boards.push({
        id: _.uniqueId('board_'),
        boardName: boardName
      });
    };
  
    service.removeBoards = function (board) {
      _.pull(boards, board);
    };
  
    return service;
 });