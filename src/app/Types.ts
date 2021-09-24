export interface BucketInfo {
  currentBucketId: string;
  currentBucketName: string;
  IsRnR: string;
  RnRText: string;
  optionsList: OptionsList[];
}

export interface OptionsList {
  optionName: string;
  optionId: string;
}

export interface ErrorDoc {
  status: string;
  errorCode: string;
  errorMessage: string;
}

export interface CheckDataProfileStatus_out {
  BucketInfo: BucketInfo[];
  errorDoc: ErrorDoc;
}

export interface CheckDataProfileStatus_in {
  dial: string;
  sourceId: string;
  langId: string;
}
