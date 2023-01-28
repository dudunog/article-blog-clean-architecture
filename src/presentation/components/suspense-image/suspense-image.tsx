import React from "react"
import {
  ComponentWithAs,
  Image as ChakraImage,
  ImageProps
} from "@chakra-ui/react"

const imgCache = {
  __cache: {},
  read (src: string) {
    // @ts-expect-error ignore
    if (!this.__cache[src]) {
      // @ts-expect-error ignore
      this.__cache[src] = new Promise((resolve) => {
        const img = new Image()
        img.onload = () => {
          // @ts-expect-error ignore
          this.__cache[src] = true
          // @ts-expect-error ignore
          resolve(this.__cache[src])
        }
        img.src = src
      }).then((img) => {
        // @ts-expect-error ignore
        this.__cache[src] = true
      })
    }
    // @ts-expect-error ignore
    if (this.__cache[src] instanceof Promise) {
      // @ts-expect-error ignore
      throw this.__cache[src]
    }
    // @ts-expect-error ignore
    return this.__cache[src]
  }
}

const SuspenseImg: ComponentWithAs<"img", ImageProps> =
  ({ src, ...rest }) => {
    imgCache.read(src as string)
    return <ChakraImage src={src} {...rest} />
  }

export default SuspenseImg
