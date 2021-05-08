// const url = 'https://bookmarkd-api-sham.herokuapp.com/bookmarks';
const url = 'http://localhost:8000/bookmarks';

export const getBookmarks = async () => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;

    } catch (err) {

        console.log(err);
    }
}