/* eslint-disable no-unused-vars */
// Import React Hook Form
import { useForm } from 'react-hook-form';
// Import Yup
import { yupResolver } from '@hookform/resolvers/yup'; 
import * as yup from 'yup';
// Import CSS Modules
import formStyles from './form.module.css';

// Create Validation Schema
const schema = yup.object({
  // Fields validations
  name: yup.string().required('Name is required'),
  email: yup.string().required('E-mail is required').email('E-mail not valid.'),
  password: yup.string().required('Password is required').min(6, 'Min 6 charaters')
}).required(); // Schema is required in the form

export function App() {
  // Methods to use React Hook Form
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema) // React Hook Form conected with Schema
  });
  // register = registrar os fields de acordo com schema
  // handleSubmit = fazer algo com o sucesso do formulario
  // formState = errors para resposta caso nao validar

  // onSubmit
  const onSubmit = (data) => {
    console.log(data);
    console.log('Form data was sent.');
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit(onSubmit)} className={formStyles.contentForm}>
        <div className={formStyles.formGroup}>
          <input 
            type="text" 
            placeholder="Type your name"
          />
        </div>
        <div className={formStyles.formGroup}>
          <input 
            type="email" 
            placeholder="Type your e-mail"
          />
        </div>
        <div className={formStyles.formGroup}>
          <input 
            type="password" 
            placeholder="Type your password"
          />
        </div>
        <div className={formStyles.formGroup}>
          <input 
            type="password" 
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit" className={formStyles.formSubmitButton}>Send Form</button>
      </form>
    </div>
  );
}

export default App;
