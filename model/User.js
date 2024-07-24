export default class users{
    static usersarray=[];

   constructor(name,address,phone,pincode,state){
       this.name = name;
       this.address = address;
       this.phone = phone;
       this.pincode = pincode;
       this.state = state;
   };

   static addUser(user){
       users.usersarray.push(user);
    //    console.log(users.usersarray);
   }

  
}



