// /*
// |--------------------------------------------------------------------------
// | Routes file
// |--------------------------------------------------------------------------
// |
// | The routes file is used for defining the HTTP routes.
// |
// */

// const PostsController = () => import('#controllers/posts_controller')
import router from '@adonisjs/core/services/router'
// import { middleware } from './kernel.js'

router.on('/').render('pages/home').as('home')
// // in this we are render the data at file home/page at the '/' route.
// // now we can define the route.
// //mostaly we use the http route.
// //and below iam gonna use of them.
// //get,post,put and delete

// // router.get('/movies', async (ctx) => {
// //     ctx.view.share({movie:'my awesome movie'}) // here iam using the vlaue to pass as daynamic key value movie
// //     return ctx.view.render('pages/movies')
// // }).as('movies.show')
// // after the '/movies' , we define a handler that on this route what we have to do

// // router.get('/movies',()=>{}).as('movies.index')
// // router.get('/movies/awesome-movie',()=>{}).as('movies.show')
// // router.post('/movies',()=>{}).as('movie.store')
// // router.put('/movies',()=>{}).as('')

// // now iam gonaa make routers

// // router.get('/about', () => {
// //   return 'this is a about page'
// // })

// // Now iam gonna use the params page
// router.get('/posts/:id', ({ params }) => {
//   // here we are using the param id like we can pass the value in the url// this help us to use functionaity for use first we need to use params keyword then the url definer like in this case id "params.id"
//   return `This is post with id ${params.id}`
// })

// // now making a optional param
// router.get('/post/:comment?', ({ params }) => {
//   // here we are taking param or data from url in optional way if user wqant he can give or not
//   if (!params.comment) {
//     //checking if the param is empty or not
//     return 'this comment is empty' //return it if the param is empty
//   }
//   return `this comment consist of ${params.comment}` // return if the param have data
// })
// // now gonna make a wildcard paramer
// // wildcard params helps us to declaer an array in url

// // router.get('/post_Data/*', ({ params }) => {
// //   console.log(params['*']) // in htis we are printing the values of wildcard params means the one which can store data in array form
// //   return params['*'] //here we return at web with * which stored array data we have to enter it like /1/2/3/4/5
// // })

// //now we gonaa use param matches
// // which helps to identify the type or param we are geting and helps to diffrentiate btween the same name routes
// // router.get('/post_data/:id', ({ params }) => {
// //   return params.id
// // })// here below iam passing the where in which he is defining the id should be off which data type
// // .where('id',{
// //    match : /^[0-9]+$/,
// //     cast: (value) => Number(value),
// //   })
// //or we can do is just
// // router.get('/post_data/:id([0-9]+)', ({ params }) => {
// //   console.log(params.id)
// // return params.id
// // }) // so at the place of where matches we can use the regex properti but at this case iam not able to use it correctaliy

// // router.get('/khushi/:id([0-9]+)', ({ params }) => {
// //   console.log(params.id) // '2'
// //   return `POST ID IS ${Number(params.id)}`
// // })
// // so here we can do two thing both are the same
// // or ypu can put the differentiater into the numeric sone

// // inbuilt matchers when we need to valiate the coming data from prams
// router.where('id', router.matchers.number()) //this is a global inbuilt matcher to vlalidate the id
// router
//   .get('/:id', ({ params }) => {
//     // here iam using a simple type of inbuilt matcher which help me validate the id
//     return params.id
//   }) //this will help us to validate that the id numeric
//   .where('id', router.matchers.number()) // now rather than using the where with match we can use the inbuilt one
// // here we have completed the routes part

// //now iam gonna use the surd operatio n in the adonis js
// // GET method
// router.get('/users', () => {})

// // POST method
// router.post('/users', () => {})

// // PUT method
// router.put('/users/:id', ({ params }) => {
//   return params.id
// })

// // PATCH method
// router.patch('/users/:id', () => {})

// // DELETE method
// router.delete('/users/:id', () => {
//   //this part handle the logic that's why it is called router handler
// })

// // gona use the router with the logic like router handler

// //router middleware
// // middleware helps us to use
// router
//   .get('/idi', () => {
//     console.log('inside the route')

//     return 'view all the path'
//   }) // first the below middleware will run than the route logi will be executd
//   .use((_, next) => {
//     console.log('inside the middleware')
//     return next()
//   })
// // this will execute before the main route and we can also use the derived and calculated value in the main rouvte  })

