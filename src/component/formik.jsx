import { useFormik } from 'formik'
import React from 'react'

export const Formik = () => { 
    const formik= useFormik({
        initialValues:{
            name:'React'
        }
    })
  return (
    <>
    <h1>formik</h1>
    <form onSubmit={formik.handleSubmit} >
        <div className='formik-controller'>
            <input name="name" placeholder='Name' value={formik.name.value} onChange={formik.handleChange} />
        </div>
        <button type="submit">Submit</button>
    </form>
    </>
  );
}
