import ReactReadMoreReadLess from "react-read-more-read-less";
import PropTypes from "prop-types";
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
import { CardIconsList } from "./CardIconsList/CardIconsList";

export const Card = ({ cardInfo, currentColumn }) => {
  const { titleCard, description, priority, deadline } = cardInfo;
  return (
    <CardItem>
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
            <Date>{deadline}</Date>
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
};
