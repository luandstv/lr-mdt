import { SellerVehicleCard } from "../../components/SellerVehicleCard";
import { Typography } from "../../components/Typography";
import { MOCKED_VEHICLES_LIST } from "../../data/vehicles-list";
import { Template } from "../Template";

import * as S from "./styles";

export function VehiclesListTemplate() {
  return (
    <Template>
      <S.Wrapper>
        <Typography as="h2" size={28} weight={700}>
          Lista de veículos
        </Typography>

        <S.ContentContainer>
          <S.CardsContainer>
            {MOCKED_VEHICLES_LIST.map((vehicle, i) => (
              <SellerVehicleCard key={vehicle.name + i} {...vehicle} />
            ))}
          </S.CardsContainer>

          <S.FilterContainer>
            <S.FilterContentContainer>
              <Typography size={24} weight={600}>
                Filtros
              </Typography>
            </S.FilterContentContainer>
          </S.FilterContainer>
        </S.ContentContainer>
      </S.Wrapper>
    </Template>
  );
}
