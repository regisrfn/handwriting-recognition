import * as types from './types'
import image_service from '../services/image_upload/image_services'

export default {
    state: {
        file: null,
    },
    mutations: {
        [types.SET_FILE](state, file) {
            state.file = file
        }
    },
    actions: {
        async [types.UPLOAD_FILE]() {
            const response = await image_service.getAllImages()
            console.log(response.data)
        }
    }
}