export interface DomainList {
  _id: {
    $oid: string;
  };
  hosts: string[];
  asid: boolean;
  status: number;
  name: string;
  publisherId: string;
  createdAt: number;
  updatedAt: number;
  totalHosts: number;
}
