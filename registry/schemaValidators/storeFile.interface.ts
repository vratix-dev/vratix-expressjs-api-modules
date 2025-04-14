export type GetFileSchema = {
  userId: number;
  fileName: string;
};

export type ListFilesSchema = {
  userId: number;
  pageToken?: string;
};

export type DeleteFilesSchema = {
  userId: number;
  files: string[];
};

export interface StoreFileValidator {
  validateGetFile: (payload: GetFileSchema) => Promise<GetFileSchema>;

  validateListFiles: (payload: ListFilesSchema) => Promise<ListFilesSchema>;

  validateDeleteFiles: (
    payload: DeleteFilesSchema
  ) => Promise<DeleteFilesSchema>;
}
