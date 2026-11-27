import { useRuntimeConfig } from '#imports'

export function useAssetUrl() {
  const config = useRuntimeConfig()
  const baseURL = config.app?.baseURL || '/'

  const withBase = (path: string): string => {
    if (!path || path.startsWith('http://') || path.startsWith('https://')) {
      return path
    }
    const cleanBase = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    return `${cleanBase}${cleanPath}`
  }

  return { withBase }
}
