'use client';
import StatusField from '@/components/controlled-table/status-field';
import { Button } from 'rizzui';
import { PiTrashDuotone } from 'react-icons/pi';

const categoryOptions = [
  {
    label: 'Fundi',
    value: 'Fundi',
  },
  {
    label: 'Professional',
    value: 'Professional',
  },
  {
    label: 'Contractor',
    value: 'Contractor',
  },
];

const locationOptions = [
  {
    label: 'Bamburi, Mombasa',
    value: 'Bamburi, Mombasa',
  },
  {
    label: 'Kasarani ,Nairobi',
    value: 'Kasarani ,Nairobi',
  },
  {
    label: 'Westlands, Nairobi',
    value: 'Westlands, Nairobi',
  },
];

const statusOptions = [
  {
    label: 'Live',
    value: 'live',
  },
  {
    label: 'Closed',
    value: 'closed',
  },
];

type FilterElementProps = {
  isFiltered: boolean;
  filters: { [key: string]: any };
  updateFilter: (columnId: string, filterValue: string | any[]) => void;
  handleReset: () => void;
};
export default function FilterElement({
  isFiltered,
  filters,
  updateFilter,
  handleReset,
}: FilterElementProps) {
  return (
    <div className="flex w-full flex-col items-center gap-3 @[29rem]:flex-row @[42rem]:w-auto @[57rem]:-ms-4">
      <div className="flex w-full flex-col gap-3 @[22rem]:flex-row @[42rem]:w-auto">
        <StatusField
          dropdownClassName="!z-10"
          className="w-full min-w-[158px] @[42rem]:w-auto"
          placeholder="Category"
          options={categoryOptions}
          value={filters['type']}
          onChange={(value: string) => {
            updateFilter('type', value);
          }}
          getOptionValue={(option: { value: any }) => option.value}
          displayValue={(selected: string) =>
            categoryOptions.find((option) => option.label === selected)
              ?.label ?? ''
          }
          placement="bottom-start"
        />
        <StatusField
          placeholder="Status"
          dropdownClassName="!z-10"
          className="w-full min-w-[145px] @[42rem]:w-auto"
          options={statusOptions}
          value={filters['status']}
          onChange={(value: string) => {
            updateFilter('status', value);
          }}
          getOptionValue={(option) => option.label}
        />
      </div>
      {isFiltered ? (
        <Button
          size="sm"
          onClick={() => {
            handleReset();
          }}
          className="h-8 bg-gray-200/70"
          variant="flat"
        >
          <PiTrashDuotone className="me-1.5 h-[17px] w-[17px]" /> Clear
        </Button>
      ) : null}
    </div>
  );
}