// //router identifire this are used to display name of the router or nick namee

// router.get('/users1', () => {}).as('users1.index')

// router.post('/users1', () => {}).as('users1.store')

// router.delete('/users1/:id', () => {}).as('users1.delete')

// //grouping of router
// // this methord will come handi whn we need to define some functionality many router at single time it will hepl us to implement the functionality to all grouped router at once

// router.group(() => {
//   /**
//    * All routes registered inside the callback
//    * are part of the surrounding group
//    */
//   router.get('/group', () => {})
//   router.post('/group', () => {})
// })

// // nested grouping can also work
// router.group(() => {
//   router.get('posts', () => {})

//   router.group(() => {
//     router.get('users12', () => {})
//   })
// })

// //prefixing the routes inside the group
// //this helps in multiple cases suchs as rounding of apis for similar work like user and paymnet
// //this help us to generalize the url in single go
// router
//   .group(() => {
//     router.get('/paymnet', () => {})
//     router.post('/auth', () => {})
//   })
//   .prefix('/api')
// // now we have the prefix so whwnever we need to use the paymnet and auth api i need to use api first
// // '/api/payment ,/api/auth' like this i need to use it

// // using prefixi on the nested group

// router
//   .group(() => {
//     router
//       .group(() => {
//         router.get('users22', () => {})
//         router.get('payments', () => {})
//       })
//       .prefix('v1')
//   })
//   .prefix('api')

// // now the api url will be for user is '/api/v1/users , /api/v1/payment'

// //naming router inside a group

// //similar to the prefix we can aply the name on all the grouped router in single name

// router
//   .group(() => {
//     router.get('users13', () => {}).as('users.index') // final name - api.users.index
//   })
//   .prefix('api')
//   .as('api')

// //naming the router inside the nesteed group

// router
//   .group(() => {
//     router.get('/users', () => {}).as('users.index1') // api.users.index

//     router
//       .group(() => {
//         router.get('payments', () => {}).as('payments.index') // api.commerce.payments.index
//       })
//       .as('commerce')
//   })
//   .prefix('api')
//   .as('api')

// //applying the middleware inside the group

// router
//   .group(() => {
//     router.get('/appp', () => {})
//     console.log('pani')
//     router
//       .group(() => {
//         router.get('/apppo', () => {})
//         console.log('inside the nested group')
//       })
//       .use((_, next) => {
//         console.log('inside the first middleware or the inner one')
//         return next()
//       })
//   })
//   .use((_, next) => {
//     console.log('inside the outer middleware')
//     return next()
//   })
// // above i have used middleware in the structure above the nested route is using the middleware

// // registering the group of routes to perticular domain

// router
//   .group(() => {
//     router.get('/apppp', () => {})
//     router.post('/appp', () => {})
//   })
//   .domain('blob.adonis.com')

// //just like the domain we can define a dyanamic domian means the user can specify that which domain is neede

// //daynamic domain
// router
//   .group(() => {
//     router.get('user_dom', ({ subdomains }) => {
//       // here the sbdomain is the continer of daynamic value
//       return `Listing users for ${subdomains.tenant}`
//     })
//   })
//   .domain(':tenant.adonisjs.com')

// // //rendering the view edge cases

// // router.on('/home').render('home')
// // router.on('/about').render('about', { title: 'About us' })
// // router.on('/contact').render('contact', { title: 'Contact us' })

// //renddering the view-intertia
// //If you are using the Inertia.js adapter, you can use the router.on().renderInertia() method to render an Inertia view. It is a convenient shortcut to render a view without defining an explicit handler.

// // The renderInertia method accepts the name of the Inertia component to render. Optionally, you can pass the component data as the second argument/

// // router.on('/').renderInertia('home')
// // router.on('about').renderInertia('about', { title: 'About us' })
// // router.on('contact').renderInertia('contact', { title: 'Contact us' })
// // here iam rendring inertiea view files which contain the buisness logic

// //rediract from the route
// //If you are defining a route handler to redirect the request to another path or route, you may use the router.on().redirect() or router.on().redirectToPath() methods.

// // The redirect method accepts the route identifier. Whereas the redirectToPath method accepts a static path/URL.

// router.on('/posts').redirect('articles')
// this is how we comunicate

