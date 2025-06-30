import React, { FC } from "react";
import { Moment } from "../../common/types";

import styles from "./TimelineCard.module.scss";
import { TIMELINE_IMAGES_SRC } from "../../common/constants";
import { classModifier } from "../../common/helpers";

type TimelineCardProps = Moment & {
  /**
   * The description of the timeline card, providing context or details about the moment.
   */
  isFinalCard?: boolean;
};

const TimelineCard: FC<TimelineCardProps> = ({ description, image, track, isFinalCard }) => {
  return (
    <div
      className={classModifier(styles, 'root', {
        final: isFinalCard, // Apply 'final' modifier if isFinalCard is true
        top: track === 1, // Apply 'top' modifier if track is 1
        bottom: track === 2, // Apply 'bottom' modifier if track is 2
      })}
    >
      <img src={`${TIMELINE_IMAGES_SRC}${image}`} alt={description} className={styles.image} />
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default TimelineCard;