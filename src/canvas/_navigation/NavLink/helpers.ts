export const checkIsCurrentRoute = (path: string | undefined, link: Types.ProjectMapLink) => {
  if (!link || !path) {
    return false;
  }
  const [pathWithoutQuery] = path.split('?');
  const linkPath = link.path === '/' ? link.path : link.path.replace(/\/$/, '');
  return pathWithoutQuery === linkPath;
};
