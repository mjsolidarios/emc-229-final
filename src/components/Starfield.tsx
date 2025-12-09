import { useEffect, useRef } from 'react'
import { useTheme } from '@/hooks/use-theme'

interface Star {
    x: number
    y: number
    z: number
    radius: number
    baseOpacity: number
    opacity: number
    twinkleSpeed: number
    twinklePhase: number
    speed: number
}

interface Meteor {
    x: number
    y: number
    length: number
    speed: number
    angle: number
    opacity: number
    width: number
}

export function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { theme } = useTheme()
    const starsRef = useRef<Star[]>([])
    const meteorsRef = useRef<Meteor[]>([])
    const animationFrameRef = useRef<number | undefined>(undefined)
    const mouseRef = useRef({ x: 0, y: 0 })
    const targetMouseRef = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize mouse coordinates from -1 to 1
            targetMouseRef.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1
            }
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Initialize stars
        const initStars = () => {
            starsRef.current = []
            const starCount = Math.floor((canvas.width * canvas.height) / 2500) // High density

            for (let i = 0; i < starCount; i++) {
                starsRef.current.push({
                    x: Math.random() * canvas.width - canvas.width / 2,
                    y: Math.random() * canvas.height - canvas.height / 2,
                    z: Math.random() * 2 + 0.5, // Depth factor
                    radius: Math.random() * 1.2 + 0.8, // Reduced size: 0.8 to 2.0
                    baseOpacity: Math.random() * 0.3 + 0.7, // High opacity: 0.7 to 1.0
                    opacity: 0, // Will be set in animate
                    twinkleSpeed: Math.random() * 0.05 + 0.01,
                    twinklePhase: Math.random() * Math.PI * 2,
                    speed: Math.random() * 0.3 + 0.1 // Faster movement
                })
            }
        }
        initStars()

        // Spawn meteor occasionally
        const spawnMeteor = () => {
            if (Math.random() < 0.008) { // Frequent meteors
                const startFromTop = Math.random() < 0.5
                const angle = Math.random() * Math.PI / 4 + Math.PI / 4 // 45-90 degrees
                meteorsRef.current.push({
                    x: startFromTop ? Math.random() * canvas.width : canvas.width + 100,
                    y: startFromTop ? -100 : Math.random() * canvas.height * 0.5,
                    length: Math.random() * 200 + 100,
                    speed: Math.random() * 6 + 5,
                    angle: angle,
                    opacity: 1,
                    width: Math.random() * 3 + 1
                })
            }
        }

        const isDark = () => theme === 'dark'

        // Animation loop
        const animate = () => {
            const dark = isDark()
            const centerX = canvas.width / 2
            const centerY = canvas.height / 2

            // Smooth mouse movement
            mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.05
            mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.05

            // Clear canvas with gradient
            if (dark) {
                const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(canvas.width, canvas.height))
                gradient.addColorStop(0, '#020617') // Slate 950 (darker center)
                gradient.addColorStop(1, '#000000') // Pure black edges
                ctx.fillStyle = gradient
            } else {
                const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(canvas.width, canvas.height))
                gradient.addColorStop(0, '#f1f5f9') // Slate 100
                gradient.addColorStop(1, '#cbd5e1') // Slate 300 (darker edges)
                ctx.fillStyle = gradient
            }
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Draw and update stars
            starsRef.current.forEach((star) => {
                // Constant movement
                star.x -= star.speed / star.z // Move left, slower for distant stars

                // Wrap around
                if (star.x < -canvas.width / 2) {
                    star.x = canvas.width / 2
                    star.y = Math.random() * canvas.height - canvas.height / 2
                }

                // Parallax effect based on depth (z)
                const parallaxX = mouseRef.current.x * 50 / star.z
                const parallaxY = mouseRef.current.y * 50 / star.z

                // 3D projection
                const scale = 1000 / (1000 + star.z * 100) // Simple perspective
                const x = centerX + (star.x + parallaxX) * scale
                const y = centerY + (star.y + parallaxY) * scale

                // Twinkle
                star.twinklePhase += star.twinkleSpeed
                const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7 // 0.4 to 1.0 multiplier
                star.opacity = star.baseOpacity * twinkle

                // Only draw if on screen
                if (x > 0 && x < canvas.width && y > 0 && y < canvas.height) {
                    ctx.beginPath()
                    ctx.arc(x, y, star.radius * scale, 0, Math.PI * 2)

                    if (dark) {
                        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
                        // Add glow for larger stars
                        if (star.radius > 1.5) {
                            ctx.shadowBlur = 4
                            ctx.shadowColor = `rgba(255, 255, 255, ${star.opacity * 0.5})`
                        } else {
                            ctx.shadowBlur = 0
                        }
                    } else {
                        // Darker color for light mode visibility
                        ctx.fillStyle = `rgba(15, 23, 42, ${star.opacity})` // Slate 900
                        ctx.shadowBlur = 0
                    }
                    ctx.fill()
                }
            })

            // Spawn new meteors
            spawnMeteor()

            // Draw and update meteors
            meteorsRef.current = meteorsRef.current.filter((meteor) => {
                const tailX = meteor.x - Math.cos(meteor.angle) * meteor.length
                const tailY = meteor.y - Math.sin(meteor.angle) * meteor.length

                const gradient = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY)

                if (dark) {
                    gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`)
                    gradient.addColorStop(0.2, `rgba(147, 197, 253, ${meteor.opacity * 0.8})`) // Blue tint
                    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
                } else {
                    gradient.addColorStop(0, `rgba(37, 99, 235, ${meteor.opacity})`) // Blue 600
                    gradient.addColorStop(0.2, `rgba(96, 165, 250, ${meteor.opacity * 0.8})`)
                    gradient.addColorStop(1, 'rgba(37, 99, 235, 0)')
                }

                ctx.beginPath()
                ctx.strokeStyle = gradient
                ctx.lineWidth = meteor.width
                ctx.lineCap = 'round'
                ctx.moveTo(meteor.x, meteor.y)
                ctx.lineTo(tailX, tailY)
                ctx.stroke()

                // Add head glow
                if (dark) {
                    ctx.beginPath()
                    ctx.fillStyle = `rgba(255, 255, 255, ${meteor.opacity})`
                    ctx.shadowBlur = 12
                    ctx.shadowColor = 'rgba(147, 197, 253, 0.9)'
                    ctx.arc(meteor.x, meteor.y, meteor.width, 0, Math.PI * 2)
                    ctx.fill()
                    ctx.shadowBlur = 0
                }

                // Update meteor position
                meteor.x += Math.cos(meteor.angle) * meteor.speed
                meteor.y += Math.sin(meteor.angle) * meteor.speed
                meteor.opacity -= 0.015

                return (
                    meteor.opacity > 0 &&
                    meteor.x > -200 &&
                    meteor.x < canvas.width + 200 &&
                    meteor.y > -200 &&
                    meteor.y < canvas.height + 200
                )
            })

            animationFrameRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [theme])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 h-full w-full pointer-events-none"
            style={{ background: 'transparent' }}
        />
    )
}
