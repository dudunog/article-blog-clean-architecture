import React from "react"
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Tooltip,
  useColorModeValue,
  useToast
} from "@chakra-ui/react"
import { SearchIcon, UpDownIcon } from "@chakra-ui/icons"

interface SearchProps {
  page: number
  search: string
  setSearch: React.Dispatch<React.SetStateAction<any>>
  orderby: string
  setOrderby: React.Dispatch<React.SetStateAction<any>>
  disabledRelevance: boolean
  load: (page: number, search: string, orderby: string) => void
}

const Search: React.FC<SearchProps> = ({
  page,
  search,
  setSearch,
  orderby,
  setOrderby,
  disabledRelevance,
  load
}) => {
  const toast = useToast()

  const handleSearch = (search: string): void => {
    setSearch(search)
  }

  const handleFilterBySearch = () => {
    setOrderby("")

    if (search.length)
      load(page, search, orderby)
    else
      toast({
        title: "Digite no campo para poder buscar",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
  }

  const handleFilterByRelevance = () => {
    if (orderby === "relevance") {
      setOrderby("")
      load(page, search, "")
    } else {
      setOrderby("relevance")
      load(page, search, "relevance")
    }
  }

  return (
    <InputGroup gap="1rem" m="auto" maxW={1500}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="#c2c2c2" />
      </InputLeftElement>

      <Input
        type="text"
        placeholder="Busca"
        color="#a3a3a3"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <Button
        onClick={() => handleFilterBySearch()}
        _hover={{
          bgColor: "blue.500",
          color: "white"
        }}
      >
        Buscar
      </Button>

      <Tooltip
        hasArrow
        label="Mais relevantes"
      >
        <IconButton
          bg={orderby === "relevance" ? "blue.500" : useColorModeValue("gray.100", "whiteAlpha.200")}
          aria-label="Mais relevantes"
          icon={<UpDownIcon />}
          onClick={() => handleFilterByRelevance()}
          isDisabled={disabledRelevance}
          _hover={{
            bgColor: "blue.500",
            color: "white"
          }}
        />
      </Tooltip>
    </InputGroup>
  )
}

export default Search
