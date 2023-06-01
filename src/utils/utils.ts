import { getPlatformType } from 'fe-gear';
export const copyToClipboard = (text: string) => {
  return navigator.clipboard.writeText(text);
};

export const isMac = () => {
  return getPlatformType(navigator.userAgent) === 'macOS';
};
