'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { InputField } from '@/components/form/InputField';
import { PasswordField } from '@/components/form/PasswordField';
import { Button } from '@/components/ui/button';

import { authenticate } from './actions';

type LoginFormType = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormType>();

  const submitFn = (data: LoginFormType) => {
    const formData = new FormData();

    formData.append('email', data.email);
    formData.append('password', data.password);

    authenticate(formData);
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(submitFn)}>
      <div className="flex flex-col w-full gap-4">
        <InputField
          label="Email"
          errorMessage={errors?.email?.message}
          placeholder="Enter your email address"
          {...register('email')}
        />
        <PasswordField
          label="Password"
          errorMessage={errors?.password?.message}
          fieldValue={watch('password')}
          {...register('password')}
        />
      </div>
      <Button type="submit" className="bg-brandGreen hover:bg-opacity-80 hover:bg-brandGreen">
        Login
      </Button>

      <Link href="/register" className="self-center">
        <p className="text-sm underline hover:text-brandBlue">Register</p>
      </Link>
    </form>
  );
};
