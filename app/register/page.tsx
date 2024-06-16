'use client';
import React from 'react'
import { useFormik} from 'formik';



const Page = () => {
    interface formSchema{
        email?: string,
        firstName?: string,
        lastName?:string,
        password?:string,
        confirmPassword?:string
    }
    const validate = (values:formSchema)=>{
        const errors:formSchema ={};

        if (!values.firstName) {
            errors.firstName = 'Required'
        } else if (values.firstName.length < 2) {
            errors.firstName = 'Enter a valid name'
        }
        if (!values.lastName) {
            errors.lastName = 'Required'
        } else if (values.lastName.length < 2) {
            errors.lastName = 'Enter a valid name'
        }

        if (!values.email) {
            errors.email = 'Required' ;
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required'
        } else if (!/^(?=.*\d)(?=.*[A-Z])(?=.*\W)[^\s]{8,}$/.test(values.password)) {
            errors.password = 'Password must include an Uppercase letter, a symbol and a number'
            
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = 'confirm your password'
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'passwords do not match'
        }

        return errors
    }

    const formik = useFormik({
        initialValues:{
            email:"",
            firstName:"",
            lastName:"",
            password:'',
            confirmPassword:""
        },
        validate,
        onSubmit: (values )=>{
            alert( JSON.stringify(values,null, 2))
        }
    });
  return (
    <div className=' flex justify-center items-center h-[100vh]'>
        <form onSubmit={formik.handleSubmit} className=' p-10 shadow-lg shadow-gray-400 rounded-lg flex flex-col gap-5 w-[40%] '>
            <h1 className=' text-4xl font-semibold'>Register an Account</h1>

            <input className=' border border-gray-200 py-2 px-3 rounded-md' 
            type="text" name="firstName" 
            placeholder='enter first name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} />
            
            {formik.errors.firstName && formik.touched.firstName && <div className=' text-red-500 text-xs font-light'>{formik.errors.firstName}</div>}


            <input className=' border border-gray-200 py-2 px-3 rounded-md' 
            type="text" name="lastName" 
            placeholder=' enter last name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} />

            {formik.errors.lastName && formik.touched.lastName && <div className=' text-red-500 text-xs font-light'>{formik.errors.lastName}</div>}

            
            <input className=' border border-gray-200 py-2 px-3 rounded-md' 
            type="email" name="email" 
            placeholder=' enter email address' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                  
            {formik.errors.email && formik.touched.email && <div className=' text-red-500 text-xs font-light'>{formik.errors.email}</div>}

            <input className=' border border-gray-200 py-2 px-3 rounded-md' 
            type="password" name="password" 
            placeholder=' enter passsword' onChange={formik.handleChange} value={formik.values.password} />

            {formik.errors.password && <div className=' text-red-500 text-xs font-light'>{formik.errors.password}</div>}


            <input className=' border border-gray-200 py-2 px-3 rounded-md' 
            type="password" name="confirmPassword" 
            placeholder=' confirm password' onChange={formik.handleChange} value={formik.values.confirmPassword} />

            {formik.errors.confirmPassword && <div className=' text-red-500 text-xs font-light'>{formik.errors.confirmPassword}</div>}

            <button type='submit' className=' bg-green-500 rounded-lg text-white px-4 py-2'>click</button>
        </form>
    </div>
  )
}

export default Page