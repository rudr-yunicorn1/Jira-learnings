import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

//the command to create middleware
//node ace make:middleware 'midlewaer name'

// export default class UserLocationMiddleware {
//   //   This defines a middleware unit:
//   // It will be executed for every request where it is applied
//   // Each request gets its own execution

//   async handle(ctx: HttpContext, next: NextFn) {
//     //handle is the entry point in the middleware
//     // adonish js aoutomaticaly execute it first
//     /**
//      * Middleware logic goes here (before the next call)
//      */
//     console.log(ctx)

//     /**
//      * Call next method in the pipeline and return its output
//      */
//     const output = await next()
//     return output
//   }
// }

// Middleware is a layer that sits:

// between the incoming request and the controller

// It can observe, modify, allow, or block the request
export default class UserLocationMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    // console.log(ctx)
    //we usaly dont use the ctx because the it stores a lot of information which we dont need
    //rather than that we can destruture the ctx to get only what we need
    const { request } = ctx
    console.log('Request URL:', request.url())
    /**
     * Middleware logic goes here (before the next call)
     */
    const output = await next()
    return output
  }
}
//abort request
// we can also abort the request in the middleware itself based on some condition

// export default class UserLocationMiddleware {
//   async handle(ctx: HttpContext, next: NextFn) {
//     const { request, response } = ctx

//     // Example condition to abort the request
//     if (request.url() === '/forbidden') {
//       return response.status(403).send('Access Forbidden')
//     }

//     /**
//      * Middleware logic goes here (before the next call)
//      */
//     const output = await next()
//     return output
//   }
// }

//send a response and dont send the request to next function
// export default class UserLocationMiddleware {
//   async handle(ctx: HttpContext, next: NextFn) {
//     const { request, response } = ctx

//     // Example condition to send a custom response
//     if (request.url() === '/custom-response') {
//       return response.send('This is a custom response from middleware')
//     }

//     /**
//      * Middleware logic goes here (before the next call)
//      */
//     const output = await next()
//     return output
//   }
// }

//middlewaare can aslo use parameters
//the middleware let chose route to how middlware behave
//and then we can pass those parameters while applying the middleware to the route

// type AuthGuards = 'web' | 'api'
//here the typescrit used to define the type and prevent invalid configurations

// export default class AuthMiddleware { //declaring the middleware
//   async handle(ctx, next, options: { guard: AuthGuards }) {
//here thre perameters are passed to the handle method 1.ctx request context 2.next function 3.options object which contains the guard property

//   }
// }

//route
// import router from '@adonisjs/core/services/router'
// import { middleware } from '#start/kernel'

// router.get('payments', () => {}).use(
//   middleware.auth({ guard: 'web' })
// )

//dependency injection in middleware
//service file
//export class GeoIpService {
//   async lookup(ipAddress: string) {
//     // lookup location and return
//   }
// }

//middleware file
//import { inject } from '@adonisjs/core'
// import { GeoIpService } from '#services/geoip_service'
// import type { HttpContext } from '@adonisjs/core/http'
// import type { NextFn } from '@adonisjs/core/types/http'

// @inject()
// export default class UserLocationMiddleware {
//   constructor(protected geoIpService: GeoIpService) {
//   }

//   async handle(ctx: HttpContext, next: NextFn) {
//     const ip = ctx.request.ip()
//     ctx.location = await this.geoIpService.lookup(ip)
//   }
// }
//we usualy store the NextFn in the next keyword amd use it to redirect to next middlewaere or the function with awit
//we use ctx for the http context request response and all the aother information
//like ctx.request ctx.response etc
// how we usuay assign a middleware to a route
// import router from '@adonisjs/core/services/router'
// import { middleware } from '#start/kernel'

// router.get('profile', () => {}).use(
//   middleware.userLocationMiddleware
// )
//we can also assign multiple middlewares to a single route
// router.get('dashboard', () => {}).use([
//   middleware.auth,
//   middleware.userLocationMiddleware
// ])
