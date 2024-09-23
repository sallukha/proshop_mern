
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const SignUpForm = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    try {
     const response =  await axios.post('http://localhost:3000/log_in', data);
      // console.log('User Login:', response.data);

      toast.success('Login successful');
      navigate('/');

    } catch (error) {
      console.error('There was an error registering the user!', error);

      toast.error('Login failed! Please try again.');
    }
  };

  return (
    <>

      <div className='mt-10'>

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Log in</h2>



          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              {...register('email', { required: true })}
              className={`mt-1 block w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register('password', { required: true })}
              className={`mt-1 block w-full p-2 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
          </div>



          <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200">
            Log in
          </button>
        </form>

      </div>

    </>
  );
};

export default SignUpForm;
