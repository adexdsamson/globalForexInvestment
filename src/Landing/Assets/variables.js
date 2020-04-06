


export const price = [
  {
    id: 'mnbvdrtyuil', 
    title: 'Starter', 
    price: '50,000', 
    amount: '50000.00',
    earn: '100,000', 
    month: '2', 
    day: '60'
  },
  {
    id: 'kjhgfdsxcvbnm', 
    title: 'standard', 
    price: '100,000',
    amount: '100000.00',
    earn: '200,000', 
    month: '2', 
    day: '60'
  },
  {
    id: 'sfghbvrthb', 
    title: 'bronse', 
    price: '200,000', 
    amount: '200000.00',
    earn: '400,000', 
    month: '2', 
    day: '60'
  },
  {
    id: 'roiuythjuh', 
    title: 'silver', 
    price: '300,000', 
    amount: '300000.00',
    earn: '600,000', 
    month: '2', 
    day: '60'
  },
  {
    id: 'roiuesdfgt', 
    title: 'Gold', 
    price: '400,000', 
    amount: '400000.00',
    earn: '500,000', 
    month: '2', 
    day: '60'
  },
  {
    id: 'rongfcvbnjhg', 
    title: 'platinum', 
    price: '500,000', 
    amount: '500000.00',
    earn: '1,000,000', 
    month: '2', 
    day: '60'
  },
]

export const service = [
  {
    id: '1', 
    title: 'Professional team', 
    body: 'Global Forex Investment GFI is managed by a team who have extensive experience in the field of investment.'
  },
  {
    id: '2', 
    title: 'Instant payment', 
    body: 'We believe in instant payments so that our clients enjoy payouts without any unnecessary waiting time.'
  },
  {
    id: '3', 
    title: 'Profitable plans', 
    body: 'Our Investment plans are designed to generate maximum profits with minimum investment.'
  },
]

export const testimonies = [
  {
    id: '1',
    name: 'Oye Dora',
    occupation: 'student',
    body: 'Investing with Global Forex Investment has been the best effort i\'ve done. ',
  },
  {
    id: '2',
    name: 'Oyseiji Adeola',
    occupation: 'Fish farmer',
    body: 'Found something trustworthy.',
  },
]

export const infoHeader = 'When you do well, we do well'

export const info = 'We have the expertise and investment products, yet we provide our services on a very personal level. We strive to be worthy of our client\'s trust by providing them with service which are economically beneficial to them and to create awareness regarding reliable and highly profitable investment platform among our clients around the globe. All you need to do is sit back and enjoy how your profit grows on daily basis.'

export const infoText = 'We help you to grow your capital'



export  const paymentMethods = [{
  supportedMethods: 'basic-card',
  data: {
    supportedNetworks: [
      'visa', 'mastercard', 'amex', 'discover',
      'diners', 'jcb', 'unionpay'
    ]
  }
}]

export const paymentDetails = price => ({
  displayItems: [{
    label: 'Fund Eapay wallet',
    amount: { currency: 'NGN', value: price}
  }],
  total: {
    label: 'Total Funds',
    amount: { currency: 'NGN', value : price}
  }
});
export const paymentOptions = {
  requestPayerEmail: true,
  requestPayerPhone: true,
  requestPayerName: true,
};