// we can aslo redirect to the url or the path of web
// router.on('/artical').redirectToPath('htpps:/home/ghumne')
//above we are redirecting the route to the url or path

// Forwarding params
// In the following example, the value of id from the original request will be used to construct the /articles/:id route. So, if a request comes for /posts/20, it will be redirected to /articles/20.
// we can aslo redirect the route to the other rout with parm id: as like we transfer the id in other form

// router.on('/home/:id').redirect('art/:id') //here the art will have the same param data as home

// Explicitly specifying params, the param data will be override with the present data in the redirected router

// router.on('home/:id').redirect('invite/:id', { id: 1 })
// here the param data id will be override if the redirected data is mention first

// dong the explicit thing with thte string data

// router.on('/home').redirect('/about', {
//   qs: {
//     limit: 20,
//     page: 1,
//   },
// })

// in this iam redirecting to the router where it will take the string data aws given

//current router request
//in this we can request for the current router info by the httpontext

// router.get('payments', ({ route }) => {
//   console.log(route)
// })

//You can also check if the current request is for a specific route or not using the request.matchesRoute method. The method accepts either the route URI pattern or the route name.

// router.get('/posts/:id', ({ request }) => {
//   console.log('True')
//   if (request.matchesRoute('posts/:id')) {
//     console.log('true')
//   }
// })
//you can also check multiple router

//handling the 404 error
// import { errors } from '@adonisjs/core'
// import { HttpContext, ExceptionHandler } from '@adonisjs/core/http'

// export default class HttpExceptionHandler extends ExceptionHandler {
//   async handle(error: unknown, ctx: HttpContext) {
//     if (error instanceof errors.E_ROUTE_NOT_FOUND) {
//       return ctx.view.render('errors/404')
//     }
//     return super.handle(error, ctx)
//   }
// }

//URL builder = to use the predefine routes in the project

// const PostsController = () => import('#controllers/posts_controller')

// router.get('posts/:id', [PostsController, 'show']).as('posts.show')

//defining the querry parameter

//defining the querry parameter
// router.builder().qs({ page: 1, sort: 'asc' }).make('posts.index') // /posts?page=1&sort=asc
// .builder creates a s url . querry string serves a object

// Generating signed URLs
// Signed URLs are URLs with a signature query string appended to them. The signature is used to verify if the URL has been tampered after it was generated.

// For example, you have a URL to unsubscribe users from your newsletter. The URL contains the userId and might look as follow
// To prevent someone from changing the user id from 231 to something else, you can sign this URL and verify the signature when handling requests for this route.

// const UsersController = () => import('#controllers/users_controller')
//importing the controller from app/controller

// router.get('users', [UsersController, 'index'])
// here we are calling the route in which the controller geting triged in which the index methord is called

// we can aslo go like using the magic string where we have to give the path of controller directaly in the router

// The only downside of magic strings is they are not type-safe. If you make a typo in the import path, your editor will not give you any feedback.

// router.get('users', '#controllers/users_controller.index')

//single action controler
// export default class RegisterNewsletterSubscriptionController {
//   handle() {
//     // ...
//   }
// }
//this is a single action controller because here we are defining the name of the controller to perform the single task

//usin the resource driven controller
// router.get('/index', '#controllers/posts_controller.index')
//now iam calling the controller from the controllers/post controller and by the "." we mention the methord name here like in this case the index
// but this in not a good practice thats why we will use the import methord

// now we gonna import the controller

// const PostController = () => import('#controllers/posts_controller')
// by this we can import the controller in the route ad can use it

// router.get('index', [PostController, 'index'])
//first route method than the route which is called than the controller than the metord in the class

// we have one more way to do this

// router.resource('posts', PostsController)
//now here by the resource we can use any type of metord we want the route we define should call the method

// we can also use the nested resource
// router.resource('posts.comment', PostController)
//here the resource is defining the nested resorce like the route is same but calling a different methord comment in same domain of posts

//now for the nested resource we can use shallow it helps in mutiple things
//it helps in reducing the depply nested url
// the shallow resource route helps to remove the need of multiple prams
// Use it when:

// Child resource belongs to parent

// Child has its own identity

// You don’t need parent ID for single-record actions

// Examples:

// posts → comments

// users → addresses

// orders → items

// When NOT to use it?

// When child cannot exist alone

// When parent context is always required
// router.shallowResource('posts.comments', CommentsController)

//naming the resource routes

