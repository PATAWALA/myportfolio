export interface Project {
  title: string;
  description: string;
  tech: string[];
  cta_view: string;
  desktopPreview?: string;
  mobilePreview?: string;
  desktop_alt:string;
  mobile_alt:string;
  link:string;
  desktop_gif: string,
  mobile_gif: string
};

export interface Skill {
  name: string;
  desc: string;
}
