angular.module('app').controller('cardCtrl', function (cardFactory) {

    this.isEditing = false;
    this.editingCard = null;

    this.editCard = function (card) {
      this.isEditing = true;
      this.editingCard = angular.copy(card);
    };
  
    this.updateCard = function () {
      cardFactory.updateCard(this.editingCard);
      this.editingCard = null;
      this.isEditing = false;
    };
  
  });