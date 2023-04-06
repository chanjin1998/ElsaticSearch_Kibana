import axios from 'axios';

// API 토큰
const API_KEY = 'NE9wWVVZY0IwVVk3QXQzVTBLY0c6RFlYV0RqdXJUYkdkdnRsclp0UWVCd&&&&';

// REST API 호출
export const fetchSavedObjects = () => {
  return axios.get('http://localhost:5601/api/saved_objects/_find', {
    headers: {
      'Authorization': `ApiKey ${API_KEY}`
    }
  })
  .then(response => {
    // API 호출 결과 처리
    console.log(response.data);
  })
  .catch(error => {
    // 에러 처리
    console.error(error);
  });
}

