import { FC } from 'react';
import { CurrencyFormatterProps } from './';

const CurrencyFormatter: FC<CurrencyFormatterProps> = ({ currency = 'USD', amount, className }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
  return <div className={className}>{formattedPrice}</div>;
};

export default CurrencyFormatter;
