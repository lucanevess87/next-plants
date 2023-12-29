'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { InputField } from '@/components/form/InputField';
import { PasswordField } from '@/components/form/PasswordField';
import { Button } from '@/components/ui/button';

import { createUserMutation } from './actions';

export type RegisterFormType = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

export const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormType>();

  const submitFn = (data: RegisterFormType) => {
    createUserMutation(data);
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
        <InputField
          label="Name"
          errorMessage={errors?.name?.message}
          placeholder="Enter your name"
          {...register('name')}
        />
        <PasswordField
          label="Password"
          errorMessage={errors?.password?.message}
          fieldValue={watch('password')}
          {...register('password')}
        />
        <PasswordField
          label="Password"
          errorMessage={errors?.confirmPassword?.message}
          fieldValue={watch('confirmPassword')}
          {...register('confirmPassword')}
        />
      </div>
      <Button type="submit" className="bg-brandGreen hover:bg-opacity-80 hover:bg-brandGreen">
        Register
      </Button>

      <Link href="/login" className="self-center">
        <p className="text-sm underline hover:text-brandBlue">Back</p>
      </Link>
    </form>
  );
};
