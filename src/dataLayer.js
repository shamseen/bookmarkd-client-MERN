// const url = 'https://bookmarkd-api-sham.herokuapp.com/bookmarks';
const url = 'http://localhost:8000/bookmarks';

export const createBookmark = async (title, url) => {
    const body = {
        title,
        url
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const json = await response.json();

        return json;

    } catch (err) {

        console.log(err);
    }
}

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

export const updateBookmark = async (id, title, url) => {
    const u = `${url}/edit/id/${id}`;
    const body = {
        title,
        url
    }

    try {
        const response = await fetch(u, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const json = await response.json();

        return json;

    } catch (err) {

        console.log(err);
    }

}