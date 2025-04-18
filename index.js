//Make the circle the same as the element of the reflection circle.
const Circle = document.getElementById('Circle');
const reflectionCircle = document.querySelector('.reflection-circle');

function Reflection()
{
    if(Circle && reflectionCircle)
    {
        reflectionCircle.style.background = window.getComputedStyle(Circle).backgroundImage;
        reflectionCircle.style.boxShadow = window.getComputedStyle(Circle).boxShadow;
        reflectionCircle.style.width = window.getComputedStyle(Circle).width;
        reflectionCircle.style.height = window.getComputedStyle(Circle).height;
        reflectionCircle.style.top = window.getComputedStyle(Circle).top;
        reflectionCircle.style.left = window.getComputedStyle(Circle).left;
    }
}
window.addEventListener('load', Reflection);

//Jump to Login Page
//setTimeout(function() { window.location.href = 'login.html'; }, 3000); 
document.addEventListener('click', function() {
    window.location.href = 'another_page.html'; // 将 'another_page.html' 替换为您想要跳转的实际文件路径
});
