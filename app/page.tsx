import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Phone } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block font-[family-name:var(--font-space-grotesk)]">
                Pranjay Kumar
              </span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#about" className="transition-colors hover:text-accent">
                About
              </a>
              <a href="#projects" className="transition-colors hover:text-accent">
                Projects
              </a>
              <a href="#skills" className="transition-colors hover:text-accent">
                Skills
              </a>
              <a href="#contact" className="transition-colors hover:text-accent">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:pranjaykumar926@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-space-grotesk)]">
                Pranjay Kumar
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Computer Science Student & Machine Learning Enthusiast. Specializing in API development, data analysis,
                and problem-solving with Python and modern frameworks.
              </p>
            </div>
            <div className="space-x-4">
              <Button className="bg-accent hover:bg-accent/90" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/pranjaykumar926" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-[family-name:var(--font-space-grotesk)]">
              About Me
            </h2>
            <div className="mx-auto max-w-[800px] space-y-4">
              <p className="text-muted-foreground md:text-lg">
                I'm a Computer Science student at Birla Institute of Technology, Mesra, Ranchi, graduating in May 2025.
                I'm passionate about machine learning, data analysis, and building efficient APIs that solve real-world
                problems.
              </p>
              <div className="grid gap-4 md:grid-cols-2 text-left">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">Bachelor of Technology (Computer Science)</p>
                    <p className="text-sm text-muted-foreground">Birla Institute of Technology, Mesra</p>
                    <p className="text-sm text-muted-foreground">Dec 2021 - May 2025</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Solved 500+ Data Structure and Algorithms problems on LeetCode and GeeksforGeeks
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-[family-name:var(--font-space-grotesk)]">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-lg">
              A selection of my recent projects showcasing machine learning, API development, and computer vision
              skills.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group overflow-hidden">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/medical-insurance-cost-prediction-dashboard.png"
                  alt="Medical Insurance Cost Prediction"
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">
                  Medical Insurance Cost Prediction
                </CardTitle>
                <CardDescription>
                  RESTful API using FastAPI to predict medical insurance costs with Random Forest Regression achieving
                  R² score of 0.87.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">FastAPI</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Streamlit</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/pranjaykumar926" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/virtual-try-on-cv.png"
                  alt="Virtual Try On"
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Virtual Try On</CardTitle>
                <CardDescription>
                  Computer vision application using OpenCV and Mediapipe for real-time jewelry try-on with 95% detection
                  accuracy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">OpenCV</Badge>
                  <Badge variant="secondary">Mediapipe</Badge>
                  <Badge variant="secondary">Tkinter</Badge>
                  <Badge variant="secondary">WebRTC</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/pranjaykumar926" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/wikipedia-language-network.png"
                  alt="Wikipedia Language Edits"
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Wikipedia Language Edits</CardTitle>
                <CardDescription>
                  Network analysis investigating how geographical distance influences translation patterns in
                  multilingual Wikipedia articles.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">NetworkX</Badge>
                  <Badge variant="secondary">GeoPy</Badge>
                  <Badge variant="secondary">Data Analysis</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://github.com/pranjaykumar926" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-[family-name:var(--font-space-grotesk)]">
              Skills & Technologies
            </h2>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-lg">
              Technologies and tools I work with to solve complex problems and build innovative solutions.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent text-accent-foreground">Python</Badge>
                  <Badge className="bg-accent text-accent-foreground">C</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Frameworks & Libraries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent text-accent-foreground">FastAPI</Badge>
                  <Badge className="bg-accent text-accent-foreground">Streamlit</Badge>
                  <Badge className="bg-accent text-accent-foreground">NumPy</Badge>
                  <Badge className="bg-accent text-accent-foreground">pandas</Badge>
                  <Badge className="bg-accent text-accent-foreground">scikit-learn</Badge>
                  <Badge className="bg-accent text-accent-foreground">matplotlib</Badge>
                  <Badge className="bg-accent text-accent-foreground">networkx</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">DevOps & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent text-accent-foreground">Git</Badge>
                  <Badge className="bg-accent text-accent-foreground">GitHub</Badge>
                  <Badge className="bg-accent text-accent-foreground">Linux</Badge>
                  <Badge className="bg-accent text-accent-foreground">SQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Core Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent text-accent-foreground">Machine Learning</Badge>
                  <Badge className="bg-accent text-accent-foreground">Data Analysis</Badge>
                  <Badge className="bg-accent text-accent-foreground">API Development</Badge>
                  <Badge className="bg-accent text-accent-foreground">RESTful API</Badge>
                  <Badge className="bg-accent text-accent-foreground">Problem Solving</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-[family-name:var(--font-space-grotesk)]">
              Let's Connect
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
              Interested in collaborating or discussing opportunities? I'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <Button className="bg-accent hover:bg-accent/90" asChild>
                <a href="mailto:pranjaykumar926@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  pranjaykumar926@gmail.com
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+917903704673">
                  <Phone className="mr-2 h-4 w-4" />
                  +91-7903704673
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/in/pranjay-kumar" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/pranjaykumar926" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="outline" asChild>
                <a href="https://geeksforgeeks.org/user/pranjaykumar926" target="_blank" rel="noopener noreferrer">
                  GeeksforGeeks
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://leetcode.com/pranjaykumar926" target="_blank" rel="noopener noreferrer">
                  LeetCode
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 Pranjay Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
