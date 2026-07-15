const frame = document.getElementById('demoFrame');
const shell = document.getElementById('demoShell');
const fullscreen = document.getElementById('fullscreenDemo');

frame.addEventListener('load', () => shell.classList.add('loaded'));
fullscreen.addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await shell.requestFullscreen();
  } catch (error) {
    frame.focus();
    fullscreen.textContent = '浏览器未允许全屏';
  }
});
document.addEventListener('fullscreenchange', () => {
  fullscreen.textContent = document.fullscreenElement ? '退出全屏' : '全屏试玩';
});
