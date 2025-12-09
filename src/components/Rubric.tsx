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
            name: "Design & Aesthetics (25%)",
            excellent: "Visually stunning, with a unique and professional layout. Excellent use of color, typography, and imagery that creates a cohesive and memorable brand identity.",
            good: "Professional and clean design. Good use of color and typography. Layout is well-organized and visually appealing.",
            fair: "Basic, template-like design. Some inconsistencies in visual elements. The overall look is average but functional.",
            needsImprovement: "Poor design choices. Inconsistent or distracting layout, typography, and color scheme. Lacks professional appeal.",
        },
        {
            name: "Content & Personal Branding (30%)",
            excellent: "Content is exceptionally well-written, compelling, and clearly articulates a strong personal brand. Portfolio pieces are high-quality and effectively showcase skills and expertise.",
            good: "Content is clear, well-written, and establishes a consistent personal brand. Portfolio showcases a good range of skills through quality work.",
            fair: "Content is adequate but may contain errors or lack a clear brand voice. Portfolio includes some relevant work, but the presentation could be stronger.",
            needsImprovement: "Content is sparse, poorly written, or fails to convey a professional brand. Portfolio pieces are weak, irrelevant, or missing.",
        },
        {
            name: "Functionality & User Experience (UX) (25%)",
            excellent: "Flawless navigation, intuitive user flow, and excellent performance across all devices (fully responsive). All links and interactive elements work perfectly.",
            good: "Easy to navigate with a logical structure. The site is responsive and performs well. Only minor, isolated usability issues.",
            fair: "Navigation is generally functional but may be confusing in some areas. The site may have some responsiveness or performance issues on certain devices.",
            needsImprovement: "Difficult to navigate, with broken links or non-functional elements. Poor responsiveness and slow performance significantly hinder the user experience.",
        },
        {
            name: "Technical Implementation (20%)",
            excellent: "Expert use of WYSIWYG/No-code platforms (e.g., WordPress, Figma) demonstration. Layout is flawless, fully responsive, and assets are perfectly optimized. Platform features are utilized to their full potential.",
            good: "Effective use of chosen platform. Layout is clean and responsive. Assets are generally well-optimized. Platform features are used correctly.",
            fair: "Basic use of platform features. Layout has some minor issues or inconsistencies on different devices. Assets may not be fully optimized.",
            needsImprovement: "Poor use of platform. Layout is broken or not responsive. Assets are missing or unoptimized. Fails to demonstrate basic competency with the tool.",
        },
    ]

    return (
        <section id="rubric" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                    Portfolio Evaluation Rubric
                </h2>
                <div className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-lg overflow-hidden">
                    <div className="rounded-md border overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[200px]">Criteria</TableHead>
                                    <TableHead>Excellent (4 pts)</TableHead>
                                    <TableHead>Good (3 pts)</TableHead>
                                    <TableHead>Fair (2 pts)</TableHead>
                                    <TableHead>Needs Improvement (1 pt)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {criteria.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{item.name}</TableCell>
                                        <TableCell>{item.excellent}</TableCell>
                                        <TableCell>{item.good}</TableCell>
                                        <TableCell>{item.fair}</TableCell>
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
