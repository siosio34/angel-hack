export interface StoreResponse {
  stores: {
    all: Live[];
    live: LiveChannel[];
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

export interface LiveChannel {
  storeId: number;
  channelName: string;
  startTimeStamp: number;
}

export interface Menu {
  name: string;
  price: number;
  description: string;
  lastCookVideoUrl: string;
}
