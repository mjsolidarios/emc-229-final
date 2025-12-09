import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Deliverables() {
    return (
        <section id="deliverables" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                    Project Deliverables
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-[700px] mx-auto">
                    Please submit the following items:
                </p>

                <div className="w-full max-w-3xl mx-auto bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg p-4">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-semibold">
                                1. Pre-recorded Video Presentation
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    A short video (5-10 minutes) where you walk through your portfolio, explaining the content, design choices, and showcasing your best work.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-semibold">
                                2. Portfolio Link
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    The live URL to your updated online portfolio.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="w-full max-w-3xl mx-auto mt-8 bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">How to Submit</h3>
                    <div className="space-y-4">
                        <div>
                            <p className="mb-2 text-muted-foreground">Send your submission via email to:</p>
                            <a href="mailto:mjsolidarios@wvsu.edu.ph" className="text-primary hover:underline font-medium text-lg">
                                mjsolidarios@wvsu.edu.ph
                            </a>
                        </div>
                        <div>
                            <p className="mb-2 text-muted-foreground">Subject Line Format:</p>
                            <div className="bg-muted p-4 rounded-md font-mono text-sm">
                                [EMC 229 FINAL] &lt;Lastname&gt;
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">
                                Example: <span className="font-medium text-foreground">[EMC 229 FINAL] Solidarios</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

