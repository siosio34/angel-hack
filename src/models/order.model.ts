export interface Orders {
  live: Live[];
  rest: Rest[];
}

export interface Live {
  storeId: number;
  menus: string[];
  secondsLeft: number;
  channelId: string;
}

export interface Rest {
  storeId: number;
  menus: string[];
}
