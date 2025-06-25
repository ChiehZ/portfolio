/**
 * @file This is the main page of your personal portfolio website.
 * This file contains all the React components used to render the page.
 * You can customize the website content by modifying the `portfolioData` object.
 */
import React from 'react';

// Icons
import { Github, Linkedin, Mail, Code, ExternalLink, Briefcase, User, Lightbulb, Menu } from 'lucide-react';

// --- Shadcn UI Components (imported from your components/ui folder) ---
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

// --- Core Data Section ---
// Here is all the text and link content for your portfolio.
// Modify the data here, and the corresponding parts of the website will update automatically.
const portfolioData = {
  name: '范相杰',
  title: '软件开发工程师 | 全栈开发爱好者',
  bio: '一位对打造优雅且高效能软件充满热情的211毕业生，热衷于学习新技术解决挑战。',
  contact: {
    email: 'nyoc826@email.com',
    github: 'https://github.com/ChiehZ',
    linkedin: 'https://linkedin.com/in/xiangjie',
  },
  avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=Daming&backgroundColor=b6e3f4,c0aede,d1d4f9`, // Use a cute example avatar
  about: '我是一名刚从北京科技大学信息工程学系毕业不久的社会新人。在学期间，我专注于网页全栈开发，并通过多个实务项目，从前端的互动设计到后端的数据库与服务器架构，建立了扎实的基础。我享受团队合作，乐于将困难的问题拆解、分析并找到最佳解决方案。我相信好的软件能为世界带来正向的改变，并期待能加入一个充满活力的团队，贡献所长并持续成长。',
  projects: [
    {
      title: 'GitHub 仓库建立日期查询工具',
      description: '一个简单的浏览器插件，可以查询 GitHub 仓库的建立日期。使用 React 和 GitHub API 开发，帮助开发者快速查看任何公开仓库的建立时间。',
      tags: ['React', 'GitHub API', 'TypeScript', 'Browser Extension'],
      liveUrl: 'https://chiehz.github.io/github-show-created-date/',
      repoUrl: 'https://github.com/ChiehZ/github-show-created-date',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'YouTube 自动生成播放列表',
      description: '一个自动化工具，可以根据设定的条件自动生成并管理 YouTube 播放列表。支持关键字过滤、频道订阅等功能。',
      tags: ['Javascript', 'YouTube API', 'Automation', 'Playlist'],
      liveUrl: 'https://github.com/ChiehZ/youtube-autogenerate-playlists',
      repoUrl: 'https://github.com/ChiehZ/youtube-autogenerate-playlists',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: '机器视觉拣选机器人',
      description: '实验室老师带领开发的机器视觉拣选系统，使用深度学习模型进行物件识别与分类，实现自动化拣选流程。',
      tags: ['Python', 'OpenCV', 'Deep Learning', 'Computer Vision', 'Robotics'],
      liveUrl: '#',
      repoUrl: '#',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80'
    }
  ],
  skills: {
    '编程语言': ['JavaScript (ES6+)', 'TypeScript', 'Go', 'Rust'],
    '前端技术': ['React', 'Next.js', 'Vue.js', 'TailwindCSS', 'Bun', 'Vite'],
    '后端技术': ['Node.js', 'Express.js', 'RESTful API', 'Hono', 'MongoDB'],
    '开发工具 & 平台': ['Git & GitHub', 'Docker', 'Vercel', 'Neovim', 'Helix']
  }
};

// --- Page Section Components ---
// Each component below represents a specific section of the page, such as the header, hero section, project cards, etc.
/**
 * Header Component
 * @returns {JSX.Element} - A sticky header containing the site title, navigation bar, and social links.
 * - On desktop, the navigation bar is displayed directly.
 * - On mobile, a hamburger menu button is shown, which expands the navigation links when clicked.
 */
const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const navLinks = [ { href: '#about', label: '关于我' }, { href: '#projects', label: '项目' }, { href: '#skills', label: '技能' } ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <a className="mr-6 flex items-center space-x-2" href="/">
                    <Code className="h-6 w-6" />
                    <span className="font-bold sm:inline-block">{portfolioData.name}</span>
                </a>
                <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
                    {navLinks.map(link => <a key={link.href} href={link.href} className="transition-colors hover:text-foreground/80 text-foreground/60">{link.label}</a>)}
                </nav>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <a href={portfolioData.contact.github} target="_blank" rel="noreferrer">
                        <Button variant="ghost" size="icon"><Github className="h-4 w-4" /></Button>
                    </a>
                    <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer">
                        <Button variant="ghost" size="icon"><Linkedin className="h-4 w-4" /></Button>
                    </a>
                    <a href={`mailto:${portfolioData.contact.email}`}>
                        <Button variant="ghost" size="icon"><Mail className="h-4 w-4" /></Button>
                    </a>
                    <ThemeToggle />
                    <div className="md:hidden">
                        <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground">{link.label}</a>)}
                    </div>
                </div>
            )}
        </header>
    );
};

/**
 * Hero Section Component
 * @returns {JSX.Element} - The welcome section at the top of the page.
 * - Displays your avatar, name, title, and a short bio.
 * - Includes the main Call-to-Action buttons, e.g., "Contact Me".
 */
const HeroSection = () => (
    <section className="container flex flex-col items-center justify-center py-24 md:py-32 text-center">
        <Avatar className="w-28 h-28 mb-6 border-4 border-primary/10">
            <AvatarImage src={portfolioData.avatarUrl} alt={portfolioData.name} />
            <AvatarFallback>{portfolioData.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">{portfolioData.name}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6">{portfolioData.title}</p>
        <p className="max-w-xl mb-8 text-foreground/80 leading-relaxed">{portfolioData.bio}</p>
        <div className="flex flex-wrap justify-center gap-4">
            <a href={`mailto:${portfolioData.contact.email}`}>
                <Button size="lg" className="w-full sm:w-auto"><Mail className="mr-2 h-4 w-4" /> 与我联系</Button>
            </a>
            <a href="#projects">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">查看我的项目</Button>
            </a>
        </div>
    </section>
);

/**
 * Section Wrapper Component
 * @param {object} props - Component properties
 * @param {string} props.id - The HTML id of the section, for anchor links.
 * @param {string} props.title - The main title of the section.
 * @param {React.ElementType} props.icon - The icon component to display next to the title.
 * @param {React.ReactNode} props.children - The content to be displayed in the section.
 * @param {string} [props.className] - Optional additional CSS class.
 * @returns {JSX.Element} - A standardized section container with a title and content.
 * This is a reusable component for creating consistently styled sections on the page (e.g., "About Me", "Projects", etc.).
 */
const SectionWrapper = ({ id, title, icon: Icon, children, className='' }) => (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
        <div className="container max-w-screen-lg mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
                <Icon className="w-7 h-7 text-primary"/>
                {title}
            </h2>
            {children}
        </div>
    </section>
)

/**
 * About Section
 * @returns {JSX.Element} - Displays your detailed self-introduction using SectionWrapper.
 */
const AboutSection = () => (
    <SectionWrapper id="about" title="关于我" icon={User} className="bg-secondary">
        <p className="max-w-3xl mx-auto text-center text-muted-foreground text-lg leading-relaxed">{portfolioData.about}</p>
    </SectionWrapper>
);

/**
 * Project Card Component
 * @param {object} props - Component properties
 * @param {object} props.project - A single project data object.
 * @returns {JSX.Element} - A card for displaying information about a single project.
 * - Includes project image, title, description, tech tags, and relevant links.
 * - The image has a zoom effect on hover.
 */
const ProjectCard = ({ project }) => (
    <Card className="flex flex-col overflow-hidden h-full group">
        <div className="overflow-hidden">
            <img src={project.image} alt={project.title} className="h-48 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
        </div>
        <CardHeader>
            <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
            <CardDescription className="mb-4">{project.description}</CardDescription>
            <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
            </div>
        </CardContent>
        <CardFooter className="space-x-4">
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className='flex-1'>
                <Button variant="outline" className="w-full"><ExternalLink className="mr-2 h-4 w-4" /> 网站</Button>
            </a>
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className='flex-1'>
                <Button className="w-full"><Github className="mr-2 h-4 w-4" /> 源码</Button>
            </a>
        </CardFooter>
    </Card>
);

/**
 * Projects Section
 * @returns {JSX.Element} - The section displaying all featured projects.
 * - It iterates over the `portfolioData.projects` array and renders a `ProjectCard` for each project.
 */
const ProjectsSection = () => (
    <SectionWrapper id="projects" title="SIDE PROJECTS" icon={Briefcase}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
    </SectionWrapper>
);

/**
 * Skills Section
 * @returns {JSX.Element} - Displays your list of professional skills.
 * - It iterates over the `portfolioData.skills` object and displays your skills by category.
 */
const SkillsSection = () => (
    <SectionWrapper id="skills" title="专业技能" icon={Lightbulb} className="bg-secondary">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-8">
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
                <div key={category}>
                    <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
                    <div className="flex flex-wrap gap-3">
                        {skills.map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}
                    </div>
                </div>
            ))}
        </div>
    </SectionWrapper>
);

/**
 * Meme Section Component
 * @returns {JSX.Element} - A fun programming meme section to add some humor.
 */
const MemeSection = () => (
    <section className="py-12 bg-muted/50">
        <div className="container">
            <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
                <h3 className="mb-6 text-2xl font-bold text-center">最后是迷因😄</h3>
                <div className="p-4 bg-white border rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <img 
                        src="https://i.redd.it/0ug2j4z4z08f1.jpeg" 
                        alt="Programming meme: I love consoles. Me too." 
                        className="rounded-lg w-full h-auto"
                        loading="lazy"
                    />
                    <p className="mt-2 text-sm text-center text-muted-foreground">
                    我...我都爱！
                    </p>
                </div>
            </div>
        </div>
    </section>
);

/**
 * Footer Component
 * @returns {JSX.Element} - The footer at the bottom of the website.
 * - Displays copyright information and the site's tech stack.
 */
const Footer = () => (
    <footer className="py-6 border-t">
        <div className="container flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Chieh. All Rights Reserved.</p>
            <p className="text-xs text-muted-foreground">Crafted with React, TailwindCSS, and shadcn/ui</p>
        </div>
    </footer>
);

// --- Main Application Component (App) ---
// This is the root component of the entire application.
/**
 * Main Application Component (App)
 * @returns {JSX.Element} - Combines all section components to form the complete single-page application.
 * - This is the aggregation point for all content, defining the overall layout structure of the page.
 */
export default function App() {
    return (
        <div className="bg-background text-foreground min-h-screen antialiased font-sans">
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <MemeSection />
            </main>
            <Footer />
        </div>
    );
}
