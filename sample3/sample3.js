export const showList = (obj,idx) => {
    let objName = obj[idx].name
    let objJob = obj[idx].job
    let objTel = obj[idx].tel

    return `<li>${objName}</li><li>${objJob}</li><li>${objTel}</li>`
}

export const showImgList = (objImg,idx) => {
    let imgSrc = objImg[idx].src
    return imgSrc
}


export function likeInit(){
    likeBtn.forEach(item=>{
        item.classList.replace('xi-heart','xi-heart-o')
        item.style.color='black';
    })
}
