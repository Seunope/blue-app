export interface ParentContainer {
  headerTxt?: string;
  hasHeader?: boolean;
  showNotify?: boolean;
  isDashboard?: boolean;
  scrollAble?: boolean;
  checkSession?: boolean;
  children: React.ReactNode;
}

export {};
