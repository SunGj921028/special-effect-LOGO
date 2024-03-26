const container = document.querySelector('.logo-container');
const logo = document.querySelector('.main-logo');

container.addEventListener('mousemove', (e) => {
    // const {top, left, width, height} = container.getBoundingClientRect();
    const rect = container.getBoundingClientRect();
    const top = rect.top;
    const left = rect.left;
    const width = rect.width;
    const height = rect.height;

    const x = e.clientX - left - width / 2; // 算出滑鼠離容器中心點的距離
    const y = e.clientY - top - height / 2;

    logo.style.setProperty('--x', `${x / 20}px`);
    logo.style.setProperty('--y', `${y / 20}px`);
});

container.addEventListener('mouseout', (e) => { 
    logo.style.setProperty('--x', `${0}px`);
    logo.style.setProperty('--y', `${0}px`);
});
