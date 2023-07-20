import classNames from 'classnames';
import {
  ComponentProps,
  registerUniformComponent,
  CANVAS_DRAFT_STATE,
  CANVAS_PUBLISHED_STATE,
  getProjectMapClient,
  isDraftModeEnabled,
  isOnVercelPreviewEnvironment
} from '@uniformdev/canvas-next-rsc';

type BreadcrumbSeparator = 'slash' | 'chevron' | 'none';

type Props = ComponentProps<{
  colorStyle: Types.AvailableColor;
  displayRootNode: boolean;
  displayPlaceholderNodes: boolean;
  separator: BreadcrumbSeparator;
}>;

const getColorStyle = (style: Types.AvailableColor) => {
  switch (style) {
    case 'primary':
      return 'text-primary';
    case 'secondary':
      return 'text-secondary';
    case 'accent':
      return 'text-accent';
    case 'base-200':
      return 'text-base-200';
    case 'base-300':
      return 'text-base-300';
    default:
      return 'text-base-200';
  }
};

const getSeparator = (separator: 'slash' | 'chevron' | 'none') => {
  switch (separator) {
    case 'none':
      return '';
    case 'slash':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M7 21L14.9 3H17L9.1 21H7Z" />
        </svg>
      );
    case 'chevron':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4  stroke-current"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4  stroke-current"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      );
  }
};

export const getBreadcrumbs = async ({
  compositionId,
  searchParams,
}: {
  compositionId: string;
  searchParams?: { [key: string]: string | undefined };
}) => {
  const projectMapClient = getProjectMapClient();

  const draftMode = isDraftModeEnabled({
    searchParams,
  });
  const previewEnvironment = isOnVercelPreviewEnvironment();

  const { nodes: projectMapNodes } = await projectMapClient.getNodes({
    compositionId: compositionId,
    includeAncestors: true,
    state: draftMode || previewEnvironment ? CANVAS_DRAFT_STATE : CANVAS_PUBLISHED_STATE
  });

  return projectMapNodes?.map(node => ({
    name: node.name,
    path: node.path,
    type: node.type,
    isRoot: node.path === '/',
  }));
};

const Breadcrumbs = async ({
  colorStyle,
  displayPlaceholderNodes,
  displayRootNode,
  separator,
  context
}: Props) => {
  const breadcrumbs = (
    await getBreadcrumbs({
      compositionId: context.composition._id,
      searchParams: context.searchParams,
    })
  ) || [];

  const breadcrumbsToShow = breadcrumbs
    .filter((breadcrumb: Types.ProjectMapLink) => (!displayRootNode ? !breadcrumb.isRoot : true))
    .filter((breadcrumb: Types.ProjectMapLink) =>
      !displayPlaceholderNodes ? breadcrumb?.type !== 'placeholder' : true
    );

  return (
    <div key={`breadcrumbs-${breadcrumbsToShow.length}`} className={classNames('text-sm', getColorStyle(colorStyle))}>
      <ul className="flex items-center">
        {breadcrumbsToShow?.map((breadcrumb: Types.ProjectMapLink, index) => (
          <li className="flex items-center" key={breadcrumb?.path}>
            {!!index && <div className="mx-2">{getSeparator(separator)}</div>}
            {breadcrumb?.type === 'placeholder' ? (
              <span>{breadcrumb.name}</span>
            ) : (
              <a href={breadcrumb?.path}>{breadcrumb.name}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

registerUniformComponent({
  type: 'breadcrumbs',
  component: Breadcrumbs as any,
});

export default Breadcrumbs;
