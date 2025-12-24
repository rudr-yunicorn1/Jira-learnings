/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home').as('home')
// in this we are render the data at file home/page at the '/' route.
// now we can define the route.
//mostaly we use the http route.
//and below iam gonna use of them.
//get,post,put and delete

// router.get('/movies', async (ctx) => {
//     ctx.view.share({movie:'my awesome movie'}) // here iam using the vlaue to pass as daynamic key value movie
//     return ctx.view.render('pages/movies')
// }).as('movies.show')
// after the '/movies' , we define a handler that on this route what we have to do

// router.get('/movies',()=>{}).as('movies.index')
// router.get('/movies/awesome-movie',()=>{}).as('movies.show')
// router.post('/movies',()=>{}).as('movie.store')
// router.put('/movies',()=>{}).as('')

// now iam gonaa make routers

router.get('/about', () => {
  return 'this is a about page'
})

// GET method
router.get('/users', () => {})

// POST method
router.post('/users', () => {})

// PUT method
router.put('/users/:id', () => {})

// PATCH method
router.patch('/users/:id', () => {})

// DELETE method
router.delete('/users/:id', () => {})

// Now iam gonna use the params page
router.get('/posts/:id', ({ params }) => {
  // here we are using the param id like we can pass the value in the url// this help us to use functionaity for use first we need to use params keyword then the url definer like in this case id "params.id"
  return `This is post with id ${params.id}`
})

// now making a optional param
router.get('/post/:comment?', ({ params }) => {
  // here we are taking param or data from url in optional way if user wqant he can give or not
  if (!params.comment) {
    //checking if the param is empty or not
    return 'this comment is empty' //return it if the param is empty
  }
  return `this comment consist of ${params.comment}` // return if the param have data
})
// now gonna make a wildcard paramer
