// import type { HttpContext } from '@adonisjs/core/http'

// export default class UsersController {
//   //creates a class named Userscontroller // eexport make teh router availble of the controller
//   index() {
//     //here the index is the methord defined in the class and expoted with it
//     return [
//       {
//         id: 1,
//         username: 'virk',
//       },
//       {
//         id: 2,
//         username: 'romain',
//       },
//     ]
//   }
// }

// // HTTP context
// // The controller methods receive an instance of the HttpContext class as the first argument.

// import type { HttpContext } from '@adonisjs/core/http'
// // importing the httpcontext this helps

// export default class UsersController {
//   index(context: HttpContext) {}
// }

// dependency injection
// import { inject } from '@adonisjs/core'
// //first importing the injection dependency properties
// import UserService from '#services/user_service'
// //than importing the services from teh user service

// @inject()
// //hesre inject is used to create or to make constructor work because withut inject it will never create the userservice
// export default class UsersController {
//   constructor(private userService: UserService) {}

//   index() {
//     //this is the methord which gonna export
//     return this.userService.all()
//   }
// }

//methord injection
//
import { inject } from '@adonisjs/core' //automaticaly proide dependancy
//Without inject, Adonis cannot auto-create UserService
//Required for method-level injection
import { HttpContext } from '@adonisjs/core/http' //It represents everything about the current HTTP request.
//It includes:

// request → incoming request data

// response → outgoing response

// params → route parameters

// auth, session, etc.
// the http helps to import all the things related to http.

import UserService from '#services/user_service' //here we are importing the userservice class from the services
//the #service provide the path app/services

export default class UsersController {
  //this is a controller class and the export default helps router to use the controller class
  //calls services , holds the logic
  @inject() //decorater
  //without the inject we can utalize the functionality of aoutomatic userservice creation
  //here the it helps to inject the dependancy aoutomaticaly in this case word after ctx
  index(ctx: HttpContext, userService: UserService) {
    //index is the methord //Usually handles GET /users
    // index → list data

    // show → single item

    // store → create

    // update → update

    // destroy → delete
    //ctx: HttpContext

    // ctx = current HTTP request context

    // Automatically passed by Adonis

    // Contains:

    // ctx.request
    // ctx.response
    // ctx.params
    // ctx.auth
    return userService.all()
    //Calls all() method from UserService
  }
}

//the methord injection and dependency inject is we do not need to use another methord like the constructor to first store the data
//in the index it self we clearified the userservice as well as the context ctx :current http request context

//resource driven controller 
