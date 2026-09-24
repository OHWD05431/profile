
const footer = document.querySelector('footer');
const yearLine = document.createElement('p');
yearLine.textContent = '© ' + new Date().getFullYear() + ' ohwd';
footer.appendChild(yearLine);

//找到我的目标的位置在class = project的div里面
const project = document.querySelector('.project');
//在这个位置加一个div，class = project_item，里面放一个当前距离12月31日还有多少天的内容，
const projectitem = document.createElement('div');
projectitem.className = 'project_item';
//定义一个变量，计算距离2026年12月31日还有多少天
const now = new Date();
const targetDate = new Date('2026-12-31');
const diffTime = targetDate - now;
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const title = document.createElement('h3');
title.textContent = "距离2026年12月31日还有";
const timep = document.createElement('p');
timep.textContent = diffDays + '天';
project.appendChild(projectitem);
projectitem.appendChild(title);
projectitem.appendChild(timep);
-+
//把这个div加到我的目标里面
project.appendChild(projectitem);

//打卡按钮class = check_button
const btn = document.querySelector('.check_button');
btn.addEventListener('click',function(){
    btn.textContent = '已打卡';
    btn.disabled = true;
    btn.classList.add('on');
    const clickedtime = new Date();
    const checkbox = document.querySelector('.check_button-box');
    const p = document.createElement('p');
    p.textContent = '打卡时间:' + clickedtime.toLocaleString();
    checkbox.appendChild(p);
});
//做提交的功能，将他显示在标签之下
const form = document.querySelector('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    const source = document.querySelector('#source').value;
    const form_result = document.querySelector('.form-result');
    if(name.trim() == ''){
        form_result.textContent = '请输入你的名称';
    }
    else{
        if(message.length <= 50){
            form_result.textContent = '谢谢你的留言，' + name;
        }
        else{
            form_result.textContent = '您的留言超过了50字,太多了'
        }
    } 
    

    form.reset();
});
