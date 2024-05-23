import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import moment from "moment";
import { AuctionListingType } from "../../types/auctionListing";
interface Props {
  premiumListings: AuctionListingType[];
}
export default function FeaturedAuctionsSections({ premiumListings }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Featured Auctions</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {premiumListings.map((value, index) => (
          <View key={index} style={styles.auctionContainer}>
            <Image
              source={{ uri: value.productPictures[0] }}
              style={styles.image}
            />
            <Text style={styles.title}>{value.title}</Text>
            <Text style={styles.category}>{value.category}</Text>
            <Text style={styles.openingBid}>
              Opening Bid:{" "}
              {value.openingBid > 0 ? `$${value.openingBid}` : " Free!"}
            </Text>
            <View style={styles.startingDateContainer}>
              <Text style={styles.startingDateLabel}>Starts on:</Text>
              <Text style={styles.startingDate}>
                {moment(value.startingDate).format(
                  "ddd, MMM D, YYYY [at] h:mm A"
                )}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  auctionContainer: {
    width: 230,
    marginRight: 16,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
    borderRadius: 8,
  },
  title: {
    marginTop: 14,
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 16,
    fontWeight: "bold",
  },
  category: {
    fontSize: 14,
    textAlign: "center",
  },
  openingBid: {
    marginTop: 6,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: "#4b5563",
  },
  startingDateContainer: {
    marginTop: 8,
    padding: 6,
    backgroundColor: "#ddd6fe",
    borderRadius: 8,
    alignContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  startingDateLabel: {
    alignSelf: "center",
    fontSize: 12,
    fontWeight: "500",
  },
  startingDate: {
    fontWeight: "bold",
    fontSize: 12,
  },
});
