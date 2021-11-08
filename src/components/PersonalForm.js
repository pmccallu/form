import React from 'react'
import { useFormik} from 'formik'
import * as Yup from 'yup'

export const personalForm = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required').max(50),
        email: Yup.string.email().required('Required'),
        password: Yup.string().min(8).max(20).required(),
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
           {formik.errors.name ? 
           <div>{formik.errors.name}</div> : null}
           <label htmlFor="email">Email</label>
           <input
             id="email"
             name="email"
             type="email"
             onChange={formik.handleChange}
             value={formik.values.email}
           />
           {formik.errors.password ? 
           <div>{formik.errors.password}</div> : null}
          <label htmlFor="password">password</label>
           <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
           />
           {formik.errors.dob ? 
           <div>{formik.errors.dob}</div> : null}
           <button type="submit">Submit</button>
           </form>
     );
     };
