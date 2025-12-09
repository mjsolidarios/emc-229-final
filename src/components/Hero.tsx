import { Button } from "@/components/ui/button"

export function Hero() {
    const scrollToOverview = () => {
        const element = document.getElementById("overview")
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/10 to-background border-b border-border/40">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Final Project Submission
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            EMC 229: Personal Website Portfolio
                        </p>
                    </div>
                    <div className="space-x-4">
                        <Button onClick={scrollToOverview} size="lg">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

