// const url = 'https://bookmarkd-api-sham.herokuapp.com/bookmarks';
const url = 'http://localhost:8000/bookmarks';

export const deleteBookmark = async (prop, id) => {
    const u = `${url}/${id}`;
    console.log(u)
    try {
        const response = await fetch(`${url}/${prop}/${id}`, {
            method: "DELETE"
        });

        const json = await response.json();

        console.log(json);

    } catch (err) {
        console.log(err);
    }
}

export const getBookmarks = async () => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;

    } catch (err) {

        console.log(err);
    }
}