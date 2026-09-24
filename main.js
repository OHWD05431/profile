
const footer = document.querySelector('footer');
const yearLine = document.createElement('p');
yearLine.textContent = '©' + new Date().getFullYear() + 'ohwd';
footer.appendChild(yearLine);

//找到我的目标的位置在class = project的div里面
const project = document.querySelector('.project');
//在这个位置加一个div，class = project_item，里面放一个当前距离12月31日还有多少天的内容，
const projectitem = document.createElement('div');
projectitem.className = 'project_item';
//定义一个变量，计算距离2024年12月31日还有多少天
const now = new Date();
const targetDate = new Date('2026-12-31');
const diffTime = targetDate - now;
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

projectitem.innerHTML = '<h3>距离2024年12月31日还有</h3><p id="countdown">' + diffDays + '天</p>';

project.appendChild(projectitem);
