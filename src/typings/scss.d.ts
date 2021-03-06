declare module '*.css' {
  const content: any;
  export default content;
}
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.jpg';
declare module '*.png';

declare module '*.woff';
declare module '*.woff2';
declare module '*.ttf';
