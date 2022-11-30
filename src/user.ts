//Define User class
class User {
//Field declartions
private userName:string;
private password:string;
private contactNo:number;
private emailID: string;
private address: string;
//constuctor 
constructor (userName: string, password:string, contactNo:number, emailID: string, address: string){
    this.userName = userName;
    this.password = password;
    this.contactNo = contactNo;
    this.emailID = emailID;
    this.address = address;
}
//getter and setter methods


}

//Fetch form values using Object.fromentries()
const submitUser = () => {
    let myform1 :any = document.querySelector("form");
    let formData:any = new FormData(myform1);
    let p1 = new User(formData.get("username"),formData.get("password"),formData.get("contact"),formData.get("email"),formData.get("address"));
    registerUser(p1);
    return false;
    //call registerUser method with the constructed User object
}

//POST data using fetch() api
function registerUser(user: User) {
    let promise1 = fetch("http://localhost:3000/users",{

    method:"POST",
    body:JSON.stringify({
        user
    }),
    headers:{"Content-type": "application/json; charset=UTF-8"}
    })
 
    let promise2 =  promise1.then(result=>{
    return result.json();
    })

    promise2.then(finalResult=>{
    console.log(finalResult);
    })
    alert("User added Successfully")
    return false;
}
    
    //Dispay welcome message after successful registration