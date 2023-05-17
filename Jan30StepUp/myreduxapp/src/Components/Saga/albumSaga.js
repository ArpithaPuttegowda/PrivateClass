

import {takeLatest} from "redux-saga/effects"


function* photos(){

}

function* userAlbum(){

}


function* rootAlbum(){
    yield takeLatest("PHOTOS_SAGA",photos)
    yield takeLatest("USER_ALBUM",userAlbum)
}

export default rootAlbum