export interface Message {
  message: string;
}

export interface User {
  email: string;
  password: string;
}

export interface BaseEntity {
  id: string | null;
}

export interface Receiver extends BaseEntity {
  title: string;
  description: string;
}
