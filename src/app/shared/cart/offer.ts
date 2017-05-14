export interface Offer{
     type: string;//OfferTypes;
     sliceValue?: number; 
     value: number;
}

export const enum OfferTypes {
  'percentage',
  'minus',
  'slice'
}