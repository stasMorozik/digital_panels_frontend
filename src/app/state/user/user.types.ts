
export type Approval = 'YES' | 'IN_PROCESS' | 'NO';

export type User = {
  isAuthorized: Approval,
  isAuthenticated: Approval,
  email?: string,
  name?: string,
  surname?: string
};