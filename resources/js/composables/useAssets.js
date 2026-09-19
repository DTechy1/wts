export function useAssets() {
  const getBasePath = () => {
    if (typeof window !== 'undefined') {
      if (window.APP_BASE_PATH !== undefined) {
        return window.APP_BASE_PATH;
      }
      const path = window.location.pathname;
      if (path.startsWith('/wts/') || path === '/wts') {
        window.APP_BASE_PATH = '/wts';
        return '/wts';
      }
    }
    return '';
  };

  const getImageUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
      return path;
    }
    // Strip any hardcoded /wts/ prefix so it works on any deployment path
    let normalizedPath = path.replace(/^\/?wts\//, '/');
    const cleanPath = normalizedPath.startsWith('/') ? normalizedPath.slice(1) : normalizedPath;
    const base = getBasePath();
    return base ? `${base}/${cleanPath}` : `/${cleanPath}`;
  };

  return {
    getImageUrl,
    getBasePath
  };
}
