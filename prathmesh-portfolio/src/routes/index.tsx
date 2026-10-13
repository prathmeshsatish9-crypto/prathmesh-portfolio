import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutSection, SkillsSection, ProjectsSection, LearningSection, EducationSection, ContactSection, FactsBand, ResumeButton, SocialLinks } from "@/components/portfolio";
import neuralSculpture from "@/assets/neural-sculpture.jpg";
import { pageHead } from "@/lib/metadata";
export const Route = createFileRoute("/")({
  head: () => pageHead("Prathmesh Shelar | Aspiring AI/ML Engineer", "Meet Prathmesh Shelar, an Artificial Intelligence engineering student graduating in 2028, building skills in Python, data analysis, and machine learning."),
  component: Index,
});
function Index() {
  return <><section className="hero"><img src={neuralSculpture} width={1024} height={1024} alt="An intricate blue and violet woven neural sculpture" className="hero-art" fetchPriority="high"/><div className="container-shell hero-inner reveal"><div className="hero-copy"><div className="availability"><span className="status-dot"/> Seeking internship opportunities · 2027–2028</div><h1>Hi, I'm<br/><span className="gradient-text">Prathmesh Shelar.</span></h1><p className="hero-subtitle">Aspiring AI/ML Engineer <span className="text-muted-foreground">|</span> Data Science Enthusiast</p><p className="hero-description">Turning curiosity into code, and data into understanding.<br/>I'm learning to solve real-world problems through artificial intelligence and machine learning.</p><div className="hero-actions"><Button asChild className="h-11 px-5"><Link to="/projects">View My Projects <ArrowRight/></Link></Button><ResumeButton/><Button asChild variant="ghost" className="h-11 px-2"><Link to="/contact">Contact Me <ArrowUpRight/></Link></Button></div><div className="hero-social"><SocialLinks/><span className="divider"/><span>Based in Maharashtra, India</span></div></div></div><div className="hero-caption">CURIOUS MIND. INFINITE POSSIBILITIES.</div></section><FactsBand/><AboutSection/><SkillsSection/><ProjectsSection/><LearningSection/><EducationSection/><ContactSection/></>;
}
