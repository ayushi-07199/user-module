export class User{

    userId:number;
   private userRole:string;
   private userName:string;
   private password:string;
  

   constructor(userRole:string,userName:string,password:string){
      
       this.userRole=userRole
       this.userName=userName;
       this.password=password;
       }

}