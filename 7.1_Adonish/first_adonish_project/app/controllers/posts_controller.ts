import type { HttpContext } from '@adonisjs/core/http'
//resource driven controller
//to create the the resource controller node ace make:controller posts --resource
//need to use the command -node ace make:controller posts --resource
export default class PostsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return 'working'
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {
    return 'working'
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    console.log(request.body())
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
