export interface Domain {
  _id: {
    $oid: string;
  };
  asid: boolean;
  name: string;
  publisherId: string;
  createdAt: number;
  totalHosts: number;
}
