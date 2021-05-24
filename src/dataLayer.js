const baseUrl = 'https://bookmarkd-api-sham.herokuapp.com/bookmarks';

export const createBookmark = async (title, bmUrl) => {
    const body = {
        title,
        url: bmUrl
    }

    try {
        const response = await fetch(baseUrl + `/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        console.log(JSON.stringify(body, null, 4));

        const json = await response.json();

        return json;

    } catch (err) {

        console.log(err);
    }
}

export const deleteBookmark = async (prop, id) => {

    try {
        const response = await fetch(`${baseUrl}/${prop}/${id}`, {
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
        const response = await fetch(baseUrl);
        const json = await response.json();
        return json;

    } catch (err) {

        console.log(err);
    }
}

export const updateBookmark = async (id, title, bmUrl) => {
    const fetchUrl = `${baseUrl}/edit/_id/${id}`;
    const body = {
        title,
        url: bmUrl
    }
    console.log('fetch: ', fetchUrl);
    console.log('body: ', body)

    try {
        const response = await fetch(fetchUrl, {
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