import React, { useCallback, useEffect, useState } from "react"
import { Button } from "./ui/button"
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link"
import { useRouter } from "next/navigation"
import {
  createLinkToken,
  exchangePublicToken,
} from "@/lib/actions/user.actions"
import Image from "next/image"

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const [token, setToken] = useState("")
  const router = useRouter()

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user)
      setToken(data?.linkToken)
    }

    getLinkToken()
  }, [user])

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({
        publicToken: public_token,
        user,
      })

      router.push("/")
    },
    [user]
  )

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  }

  const { open, ready } = usePlaidLink(config)
  return (
    <>
      {variant === "primary" ? (
        <Button
          className="plaidlink-primary"
          onClick={() => open()}
          disabled={!ready}
        >
          Connect Bank
        </Button>
      ) : variant === "ghost" ? (
        <Button className="plaidlink-default" onClick={() => open()}>
          <div className="relative size-6">
            <Image
              src="/icons/connect-bank.svg"
              alt="connect bank"
              fill
              title="Connect Bank"
            />
          </div>
          <p className="text-[16px] font-semibold text-black-2">
            Connect Bank
          </p>
        </Button>
      ) : (
        <Button className="plaidlink-default" onClick={() => open()}>
          <div className="relative size-6">
            <Image
              src="/icons/connect-bank.svg"
              alt="connect bank"
              fill
              title="Connect Bank"
            />
          </div>
          <p className="text-[16px] font-semibold text-black-2 max-xl:hidden">
            Connect Bank
          </p>
        </Button>
      )}
    </>
  )
}

export default PlaidLink
