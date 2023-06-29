const url = "https://dictinary-api.vercel.app";

async function findEngUzb(word) {
    const data = await fetch(`${url}/user/find/eng-uzb/`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ word: word }),
    });
    return await data;
}
async function findUzbEng(word) {
    const data = await fetch(`${url}/user/find/uzb-eng/`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ word: word }),
    });
    return await data;
}
export { findEngUzb, findUzbEng };