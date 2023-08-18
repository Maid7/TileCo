import { Flex,Box,Heading ,Text} from '@chakra-ui/react'
import React from 'react'
import TabsComponent from './TabsComponent'
import WorkProcess from './WorkProcess'
import ImageSlider from './ImageSlider'

const MainContent = () => {

  const images = [
 
     `https://www.tilemountain.co.uk/img/2300/2300/resize/catalog/product/m/a/marmy-grey-442805-roomset.jpg`,
     `https://www.waxmantileshowroom.co.uk/wp-content/uploads/2022/04/20211029_073615-min.jpg`,
     `https://www.designlike.com/wp-content/uploads/2021/02/pexels-photo-6207818.jpeg`,
     `https://images.squarespace-cdn.com/content/v1/5820b938d482e9a9a7034dea/1617042868545-R5DGOSU4AXPP7W0WMY73/pexels-photo-1457847.jpg`,
     `https://nikondia.com/n/wp-content/uploads/2019/04/pexels-max-vakhtbovych-7031620.jpg`
     
  ];

  return (
    <>
     <Flex flexDirection="column" p="20px">
       
       <Flex flexDirection={{base: "column", lg: "row"}}>
       <Box w={{base:"100%",lg: "30%"}} textAlign="center">
       <Heading color="blue.800" pt="30px">Keramicke Plocice</Heading>
       <Text color="gray.500" pt="30px" fontSize="20px">Keramičke pločice jedan su <br /> od najboljih izbora za zidove <br /> i podove u kuhinji i kupaonici</Text>
       <Text color="gray.500" pt="50px" fontSize="20px">Keramičke pločice traju <br /> desetljećima i otporne su na <br /> najteža habanja koja možete podnijeti</Text>
       <Text color="gray.500" pt="50px" fontSize="20px">Keramičke pločice treba <br /> postaviti na podlogu koja je glatka, <br /> ravna, čvrsta i čista.</Text>
       </Box>

       <Box
        bgImage={"https://www.hrjohnsonindia.com/assets/images/blog/armilo-silver-thumb-og.jpg"}
        bgSize="cover"
         bgPosition="center"
         bgRepeat="no-repeat"
         height="100vh"
         w={{base:"100%",lg: "70%"}}
         position="relative"
         borderRadius="10px"
       ></Box>
     </Flex>
       
     
     <Flex flexDirection={{base: "column", lg: "row"}} mt="10rem">
     <Box
        bgImage={"https://www.sakarmarbo.com/wp-content/themes/sakarmarbo/images/home-banner/banner-2.jpg"}
        bgSize="cover"
         bgPosition="center"
         bgRepeat="no-repeat"
         height="100vh"
         w={{base:"100%",lg: "70%"}}
         position="relative"
         borderRadius="10px"
       ></Box>

       <Box w={{base:"100%",lg: "30%"}} textAlign="center">
       <Heading color="blue.800" pt="30px">Keramicke Plocice</Heading>
       <Text color="gray.500" pt="30px" fontSize="20px">Za postizanje tačnih dimenzija <br /> plocice se moraju sjeci. <br />  To se može uraditi pomoću rezača <br /> za pločice ili brusilice sa dijamantskim diskom.</Text>
       <Text color="gray.500" pt="50px" fontSize="20px">Redovno čišćenje i održavanje <br /> keramike  pomoći će da se produži <br /> njen vek trajanja.</Text>
       <Text color="gray.500" pt="50px" fontSize="20px">Koristite odgovarajuće sredstvo za <br /> čišćenje koje neće oštetiti pločice.</Text>
       </Box>
     </Flex>
     {/* Image Slider */}
     <ImageSlider images={images}/>
     {/* Tabs components */}
     <TabsComponent/>
     {/* Work Process Component */}
     <WorkProcess/>
   </Flex>
  
    </>
   
  )
}

export default MainContent
