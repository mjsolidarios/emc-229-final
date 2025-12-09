import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export function Deliverables() {
    return (
        <section id="deliverables" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                    Project Deliverables
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-[700px] mx-auto">
                    All work must be contained within a <strong>single Figma file</strong>. Organize your file using "Pages" on the left sidebar.
                </p>


                <div className="w-full max-w-3xl mx-auto bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg p-4">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="page-1">
                            <AccordionTrigger className="text-lg font-semibold">
                                Page 1: Brainstorm Map & Ideation
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    Note: This was completed on a previous homework along with the onboarding screens. Just put it on page 1.
                                </p>
                                <div className="space-y-2">
                                    <h4 className="font-semibold">Requirement:</h4>
                                    <p>A visual representation of your thought process (Miro Board).</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold">Content:</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li><strong>Mind Map / Affinity Diagram:</strong> Use sticky notes and connector lines in Figma (FigJam components allowed) to group features and ideas.</li>
                                        <li><strong>LoFi Onboarding Screens:</strong> A simple set of screens showing the core features of your app.</li>
                                    </ul>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="page-2">
                            <AccordionTrigger className="text-lg font-semibold">
                                Page 2: User Persona
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <div className="space-y-2">
                                    <h4 className="font-semibold">Requirement:</h4>
                                    <p>A profile of your ideal user.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold">Content:</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li><strong>Photo & Name:</strong> Fictional representation.</li>
                                        <li><strong>Demographics:</strong> Age, location (e.g., "Rice Farmer from Nueva Ecija"), tech literacy level.</li>
                                        <li><strong>Pain Points:</strong> What frustrates them currently?</li>
                                        <li><strong>Goals:</strong> What do they want to achieve?</li>
                                        <li><strong>Bio:</strong> A brief backstory relevant to your chosen track.</li>
                                    </ul>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="page-3">
                            <AccordionTrigger className="text-lg font-semibold">
                                Page 3: Low-Fidelity Prototype (Wireframes)
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <div className="space-y-2">
                                    <h4 className="font-semibold">Requirement:</h4>
                                    <p>Structural layout without color/images (Grayscale only).</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold">Content:</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Must include at least <strong>5 core screens</strong>.</li>
                                        <li>Focus on spacing, layout, and hierarchy.</li>
                                        <li>Do not use placeholder text (e.g., Lorem Ipsum); real content is preferred.</li>
                                        <li><strong>Flow connections:</strong> Basic prototyping lines connecting buttons to destination screens.</li>
                                    </ul>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="page-4">
                            <AccordionTrigger className="text-lg font-semibold">
                                Page 4: High-Fidelity Prototype (The Final Design)
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <div className="space-y-2">
                                    <h4 className="font-semibold">Requirement:</h4>
                                    <p>The polished, full-color design with interactivity and animations.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold">Content:</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li><strong>Visual Design:</strong> Apply a consistent color palette, typography system, and iconography suitable for the topic.</li>
                                        <li><strong>Interactivity:</strong> Clickable buttons/navigation, scrollable areas, Smart Animate transitions.</li>
                                        <li><strong>Components:</strong> Use Figma Components for reusable elements.</li>
                                        <li><strong>Micro-interactions:</strong> At least one complex interaction (e.g., a "success" animation).</li>
                                    </ul>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="page-5">
                            <AccordionTrigger className="text-lg font-semibold">
                                Page 5: Group Members and Roles
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <p>A list of your group members and their roles in this project.</p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="bonus">
                            <AccordionTrigger className="text-lg font-semibold text-primary">
                                Bonus Points (+5 Points)
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary">Optional</Badge>
                                    <p><strong>Design System:</strong> Creating a separate "Page" in Figma that acts as a style guide (defining Colors, Typography styles, and Buttons) and linking them to the HiFi design.</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
