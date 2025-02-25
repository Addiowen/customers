import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/commons/page-header';
import ImportButton from '@/app/shared/commons/import-button';
import CreateInvoice from '@/app/shared/invoice/create-invoice';
import { metaObject } from '@/config/site.config';
import GenerateInvoice from '@/app/shared/admin/profile/create-profile/professional/page';
import GenerateInvoiceProfessional from '@/app/shared/customers/requisitions/create-requisition/professional';
import GenerateInvoiceFundi from '@/app/shared/customers/requisitions/create-requisition/fundi';

export const metadata = {
  ...metaObject('Create Invoice'),
};

const pageHeader = {
  title: 'Create Invoice',
};

export default function InvoiceCreatePage() {
  return (
    <>
      <GenerateInvoiceFundi />
    </>
  );
}
