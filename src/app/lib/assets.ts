const ASSET_VERSION = '20260508-1018';

export function assetUrl(filename: string) {
  return `/assets/${filename}?v=${ASSET_VERSION}`;
}
