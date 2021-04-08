import React, { useContext } from "react";

import RestaurantInfoCard from "../components/restaurant-info-card.components";
import { SafeArea } from "../../../components/utils/safe-area.component";
import Spacer from "../../../components/spacer/spacer.component";
import Search from "../components/search.component";

import {
  FlatListContainer,
  IndicatorContainer,
  Loading,
} from "./restaurants.styles";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const RestaurantsScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />
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
      {isLoading && (
        <IndicatorContainer>
          <Loading animating={true} color={"#7289da"} size={50} />
        </IndicatorContainer>
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;
