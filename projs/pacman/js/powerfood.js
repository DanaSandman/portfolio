'use strict'
const POWER_FOOD = '💠';
// var gPowerFood;

var gPowerFoods = []
var gPowerFood;
function createPowerFood(board) {
//     id: 0,,
//     correctOptIndex: 1
// },
// {
//     id: 1,,
//     correctOptIndex: 0
// },
// {
//     id: 2,,
//     correctOptIndex: 1
// },
// {
//     id: 3,,
//     correctOptIndex: 0
// },
// ]
    gPowerFood = {
    
        location: {
            i: 1,
            j: 1
        }
    }

    gfoodOnBoardCount--
    gPowerFoods.push(gPowerFood)
    board[gPowerFood.location.i][gPowerFood.location.j] = POWER_FOOD

    gPowerFood.location.i = 8
    gPowerFood.location.j = 1
    gfoodOnBoardCount--

    gPowerFoods.push(gPowerFood)
    board[gPowerFoods[1].location.i][gPowerFoods[1].location.j] = POWER_FOOD

                
    gPowerFood.location.i = 8
    gPowerFood.location.j = 8
    gfoodOnBoardCount--

    gPowerFoods.push(gPowerFood)
    board[gPowerFoods[2].location.i][gPowerFoods[2].location.j] = POWER_FOOD


    gPowerFood.location.i = 1
    gPowerFood.location.j = 8
    gfoodOnBoardCount--

    gPowerFoods.push(gPowerFood)
    board[gPowerFoods[3].location.i][gPowerFoods[3].location.j] = POWER_FOOD
}


function eatsPowerFood(){
    // gEatableGhost = true
  var dana = setTimeout(gEatableGhost = true, 5000)
//   dana.clearInterval
}





