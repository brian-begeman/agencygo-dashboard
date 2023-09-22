export const transactionTableHeaders = [
  'Category',
  'Amount',
  'Type',
  'Status',
  'Date',
  'Invoice',
];

export const withdrawalTableHeaders = [
  'Initiator',
  'Medium',
  'Date',
  'Status',
  'Invoice',
];

export const transactionData = [
  {
    category: 'Subscription',
    amount: '$49.00',
    type: 'Debit',
    status: 'Successful',
    date: '22/09/2024',
  },
  {
    category: 'Withdrawal',
    amount: '$79.00',
    type: 'Credit',
    status: 'Pending',
    date: '21/09/2024',
  },
  {
    category: 'Withdrawal',
    amount: '$49.00',
    type: 'Debit',
    status: 'Failed',
    date: '20/09/2024',
  },
];
export const withdrawalData = [
  {
    initiator: 'Subscription',
    medium: 'Bitsafe',
    date: '22/09/2023',
    status: 'Successful',
    invoice: 'Admin/Owner',
  },
  {
    initiator: 'Withdrawal',
    medium: 'Bitsafe',
    date: '21/09/2023',
    status: 'Pending',
    invoice: 'Admin',
  },
  {
    initiator: 'Withdrawal',
    medium: 'Paypal',
    date: '20/09/2023',
    status: 'Failed',
    invoice: 'Admin',
  },
];

export const getCode = (status: string): string => {
  const colorCodes = {
    Successful: '#37DE8F',
    Pending: '#FEC84A',
    Failed: '#04A1FF',
  };
  return colorCodes[status as keyof typeof colorCodes];
};
