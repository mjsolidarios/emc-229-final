import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function Submission() {
    return (
        <section id="exemptions" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                    Exempted Students
                </h2>
                <div className="grid gap-6 max-w-3xl mx-auto">
                    <Card className="bg-card/80 backdrop-blur-sm border-border/40">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                Exempted from Video Presentation
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p>
                                The following students are exempted from submitting the pre-recorded video presentation, as they have already completed this requirement:
                            </p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>John Kevin Langurayan</li>
                                <li>Mel Joseph Tatud</li>
                                <li>Ellarie Suero</li>
                            </ul>
                            <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                                <p className="text-sm font-semibold">
                                    Note: Exempted students still need to submit the link to their final, updated online portfolio.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

