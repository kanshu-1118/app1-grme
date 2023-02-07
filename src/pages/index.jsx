import { Center, Flex , Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apis from "./api/hello"



export default function Home() {
  const [text1,setText1] = useState()
  const [text2,setText2] = useState()
  // console.log(text);
  const [hello,setHello] = useState([])
  const [keyword,setKeyword] = useState("野田")
  const [lat,setLat] = useState("")
  const [lng,setLng] = useState("")
  const [address,setAddress] = useState("")
  
  



  useEffect(() => {
    
    const params = {
      keyword : keyword,
      lat : lat,
      lng : lng,
      address : address,
    }
    const query = new URLSearchParams(params)
    const fecthello = async () => {
      const responce = await fetch(`./api/hello?${query}`)
      const data = await responce.json()
      setHello(data.gourmet.results.shop)
    }
    fecthello()
  },[keyword,keyword,lat,lng])
  
  

  const formstart = () => {
    
    if (!text2 == ""){
      setLat("")
      setLng("")
      setKeyword(text1)
      setAddress(text2)
      console.log("住所ある");
    }else{
      function successFunc( position )
      {
        // console.log( position.coords.latitude ) ;
        setLat(position.coords.latitude)
        // console.log( position.coords.longitude ) ;
        setLng(position.coords.longitude)
      }
    
      if( navigator.geolocation )
      {
        navigator.geolocation.getCurrentPosition( successFunc ) ;
      }else
      {
        alert( "あなたの端末では、現在位置を取得できません。" ) ;
      }
      setKeyword(text1)
      setAddress("")
      console.log(lat);
      console.log(lng);
      console.log("住所なし");
    }
  }
  // const gurme = () => {

  // }

  return (
    <>
      <Center w={"100vw"} h={"66px"} border="1px solid #000" gap={"16px"}>
        <Text>キーワード</Text>
        <Flex as={"input"} boxShadow={"1px 1px 1px 1px rgba(0, 0, 0, 0.25)"} onChange={(e) => setText1(e.target.value)}></Flex>
        <Text><strong>住所</strong>※何も入れないと現在地取得します</Text>
        <Flex as={"input"} boxShadow={"1px 1px 1px 1px rgba(0, 0, 0, 0.25)"} onChange={(e) => setText2(e.target.value)}></Flex>        
        <Center padding={"4px 32px"} border={"1px solid #000" } onClick={formstart}><Text>キーワードで検索</Text></Center>
      </Center>
      <Center border={"1px solid #000"} padding={" 8px 32px "} flexFlow={"column"} gap={"20px"}>
        {hello.map((e,i) => {
          // console.log(e);
          return(
            <Flex w={"600px"} h="300px" bgColor={"white"} boxShadow={"2px 2px 2px 0px rgba(0, 0, 0 ,0.25)"} borderRadius={"8px"} key={i} flexFlow="column">
              <Text>{e.name}</Text>
              <Box as="img" src={e.photo.pc.l} w={"30%"} h={"50%"}></Box>
              <Text>{e.open}</Text>
              <Text>{e.address}</Text>
            </Flex>
          )
        })}
      </Center> 
    </>
  )
}
