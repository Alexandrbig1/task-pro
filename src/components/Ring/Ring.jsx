import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { RingIcon, RingList } from "./Ring.styled";
export default function Ring({ deadline }) {
  const [deadlineInOneDay, setDeadlineInOneDay] = useState();

  useEffect(() => {
    const now = deadline;
    const tasksWithinNextDay = () => {
      const currentDate = new Date();
      const deadlineDate = new Date(now);
      const timeDifference = deadlineDate - currentDate;
      const hoursDifference = timeDifference / (1000 * 60 * 60);

      return hoursDifference < 24;
    };

    setDeadlineInOneDay(tasksWithinNextDay());
  }, [deadline]);

  return (
    deadlineInOneDay && (
      <RingList key={"bell"}>
        <RingIcon />
      </RingList>
    )
  );
}

Ring.propTypes = {
  deadline: PropTypes.string,
};
