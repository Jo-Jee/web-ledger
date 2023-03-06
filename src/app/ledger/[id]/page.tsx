'use client'

import { useEffect } from 'react'

export default function Ledger({ params }: { params: { id: number } }) {
  const { id } = params
  useEffect(() => {
    console.log(id)
  }, [])
  return <div>{params.id}</div>
}
