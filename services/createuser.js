import users from '../model/User.js';
function createAndStoreUser(name,address,phone,pincode,state){
    const newUser = new users(name,address,phone,pincode,state);
    users.addUser(newUser);
    

}

createAndStoreUser("John Doe","123 Main St","1234567890","123456","CA");