import users from '../model/User.js';
import createAndStoreUser from './createuser.js';
function deleteUser(name){
    const index=users.usersarray.findIndex((user)=>user.name==name);
    if(index!==-1){
        users.usersarray.splice(index,1);
        console.log(`User ${name} deleted.`, users.usersarray);
    }else{
        console.log(`User ${name} not found.`);
        
    }

}
createAndStoreUser("John","123 Main St","1234567890","123456","CA");
createAndStoreUser("Doe","123 Main St","1234567890","123456","CA");
createAndStoreUser("Smith","123 Main St","1234567890","123456","CA");
createAndStoreUser("ravi","123 Main St","1234567890","123456","CA");
createAndStoreUser("rohith","123 Main St","1234567890","123456","CA");
console.log(users.usersarray);
deleteUser("Smith");

console.log(users.usersarray);

export default deleteUser;

