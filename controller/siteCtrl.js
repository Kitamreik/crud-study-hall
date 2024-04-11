//siteCtrl.js
//summon the "mock database file"
const gameInventory = require("../data/gameInventory");

//Refactoring the statement from if-else to try-catch statements will help us optimize our code
const allCharacters = async (req, res, next) => {
  try{
  //we can place the try before the if to be the "magic checkpoint"
  if (200) { //add await keyword
    await res.status(200).json({
        //reference the characters and show all of them
        success: {message: "reference the characters and show all of them"}, data: gameInventory, statusCode: 200
    })
  }
  //catch and detect errors - It should reflect the status of NOT FOUND in the status and the statusCode
  } catch (error) {
    res.status(404).json({
    // the server message needs to say "Resource not found. Search again."
        error: {message: "Resource not found. Search again."}
    })
  }
};


const charId = async (req, res, next) => {
    const { _id } = req.params; //store the req.params object in variable
      console.log(req.params); //console log variable. Read the server.
  
    const foundChar = gameInventory.find(gameInventory => gameInventory._id === Number(_id)); 
    
      try {
      //we can place the try before the if to be the "magic checkpoint"
  
      //use a switch statement with the _id as the key, the Id strings as cases 
      
      
      switch (_id) {
        //Each number case has a message of "This is character number 1, 2, 3, etc". 
        case '001':
          res.json("This is character number 1");
          break;
        case '002':
          res.json("This is character number 2");
        break;
        case '003':
          res.json("This is character number 3");
        break;
        //If the Id is not a number, say "Link to resource: data: {gameInventory}"
        case '0a0b4c':
            let match = "0a0b4c"; //store the target in a variable aka the case is the ID we are searching for
           let landing = "http://localhost:5050/characters/0a0b4c"; //store the completed path
            res.json({ success: 
                {message: "Link to resource:", 
                foo: {match, landing}}, //this is to test
                data:  gameInventory[3] //use the index of 3 because the gameInventory to find the data object
            }); 
        break;
        default: //does detect errors successfully
          res.json("Character not found. Search again."); //default message of "Character not found. Search again." 
          break;
      }
     //catch and detect errors - It should reflect the status of NOT FOUND in the status and the statusCode
    } catch (error) {
      res.status(404).json({
            // the server message needs to say "Resource not found. Search again."
                error: {message: "Resource not found. Search again."}
      })
    }
};

const exit = async (req, res, next) => {
    //The message should say: "You are closing the game dev application...".  It should reflect the status of OK in the status and the statusCode
    await res.status(200).json({
        //reference the characters and show all of them
        success: {message: "You are closing the game dev application..."}, statusCode: 200
    })
};

//Use module.exports
module.exports = {allCharacters, charId, exit}
//--------------YA DONE---------------