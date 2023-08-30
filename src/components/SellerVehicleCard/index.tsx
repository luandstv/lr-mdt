import { convertNumberToMoney } from "../../utils/convert-number-to-money";
import { Typography } from "../Typography";

import * as S from "./styles";

interface ISellerVehicleCard {
  image: string;
  name: string;
  price: number;
  clientPrice: number;
  stock: number;
}

export function SellerVehicleCard(props: ISellerVehicleCard) {
  return (
    <S.Wrapper>
      <S.Image
        src={props.image || "https://via.placeholder.com/150"}
        alt="Vehicle image"
      />

      <S.ContentContainer>
        <Typography color="secondary" weight={700}>
          {props.name}
        </Typography>

        <S.Content>
          <S.ImportPriceContainer>
            <Typography weight={600}>Preço de importação</Typography>
            <Typography size={14} color="accent">
              {convertNumberToMoney(props.price)}
            </Typography>
          </S.ImportPriceContainer>

          <S.ClientPriceContainer>
            <Typography weight={600}>Preço para o cliente</Typography>
            <Typography size={14} color="accent">
              {convertNumberToMoney(props.clientPrice)}
            </Typography>
          </S.ClientPriceContainer>

          <S.StockContainer>
            <Typography weight={600}>Estoque</Typography>
            <Typography size={14} color="accent">
              {props.stock}
            </Typography>
          </S.StockContainer>

          <S.ButtonsContainer>
            <S.Button>
              <Typography weight={600}>Importar</Typography>
            </S.Button>
            <S.Button>
              <Typography weight={600}>Exportar</Typography>
            </S.Button>
          </S.ButtonsContainer>
        </S.Content>
      </S.ContentContainer>
    </S.Wrapper>
  );
}
