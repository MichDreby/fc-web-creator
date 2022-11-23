/* eslint-disable @typescript-eslint/no-explicit-any */

interface Mapping {
  [key: string]: string
}
declare module '*.module.css' {
  const mapping: Mapping
  export default mapping
}

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}
