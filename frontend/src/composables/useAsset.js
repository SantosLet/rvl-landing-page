export function useAsset(name) {
  const isIcon = name.endsWith('.svg');
  const folder = isIcon ? 'icons' : 'images';

  try {
    return new URL(`/src/assets/${folder}/${name}`, import.meta.url).href;
  } catch {
    return '';
  }
}