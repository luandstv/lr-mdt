import {
  BsArrowUpSquareFill,
  BsFillArrowRightSquareFill,
  BsArrowDownSquareFill,
} from "react-icons/bs";
import { Typography } from "../Typography";

import * as S from "./styles";

const BALANCE_VARIANT = {
  positive: {
    icon: (
      <BsArrowUpSquareFill
        size={32}
        style={{
          color: "#15803D",
        }}
      />
    ),
  },
  negative: {
    icon: (
      <BsArrowDownSquareFill
        size={32}
        style={{
          color: "#B91C1C",
        }}
      />
    ),
  },
  neutral: {
    icon: (
      <BsFillArrowRightSquareFill
        size={32}
        style={{
          color: "#B9B61C",
        }}
      />
    ),
  },
};

interface IBalance {
  value: number;
  variant: "positive" | "negative" | "neutral";
}

export function Balance(props: IBalance) {
  function formatNumber(value: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }

  return (
    <S.Wrapper>
      {BALANCE_VARIANT[props.variant].icon}

      <Typography color="accent" size={20} weight={600}>
        {formatNumber(props.value)}
      </Typography>
    </S.Wrapper>
  );
}
