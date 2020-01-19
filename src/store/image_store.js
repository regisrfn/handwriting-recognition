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
            // const response = await image_service.getAllImages()
        },
        [types.TEXT_EXTRACT](_,file) {
            return new Promise((resolve, reject) => {
                image_service.textract(file)
                    .then(response => {
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        }
    }
}