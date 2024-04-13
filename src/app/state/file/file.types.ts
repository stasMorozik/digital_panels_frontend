
export type Approval = 'LOAD' | 'IN_PROCESS' | 'LOADED';

export type SateFiles = {
  isLoaded: Approval
  list: File[]
  detail?: File
}

export type File = {
  id: string,
  url: string,
  extension: string,
  type: string,
  size: number,
  created: string,
  updated?: string
};