'use client'

import { QueryClientOptions } from "@/src/utils/constants"
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import { ReactQueryDevtools} from '@tanstack/react-query-devtools'
import { useState } from "react"



const Providers = ({children} : React.PropsWithChildren) => {
  const [client] = useState(
    new QueryClient(QueryClientOptions)
  )


  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default Providers;