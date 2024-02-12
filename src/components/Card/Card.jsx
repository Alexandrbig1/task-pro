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
// import { Draggable } from "react-beautiful-dnd";

// eslint-disable-next-line react/prop-types
export const Card = ({ cardInfo, currentColumn }) => {
  const { titleCard, description, priority, deadline } = cardInfo;

  return (
    // <Draggable draggableId={id} index={index}>
    //   {(provided, snapshot) => (
    <CardItem
    // onClick={handleClick}
    // {...provided.dragHandleProps}
    // {...provided.draggableProps}
    // ref={provided.innerRef}
    >
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
          <CardIconsList
            columnsInfo={columnsInfo}
            currentColumn={currentColumn}
            cardInfo={cardInfo}
          />
        </UnderlineInfo>
      </Container>
      {/* {provided.placeholder} */}
    </CardItem>
    //   )}
    // </Draggable>
  );
};

Card.propTypes = {
  cardInfo: PropTypes.object,
  currentColumn: PropTypes.string,
  columnsInfo: PropTypes.array,
};
