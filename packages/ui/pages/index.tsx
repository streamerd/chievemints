import { useState, useEffect, useMemo } from 'react'
import { ethers } from 'ethers'
import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Box, Container, Flex, Image, Stack, Tooltip,
  Table, Thead, Tbody, Tr, Th, Td,
  Spinner, Text, Link as ChakraLink, chakra,
} from '@chakra-ui/react'
import Markdown from 'react-markdown'
import { httpURL } from 'lib/helpers'
import type { Maybe, ERC1155Metadata, TokenState } from 'lib/types'
import { Header, TokensTable } from 'components'
import { useWeb3 } from 'lib/hooks'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const [tokens, setTokens] = useState<Array<TokenState>>([])
  const { query: { gating = false } } = useRouter()
  const [gatingVisible, setGatingVisible] = useState(!!gating)
  console.log({gating, gatingVisible})
  const { roContract } = useWeb3()

  const setToken = (index: number, info: Record<string, unknown>) => {
    setTokens((tkns: Array<TokenState>) => ([
      ...tkns.slice(0, index),
      { ...tkns[index], ...info },
      ...tkns.slice(index + 1),
    ]))
  }

  useEffect(
    () => {
      const load = async () => {
        if(roContract) {
          const typeCount = Number(await roContract.typeSupply())

          const tokens = await Promise.all(
            Array.from({ length: typeCount }).map(
              async (_, index) => {
                const id = (await roContract.tokenByIndex(index + 1))
                const GATING_TYPE = await roContract.GATING_TYPE()
                const TYPE_WIDTH = await roContract.TYPE_WIDTH()
                const TYPE_BOUNDARY = await roContract.TYPE_BOUNDARY()
                const gating = (
                  !gatingVisible
                  && (
                    (id.toBigInt() & ((BigInt(2**TYPE_WIDTH - 1)) << BigInt(TYPE_BOUNDARY)))
                    === GATING_TYPE.toBigInt()
                  )
                )

                return { id: id.toHexString(), gating }
              }
            )
          )

          setTokens(tokens)

          await Promise.all(
            tokens.map(async ({ id, gating }, index) => {
              if(gating) {
                return null
              }
              let metadata = null
              try {
                let uri = await roContract.uri(id)
                if(uri === '') uri = null
                setToken(index, { uri })

                const url = httpURL(uri)
                const response = await fetch(url)
                const data = await response.text()
                if(!data || data === '') {
                  throw new Error('No Data')
                }
                try {
                  metadata = JSON.parse(data)
                } catch(error) {
                  console.error('JSON Error', { error, data })
                }
              } catch(error) {
                console.warn({ error })
                setToken(index, {
                  error: (error as Error).message ?? error
                })
              } finally {
                setToken(index, { metadata })
              }

              const total = await roContract['totalSupply(uint256)'](id)
              setToken(index, { total })

              // const max = await contract.getMax(id)
              // setToken(index, { max })
            })
          )
        }
      }

      load()
    },
    [roContract],
  )

  return (
    <Container maxW="full">
      <Head>
        {/* <title>𝔐𝔢𝔱𝔞𝔊𝔞𝔪𝔢’𝔰 ’𝓒𝓱𝓲𝓮𝓿𝓮𝓶𝓲𝓷𝓽𝓼</title> */}
        <title>SmartLaw Claim Tokens</title>

        <meta
          name="description"
          // content="MetaGame’s ’Chievemint NFTs"
          content="SmartLaw Claim Tokens"
        />
      </Head>

      <chakra.header h="45vh">
        <Flex maxW="40rem" margin="auto">
          <Header mt="5vh" h="40vh"/>
        </Flex>
      </chakra.header>

      <chakra.main>
        <TokensTable {...{ tokens }}/>
      </chakra.main>
    </Container>
  )
}

export default Home
