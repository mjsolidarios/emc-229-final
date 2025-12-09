import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Calendar } from 'lucide-react'

interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
}

export function CountdownTimer() {
    const calculateTimeLeft = (): TimeLeft => {
        const deadline = new Date('2025-12-15T23:59:59+08:00')
        const now = new Date()
        const difference = deadline.getTime() - now.getTime()

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        }

        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center gap-2">
            <div className="relative bg-primary/10 dark:bg-primary/20 backdrop-blur-md border-2 border-primary/30 dark:border-primary/40 rounded-xl p-4 md:p-6 min-w-[70px] md:min-w-[100px] shadow-lg hover:border-primary/50 dark:hover:border-primary/60 transition-all">
                <span className="text-3xl md:text-5xl font-bold text-primary dark:text-primary">
                    {value.toString().padStart(2, '0')}
                </span>
            </div>
            <span className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {label}
            </span>
        </div>
    )

    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold">Project Deadline</h2>
                </div>
                <p className="text-base md:text-lg text-muted-foreground font-medium">
                    December 15, 2025 • 11:59 PM
                </p>
            </div>
            <Card className="bg-card/95 backdrop-blur-md border-2 border-border p-8 md:p-10">
                <div className="flex justify-center gap-4 md:gap-8">
                    <TimeUnit value={timeLeft.days} label="Days" />
                    <TimeUnit value={timeLeft.hours} label="Hours" />
                    <TimeUnit value={timeLeft.minutes} label="Minutes" />
                    <TimeUnit value={timeLeft.seconds} label="Seconds" />
                </div>
            </Card>
        </div>
    )
}
