import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

export const FlatListContainer = styled.FlatList`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const IndicatorContainer = styled.View`
  position: absolute;
  left: 50%;
  top: 50%;
`;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
