'use client';
import React from 'react';
import { useFormik} from 'formik';
import Link from 'next/link';


const page = () => {
    interface formSchema{
        email?: string,
        password?:string
    }
    const validate = (values:formSchema)=>{
        const errors:formSchema ={};

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

        return errors
    }
    const formik = useFormik({
        initialValues:{
            email:"",
            password:'',
        },
        validate,
        onSubmit: (values )=>{
            alert( JSON.stringify(values,null, 2))
        }
    });
  return (
    <div className=' flex justify-center items-center h-[100vh]'>
        <form onSubmit={formik.handleSubmit} className=' p-10 shadow-lg shadow-gray-400 rounded-lg flex flex-col gap-5 w-[40%] '>
            <h1 className=' text-center text-4xl font-semibold tracking-wider'>LOGIN</h1>

            
            <input className=' border border-gray-200 py-2 px-3 rounded-md' 
            type="email" name="email" 
            placeholder=' enter email address' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                  
            {formik.errors.email && formik.touched.email && <span className=' text-red-500 text-xs font-light'>{formik.errors.email}</span>}

            <input className=' border border-gray-200 py-2 px-3 rounded-md' 
            type="password" name="password" 
            placeholder=' enter passsword' onChange={formik.handleChange} value={formik.values.password} />

            {formik.errors.password && formik.touched.password && <span className=' text-red-500 w-fit text-xs font-light'>{formik.errors.password}</span>}
            <Link href='/register' className=' text-sm underline'> create an account</Link>
            <button type='submit' className=' border-2 hover:border-green-500  hover:text-green-500 hover:bg-white bg-green-500 rounded-lg text-white px-4 py-2 transition-all ease-in-out duration-150'>Login</button>
        </form>
    </div>
  )
}

export default page