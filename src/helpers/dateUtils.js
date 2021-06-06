export function dateToMonthAndYearOnly(date, locale) {
    let options = {year: "numeric", month: "short"};
    let parsed = new Date(date);

    return parsed.toLocaleDateString(locale, options);
}

export function getDatesDifferencesVerbose(startDate, endDate, t) {
    startDate = !startDate ? new Date() : new Date(startDate);
    endDate = !endDate ? new Date() : new Date(endDate);
    let diffDate = new Date(endDate.getTime() - startDate.getTime());

    let diffYears = diffDate.getFullYear() - 1970;
    let diffMonths = diffDate.getMonth() + 1; // Includes last month to the count

    return t('experience.dates.yearsAndMonths', {years: diffYears, months: diffMonths}).trim();
}