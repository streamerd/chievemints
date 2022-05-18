import { useWeb3 } from 'lib/hooks'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import { ERC1155Metadata, Maybe } from 'lib/types'
import { httpURL } from 'lib/helpers'
import { HomeLink, OptionsForm } from 'components'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'

export const Edit: NextPage = () => {
  const { query: { nftId } } = useRouter()
  const [metadata, setMetadata] = useState<Maybe<ERC1155Metadata>>()
  const [error, setError] = useState<ReactNode>()
  const [tokenId, setTokenId] = useState<string>()
  const { roContract } = useWeb3()

  useEffect(() => {
    setTokenId(Array.isArray(nftId) ? nftId[0] : nftId)
  }, [nftId])

  useEffect(() => {
    const getMetadata = async () => {
      if(roContract && tokenId) {
        try {
          const meta = await roContract.uri(tokenId)
          if(!meta) {
            setMetadata(null)
          } else {
            const response = await fetch(httpURL(meta))
            setMetadata(await response.json())
          }
        } catch(err) {
          setError((err as Error).message)
        }
      }
    }

    getMetadata()
  }, [roContract, tokenId])

  return (
    <Box>
      <Head>
        <title>’𝖈𝖍𝖎𝖊𝖛𝖊: Ⲉⲇⲓⲧ #{tokenId}</title>
        <title>Claim Token Id #{tokenId}</title>

      </Head>
      <HomeLink/>
      <OptionsForm
        purpose="update"
        {...{ tokenId, metadata }}
      />
    </Box>
  )
}

export default Edit