//We're going to set up a game server for our client with Sonic the Hedgehog! Here are the parameters required for this project:

/*
You need to initialize a node server and express environment from scratch.  

JUST ADDED: Add a .gitignore - DONE 

Next, install all the following dependencies that will be needed for the project: npm install express mongoose dotenv morgan cors - DONE 
Then install all the dependencies needed only for development: npm install nodemon uuid --save-dev- DONE 

You can have a skeleton of your MVC design pattern in terms of your file and folder directory. Think about what is needed, even if we don't use it (yet). - DONE 

Then fill out app.js.
*/
//------------DO AFTER APP.JS IS DONE-----------------
//siteRouter.js
/*
//define express 


// Define express and router using express.Router()


// Add the following to the constant variable where the controllers are summoned: {allCharacters, charId, exit} and require the siteController file

// Stage a get route of /characters where there is a callback function allCharacters


// Stage a get route of /characters/:_id where there is a callback function charId


// Stage a get route of /exit where there is a callback function exit


module.exports = router;
// Make sure to export the router using module.exports()
*/
//-----------------------------
//siteCtrl.js
/*
//summon the "mock database file"

Refactoring the statement from if-else to try-catch statements will help us optimize our code

const allCharacters = async (request, response, next) => {
  try{
  //we can place the try before the if to be the "magic checkpoint"
  if (200) { //add await keyword
    await response.status().json({
        //reference the characters and show all of them
    })
  }
  //catch and detect errors - It should reflect the status of NOT FOUND in the status and the statusCode
  } catch (error) {
    response.status().json({
    // the server message needs to say "Resource not found. Search again."
    })
  }
};


const charId = async (request, response, next) => {
  const { _id } = request.params; //store the request.params object in variable
    console.log(params); //console log variable. Read the server.

  const foundChar = //.find(// => //._id === Number(_id));
 
    try {
    //we can place the try before the if to be the "magic checkpoint"

    //use a switch statement with the _id as the key, the Id strings as cases and a default message of "Character not found. Search again." 
    //Each number case has a message of "This is character number 1, 2, 3, etc". 
    //If the Id is not a number, say "Link to resource: data: {gameInventory}"
        
     
   //catch and detect errors - It should reflect the status of NOT FOUND in the status and the statusCode
  } catch (error) {
    response.status().json({
    // the server message needs to say "Resource not found. Search again."
    })
  }
  };
  

  const exit = async (request, response, next) => {
    //The message should say: "You are closing the game dev application...".  It should reflect the status of OK in the status and the statusCode
    response.status().json();
  }
};

//Use module.exports
*/
//--------------YA DONE---------------