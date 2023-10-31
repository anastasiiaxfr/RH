export default function truncate(str: any, numWords: any) {
    const words = str.split(' ');

    if (words.length > numWords) {
        return words.slice(0, numWords).join(' ') + '...';
    } else {
        return str;
    }
}
