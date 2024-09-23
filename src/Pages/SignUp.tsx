
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const SignUpForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        try {
            const response = await axios.post('http://localhost:3000/sign_up', data);
            console.log('User registered:', response.data);

             
            toast.success('Registration successful!');

    
            reset();
        } catch (error) {
            console.error('There was an error registering the user!', error);
            
            toast.error('Registration failed! Please try again.');
        }
    };

    return (
        <>

            <div className='mt-10'>

                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input
                            {...register('username', { required: true })}
                            className={`mt-1 block w-full p-2 border rounded-md ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.username && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            {...register('name', { required: true })}
                            className={`mt-1 block w-full p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>

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

                    <div className="mb-4">
                        <label className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            {...register('cPassword', { required: true })}
                            className={`mt-1 block w-full p-2 border rounded-md ${errors.cPassword ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.cPassword && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200">
                        Sign Up
                    </button>
                </form>

            </div>
            <div className='flex justify-center items-center mt-6'>
                <span className='font-normal'>Already have Account <Link to='/login' className='text-blue-500 font-semibold hover:underline'>Login</Link></span>
            </div>
        </>
    );
};

export default SignUpForm;
