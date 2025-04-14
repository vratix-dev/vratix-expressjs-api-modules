export type BasicAuthSchema = {
  username: string;
  password: string;
  email?: string;
};

export type RefreshTokenSchema = {
  token: string;
};

export interface BasicAuthValidator {
  validateAuth: (payload: BasicAuthSchema) => Promise<BasicAuthSchema>;
  validateRefreshToken: (
    payload: RefreshTokenSchema
  ) => Promise<RefreshTokenSchema>;
}
