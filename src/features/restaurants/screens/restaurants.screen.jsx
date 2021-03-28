import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";

import RestaurantInfoCard from "../components/restaurant-info-card.components";
import { SafeArea } from "../../../components/utils/safe-area.component";
import Spacer from "../../../components/spacer/spacer.component";

import { SearchContainer, FlatListContainer } from "./restaurants.styles";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <FlatListContainer
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
