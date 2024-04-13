
export type Visibility = 'SHOWN' | 'HIDING' | 'HIDDEN';

export type TypeNotification = 'DANGER' | 'WARNING' | 'INFO';

export type Notification = {
  message: string,
  type: TypeNotification,
  visibility: Visibility
}