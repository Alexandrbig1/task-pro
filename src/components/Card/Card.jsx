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
export const Card = () => {
  return (
    <CardItem>
      <Container>
        <Title>The Watch Spot Design</Title>
        <Description>
          <ReactReadMoreReadLess charLimit={90}>
            {text + "..."}
          </ReactReadMoreReadLess>
        </Description>
        <Line />
        <UnderlineInfo>
          <PriorityWrapp>
            <Subtitle>Priority</Subtitle>
            <Wrapper>
              <PriorityColor />
              <PriorityText>Low</PriorityText>
            </Wrapper>
          </PriorityWrapp>
          <DeadlineWrapp>
            <Subtitle>Deadline</Subtitle>
            <Date>12/05/2023</Date>
          </DeadlineWrapp>
          <CardIconsList />
        </UnderlineInfo>
      </Container>
    </CardItem>
  );
};
