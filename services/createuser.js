import users from '../model/User.js';
function createAndStoreUser(name,address,phone,pincode,state){
    const newUser = new users(name,address,phone,pincode,state);
    users.addUser(newUser);
    

}

export default createAndStoreUser;

createAndStoreUser("John","123 Main St","1234567890","123456","CA");
// createAndStoreUser("Doe","123 Main St","1234567890","123456","CA");
// createAndStoreUser("Smith","123 Main St","1234567890","123456","CA");
// createAndStoreUser("ravi","123 Main St","1234567890","123456","CA");
// createAndStoreUser("rohith","123 Main St","1234567890","123456","CA");

// console.log(users.usersarray[0]);