export const getRouteByPath = (path: string) => path.match(/\/(\w+)$/)?.[1]
