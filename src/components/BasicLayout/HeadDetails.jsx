import React from 'react'
import Head from 'next/head'

const HeadDetails = ({title}) => {
  return (
    <Head>
    <title>{title}</title>
    <meta name="description" content="Generated by create-t3-app" />
    <link rel="icon" href="/DALL_E_2023-04-27_08.29.58-removebg-preview.png" />
  </Head>
  )
}

export default HeadDetails