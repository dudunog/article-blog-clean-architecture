import React from "react"
import {
  ComponentWithAs,
  Image as ChakraImage,
  ImageProps
} from "@chakra-ui/react"

const imgCache = {
  __cache: {},
  read(src) {
    if (!this.__cache[src]) {
      this.__cache[src] = new Promise((resolve) => {
        const img = new Image()
        img.onload = () => {
          this.__cache[src] = true
          resolve(this.__cache[src])
        }
        img.src = src
      }).then((img) => {
        this.__cache[src] = true
      })
    }
    if (this.__cache[src] instanceof Promise) {
      throw this.__cache[src]
    }
    return this.__cache[src]
  }
}

const SuspenseImg: ComponentWithAs<"img", ImageProps> =
  ({ src, ...rest }) => {
  imgCache.read(src)
  return <ChakraImage src={src} {...rest} />
}

export default SuspenseImg
