import { Center, Flex , Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apis from "./api/hello"



export default function Home() {
  const [text,setText] = useState()
  // console.log(text);
  const [hello,setHello] = useState([])
  useEffect(() => {
    const fecthello = async () => {
      const responce = await fetch("./api/hello")
      const data = await responce.json()
      setHello(data.gourmet.results.shop)
    }
    fecthello()
  },[])
  
  // console.log(hello);
  return (
    <>
      <Center w={"100vw"} h={"66px"} border="1px solid #000" gap={"16px"}>
        <Flex as={"input"} boxShadow={"1px 1px 1px 1px rgba(0, 0, 0, 0.25)"} onChange={(e) => setText(e.target.value)}></Flex>
        <Center padding={"4px 32px"} border={"1px solid #000"}><Text>検索</Text></Center>
      </Center>
      <Center border={"1px solid #000"} padding={" 8px 32px "} flexFlow={"column"} gap={"20px"}>
        {hello.map((e,i) => {
          console.log(e);
          return(
            <Flex w={"400px"} h="300px" bgColor={"beige"} borderRadius={"8px"} key={i} flexFlow="column">
              <Text>{e.name}</Text>
              <Box as="img" src={e.photo.pc.l} w={"50%"} h={"50%"}></Box>
              <Text>{e.open}</Text>
            </Flex>
          )
        })}
      </Center>
    </>
  )
}
