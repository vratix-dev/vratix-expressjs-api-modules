export type GetUserSubsSchema = {
  userId: number;
};

export type CreateCheckoutSchema = {
  userId: number;
  userEmail: string;
  priceId: string;
  seats?: number;
};

export type CreatePaymentLinkSchema = CreateCheckoutSchema;

export type GetSubscriptionSchema = {
  userId: number;
  subscriptionId: string;
};

export type UpdatePlanSchema = GetSubscriptionSchema & {
  newPriceId: string;
};

export type UpdateSubscriptionSeatsSchema = GetSubscriptionSchema & {
    newSeats: number;
}

export interface AddUserToSeatSchema extends GetSubscriptionSchema {
  addUserId: number;
}
export interface RemoveUserFromSeatSchema extends GetSubscriptionSchema {
  removeUserId: number;
}

export type CancelSubscriptionSchema = GetSubscriptionSchema;

export interface SubscriptionValidator {
  validateGetUserSubs: (
    getSubsPayload: GetUserSubsSchema
  ) => Promise<GetUserSubsSchema>;

  validateCreateCheckout: (
    createCheckoutPayload: CreateCheckoutSchema
  ) => Promise<CreateCheckoutSchema>;

  validateCreatePaymentLink: (
    createPaymentLink: CreatePaymentLinkSchema
  ) => Promise<CreatePaymentLinkSchema>;

  validateUpdatePlanSub: (
    updatePlanPayload: UpdatePlanSchema
  ) => Promise<UpdatePlanSchema>;

  validateUpdateSeats: (
    updateSeatsPayload: UpdateSubscriptionSeatsSchema
  ) => Promise<UpdateSubscriptionSeatsSchema>;

  validateAddUserToSeat: (
    addUserToSeatPayload: AddUserToSeatSchema
  ) => Promise<AddUserToSeatSchema>;

  validateRemoveUserFromSeat: (
    removeUserFromSeat: RemoveUserFromSeatSchema
  ) => Promise<RemoveUserFromSeatSchema>;

  validateCancelSubscription: (
    cancelSubPayload: CancelSubscriptionSchema
  ) => Promise<CancelSubscriptionSchema>;
}
