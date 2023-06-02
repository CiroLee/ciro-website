export interface Label {
  labelOrder: number;
  labelId: string;
  label: string;
  icon: string;
  createTime?: Date;
  updateTIme?: Date;
}

export interface LabelRes {
  labels: Label[];
  total: number;
}

interface NavLabel {
  labelId: string;
  label: string;
}

export interface Navigation {
  navId: string;
  title: string;
  siteUrl: string;
  desc?: string;
  logoUrl?: string;
  labels?: NavLabel[];
  tag?: string;
  createTime?: string;
  updateTime?: string;
}

export interface NavigationList {
  id: string;
  title: string;
  contents: Navigation[];
}

export interface NavigationRes {
  list: Navigation[];
  total: number;
}
