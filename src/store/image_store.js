import * as types from './types'
import image_service from '../services/image_upload/image_services'

export default {
    state: {
        image: null,
    },
    mutations: {
        [types.SET_IMAGE](state, image) {
            state.image = image
        }
    },
    actions: {
        async [types.UPLOAD_IMAGE]() {
            const response = await image_service.getAllImages()
            console.log(response.data)
        }
    }
}