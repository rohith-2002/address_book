import users from '../model/User.js';
import createAndStoreUser from './createuser.js';
import updateUser from './updateuser.js';
import deleteUser from './deleteuser.js';
import retrieveUser from './retrieveuser.js';
import readlinesync from 'readline-sync';

function client(){

    createAndStoreUser("John","123 Main St","1234567890","123456","CA");
    createAndStoreUser("Doe","123 Main St","1234567890","123456","CA");
    createAndStoreUser("Smith","123 Main St","1234567890","123456","CA");
    createAndStoreUser("ravi","123 Main St","1234567890","123456","CA");
    createAndStoreUser("rohith","123 Main St","1234567890","123456","CA");
    
    const choice = readlinesync.question("Enter 1 for update, 2 for delete, 3 for retrieve , 4 for create: ");

    switch(choice){
        case 1:
            const uname = readlinesync.question("Enter the name of the user to update: ");
            const uaddress = readlinesync.question("Enter the address: ");
            const uphone = readlinesync.question("Enter the phone: ");
            const upincode = readlinesync.question("Enter the pincode: ");
            const ustate = readlinesync.question("Enter the state: ");
            updateUser(uname,uaddress,uphone,upincode,ustate);
            break;
        case 2:
            const dname = readlinesync.question("Enter the name of the user to delete: ");
            deleteUser(dname);
            break;
        case 3:
            const rname = readlinesync.question("Enter the name of the user to retrieve: ");
            retrieveUser(rname);
            break;
        case 4:
            const cname = readlinesync.question("Enter the name of the user to create: ");
            const caddress = readlinesync.question("Enter the address: ");
            const cphone = readlinesync.question("Enter the phone: ");
            const cpincode = readlinesync.question("Enter the pincode: ");
            const cstate = readlinesync.question("Enter the state: ");
            createAndStoreUser(cname,caddress,cphone,cpincode,cstate);
            break;
        default:
            console.log("Invalid choice.");
            break;  
    }
}

client();

