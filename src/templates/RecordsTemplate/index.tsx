import { Typography } from "../../components/Typography";
// import { BasicVehicleCard } from "../../components/BasicVehicleCard";
// import { Balance } from "../../components/Balance";
// import { LastClients } from "../../components/LastClients";
import { Template } from "../Template";
// import { MOCKED_VEHICLES_LIST } from "../../data/vehicles-list";
import { IoIosAddCircleOutline } from "react-icons/io";

import * as S from "./styles";

export function RecordsTemplate() {
  // function getMostSoldVehicles() {
  //   const mostSoldVehicles = MOCKED_VEHICLES_LIST.sort((a, b) => {
  //     return b.totalSales - a.totalSales;
  //   });

  //   return mostSoldVehicles.slice(0, 3);
  // }
const isEmpty = true;
  return (
    <Template>
      <S.Wrapper>
        <Typography as="h2" size={28} weight={700}>
          Bem vindo!
        </Typography>

        <S.Divider />

        <S.CardsContainer>
        <Typography size={24} weight={700}>
            Mural de avisos
          </Typography>        

          <S.AddNoticeButton>
            <IoIosAddCircleOutline />
              <Typography weight={600}>Adicionar aviso</Typography>
            </S.AddNoticeButton>
          <S.NoticeBoardContainer>           
            {isEmpty && <S.EmptyNoticeBoard>
                Nenhuma noticia no momento.
              </S.EmptyNoticeBoard>}
            
            </S.NoticeBoardContainer> 
        </S.CardsContainer>

        {/* <S.BalanceContainer>
          <Typography size={24} weight={700}>
            Balanço
          </Typography>

          <S.Balances>
            <Balance value={50000} variant="positive" />
            <Balance value={20000} variant="negative" />
            <Balance value={-30000} variant="neutral" />
          </S.Balances>
        </S.BalanceContainer>

        <S.LastClientsContainer>
          <Typography size={24} weight={700}>
            Últimos clientes
          </Typography>

          <S.LastClients>
            <LastClients />
          </S.LastClients>
        </S.LastClientsContainer> */}
      </S.Wrapper>
    </Template>
  );
}
