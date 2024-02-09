import ReactReadMoreReadLess from "react-read-more-read-less";
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

const text =
  " Create visually appealing and functional design prototypes based on the approved concepts.";

export const Card = ({ info, currentColumn }) => {

  const { title, description, priority, deadline } = info;
  return (
    <CardItem>
      <Container>
        <Title>{title}</Title>
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
              <PriorityColor />
              <PriorityText>{priority}</PriorityText>
            </Wrapper>
          </PriorityWrapp>
          <DeadlineWrapp>
            <Subtitle>Deadline</Subtitle>
            <Date>{deadline}</Date>
          </DeadlineWrapp>
          <CardIconsList currentColumn={currentColumn} />
        </UnderlineInfo>
      </Container>
    </CardItem>
  );
};
