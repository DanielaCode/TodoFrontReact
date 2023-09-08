import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthContext";
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';

const SingupSchema= Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});


function LogingComponent() {
  const navigate = useNavigate();
  const auth = useAuth();
  async function handleSubmit(event) {
    console.log(event)
    if (await auth.login(event.username,event.password)) {
      navigate(`/welcome/${event.username}`)
    }
  }
  
  return (
    <div className="LogingComponent">
      <Formik  
        initialValues={{username:"",password:""}} 
        enableReinitialize={true} 
        onSubmit={handleSubmit}
        validationSchema={SingupSchema}>
        <Form className='container w-25'>
          <h1 className="m-5">Login</h1>
          {/* {!auth.isAuth && <div className='alert alert-warning'>Username or password incorrect</div>} */}
          <ErrorMessage name='username' component='div' className='alert alert-warning'/> 
          <ErrorMessage name='password' component='div' className='alert alert-warning'/>
          <fieldset className='form-group mb-3'>
            <label className="p-0 m-0 w-100" htmlFor="username">Username:</label>
            <Field type="text" name="username" className="form-control"></Field>
          </fieldset>
          <fieldset className='form-group'>
            <label className="p-0 m-0 w-100" htmlFor="password">Password:</label>
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
