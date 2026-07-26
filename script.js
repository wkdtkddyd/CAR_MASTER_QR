
const wl=document.getElementById('wl');
const wr=document.getElementById('wr');
const d=document.getElementById('desc');
function reset(){wl.className='wheel';wr.className='wheel';}
function mode(x){
reset();
if(x==='straight'){wl.classList.add('mid');wr.classList.add('mid');d.textContent='직진 : 좌우 바퀴가 같은 속도로 회전합니다.';}
if(x==='left'){wl.classList.add('slow');wr.classList.add('fast');d.textContent='좌회전 : 안쪽은 느리게, 바깥쪽은 빠르게 회전합니다.';}
if(x==='right'){wl.classList.add('fast');wr.classList.add('slow');d.textContent='우회전 : 바깥쪽은 빠르게, 안쪽은 느리게 회전합니다.';}
}
mode('straight');
