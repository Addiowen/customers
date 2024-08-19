import { CustomerSignUpFormSchema } from '@/utils/validators/custom-signup.schema';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type MultiStepFormProps = {
  children: (
    currentStep: number,
    delta: number,
    register: UseFormRegister<CustomerSignUpFormSchema>,
    errors: FieldErrors<CustomerSignUpFormSchema>
  ) => React.ReactNode;
};

export type MultiStepFormSteps = {
  id: string;
  name: string;
  fields?: string[];
};
