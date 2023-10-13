
export const Throttling = () => {
    let _flag=true;
    let timer;
      function fnResize(){
        console.log('fnResize called')
      }

     function fnThrottling(){
      if(_flag){
         fnResize();
        _flag=false;
      }
      clearTimeout(timer);
      timer=setTimeout(function(){
        fnResize();
      },100)
     }
     window.addEventListener('resize',function(){
      fnThrottling();
  });
  return (
    <div>Throttling</div>
  )
}
