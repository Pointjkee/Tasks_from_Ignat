import axios from 'axios'

const instance = axios.create({
    // baseURL:  'https://neko-cafe-back.herokuapp.com/auth/test',
})

export const requestAPI = {
    requestPost(check: boolean) {
        return instance.post('https://neko-cafe-back.herokuapp.com/auth/test', {success:check})
    }
}


