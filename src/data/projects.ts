export interface Project {
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags?: string[];
}


export const projects: Project[] = [
  {
    title: "Research Paper Implementations",
    description:
      "A collection of implementations of foundational ML models that I implemented from their respective research papers.",
    image: "https://raw.githubusercontent.com/pxm5/pxm5.github.io/refs/heads/main/src/images/alexnet_img.png",
    tags: ["Python", "PyTorch", "Computer Vision"],
    link: "https://github.com/pxm5/research-paper-implementations",
  },
];
