import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthContext";
import {Formik,Form,Field,ErrorMessage} from 'formik';

function LogingComponent() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  async function handleSubmit(event) {
    console.log(event)
    if (await auth.login(event.username,event.password)) {
      navigate(`/welcome/${event.username}`)
    }
  }
  function validate(values){
    const errors={}
    if(values.username.length<5){
      errors.username="at least 5 characters"
    }
    return errors;
  }
  return (
    <div className="LogingComponent">
      <Formik  
        initialValues={{username,password}} 
        enableReinitialize={true} 
        onSubmit={handleSubmit}
        validate={validate}>
        <Form className='m-5'>
          <h1>Login</h1>
          {/* {!auth.isAuth && <div className='alert alert-warning'>Username or password incorrect</div>} */}
          <ErrorMessage name='username' component='div' className='alert alert-warning'/>
          <fieldset className='form-group'>
            <label htmlFor="username">username:</label>
            <Field type="text" name="username" className="form-control"></Field>
          </fieldset>
          <fieldset className='form-group'>
            <label htmlFor="password">password:</label>
            <Field type="password" name="password" className="form-control"></Field>
          </fieldset>
          <div>
            <button type="submit" className='btn btn-success m-5'>submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default LogingComponent;
