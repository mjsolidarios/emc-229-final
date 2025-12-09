import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            setIsMenuOpen(false)
        }
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
            <div className="container flex h-14 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2 font-bold text-xl">
                    <span>EMC 204</span>
                </div>
                <nav className="hidden md:flex gap-6">
                    <button onClick={() => scrollToSection("overview")} className="text-sm font-medium hover:underline underline-offset-4">
                        Overview
                    </button>
                    <button onClick={() => scrollToSection("tracks")} className="text-sm font-medium hover:underline underline-offset-4">
                        Tracks
                    </button>
                    <button onClick={() => scrollToSection("deliverables")} className="text-sm font-medium hover:underline underline-offset-4">
                        Deliverables
                    </button>
                    <button onClick={() => scrollToSection("submission")} className="text-sm font-medium hover:underline underline-offset-4">
                        Submission
                    </button>
                    <button onClick={() => scrollToSection("rubric")} className="text-sm font-medium hover:underline underline-offset-4">
                        Rubric
                    </button>
                </nav>
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden border-t p-4 bg-background">
                    <div className="flex flex-col gap-4">
                        <button onClick={() => scrollToSection("overview")} className="text-sm font-medium hover:underline underline-offset-4 text-left">
                            Overview
                        </button>
                        <button onClick={() => scrollToSection("tracks")} className="text-sm font-medium hover:underline underline-offset-4 text-left">
                            Tracks
                        </button>
                        <button onClick={() => scrollToSection("deliverables")} className="text-sm font-medium hover:underline underline-offset-4 text-left">
                            Deliverables
                        </button>
                        <button onClick={() => scrollToSection("submission")} className="text-sm font-medium hover:underline underline-offset-4 text-left">
                            Submission
                        </button>
                        <button onClick={() => scrollToSection("rubric")} className="text-sm font-medium hover:underline underline-offset-4 text-left">
                            Rubric
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}
