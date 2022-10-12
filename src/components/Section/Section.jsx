
import { Sections, Title } from "./Section.style"


export const Section = (({ title, children }) => {
    return (
        <Sections>
            <Title>{title}</Title>
            {children}
        </Sections>
    )
})