
// import './App.css' // this is the css file which is already ob the give
// import Navbar from './component/navbar.jsx'
// import Formik from './component/formik.jsx'
import { useFormik } from 'formik'

import  validation  from './constants/validation'
// import './App.css'

function App() {
  const formik= useFormik({
          initialValues:{
              name:'',
              email:''
          },
          validationSchema:validation,
          onSubmit:( Values ) =>{
            console.log('Values',Values)
          },
      })

  return (
    <>
    <div>
      <h1>formik</h1>
      <form onSubmit={formik.handleSubmit} >
        <div className='formik-controller'>
          <input name="name" placeholder='Name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          {formik?.errors?.name && formik?.touched?.name ?<p>{formik?.errors?.name}</p>:""}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div>
      <form onSubmit={formik.handleSubmit} >
        <div className='formik-controller'>
          <input name="email" placeholder='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik?.errors?.name && formik?.touched?.email ? <p>{formik?.errors?.name}</p>:""}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default App


