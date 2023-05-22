export interface Publisher {
  id: string;
  name: string;
  email?: string;
  description?: string;
  status: number;
  createdAt: number;
  updatedAt: number;
  channelPublisher: unknown;
  seller: {
    id?: string;
    name?: string;
    type?: string;
    domain?: string;
  };
  accounting: {
    type: number;
    fee: number;
    revShare: number;
  };
}
