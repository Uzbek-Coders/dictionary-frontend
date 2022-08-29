const url = "https://dictinary-api.vercel.app";


//Read
async function readEngUzb(){
    const data = await fetch(`${url}/user/read/eng-uzb`)
    return data
}
async function readUzbEng(){
    const data = await fetch(`${url}/user/read/uzb-eng`)
    return data
}
        
//Find
async function findEngUzb(word){
    const data = await fetch(`${url}/user/find/eng-uzb/${word}`)
    return await data
}
async function findUzbEng(word){
    const data = await fetch(`${url}/user/find/uzb-eng/${word}`)
    return await data
}
async function autoComplete(lang, word){
    // if(lang == "EN → UZ"){
        let data = lang == "EN → UZ"? await readEngUzb() : await readUzbEng()

}

export {readEngUzb, readUzbEng, findEngUzb, findUzbEng}