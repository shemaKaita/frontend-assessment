/**
 * 
 * @param styles Object containing CSS class names as keys and their corresponding styles as values.
 * @param baseClass The base class name to which modifiers will be applied.
 * @param modifiers An object where keys are modifier names and values are booleans indicating whether the modifier should be applied.
 * @returns A string of class names that includes the base class and any modifiers that are true.
 */
export const classModifier = (
    styles: Record<string, string>,
    baseClass: string,
    modifiers: Record<string, boolean | undefined>
): string => {
    return Object.entries(modifiers)
        .reduce((acc, [modifier, condition]) => {
            if (condition) {
                acc.push(styles[`${baseClass}--${modifier}`]);
            }
            return acc;
        }, [styles[baseClass]])
        .join(' ');
}

/**
 * 
 * @param from Date to calculate the difference from
 * @param to Date to calculate the difference to
 * @returns A formatted string representing the time difference between two dates in years and months.
 */
export const formatYearsMonths = (from: Date, to: Date) => {
    let totalMonths = Math.abs((to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth()));
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    let label = '';
    if (years > 0 && months > 0) {
        label = `In ${years} year${years > 1 ? 's' : ''} and ${months} month${months > 1 ? 's' : ''}`;
    } else if (years > 0) {
        label = `In ${years} year${years > 1 ? 's' : ''}`;
    } else if (months > 0) {
        label = `In ${months} month${months > 1 ? 's' : ''}`;
    }
    return label;
}