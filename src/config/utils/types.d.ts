export interface ParentContainer {
  headerTxt?: string;
  hasHeader?: boolean;
  showNotify?: boolean;
  isDashboard?: boolean;
  scrollAble?: boolean;
  checkSession?: boolean;
  children: React.ReactNode;
}

export interface KeyboardScreen {
  greenCaps: string[];
  greyCaps: string[];
  yellowCaps: string[];
  onKeyPressed: () => {};
}

export {};
