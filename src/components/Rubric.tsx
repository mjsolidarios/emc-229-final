import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export function Rubric() {
    const criteria = [
        {
            name: "UX Research & Empathy (Pages 1 & 2)",
            exceptional: "Brainstorming & Persona: Deep understanding of the Filipino context. Persona is highly detailed and realistic. The problem statement is sharp and actionable. Journey map clearly highlights pain points.",
            proficient: "Brainstorming & Persona: Good understanding of the context. Persona is clear but may lack specific local nuance. The problem statement is defined. Journey map is present.",
            developing: "Brainstorming & Persona: Generic persona (e.g., \"John Doe\"). The problem statement is too broad. The brainstorming map is sparse or disorganized.",
            needsImprovement: "Brainstorming & Persona: Missing deliverables or completely unrealistic user definitions. No clear problem identified.",
        },
        {
            name: "Interaction Design (Page 3 - LowFi)",
            exceptional: "Wireframes: Excellent use of whitespace and hierarchy. Navigation flow is intuitive. Solves the core problem without distraction. All 5+ screens are structurally sound.",
            proficient: "Wireframes: Good layout and structure. Navigation works well. Some minor alignment or spacing issues. Meets the 5-screen requirement.",
            developing: "Wireframes: Confusing layout or navigation. Elements are cluttered. Hard to understand the flow without explanation.",
            needsImprovement: "Wireframes: Missing screens. Incomplete wireframes. \"Low-fi\" looks like a rough sketch rather than a digital wireframe.",
        },
        {
            name: "Visual Design (Page 4 - HiFi)",
            exceptional: "UI Design: Professional, modern aesthetic. Typography and color choices are accessible (WCAG standards) and appropriate for the theme. rigorous consistency in design elements.",
            proficient: "UI Design: Pleasing aesthetic. Consistent use of colors and fonts. Some minor accessibility issues (e.g., low contrast text).",
            developing: "UI Design: Inconsistent design. Too many different fonts or colors are used. Looks \"unfinished\" or dated.",
            needsImprovement: "UI Design: Poor color choices make text unreadable. Layout breaks on the mobile frame—little effort in aesthetics.",
        },
        {
            name: "Figma Technical Skills (Prototyping)",
            exceptional: "Prototyping: Prototype feels like a real app. \"Smart Animate\" is used effectively. Components and Auto-layout are used correctly in the file structure. Zero broken links.",
            proficient: "Prototyping: Click-through works for all major paths. Basic transitions are applied. The file is organized but might not use advanced Auto-layout features.",
            developing: "Prototyping: Some broken links (dead ends). Transitions are jarring or missing. File layers are messy (e.g., \"Frame 123\", \"Rectangle 45\").",
            needsImprovement: "Prototyping: No interactivity/prototyping connections. Static images only. The file is completely disorganized.",
        },
    ]

    return (
        <section id="rubric" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                    Grading Rubric (100 Points)
                </h2>
                <div className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg overflow-hidden">
                    <div className="rounded-md border overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[200px]">Criteria</TableHead>
                                    <TableHead>Exceptional (21-25 pts)</TableHead>
                                    <TableHead>Proficient (16-20 pts)</TableHead>
                                    <TableHead>Developing (11-15 pts)</TableHead>
                                    <TableHead>Needs Improvement (0-10 pts)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {criteria.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{item.name}</TableCell>
                                        <TableCell>{item.exceptional}</TableCell>
                                        <TableCell>{item.proficient}</TableCell>
                                        <TableCell>{item.developing}</TableCell>
                                        <TableCell>{item.needsImprovement}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </section>
    )
}
