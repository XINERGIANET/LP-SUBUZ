export function assetUrl(filename: string) {
  const version = import.meta.env.DEV ? `?v=${Date.now()}` : '';
  return `/assets/${filename}${version}`;
}
