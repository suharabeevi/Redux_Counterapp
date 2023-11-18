import { useForm } from 'react-hook-form'
import React from 'react'
import { DevTool } from '@hookform/devtools';


const  Form =()=> {
    const form=useForm();
    const {register,control,handleSubmit,formState} =form
    const {errors} = formState
    const onSubmit=(data)=>{
 console.log('form submitted',data);
    }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form  onSubmit={handleSubmit(onSubmit)}   noValidate style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '300px' }} >
        <div className='form-control'>
        <label htmlFor="username" style={{ display: 'block', marginBottom: '8px', color: '#333' }}>User name</label>
        <input type="text" id="username" name="username" {...register('username',{required:{
            value:true,
            message:"user name is requied",
        }
        
        })} style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} required />
<p className='error'>{errors.username?.message}</p>
</div>
<div className='form-control'>

        <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: '#333' }}>Email</label>
        <input type="email" id="email" name="email" {...register('email',{required:{
            value:true,
            message:"email is requied",
        },
          validate:(fieldValue)=>{
          return fieldValue !== "admin123@gmail.com" || "Enter a Different Emailid"
       }
        })}  style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} required />
<p className='error'>{errors.email?.message}</p>
</div>
<div className='form-control'>

        <label htmlFor="channel" style={{ display: 'block', marginBottom: '8px', color: '#333' }}>Channel</label>
        <input type="text" id="channel" name="channel"  {...register('channel',{required:{
            value:true,
            message:"channel is requied",
        }
        ,})} style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} required />
<p className='error'>{errors.channel?.message}</p>
</div>
        <button type="submit" style={{ backgroundColor: '#4caf50', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
      </form>
      <DevTool control={control}/>
    </div>
  )
}

export default Form
