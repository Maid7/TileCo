import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel ,Text} from '@chakra-ui/react'

const TabsComponent = () => {
  return (

    <Tabs variant='enclosed-colored' colorScheme='orange' w="100%" textAlign="center" mt="5rem" mx="auto">
  <TabList display="flex" justifyContent="center" alignItems="center" >
    <Tab>Skidanje Plocica</Tab>
    <Tab>Postavljanje Plocica</Tab>
    <Tab>Fugiranje Plocica</Tab>
  </TabList>
  <TabPanels>
    <TabPanel bg="gray.200">
      <Text fontSize="20px" color="gray.600">Popravak u kuci ili stanu ponekad je sugerirao da se prvo mora rijesiti predhodnih slojeva plocica u sanitarnoj jedinici ili kuhinji.To je ne samo za zidne plocice,ali i za podne.Pristup pitanja uklanjanja plocica od poda ili zida treba pazljivo pripreti naoruzani raznim instrumentima.Pitanje kako ukloniti plocice,ne nastaju.Jedini aspekt koji treba uzeti u obzir prilikom skidanja plocica-to je ono sta ce ostati nakog ovog procesa.</Text>
    </TabPanel>
    <TabPanel bg="gray.200" >
      <Text fontSize="20px" color="gray.600">Keramicarski radovi su vazni zavrsni radovi koji uz ostalne zavrsne radove objektu daju zavrsni izgled i osobnost.Da bi se keramicarski radovi uredno i pedantno napravili vazno je da ih rade kvalitetni i iskusni keramicari.Keramicari obavljaju zahtjevne radove za koje su potrebne godine ucenja i savladavanja tehnike kojom bi zavrsni rezultat radova bio kvalitetan i zadovoljavajuci.Keramicari svoj posao moraju obavljati pedantnoi temeljito, jer je svaka greska vidljiva.</Text>
    </TabPanel>
    <TabPanel bg="gray.200" >
      <Text fontSize="20px" color="gray.600">Prilikom opremanja kupaonice treba uzeti u obzir da se radi o prostoru koji je izlozen vlazi.Zato treba birati kvalitetna rjesenja i planirati svaki detalj. Vrlo je bitan izbor odgovarajuceg ljepila,kao i mase za fugiranje.</Text>
    </TabPanel>
  </TabPanels>
     </Tabs>
  )
}

export default TabsComponent
