import { getPlatformType } from 'fe-gear';
export const copyToClipboard = (text: string) => {
  return navigator.clipboard.writeText(text);
};

export const isWindows = () => {
  return getPlatformType(navigator.userAgent) === 'Windows';
};

export const isMobile = () => {
  const mobiles = ['Android', 'iPhone'];
  return mobiles.includes(getPlatformType(navigator.userAgent));
};
// 对象数组去重
export const uniqueObjArr = <T>(arr: T[], key: keyof T): T[] => {
  return Array.from(new Set(arr.map(item => item[key]))).map(t => arr.find(el => el[key] === t)) as T[];
};
