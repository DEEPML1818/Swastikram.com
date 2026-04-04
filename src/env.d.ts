/// <reference types="astro/client" />

declare module "*.png" {
  const content: ImageMetadata;
  export default content;
}

declare module "*.jpg" {
  const content: ImageMetadata;
  export default content;
}

declare module "*.jpeg" {
  const content: ImageMetadata;
  export default content;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
}
