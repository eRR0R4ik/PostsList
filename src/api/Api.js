import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';



const ApiEndpoints = {
  ALL_POSTS: `${API_BASE_URL}/posts`
};

export default class Api {

  static async getAllPosts(){
    return await axios.get(ApiEndpoints.ALL_POSTS);
  }

  // static async getClasses(staffId){
  //   return await axios.get(ApiEndpoints.CLASSES, {params: {staffId}, withCredentials: true})
  // }

  // static async getDibels(studentIds, institutionId){
  //   if (studentIds.length == 0) {
  //     return Promise.resolve({ data: [] });
  //   }
  //   const payload = JSON.stringify({ studentIds, institutionId });
  //   return await axios.post(ApiEndpoints.DIBELS, payload, {withCredentials: true})
  // }

  // static async getTimeSpentInGames(studentIds){
  //   if (studentIds.length == 0) {
  //     return Promise.resolve({ data: [] });
  //   }
  //   const payload = JSON.stringify({ StudentIds: studentIds });
  //   return await axios.post(ApiEndpoints.TIME_SPENT_IN_GAMES, payload, {withCredentials: true})
  // }
}