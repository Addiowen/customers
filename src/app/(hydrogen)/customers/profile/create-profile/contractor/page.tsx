import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/commons/page-header';
import { Button } from 'rizzui';
import { routes } from '@/config/routes';
import CreateEditProduct from '@/app/shared/admin/product/create-edit';
import CreateContractorForm from '@/app/shared/admin/profile/create-profile/contractor/page';

export const metadata = {
  ...metaObject('Contractor Profile'),
};

const pageHeader = {
  title: 'Contractor Profile Creation',
  breadcrumb: [
    {
      href: routes.admin.dashboard,
      name: 'Service Providers',
    },
    {
      href: routes.admin.createContractorProfile,
      name: 'Contractor',
    },
    {
      name: 'Create profile',
    },
  ],
};

export default function CreateProductPage() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>

      <CreateContractorForm />
    </>
  );
}
