import Api from './API'

export default {
    getAllImages() {
        return Api().get('/')
    }
}

