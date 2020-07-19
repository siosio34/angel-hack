export interface StoreResponse {
  stores: {
    all: Live[];
    live: number[]
  };
}

export interface Live {
  name: string;
  address: string;
  phoneNumber: string;
  category: string;
  _id: number;
  menu: Menu[];
}

export interface Menu {
  name: string;
  price: number;
  description: string;
  lastCookVideoUrl: string;
}
