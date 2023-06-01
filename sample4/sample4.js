import {obj,objImg} from '../sample1/sample1.js'
import {showList,showImgList,likeInit} from '../sample3/sample3.js'
import {get,getAll} from '../sample2/sample2.js'



const listView = get('.view')
const listDelete= get('.delete');
const list = get('.list')
const listInsert = getAll('.employeeInfo')
const imgInsert = getAll('.employee img')
let likeBtn =getAll('#wrap ul li i')


// 명단보기
listView.addEventListener('click',e=>{
    listInsert.forEach((item,idx)=>{
        item.innerHTML = showList(obj,idx)
    })
    imgInsert.forEach((item,idx)=>{
        item.setAttribute('src',showImgList(objImg,idx))
    })
    list.classList.add('on');
    likeInit()
})

// 명단삭제
listDelete.addEventListener('click',e=>{
    list.classList.remove('on');
})

// 좋아요 버튼 효과
likeBtn.forEach((item,idx)=>{
    item.addEventListener('click',e=>{
            if(e.currentTarget.style.color==='red'){
                e.currentTarget.classList.replace('xi-heart','xi-heart-o')
                e.currentTarget.style.color='black';
            } else {
                e.currentTarget.classList.replace('xi-heart-o','xi-heart')
                e.currentTarget.style.color='red';
            }
    })
})


