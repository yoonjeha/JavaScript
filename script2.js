window.onload=function() {
    // window.onload = function() {} 함수는
    // 웹 브라우저의 모든 구성요소에 대한 로드가 끝났을 때 
    // 브라우저에 의해서 호출되는 함수 (이벤트)
    var hw = document.getElementById('hw');
    hw.addEventListener('click', function() {
        alert('Hello world');
    })
}