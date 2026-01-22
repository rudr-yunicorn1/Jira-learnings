import * as yup from 'yup'

export const validation =  yup.object().shape({
            name:yup.string().required("Name is required"),
            email:yup.email().uniq().required('Email Valid Email').matches(),
          })

export default validation