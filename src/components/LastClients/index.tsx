import { Typography } from "../Typography";
import * as S from "./styles";

const MOCKED_DATA = [
  {
    name: "Item 1",
    id: 1,
    description: "Desgrição do item 1",
    date: "2023-08-01",
  },
  {
    name: "Item 2",
    id: 2,
    description: "Desgrição do item 2",
    date: "2023-08-02",
  },
  {
    name: "Item 3",
    id: 3,
    description: "Desgrição do item 3",
    date: "2023-08-03",
  },
  {
    name: "Item 4",
    id: 4,
    description: "Desgrição do item 4",
    date: "2023-08-04",
  },
  {
    name: "Item 5",
    id: 5,
    description: "Desgrição do item 5",
    date: "2023-08-05",
  },
  {
    name: "Item 6",
    id: 5,
    description: "Desgrição do item 6",
    date: "2023-08-06",
  },
];

export function LastClients() {
  return (
    <S.Wrapper>
      <S.Table>
        <thead>
          <S.TableRow>
            <S.TableHeader>
              <Typography size={20} weight={600}>
                Nome
              </Typography>
            </S.TableHeader>
            <S.TableHeader>
              <Typography size={20} weight={600}>
                ID
              </Typography>
            </S.TableHeader>
            <S.TableHeader>
              <Typography size={20} weight={600}>
                Descrição
              </Typography>
            </S.TableHeader>
            <S.TableHeader>
              <Typography size={20} weight={600}>
                Data
              </Typography>
            </S.TableHeader>
          </S.TableRow>
        </thead>

        <S.TabletBody>
          {MOCKED_DATA.map((data, i) => (
            <S.TableRow key={data.name + i}>
              <S.TableData>
                <Typography color="accent" weight={600}>
                  {data.name}
                </Typography>
              </S.TableData>

              <S.TableData>
                <Typography color="accent" weight={600}>
                  {data.id}
                </Typography>
              </S.TableData>

              <S.TableData>
                <Typography color="accent" weight={600}>
                  {data.description}
                </Typography>
              </S.TableData>

              <S.TableData>
                <Typography color="accent" weight={600}>
                  {data.date}
                </Typography>
              </S.TableData>
            </S.TableRow>
          ))}
        </S.TabletBody>
      </S.Table>
    </S.Wrapper>
  );
}
