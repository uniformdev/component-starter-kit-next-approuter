import classNames, { ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';
import { SpaceType, ViewPort } from '@/types/cskTypes';

const TEMPLATE_REGEX = /\{[^}]+\}/g;

/**
 * Resolves viewport-specific styles by replacing template placeholders with appropriate values.
 *
 * @param {string | ViewPort<string> | undefined} viewPort - The viewport definition, which can be a string or an object with `desktop`, `tablet`, and `mobile` properties.
 * @param {string | undefined} template - A template string containing placeholders to be replaced.
 * @returns {string} - The resolved style string for the specified viewports.
 */
export const resolveViewPort = (viewPort: string | ViewPort<string> | undefined, template?: string): string => {
  if (!viewPort) return '';

  if (typeof viewPort === 'string') {
    return template ? template.replaceAll(TEMPLATE_REGEX, viewPort) : viewPort;
  }

  const { desktop, tablet, mobile } = viewPort;

  const styles = [
    desktop ? `lg:${template ? template.replace(TEMPLATE_REGEX, desktop) : desktop}` : '',
    tablet ? `md:${template ? template.replace(TEMPLATE_REGEX, tablet) : tablet}` : '',
    mobile ? `${template ? template.replace(TEMPLATE_REGEX, mobile) : mobile}` : '',
  ];

  return styles.filter(Boolean).join(' ');
};

const STATIC_UNITS = ['px', 'rem', 'em', 'vh', 'vw', '%', 'auto'];
const UNIT_REGEX = /\d+(\/\d+)?(\.\d+)?/g;

/**
 * Formats a spacing parameter into static and dynamic values for viewports.
 *
 * @param {SpaceType | ViewPort<SpaceType> | undefined} spacing - The spacing parameter, either a simple object or a viewport-specific object.
 * @returns {[SpaceType, Record<keyof SpaceType, string | ViewPort<string>>]} - An array where the first item contains static spacing values, and the second item contains dynamic viewport-specific values.
 */
export const formatSpaceParameterValue = (
  spacing?: SpaceType | ViewPort<SpaceType>
): [SpaceType, Record<keyof SpaceType, string | ViewPort<string>>] => {
  // Spacing parameter undefined
  if (!spacing) return [{}, {} as Record<keyof SpaceType, string>];

  // Spacing parameter with viewport functionality
  if ('desktop' in spacing || 'tablet' in spacing || 'mobile' in spacing) {
    return [
      {},
      (Object.keys(spacing) as (keyof ViewPort<SpaceType>)[]).reduce(
        (acc, device) => {
          (Object.keys(spacing[device] || {}) as (keyof SpaceType)[]).forEach(property => {
            const currentValue = spacing?.[device]?.[property];
            if (typeof currentValue !== 'undefined') {
              acc[property] = { ...acc[property], [device]: String(currentValue) };
            }
          });
          return acc;
        },
        {} as Record<keyof SpaceType, ViewPort<string>>
      ),
    ];
  }

  // Simple spacing parameter
  return Object.entries(spacing as SpaceType).reduce(
    (acc, [key, value]) => {
      const isStaticUnit =
        typeof value === 'number' || STATIC_UNITS.includes(value.replace(UNIT_REGEX, '')) || value === 'auto';

      return isStaticUnit ? [{ ...acc[0], [key]: value }, acc[1]] : [acc[0], { ...acc[1], [key]: value }];
    },
    [{}, {} as Record<keyof SpaceType, string>]
  );
};

/**
 * Combines class names and merges Tailwind utility classes.
 *
 * @param {...ArgumentArray} inputs - The class name inputs to be combined and merged.
 * @returns {string} - The merged class name string.
 */
export const cn = (...inputs: ArgumentArray): string => twMerge(classNames(inputs));
