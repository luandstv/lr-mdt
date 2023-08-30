import { Typography } from "../Typography";

import * as S from "./styles";

interface IBasicVehicleCard {
  image: string;
  name: string;
  totalSales: number;
}

export function BasicVehicleCard(props: IBasicVehicleCard) {
  return (
    <S.Wrapper>
      <S.Image
        src={props.image || "https://via.placeholder.com/150"}
        alt="Vehicle image"
      />

      <S.CardInfosContainer>
        <S.Infos>
          <Typography weight={700}>Veículo:</Typography>

          <Typography color="secondary" weight={600}>
            {props.name}
          </Typography>
        </S.Infos>

        <S.Infos>
          <Typography weight={700}>Total de vendas</Typography>
          <Typography color="secondary" weight={600}>
            {props.totalSales}
          </Typography>
        </S.Infos>
      </S.CardInfosContainer>
    </S.Wrapper>
  );
}
