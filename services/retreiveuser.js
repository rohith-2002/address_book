import users from "../model/User.js";
import createAndStoreUser from './createuser.js';

function retrieveUser(name){
    const index = users.usersarray.findIndex((user)=>user.name==name);
    if(index!==-1){

            console.log(users.usersarray[index]);
    }
    else{
        console.log(`User ${name} not found.`);
    }

}
export default retrieveUser;

// createAndStoreUser("John","123 Main St","1234567890","123456","CA");
// createAndStoreUser("Doe","123 Main St","1234567890","123456","CA");
// createAndStoreUser("Smith","123 Main St","1234567890","123456","CA");
// createAndStoreUser("ravi","123 Main St","1234567890","123456","CA");
// createAndStoreUser("rohith","123 Main St","1234567890","123456","CA");

 retrieveUser("rohith");
 console.log(users.usersarray);

