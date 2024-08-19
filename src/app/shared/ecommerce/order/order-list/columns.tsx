'use client';

import Link from 'next/link';
import { HeaderCell } from '@/components/ui/table';
import { Badge, Text, Tooltip, ActionIcon } from 'rizzui';
import { routes } from '@/config/routes';
import EyeIcon from '@/components/icons/eye';
import PencilIcon from '@/components/icons/pencil';
import TableAvatar from '@/components/ui/avatar-card';
import DateCell from '@/components/ui/date-cell';
import DeletePopover from '@/app/shared/commons/delete-popover';

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case 'pending':
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium text-orange-dark">{status}</Text>
        </div>
      );
    case 'completed':
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-dark">{status}</Text>
        </div>
      );
    case 'cancelled':
      return (
        <div className="flex items-center">
          <Badge color="danger" renderAsDot />
          <Text className="ms-2 font-medium text-red-dark">{status}</Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium text-gray-600">{status}</Text>
        </div>
      );
  }
}

type Columns = {
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
};

export const getColumns = ({
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
}: Columns) => [
  {
    title: <HeaderCell title="Order ID" />,
    dataIndex: 'id',
    key: 'id',
    width: 120,
    render: (value: string) => <Text>#{value}</Text>,
  },
  {
    title: <HeaderCell title="Customer" />,
    dataIndex: 'customer',
    key: 'customer',
    width: 450,
    render: (_: any, row: any) => (
      <TableAvatar
        src={row.avatar}
        name={row.name}
        // description={row.email.toLowerCase()}
      />
    ),
  },
  {
    title: <HeaderCell title="Phone Number" />,
    dataIndex: 'phone',
    key: 'phone',
    width: 100,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">{value}</Text>
    ),
  },
  {
    title: <HeaderCell title="Email" />,

    dataIndex: 'email',
    key: 'email',
    width: 20,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">${value}</Text>
    ),
  },
  {
    title: <HeaderCell title="Gender" />,

    dataIndex: 'gender',
    key: 'gender',
    width: 150,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">${value}</Text>
    ),
  },
  {
    title: <HeaderCell title="Age" />,

    dataIndex: 'age',
    key: 'age',
    width: 150,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">${value}</Text>
    ),
  },
  {
    title: <HeaderCell title="Location" />,

    dataIndex: 'location',
    key: 'location',
    width: 150,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">${value}</Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Joined Date"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'createdAt'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('createdAt'),
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: 200,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: <HeaderCell title="Status" />,
    dataIndex: 'status',
    key: 'status',
    width: 140,
    render: (value: string) => getStatusBadge(value),
  },
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
    dataIndex: 'action',
    key: 'action',
    width: 130,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-end gap-3 pe-4">
        <Tooltip
          size="sm"
          content={'Edit Order'}
          placement="top"
          color="invert"
        >
          <Link href={routes.eCommerce.editOrder(row.id)}>
            <ActionIcon
              as="span"
              size="sm"
              variant="outline"
              className="hover:text-gray-700"
            >
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <Tooltip
          size="sm"
          content={'View Order'}
          placement="top"
          color="invert"
        >
          <Link href={routes.eCommerce.orderDetails(row.id)}>
            <ActionIcon
              as="span"
              size="sm"
              variant="outline"
              className="hover:text-gray-700"
            >
              <EyeIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <DeletePopover
          title={`Delete the order`}
          description={`Are you sure you want to delete this #${row.id} order?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
];

export const getWidgetColumns = ({
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
}: Columns) => [
  {
    title: (
      <HeaderCell title="NO." className="ps-4 [&>div]:whitespace-nowrap" />
    ),
    dataIndex: 'id',
    key: 'id',
    width: 90,
    render: (value: string, row: any) => (
      <Link
        href={routes.eCommerce.editOrder(row.id)}
        className="ps-4 hover:text-gray-900 hover:underline"
      >
        #{value}
      </Link>
    ),
  },
  {
    title: <HeaderCell title="First Name" />,
    dataIndex: 'firstName',
    key: 'firstName',
    width: 140,
    render: (_: any, row: any) => (
      <TableAvatar
        className="mr-6"
        src={row.avatar}
        name={row.firstName}
        // description={row.email.toLowerCase()}
      />
    ),
  },
  {
    title: <HeaderCell title="Last Name" />,
    dataIndex: 'lastName',
    key: 'lastName',
    width: 100,
    render: (_: any, row: any) => (
      <TableAvatar
        name={row.lastName}
        // description={row.email.toLowerCase()}
      />
    ),
  },
  {
    title: <HeaderCell title="Phone Number" />,
    dataIndex: 'phone',
    key: 'phone',
    width: 50,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">{value}</Text>
    ),
  },
  {
    title: <HeaderCell title="Email" />,

    dataIndex: 'email',
    key: 'email',
    width: 30,
    render: (value: string) => (
      <Text className="grid w-1/4 gap-1 font-medium text-gray-700">
        {value}
      </Text>
    ),
  },
  {
    title: <HeaderCell title="Gender" />,

    dataIndex: 'gender',
    key: 'gender',
    width: 20,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">{value}</Text>
    ),
  },
  {
    title: <HeaderCell title="Age" />,

    dataIndex: 'age',
    key: 'age',
    width: 50,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">{value}</Text>
    ),
  },
  {
    title: <HeaderCell title="Location" />,

    dataIndex: 'location',
    key: 'age',
    width: 70,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">{value}</Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Joined Date"
        sortable
        ascending={
          sortConfig?.direction === 'asc' && sortConfig?.key === 'createdAt'
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick('createdAt'),
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: 120,
    render: (createdAt: Date) => <DateCell date={createdAt} />,
  },

  {
    title: <HeaderCell title="Status" />,
    dataIndex: 'status',
    key: 'status',
    width: 80,
    render: (value: string) => getStatusBadge(value),
  },
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" />,
    dataIndex: 'action',
    key: 'action',
    width: 120,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-end gap-3 pe-4">
        <Tooltip
          size="sm"
          content={'Edit Order'}
          placement="top"
          color="invert"
        >
          <Link href={routes.eCommerce.editOrder(row.id)}>
            <ActionIcon
              as="span"
              size="sm"
              variant="outline"
              aria-label={'Edit Order'}
              className="hover:text-gray-700"
            >
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <Tooltip
          size="sm"
          content={'View Order'}
          placement="top"
          color="invert"
        >
          <Link href={routes.eCommerce.orderDetails(row.id)}>
            <ActionIcon
              as="span"
              size="sm"
              variant="outline"
              aria-label={'View Order'}
              className="hover:text-gray-700"
            >
              <EyeIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        {/* <DeletePopover
          title={`Delete the order`}
          description={`Are you sure you want to delete this #${row.id} order?`}
          onDelete={() => onDeleteItem(row.id)}
        /> */}
      </div>
    ),
  },
];
