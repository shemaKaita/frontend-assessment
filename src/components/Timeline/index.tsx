import React, { FC } from 'react'
import { Moment } from '../../common/types';
import TimelineCard from '../TimelineCard';

import styles from './Timeline.module.scss';
import { formatYearsMonths } from '../../common/helpers';

type TimelineProps = {
    /**
     * An array of moments to be displayed on the timeline.
     * Each moment contains details such as date, description, image, and track.
     */
    moments: Moment[];
    /**
     * The date used to reference the timeline, typically the current date.
     * This is used to determine the relative position of moments on the timeline.
     */
    referenceDate: string;
}

type GroupedMoments = {
    /**
     * Moments that belong to track 1.
     */
    '1': Moment[];
    /**
     * Moments that belong to track 2.
     */
    '2': Moment[];
    /**
     * A set of unique dates from all moments, used to ensure each date appears only once on the timeline.
     */
    uniqueDates: Set<string>;
}

const Timeline: FC<TimelineProps> = ({ moments, referenceDate }) => {
    const groupedMoments = moments.reduce<GroupedMoments>(
        (acc, moment) => {
            acc[moment.track].push(moment);
            acc.uniqueDates.add(moment.date);
            return acc;
        },
        {
            '1': [],
            '2': [],
            'uniqueDates': new Set<string>(),
        }
    );
    const topTrackMoments = groupedMoments['1'];
    const bottomTrackMoments = groupedMoments['2'];
    const uniqueDates = Array.from(groupedMoments.uniqueDates)
        .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    return (
        <article className={styles.root}>
            <div className={styles.trackStart}>
                <span className={styles.trackStartDot}></span>
                <span className={styles.trackStartLabel}>
                    You are here
                </span>
            </div>
            <div className={styles.track}>
               {uniqueDates.map((date) => (
                <div className={styles.trackColumn} key={date}>
                    <div className={styles.cardContainerTop}>
                        {topTrackMoments.filter(moment => moment.date === date).map((moment) => (
                            <TimelineCard
                                key={moment.id}
                                {...moment}
                            />
                        ))}
                    </div>
                    <span className={styles.dateDot}></span>
                    <span className={styles.dateLabel} key={date}>
                        {formatYearsMonths(new Date(referenceDate), new Date(date))}
                    </span>  
                    <div className={styles.cardContainerBottom}>
                        {bottomTrackMoments.filter(moment => moment.date === date).map((moment) => (
                            <TimelineCard
                                key={moment.id}
                                {...moment}
                            />
                        ))}
                    </div>
                </div>
               ))} 
            </div>
            <div className={styles.trackEnd}>
                <div className={styles.cardContainerTop}>
                    <TimelineCard
                        date={referenceDate}
                        description="Retire"
                        image="retire.svg"
                        track={1}
                        id="6"
                    />
                </div>
                <span className={styles.trackEndLine}></span>
                <span className={styles.trackEndLabel}>
                    Ultimately
                </span>
                <div className={styles.cardContainerBottom}>
                    <TimelineCard
                        date={referenceDate}
                        description="Make a contribution to my community through philantrophy"
                        image="vision.svg"
                        track={2}
                        id="7"
                        isFinalCard
                    />
                </div>
            </div>
        </article>
    )
} 


export default Timeline;