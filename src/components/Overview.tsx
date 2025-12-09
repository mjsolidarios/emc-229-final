import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Overview() {
    return (
        <section id="overview" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                    Project Overview
                </h2>
                <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm border-border/40">
                    <CardHeader>
                        <CardTitle>Design for a Resilient Philippines</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            The theme for this final project is <strong>"Design for a Resilient Philippines."</strong> Group yourselves into <strong>five members</strong> and design a mobile application solution that addresses a specific pain point in one of four key sectors.
                        </p>
                        <p>
                            Your goal is <strong>not</strong> to code the app, but to produce a production-ready <strong>User Interface (UI)</strong> and <strong>User Experience (UX)</strong> design specification.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
