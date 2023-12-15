function minDate(dates) {
    if (!Array.isArray(dates) || dates.length === 0) {
        throw new Error("Invalid input. Please provide a non-empty array of date strings.");
    }

    // Initialize with the first date in the array
    let earliestDate = new Date(dates[0]);

    // Iterate through the remaining dates and update earliestDate if a smaller date is found
    for (let i = 1; i < dates.length; i++) {
        const currentDate = new Date(dates[i]);

        if (currentDate < earliestDate) {
            earliestDate = currentDate;
        }
    }

    // Format the result as "YYYY/MM/DD"
    const formattedResult = `${earliestDate.getFullYear()}/${padNumber(earliestDate.getMonth() + 1)}/${padNumber(earliestDate.getDate())}`;

    return formattedResult;
}

// Helper function to pad single-digit numbers with a leading zero
function padNumber(num) {
    return num.toString().padStart(2, '0');
}

