//Hexagon
const tunnel = document.querySelector('.tunnel');
const animationDuration = 1000;
const creationInterval = 50;
let hexCounter= 0;

function createHex() 
{
    const hex = document.createElement('div');
    hex.classList.add('hex');
    hex.style.width = `${20 + Math.random() * 20}px`;
    hex.style.height = hex.style.width;
    hex.style.transform = `translate(-50%, -50%) scale(0) rotate(0deg)`;

    tunnel.appendChild(hex);

    animateHex(hex, hexCounter * creationInterval);
    hexCounter++;
}

function animateHex(hex, delay)
{
    setTimeout(() => 
    {
        let startTime = null;
        const finalScale = 40 + Math.random() * 20;
        const startOpacity = 1;
        const endOpacity = 0;

        function step(time)
        {
            if(!startTime) startTime = time;
            const progress = time - startTime;
            const scale = (progress / animationDuration) * finalScale;
            const opacity = startOpacity - (progress / animationDuration) * startOpacity;
            currentRotation = (progress / animationDuration) * 360;
            
            hex.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${currentRotation}deg)`;
            hex.style.opacity = opacity;

            if(progress < animationDuration)
            {
                requestAnimationFrame(step);
            }
            else
            {
                hex.remove();
            }
        }

        requestAnimationFrame(step);
    }, delay);
}

setInterval(createHex, creationInterval);

//Login Form
const loginForm = document.querySelector('.loginForm');

window.addEventListener('load', () => 
{
    setTimeout(() => 
    {
        const tunnel = document.querySelector('.tunnel');
        tunnel.style.animation = 'none'; // 停止旋转动画

        loginForm.style.transform = 'scale(1) rotate(360deg)';
        loginForm.style.opacity = '1';
    }, 3000);
});