// router.resource('group-attributes', GroupAttributesController).as('groupAttributes', false)

//apionly is used to tell that the api can be used only for the purpose it is udrrrouter.resource('posts', PostsController).apiOnly()
// router.resource('posts', PostsController).apiOnly()
//this is the appinoly keyword is used it will not let eny wi

// Registering only specific routes
// To register only specific routes, you may use the resource.only or the resource.except methods.

// The resource.only method accepts an array of action names and removes all other routes except those mentioned. In the following example, only the routes for the index, store, and destroy actions will be registered.

// Registering only specific routes
// To register only specific routes, you may use the resource.only or the resource.except methods.

// The resource.only method accepts an array of action names and removes all other routes except those mentioned. In the following example, only the routes for the index, store, and destroy actions will be registered.
// router.resource('posts', PostsController).only(['index', 'store', 'destroy'])
// it is only registering some of the methord and trying to put

// Renaming resource params
// The routes generated by the router.resource method use id for the param name. For example, GET /posts/:id to view a single post, and DELETE /post/:id to delete the post.

// You can rename the param from id to something else using the resource.params method.
// router.resource('posts', PostsController).params({ posts: 'post' })
//here iam taking the resource router i can change the name of resource methord like the param can be used tp provide the methord name such as
//create show in dex etc

// assining the middleware to the controller//You may assign middleware to routes register by a resource using the resource.use method. The method accepts an array of action names and the middleware to assign to them. For example:

// import router from '@adonisjs/core/services/router'
// import { middleware } from '#start/kernel'
// const PostController = () => import('#controllers/posts_controller')
// router
//   .resource('posts', [PostController, 'index'])
//   .use(['create', 'store', 'update', 'destroy'], middleware.auth_middleware())
// //

//we can use three types of middleware
//server - server middleware runs on every routes best for aditional functionality
//named -Named middleware is a collection of middleware that are not executed unless explicitly assigned to a route or a group.
// Instead of defining middleware as an inline callback within the routes file, we recommend you create dedicated middleware classes, store them inside the named middleware collection and then assign them to the routes.
//router-Router middleware are also known as global middleware. They are executed on every HTTP request that has a matching route.
// The Bodyparser, auth, and session middleware are registered under the router middleware stack.
//server middlewaer
// import server from '@adonisjs/core/services/server'

// server.use([
//   () => import('@adonisjs/static/static_middleware')
// ])

// router middleware
// import router from '@adonisjs/core/services/router'

// router.use([
//   () => import('@adonisjs/core/bodyparser_middleware')
// ])
//named middlewaere
// import router from '@adonisjs/core/services/router'

// router.named({
//   auth: () => import('#middleware/auth_middleware')
// })

//after making the middleware it will give me aoutosujjestion toimpot the middleware

// const users_controller = () => import('#controllers/posts_controller')

// router.get('/index', [users_controller, 'index']).middleware([middleware.userLocation()])
// // here the way to use the middleware is like this after defining the route we can use the middleware by the middleware keyword and passing the middleware name in it

// router.post('/index', [users_controller, 'store']).middleware([middleware.userLocation()])

// we can aslo apply the middleware to the group of routes

// router
//   .group(() => {
//     router.get('/index', [users_controller, 'index'])
//     router.post('/index', [users_controller, 'store'])
//   })
//   .middleware([middleware.userLocation()]) // here the middleware is applied to the group of routes

// we can also apply the middleware to the resource controller

// const PostsController = () => import('#controllers/posts_controller')

// router.resource('posts', PostsController).middleware([middleware.userLocation()])
// here the middleware is applied to all the routes of resource controller

//VALIDATION
//now using validation
//the command to be used in the terninal is node ace add vinejs

//now checking the file upload
// first assign a route with the definig in the middleware

// router.post('/posts', [PostsController, 'store']).middleware([middleware.auth_middleware()])
// now we have defined the the route and now defin the controller to upload the file manually check the file

// export default class InvoiceController {
//     update({request}: HttpContext){
//         const invoiceDocument = request.file('document'{
//             size: '2mb',
//             extnames: ['pdf','docx']
//         }) //here we are doimg a manula file validation
//         // here the document is the name of the file input field
//         if(!invoiceDocument.isValid){
//             return Response.badrequest({errors: invoiceDocument.errors})
//         }
//         // now we declaered a error handler
//     }
// }
//
