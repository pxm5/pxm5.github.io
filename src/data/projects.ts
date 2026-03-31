export interface Project {
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags?: string[];
}

// ✏️ Edit this array to add/remove/update your projects
export const projects: Project[] = [
  {
    title: "Research Paper Implementations",
    description:
      "A collection of implementations of foundational ML models that I implemented from their respective research papers.",
    image: "https://github.com/pxm5/pxm5.github.io/blob/main/src/images/alexnet_img.png",
    tags: ["Python", "PyTorch", "Computer Vision"],
    link: "#",
  },
];
