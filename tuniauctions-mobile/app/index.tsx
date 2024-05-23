import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import HeroSection from "./indexComponents/heroSection";
import FeaturedAuctionsSections from "./indexComponents/featuredSection";
import { HomePageFetchListingsResponse } from "../types/apiResponse";
import { AuctionListingType } from "../types/auctionListing";

export default function App() {
  const [premiumListings, setPremiumListings] = useState<
    AuctionListingType[] | null
  >(null);

  useEffect(() => {
    async function getListings() {
      const res = await fetch(
        `${process.env.EXPO_PUBLIC_API_ENDPOINT}/api/general/fetchHomePageListings`,
        { method: "POST" }
      );
      const resData: HomePageFetchListingsResponse = await res.json();
      setPremiumListings(resData.randomizedAuctionListings);
    }
    getListings();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <HeroSection />
        {premiumListings && (
          <FeaturedAuctionsSections premiumListings={premiumListings} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});
