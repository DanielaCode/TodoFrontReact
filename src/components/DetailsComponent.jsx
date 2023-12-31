import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createTodo, getTodoById, updateTodoById } from '../api/TodoApiService';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import { useAuth } from '../providers/AuthContext';


export default function DetailsComponent() {
  const {id} = useParams();
  const [description,setDescription] = useState();
  const [targetDate,setTargetDate] = useState();
  const navigate = useNavigate();
  const auth = useAuth();
  useEffect(()=>{getTodoInfo()},[id])

  function getTodoInfo(){
    if(id!=='-1'){
      getTodoById(auth.username,id)
      .then(response=>{
        setDescription(response.data.description)
        setTargetDate(response.data.targetDate)
      })
      .catch(error=>console.log(error))
    }
  }

  function onSubmit(values){
    const todo={
      username:auth.username,
      description:values.description,
      targetDate:values.targetDate,
      done:false
    }
    if(id==='-1'){
      createTodo(auth.username,todo)
      .then(navigate('/todos'))
      .catch(error=>console.log(error))
    }else{
      updateTodoById(auth.username,id,todo)
      .then(navigate('/todos'))
      .catch(error=>console.log(error))
    }
  }

  function validate(values){
    const errors={}
    if(values.description.length<5){
      errors.description="at least 5 characters"
    }
    return errors
  }

  return (
    <div>
      <Formik 
        initialValues={{description,targetDate}} 
        enableReinitialize={true} 
        onSubmit={onSubmit}
        validate={validate}>
        <Form className='m-5'>
          <ErrorMessage name='description' component='div' className='alert alert-warning'/>
          <fieldset className='form-group'>
            <label htmlFor="description">Description:</label>
            <Field type="text" name="description" className="form-control"></Field>
          </fieldset>
          <fieldset className='form-group'>
            <label htmlFor="targetDate">Target date:</label>
            <Field type="date" name="targetDate" className="form-control"></Field>
          </fieldset>
          <div>
            <button type="submit" className='btn btn-success m-5'>submit</button>
          </div>
        </Form>
      </Formik>  
    </div>
  )
}
