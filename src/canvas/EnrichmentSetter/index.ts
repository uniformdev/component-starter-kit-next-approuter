import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { EnrichmentSetter } from './EnrichmentSetter';

type Enrichment = {
  fields: {
    cat: {
      value: string;
    };
    key: {
      value: string;
    };
    str: {
      value: number;
    };
  };
};

export type EnrichmentSetterProps = ComponentProps<{
  enrichments: Enrichment[];
}>;

export const enrichmentSetterMappings = {
  enrichmentSetter: EnrichmentSetter,
};

export default EnrichmentSetter;
