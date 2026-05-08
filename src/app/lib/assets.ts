export function assetUrl(filename: string) {
  const isLocal =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
  const version = isLocal ? `?v=${Date.now()}` : '';
  return `/assets/${filename}${version}`;
}
