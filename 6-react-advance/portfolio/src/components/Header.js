import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'
import { Box, HStack } from '@chakra-ui/react'

const socials = [
    {
        icon: faEnvelope,
        url: "mailto: will@example.com",
    },
    {
        icon: faGithub,
        url: "https://github.com/will-dev",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/will-dev",
    },
    {
        icon: faMedium,
        url: "https://will-dev.medium.com",
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com/users/will-dev",
    },
]

const Header = () => {
    const [scrollY, setScrollY] = React.useState(0)
    const headerRef = React.useRef()

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const headerElement = headerRef.current

            if (!headerElement) return

            if (currentScrollY > scrollY && currentScrollY > 100) {
                // Scrolling down and past 100px
                headerElement.style.transform = 'translateY(-200px)'
            } else {
                // Scrolling up
                headerElement.style.transform = 'translateY(0)'
            }

            setScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollY])

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }

    return (
        <Box
            ref={headerRef}
            position="fixed"
            top={0}
            left={0}
            right={0}
            transform="translateY(0)"
            transitionProperty="transform"
            transitionDuration="0.3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
            zIndex={999}
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <nav>
                        <HStack spacing={8}>
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={social.icon}
                                        size="2x"
                                    />
                                </a>
                            ))}
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            <a
                                href="#projects"
                                onClick={handleClick('projects')}
                            >
                                Projects
                            </a>
                            <a
                                href="#contact-me"
                                onClick={handleClick('contactme')}
                            >
                                Contact Me
                            </a>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    )
}
export default Header
