import React from "react"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text
} from "@chakra-ui/react"

interface ArticleBibliographyProps {
  bibliography: string
}

const ArticleBibliography: React.FC<ArticleBibliographyProps> = ({
  bibliography
}) => {
  return (
    <Accordion mt={10} defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              Bibliografia
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <Text
            pl={5}
            fontSize="md"
            color="gray.500"
            dangerouslySetInnerHTML={{ __html: bibliography }}
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default ArticleBibliography
