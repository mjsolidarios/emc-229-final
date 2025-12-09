import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, ShieldAlert, Sprout, HeartPulse } from "lucide-react"

export function Tracks() {
    const tracks = [
        {
            title: "Good Governance",
            subtitle: "Transparency & Efficiency",
            description: "Bureaucracy and lack of transparency often hinder public service delivery in the Philippines.",
            icon: Building2,
        },
        {
            title: "Disaster Preparedness",
            subtitle: "Safety & Response",
            description: "The Philippines is located in the Ring of Fire and the Typhoon Belt, making it vulnerable to natural disasters.",
            icon: ShieldAlert,
        },
        {
            title: "Agriculture",
            subtitle: "Food Security & Livelihood",
            description: "Farmers often face difficulties in fair pricing, supply chain logistics, and weather adaptation.",
            icon: Sprout,
        },
        {
            title: "Health",
            subtitle: "Access & Information",
            description: "Access to quality healthcare is uneven, especially in rural areas.",
            icon: HeartPulse,
        },
    ]

    return (
        <section id="tracks" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                    Thematic Tracks
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-[700px] mx-auto">
                    Choose <strong>one</strong> of the following tracks for your application.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tracks.map((track, index) => (
                        <Card key={index} className="hover:shadow-lg transition-all bg-card/80 backdrop-blur-sm border-border/40 hover:bg-card/90">
                            <CardHeader>
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="p-2 bg-primary/10 rounded-full">
                                        <track.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle>{track.title}</CardTitle>
                                        <CardDescription>{track.subtitle}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{track.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
