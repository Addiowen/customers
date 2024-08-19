import { Controller, useFormContext } from 'react-hook-form';
import { Input } from 'rizzui';
import cn from '@/utils/class-names';
import FormGroup from '@/app/shared/commons/form-group';
import {
  categoryOption,
  typeOption,
} from '@/app/shared/ecommerce/product/create-edit/form-utils';
import dynamic from 'next/dynamic';
import SelectLoader from '@/components/loader/select-loader';
import QuillLoader from '@/components/loader/quill-loader';
const Select = dynamic(() => import('rizzui').then((mod) => mod.Select), {
  ssr: false,
  loading: () => <SelectLoader />,
});
const QuillEditor = dynamic(() => import('@/components/ui/quill-editor'), {
  ssr: false,
  loading: () => <QuillLoader className="col-span-full h-[143px]" />,
});

export default function PersonalDetailsForm({
  className,
}: {
  className?: string;
}) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormGroup
      title="Personal Details"
      description="Edit your product description and necessary information from here"
      className={cn(className)}
    >
      <Input
        label="Company Name"
        placeholder="Company Name"
        {...register('title')}
        error={errors.title?.message as string}
      />

      <Input
        label="Company Email"
        placeholder="Company Email"
        {...register('sku')}
        error={errors.sku?.message as string}
      />

      <Input
        label="Company Number"
        placeholder="Company Number"
        {...register('sku')}
        error={errors.sku?.message as string}
      />
      <Input
        label="Contact Person First Name"
        placeholder="Contact Person First Name"
        {...register('sku')}
        error={errors.sku?.message as string}
      />
      <Input
        label="Contact Person Last Name"
        placeholder="Contact Person Last Name"
        {...register('sku')}
        error={errors.sku?.message as string}
      />
      <Input
        label="County"
        placeholder="County"
        {...register('sku')}
        error={errors.sku?.message as string}
      />

      <Input
        label="Sub County"
        placeholder="Sub County"
        {...register('sku')}
        error={errors.sku?.message as string}
      />

      <Input
        label="Estate"
        placeholder="Estate"
        {...register('sku')}
        error={errors.sku?.message as string}
      />
    </FormGroup>
  );
}
