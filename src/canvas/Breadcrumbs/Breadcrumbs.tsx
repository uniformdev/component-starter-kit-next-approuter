import { FC } from 'react';
import classNames from 'classnames';
import { getColorStyle, getSeparator } from './helpers';
import { BreadcrumbsProps } from '.';
import { getBreadcrumbs } from '../../utilities/canvas/canvasClients';

export const Breadcrumbs: FC<BreadcrumbsProps> = props => <BreadcrumbsInner {...props} />;

const BreadcrumbsInner = async ({
  colorStyle,
  displayPlaceholderNodes,
  displayRootNode,
  separator,
  styles,
  context,
}: BreadcrumbsProps) => {
  const breadcrumbs = ((await getBreadcrumbs({
    compositionId: context.composition._id,
    preview: false,
    searchParams: context.searchParams,
  })) || []) as Types.ProjectMapLink[];

  const breadcrumbsToShow = breadcrumbs
    .filter((breadcrumb: Types.ProjectMapLink) => (!displayRootNode ? !breadcrumb.isRoot : true))
    .filter((breadcrumb: Types.ProjectMapLink) =>
      !displayPlaceholderNodes ? breadcrumb?.type !== 'placeholder' : true
    );

  return (
    <div
      key={`breadcrumbs-${breadcrumbsToShow.length}`}
      className={classNames('text-sm', getColorStyle(colorStyle), styles?.container)}
    >
      <ul className="flex items-center">
        {breadcrumbsToShow?.map((breadcrumb: Types.ProjectMapLink, index) => (
          <li className="flex items-center" key={breadcrumb?.path}>
            {!!index && <div className="mx-2">{getSeparator(separator)}</div>}
            {breadcrumb?.type === 'placeholder' ? (
              <span>{breadcrumb.name}</span>
            ) : (
              <a href={breadcrumb?.path}>{breadcrumb.dynamicInputTitle || breadcrumb.name}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
