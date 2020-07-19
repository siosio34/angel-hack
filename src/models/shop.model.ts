export interface Stores {
  live: Live[];
  rest: Live[];
}

export interface Live {
  name: string;
  address: string;
  phoneNumber: string;
  category: string;
  channelId: string;
  menu: Menu[];
}

export interface Menu {
  name: string;
  price: number;
  description: string;
  lastCookVideoUrl: string;
}
