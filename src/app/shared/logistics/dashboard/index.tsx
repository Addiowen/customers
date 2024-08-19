import dayjs from 'dayjs';
import JobDetailsCard from './job-details';
import CustomerDetailsCard from '@/app/shared/logistics/dashboard/cutomer-details';
import CustomTextArea from '../../account-settings/custom-text-area';
const thisMonth = dayjs(new Date()).format('MMMM YYYY');

export default function JobDetailsDashboard() {
  return (
    <div className="@container">
      <div className="grid grid-cols-12 gap-6 @4xl:grid-cols-1 3xl:gap-8">
        <CustomerDetailsCard className="col-span-full" />
        <JobDetailsCard className="col-span-full" />
        <CustomTextArea className="col-span-full" />
      </div>
    </div>
  );
}
