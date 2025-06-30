export type Moment = {
    /**
     * Unique identifier for the moment.
     */
    id: string;
    /**
     * Date of the moment in ISO format (YYYY-MM-DD).
     */
    date: string;
    /**
     * Description of the moment.
     */
    description: string;
    /**
     * URL of the image associated with the moment.
     */
    image: string;
    /**
     * Track number to which the moment belongs.
     * 1 for top track, 2 for bottom track.
     */
    track: 1 | 2;
};
