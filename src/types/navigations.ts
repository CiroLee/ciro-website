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
