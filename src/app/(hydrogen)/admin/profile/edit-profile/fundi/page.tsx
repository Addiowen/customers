import { Button } from 'rizzui';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/commons/page-header';
import Link from 'next/link';
import OrderView from '@/app/shared/admin/order/order-view';
import EditFundiForm from '@/app/shared/admin/profile/edit-profile/fundi/page';

export default function OrderDetailsPage({ params }: any) {
  const pageHeader = {
    title: ``,
    breadcrumb: [
      {
        href: routes.admin.dashboard,
        name: '',
      },
      {
        href: routes.admin.editFundiProfile,
        name: '',
      },
      {
        name: params.id,
      },
    ],
  };
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link
          href={routes.eCommerce.editOrder(params.id)}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        ></Link>
      </PageHeader>
      <EditFundiForm />
    </>
  );
}
