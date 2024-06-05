'use client'
import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'

interface ParticlProsps {
    isMobile: boolean
}

export default function Particle({ isMobile }: ParticlProsps) {
    const [init, setInit] = useState(false)
    useEffect(() => {
        console.log('init')
        initParticlesEngine(async (engine: any) => {
            await loadFull(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    style={{
                        zIndex: 1,
                    }}
                    options={{
                        fpsLimit: 140,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: false,
                                    mode: 'push',
                                },
                                onHover: {
                                    enable: false,
                                    mode: 'repulse',
                                },
                                resize: {},
                            },
                            modes: {
                                push: {
                                    quantity: 8,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: '#bae6fd',
                            },
                            links: {
                                color: '#e0f2fe',
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: 'none',
                                enable: true,
                                outModes: {
                                    default: 'bounce',
                                },
                                random: false,
                                speed: 1.2,
                                straight: false,
                            },
                            number: {
                                value: isMobile ? 25 : 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: 'circle',
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </>
    )
}
