export const convertMinutesToHoursMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}ساعت و ${minutes.toString().padStart(2, '0')}دقیقه`;
}

export const convertDateToPersian = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}