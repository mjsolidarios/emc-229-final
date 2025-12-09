import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Deliverables() {
    return (
        <section id="deliverables" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                    Project Deliverables
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-[700px] mx-auto">
                    To complete your final project, please submit the following two items. Ensure they are submitted by the deadline.
                </p>

                <div className="w-full max-w-3xl mx-auto bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg p-4">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-semibold">
                                1. Pre-recorded Video Presentation
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    A short video walkthrough of your personal website portfolio.
                                </p>
                                <div className="space-y-2">
                                    <h4 className="font-semibold">Content Requirements:</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li><strong>Duration:</strong> 5-10 minutes.</li>
                                        <li><strong>Content:</strong> Explain your design choices, walk through the different sections of your portfolio, and highlight your best work.</li>
                                        <li><strong>Format:</strong> Upload the video to a platform of your choice (e.g., YouTube, Vimeo, Google Drive) and ensure the link is accessible.</li>
                                    </ul>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-semibold">
                                2. Link to Online Portfolio
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <div className="space-y-2">
                                    <h4 className="font-semibold">Requirement:</h4>
                                    <p>The live, publicly accessible URL of your completed personal website portfolio.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold">Checklist before submitting:</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Ensure the website is fully responsive and works on different screen sizes.</li>
                                        <li>All links should be functional.</li>
                                        <li>Proofread all text content for any spelling or grammatical errors.</li>
                                        <li>Optimize images and assets for fast loading times.</li>
                                    </ul>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
