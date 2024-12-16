'use client'
import dynamic from 'next/dynamic'
import { Skeleton } from "@/components/ui/skeleton";
const Map = dynamic(
  () => import("@/components/properties/PropertyMap"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[400px] w-full" />,
  }
);

import React from 'react'

function DynamicMap({countryCode}:{countryCode:string}) {
  return (
    <Map countryCode={countryCode} />
  )
}

export default DynamicMap