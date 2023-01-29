import React, { memo } from "react"
import { Link } from "react-router-dom"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Flex,
  Stack,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react"

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Link to="/home">
            <Box>Translation</Box>
          </Link>

          <Flex alignItems="center">
            <Stack direction="row" spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default memo(Navbar)
