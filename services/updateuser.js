import users from '../model/User.js';
function updateUser(name,address,phone,pincode,state){
    const index=users.usersarray.findIndex((user)=>user.name==name);
    if(index!==-1){
        users.usersarray[index].address=address;
        users.usersarray[index].phone=phone;
        users.usersarray[index].pincode=pincode;
        users.usersarray[index].state=state;
        console.log(`User ${name} updated.`, users.usersarray);
       
    }else{
        console.log(`User ${name} not found.`);
        
    }

}

export default updateUser;