const url = "https://dictinary-api.vercel.app"
// const url = "https://loclahost:4000"

//Read
async function readEngUzb(word){
    const data = await fetch(`${url}/user/values/eng-uzb`)
    return data
}
async function readUzbEng(word){
    const data = await fetch(`${url}/user/values/uzb-eng`)
    return data
};
        
//Find
async function findEngUzb(word){
    const data = await fetch(`${url}/user/find/eng-uzb/`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({word: word})
      })
    return await data
}
async function findUzbEng(word){
    const data = await fetch(`${url}/user/find/uzb-eng/`,  {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({word: word})
      })
    return await data
}

export {readEngUzb, readUzbEng, findEngUzb, findUzbEng}