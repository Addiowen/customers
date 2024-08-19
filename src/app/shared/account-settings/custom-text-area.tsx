'use client';

import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';
import { SubmitHandler, Controller } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { Loader, Text, Input } from 'rizzui';
import FormGroup from '@/app/shared/commons/form-group';
import FormFooter from '@/components/form-footer';
import {
  defaultValues,
  personalInfoFormSchema,
  PersonalInfoFormTypes,
} from '@/utils/validators/personal-info.schema';
import WidgetCard from '@/components/cards/widget-card';

const Select = dynamic(() => import('rizzui').then((mod) => mod.Select), {
  ssr: false,
  loading: () => (
    <div className="grid h-10 place-content-center">
      <Loader variant="spinner" />
    </div>
  ),
});

const QuillEditor = dynamic(() => import('@/components/ui/quill-editor'), {
  ssr: false,
});

export default function CustomTextArea({ className }: { className?: string }) {
  const onSubmit: SubmitHandler<PersonalInfoFormTypes> = (data) => {
    toast.success(<Text as="b">Successfully added!</Text>);
    console.log('Profile settings data ->', {
      ...data,
    });
  };

  return (
    <WidgetCard
      rounded="lg"
      className={className}
      headerClassName="mb-2 @2xl:mb-5"
    >
      <Form<PersonalInfoFormTypes>
        validationSchema={personalInfoFormSchema}
        // resetValues={reset}
        onSubmit={onSubmit}
        className="@container"
        useFormProps={{
          mode: 'onChange',
          defaultValues,
        }}
      >
        {({ control, formState: { errors } }) => {
          return (
            <>
              <FormGroup
                title=""
                description=""
                className="pt-2 @2xl:pt-4 @3xl:grid-cols-12 @3xl:pt-1"
              />

              <div className="mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11">
                <FormGroup
                  title="Notes"
                  className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
                >
                  <Controller
                    control={control}
                    name="bio"
                    render={({ field: { onChange, value } }) => (
                      <QuillEditor
                        value={value}
                        onChange={onChange}
                        className="@3xl:col-span-2 [&>.ql-container_.ql-editor]:min-h-[100px]"
                        labelClassName="font-medium text-gray-700 dark:text-gray-600 mb-1.5"
                      />
                    )}
                  />
                </FormGroup>
              </div>

              <FormFooter
                // isLoading={isLoading}
                altBtnText="Cancel"
                submitBtnText="Assign Service Providers"
              />
            </>
          );
        }}
      </Form>
    </WidgetCard>
  );
}
