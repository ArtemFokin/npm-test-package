import axios from 'axios';

async function getContests() {
  try{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
    console.log(response)
    return  response;
  } catch(err){
    console.log(err);
  }
};

export default getContests;