export type GetUserSubsSchema = {
  userId: number;
};

export type CreateCheckoutSchema = {
  userId: number;
  userEmail: string;
  priceId: string;
  seats?: number;
};

export type CreatePaymentLinkSchema = Omit<CreateCheckoutSchema, "userEmail">;

export type GetSubscriptionSchema = {
  userId: number;
  subscriptionId: string;
};

export type UpdatePlanSchema = GetSubscriptionSchema & {
  newPriceId: string;
};

export type UpdateSubscriptionSeatsSchema = GetSubscriptionSchema & {
  newSeats: number;
};

export interface AddUserToSeatSchema extends GetSubscriptionSchema {
  addUserId: number;
}
export interface RemoveUserFromSeatSchema extends GetSubscriptionSchema {
  removeUserId: number;
}

export type CancelSubscriptionSchema = GetSubscriptionSchema;

export interface SubscriptionValidator {
  validateGetUserSubs: (
    payload: GetUserSubsSchema
  ) => Promise<GetUserSubsSchema>;

  validateCreateCheckout: (
    payload: CreateCheckoutSchema
  ) => Promise<CreateCheckoutSchema>;

  validateCreatePaymentLink: (
    payload: CreatePaymentLinkSchema
  ) => Promise<CreatePaymentLinkSchema>;

  validateUpdatePlanSub: (
    payload: UpdatePlanSchema
  ) => Promise<UpdatePlanSchema>;

  validateUpdateSeats: (
    payload: UpdateSubscriptionSeatsSchema
  ) => Promise<UpdateSubscriptionSeatsSchema>;

  validateAddUserToSeat: (
    payload: AddUserToSeatSchema
  ) => Promise<AddUserToSeatSchema>;

  validateRemoveUserFromSeat: (
    payload: RemoveUserFromSeatSchema
  ) => Promise<RemoveUserFromSeatSchema>;

  validateCancelSubscription: (
    payload: CancelSubscriptionSchema
  ) => Promise<CancelSubscriptionSchema>;
}
