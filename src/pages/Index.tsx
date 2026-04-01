import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import CodeRain from "@/components/CodeRain";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 z-0"><CodeRain /></div>
      <div className="relative z-10">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-heading font-bold tracking-tight text-lg">PM</span>
          <div className="flex items-center gap-4">
            <a href="#about" onClick={(e) => scrollTo(e, "about")} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
              About
            </a>
            <a href="#projects" onClick={(e) => scrollTo(e, "projects")} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
              Projects
            </a>
            <a href="#contact" onClick={(e) => scrollTo(e, "contact")} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 md:pt-36 md:pb-28">
        <p className="font-heading text-sm tracking-[0.3em] text-muted-foreground uppercase mb-6">
          Student · Developer · Thinker
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.1] mb-8">
          Preetham
          <br />
          Mamillapalli
          <span className="typewriter-cursor" />
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl font-body font-light">
          Building at the intersection of AI, machine learning, and computer vision,
          turning research-driven ideas into tools that solve real problems.
        </p>
        <div className="flex gap-6 mt-10">
          <div className="cred-socket">
            <a href="#projects" onClick={(e) => scrollTo(e, "projects")} className="cred-btn">
              See my work <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="cred-socket">
            <a href="#contact" onClick={(e) => scrollTo(e, "contact")} className="cred-btn">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20">
        <Card className="bg-background/80 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="font-heading text-sm tracking-[0.3em] text-muted-foreground uppercase">
              About
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-10">
              <p className="text-foreground leading-[1.8] font-body">
                I'm a student and developer with a passion for AI, machine learning, and computer vision. 
                I enjoy building projects that combine practical applications with research-driven ideas, 
                whether it's developing intelligent systems, experimenting with neural networks, or creating 
                tools that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-[1.8] font-body">
                When I'm not coding, I explore math, technology, and ways to optimize workflows. 
                I like to dive into philosophical concepts and read books. This site showcases my projects, 
                interests, and thoughts, a window into how I approach problem-solving and creativity.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
        <Card className="bg-background/80 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="font-heading text-sm tracking-[0.3em] text-muted-foreground uppercase">
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              {projects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-heading text-sm tracking-[0.3em] text-muted-foreground uppercase mb-8">
          Contact
        </h2>
        <p className="text-foreground text-lg md:text-xl font-body font-light mb-10 max-w-xl">
          Interested in collaborating? Reach out.
        </p>
        <div className="flex flex-wrap gap-6">
          <div className="cred-socket">
            <a href="mailto:preethu.mamill@gmail.com" className="cred-btn">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
          <div className="cred-socket">
            <a href="https://github.com/pxm5" target="_blank" rel="noopener noreferrer" className="cred-btn">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
          <div className="cred-socket">
            <a href="https://www.linkedin.com/in/preetham-mamillapalli-6a0217289/" target="_blank" rel="noopener noreferrer" className="cred-btn">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-10 border-t border-border">
        <p className="text-sm text-muted-foreground font-heading tracking-wider">
          {new Date().getFullYear()} Preetham Mamillapalli
        </p>
      </footer>
      </div>
    </div>
  );
};

export default Index;
