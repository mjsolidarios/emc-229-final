import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Overview() {
    return (
        <section id="overview" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                    Overview
                </h2>
                <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm border-border/40">
                    <CardHeader>
                        <CardTitle>Personal Website Portfolio</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            This final project requires you to submit your comprehensive <strong>Personal Website Portfolio</strong>. This portfolio is a critical component of your professional branding and will be a valuable asset for your upcoming On-the-Job Training (OJT) and future career applications in Multimedia Portfolio and Branding.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

