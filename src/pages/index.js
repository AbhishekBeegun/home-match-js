import Head from "next/head";
import React from "react";
import { useState } from "react";
import HeadDetails from "@/components/BasicLayout/HeadDetails";
import EndBanner from "@/components/HomeScreen/EndBanner";
import FeaturedAgency from "@/components/HomeScreen/FeaturedAgency";
import FeaturedHouse from "@/components/HomeScreen/FeaturedHouse";
import HomeBanner from "@/components/HomeScreen/HomeBanner";
import NewLand from "@/components/HomeScreen/NewLand";
import { HOMEHOUSES_QUERY, HOMELANDS_QUERY, TOPAGENCIES_QUERY } from "@/lib/Queries";
import {getApolloClient} from '@/lib/apollo-client'

const Home = ({HH,HA,HL}) => {
  const [Housess, setHousess] = useState(HH)
  const [Landss, setLandss] = useState(HL)
  const [Agenciess, setAgenciess] = useState(HA)

  return (
    <>
    <HeadDetails title={"HomeMatch"}/>

    <HomeBanner/>
    <FeaturedHouse houses={Housess} />
    <FeaturedAgency agencies={Agenciess} />
    <EndBanner />
    <NewLand lands={Landss}/>

    </>
  );
};

export default Home;


export async function getStaticProps() {

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: HOMEHOUSES_QUERY
  });

  const data1 = await apolloClient.query({
    query: TOPAGENCIES_QUERY
  });
  const data2 = await apolloClient.query({
    query: HOMELANDS_QUERY
  });



  const HH = data?.data.houses.map((house) =>{
    return{
      ...house,
    }
  });

  const HA = data1?.data.agencies.map((agency) =>{
    return{
      ...agency
    }
  });

  const HL = data2?.data.lands.map((land) =>{
    return{
      ...land
    }
  });
    return { 
      props: {
        HH,
        HA,
        HL
      }
    }

    
}
