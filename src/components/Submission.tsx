import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function Submission() {
    return (
        <section id="submission" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                    Submission Guidelines
                </h2>
                <div className="grid gap-6 max-w-3xl mx-auto">
                    <Card className="bg-card/80 backdrop-blur-sm border-border/40">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                Step 1: Permissions
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Set the sharing permissions of your Figma file to <strong>"Anyone with the link can view."</strong>
                        </CardContent>
                    </Card>
                    <Card className="bg-card/80 backdrop-blur-sm border-border/40">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                Step 2: Email Submission
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Submit the URL to <a href="mailto:mjsolidarios@wvsu.edu.ph" className="text-primary hover:underline">mjsolidarios@wvsu.edu.ph</a></p>
                            <p className="mt-2 text-sm text-muted-foreground">Subject: <strong>[FINAL PROJECT] HCI - &lt;Team Name&gt;</strong></p>
                        </CardContent>
                    </Card>
                    <Card className="bg-card/80 backdrop-blur-sm border-border/40">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                Step 3: File Naming
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            Ensure your Figma file is named: <strong>GroupName_AppTitle</strong>.
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
