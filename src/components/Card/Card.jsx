import { format, parseISO } from "date-fns";
import ReactReadMoreReadLess from "react-read-more-read-less";
import PropTypes from "prop-types";
import { CardIconsList } from "./CardIconsList/CardIconsList";
import {
  CardItem,
  Container,
  Title,
  Description,
  Line,
  UnderlineInfo,
  PriorityWrapp,
  Subtitle,
  Wrapper,
  PriorityColor,
  PriorityText,
  DeadlineWrapp,
  Date,
} from "./Card.styled";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const Card = ({ cardInfo, currentColumn }) => {
  const { titleCard, description, priority, deadline } = cardInfo;
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const dateFormater = () => {
      const parsedDate = parseISO(deadline);
      const formattedDate = format(parsedDate, "dd/MM/yyyy");
      setFormattedDate(formattedDate);
    };
    dateFormater();
  }, [deadline]);

  return (
    <CardItem value={priority}>
      <Container>
        <Title>{titleCard}</Title>
        <Description>
          <ReactReadMoreReadLess charLimit={90}>
            {description + "..."}
          </ReactReadMoreReadLess>
        </Description>
        <Line />
        <UnderlineInfo>
          <PriorityWrapp>
            <Subtitle>Priority</Subtitle>
            <Wrapper>
              <PriorityColor value={priority} />
              <PriorityText>{priority}</PriorityText>
            </Wrapper>
          </PriorityWrapp>
          <DeadlineWrapp>
            <Subtitle>Deadline</Subtitle>
            <Date>{formattedDate}</Date>
          </DeadlineWrapp>
          <CardIconsList currentColumn={currentColumn} cardInfo={cardInfo} />
        </UnderlineInfo>
      </Container>
    </CardItem>
  );
};

Card.propTypes = {
  cardInfo: PropTypes.object,
  currentColumn: PropTypes.string,
  columnsInfo: PropTypes.array,
};
