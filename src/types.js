// @flow

/**
 * @see https://docs.payon.com/reference/parameters#authentication
 */
export type AuthenticationType = {
  +entityId: string,
  +password: string,
  +userId: string
};

/**
 * @see https://docs.payon.com/reference/parameters#card
 */
export type CardType = {
  +cvv?: string,
  +expiryMonth: string,
  +expiryYear: string,
  +holder?: string,
  +number: string
};

export type BrowserFingerprintType = {
  id: string,
  value: string
};

/**
 * @see https://docs.payon.com/reference/parameters#customer
 */
export type CustomerType = {
  birthDate?: string,
  browserFingerprint?: BrowserFingerprintType,
  companyName?: string,
  email?: string,
  givenName?: string,
  identificationDocId?: string,
  identificationDocType?: string,
  ip?: string,
  merchantCustomerId?: string,
  middleName?: string,
  mobile?: string,
  phone?: string,
  sex?: string,
  status?: string,
  surname?: string,
  workPhone?: string
};

export type PaymentType = {
  +amount: string,
  +card?: CardType,
  +createRegistration?: string,
  +currency: string,
  +descriptor?: string,
  +merchantInvoiceId?: string,
  +merchantTransactionId?: string,
  +paymentBrand?: string,
  +paymentType: string
};

export type PayloadType = {
  [key: string]: string | PayloadType
};

export type ResponseType = {
  +id: string,
  +registrationId?: string,
  +result: {
    +code: string,
    +description: string
  }
};

export type ValidationErrorType = any;
