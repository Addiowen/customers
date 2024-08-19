import Link from 'next/link';
import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/commons/page-header';
import { Button } from 'rizzui';
import { routes } from '@/config/routes';
import CreateEditProduct from '@/app/shared/admin/product/create-edit';
import CreateProfessionalForm from '@/app/shared/admin/profile/create-profile/professional/page';

export const metadata = {
  ...metaObject('Professional Profile'),
};

const pageHeader = {
  title: '',
  breadcrumb: [
    {
      href: routes.admin.dashboard,
      name: '',
    },
    {
      href: routes.admin.createProfessionalProfile,
      name: '',
    },
    {
      name: '',
    },
  ],
};

export default function CreateProfessionalPage() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>

      <CreateProfessionalForm />
    </>
  );
}
