export const logger = (level = 'default', color = 'blue') => (ele = 'div', msg = 'No message found!', appendTo = 'result') => { 
        let newEle = document.createElement(ele);
        const newContent = document.createTextNode(`[${level}] ${msg}`); 
        newEle.style.color = color;
        newEle.appendChild(newContent);
        const currentDiv = document.getElementById(appendTo); 
        currentDiv.appendChild(newEle);
}