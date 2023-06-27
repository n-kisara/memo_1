'use strict';

function memo() {
    let memo = prompt('入力して下さい');
    let li = document.createElement('li');
    li.textContent =  memo;
    const memoList = document.getElementById('memo_list');
    memoList.appendChild(li);
}

const btn = document.querySelector('button');
btn.addEventListener('click',memo);