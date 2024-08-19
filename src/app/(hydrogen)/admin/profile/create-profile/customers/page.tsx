import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/commons/page-header';
import { Button } from 'rizzui';
import { routes } from '@/config/routes';
import CreateEditProduct from '@/app/shared/admin/product/create-edit';
import CreateCustomerForm from '@/app/shared/admin/profile/create-profile/customers/page';

export const metadata = {
  ...metaObject('Fundi Profile'),
};

const pageHeader = {
  title: 'Customer Profile Creation',
  breadcrumb: [
    {
      href: routes.admin.dashboard,
      name: '',
    },
    {
      href: routes.admin.createCustomerProfile,
      name: '',
    },
    {
      name: '',
    },
  ],
};

export default function CreateCustomer() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>

      <CreateCustomerForm />
    </>
  );
}
