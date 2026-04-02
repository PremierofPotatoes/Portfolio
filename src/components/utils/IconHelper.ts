import { getIconData, iconToSVG, replaceIDs } from '@iconify/utils';
import SimpleIcons from '@iconify-json/simple-icons/icons.json';
import LucideIcons from '@iconify-json/lucide/icons.json';

export type IconType = 'brand' | 'ui';

export interface IconResult {
  html: string;
  type: IconType;
}

/**
 * Automatically detects if an icon string belongs to SimpleIcons (brands) 
 * or Lucide (UI) and returns the optimized SVG string and its category.
 */
export function getIconHtml(name: string): IconResult | null {
  if (!name) return null;

  // Normalize: "Adobe Photoshop" -> "adobe-photoshop"
  const slug = name.toLowerCase().trim().replace(/\s+/g, '-');
  
  // 1. Check if it's a Brand (Simple Icons)
  const brandData = getIconData(SimpleIcons, slug);
  if (brandData) {
    return render(brandData, 'brand');
  }

  // 2. Check if it's UI (Lucide Icons)
  const uiData = getIconData(LucideIcons, slug);
  if (uiData) {
    return render(uiData, 'ui');
  }

  // 3. Fallback
  return null;
}

/**
 * Internal helper to convert Iconify data to raw SVG HTML
 */
function render(iconData: any, type: IconType): IconResult {
  const renderData = iconToSVG(iconData, {
    height: 24,
    width: 24,
  });

  const body = replaceIDs(renderData.body);
  const attributes = Object.entries(renderData.attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  return {
    html: `<svg ${attributes}>${body}</svg>`,
    type,
  };
}
