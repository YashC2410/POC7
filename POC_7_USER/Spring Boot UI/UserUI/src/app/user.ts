export class User {
    userId:number;
    userFname:string;
    userLname:string;
    userContact:string;
    userEmail:string;
    userDepartment:string;
    userCity:string;
    userPinCode:string;
    userCountry:string;
    userBoolean:boolean=true;
    userName:string;
    userFunction(u:string){
        this.userName=u;
    }
    userReturn():string{
        return this.userName;
    }
}
