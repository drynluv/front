// test17.js(정규식)
'use strict';

function regexCheck() {
  const regEx1 = /atom/gm;  // 'atom'이라는 문자열이 포함?
  const regEx2 = /mbc|kbs|sbs|cjb/g; // 'mbc/kbs/sbs/cjb'라는 문자열을 포함?
  const regEx3 = /홍길(동|순)/g; // '홍길동|홍길순'라는 문자열을 포함?
  const regEx4 = /[a-z]/g; // 영문 소문자를 포함?
  const regEx5 = /[A-Z]/g; // 영문 대문자를 포함?
  const regEx6 = /[가-힣]/g; // 한글을 포함?
  const regEx7 = /[0-9]/g; // 숫자를 포함?
  const regEx8 = /[a-zA-Z가-힣]/g; // 영문자또는 한글을 포함?
  const regEx9 = /[^0-9]/g; // 숫자만을 포함?
  const regEx10 = /[^a-zA-Z가-힣]/g;  // 영문자또는 한글만을 포함?
  const regEx11 = /[^a-zA-Z가-힣_-]/g;  // 영문자또는 한글또는 '_'만을 포함?
  const regEx12 = /\./g;  // 점(.)을 포함?


  let content = document.getElementById("content").value.trim();

  if(content == '') {
    alert("문자열을 입력하세요");
    document.getElementById("content").focus();
    return false;
  }

  // if(!content.match(regEx1)) alert("본문에 atom문자열을 포함하고 있지 않습니다.");
  // if(!content.match(regEx2)) alert("본문에 'mbc/kbs/sbs/cjb'라는 문자열을 포함하고 있지 않습니다.");
  // if(!content.match(regEx3)) alert("본문에 '홍길동/홍길순'라는 문자열을 포함하고 있지 않습니다.");
  // if(!content.match(regEx4)) alert("본문에 영문 소문자를 문자열을 포함하고 있지 않습니다.");
  // if(!content.match(regEx8)) alert("본문에 영문자나 한글 문자열을 포함하고 있지 않습니다.");
  // if(!regEx7.test(content)) alert("본문에 숫자를 포함하고 있지 않습니다.");
  // if(regEx9.test(content)) alert("본문에는 숫자만 입력 가능합니다.");
  // if(regEx10.test(content)) alert("본문에는 영문,한글만 입력 가능합니다.");
  // if(regEx11.test(content)) alert("본문에는 영문,한글, '_', '-'만 입력 가능합니다.");
  if(regEx12.test(content)) alert("본문에는 '.'을 포함하고 있습니다.");


  else {
    alert("자료가 정상 처리 되었습니다. 통과~~~~");
  }
  document.getElementById("content").select();
  document.getElementById("content").focus();
}