'use strict';


class userService{
   *getList(){
       let user= yield models.user.create({name:"1"})
       console.log(user)
     this.body={a:1}
   }
    *add(){

        this.body={a:1}
    }
}
module.exports = new userService();