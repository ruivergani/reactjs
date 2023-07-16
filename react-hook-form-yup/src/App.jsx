import {useState} from 'react';

// Import React Hook Form = ajuda a nao precisar criar estados de input (consegue pegar os valores em um objeto)
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
  password: yup.string().required('Password is required').min(6, 'Min 6 charaters'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'Password must match')
}).required(); // Schema is required in the form

export function App() {
  const [isSuccess, setIsSuccess] = useState(false);

  // Methods to use React Hook Form
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema) // React Hook Form conected with Schema
  });
  // register = registrar os fields de acordo com schema
  // handleSubmit = fazer algo com o sucesso do formulario
  // formState = errors para resposta caso nao validar
  // onSubmit
  const onSubmit = (data) => {
    setIsSuccess(true); // display Success image
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
            {...register("name")}
            className={(errors.name) ? `${formStyles.inputError}` : ``} // if exists error add the class inputError to the input
          />
          <span className={(errors.name) ? `${formStyles.labelError}` : ``}>{errors.name?.message}</span>
        </div>
        <div className={formStyles.formGroup}>
          <input 
            type="email" 
            placeholder="Type your e-mail"
            {...register("email")}
            className={(errors.email) ? `${formStyles.inputError}` : ``}
          />
          <span className={(errors.email) ? `${formStyles.labelError}` : ``}>{errors.email?.message}</span>
        </div>
        <div className={formStyles.formGroup}>
          <input 
            type="password" 
            placeholder="Type your password"
            {...register("password")}
            className={(errors.password) ? `${formStyles.inputError}` : ``} 
          />
          <span className={(errors.password) ? `${formStyles.labelError}` : ``}>{errors.password?.message}</span>
        </div>
        <div className={formStyles.formGroup}>
          <input 
            type="password" 
            placeholder="Confirm your password"
            {...register("password_confirmation")}
            className={(errors.password_confirmation) ? `${formStyles.inputError}` : ``} 
          />
          <span className={(errors.password_confirmation) ? `${formStyles.labelError}` : ``}>{errors.password_confirmation?.message}</span>
        </div>
        <button type="submit" className={formStyles.formSubmitButton}>Send Form</button>
        {
          isSuccess && <p className={formStyles.sucessMessage}>Formulario sent sucessfully.</p>
        }
      </form>
    </div>
  );
}

export default App;
