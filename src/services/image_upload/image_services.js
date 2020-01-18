import Api from './API'

export default {
    getAllImages() {
        return Api().get('/')
    },
    textract (file) {
        return Api().post('/aws/textract', file)
    },
}

