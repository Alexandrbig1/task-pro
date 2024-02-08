import { useState, useEffect } from "react";
import { RingIcon, RingList } from "./Ring.styled";

export default function Ring() {
  const [deadlineInOneDay, setDeadlineInOneDay] = useState();

  useEffect(() => {
    const now = "2024-02-09";
    const tasksWithinNextDay = () => {
      const currentDate = new Date();
      const deadlineDate = new Date(now);
      const timeDifference = deadlineDate - currentDate;
      const hoursDifference = timeDifference / (1000 * 60 * 60);

      return hoursDifference < 24 && hoursDifference > 0;
    };

    setDeadlineInOneDay(tasksWithinNextDay());
  }, []);

  return (
    deadlineInOneDay && (
      <RingList key={"bell"}>
        <RingIcon />
      </RingList>
    )
  );
}
