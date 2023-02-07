// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { useState } from "react"

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async function handler(req, res) {

  const APIKEY = `f304caa3812ecfb`
  // const keyword = `野田`

  // const [apikey,setApikey] = useState(`f304caa3812ecfb`)
  // const [keyword,setKeyword] = useState(`野田`)


  const responce = await
  fetch(`https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=1${APIKEY}&format=json&keyword=${req.query.keyword}`)
  const gourmet = await responce.json()
  res.status(200).json({gourmet})
}
