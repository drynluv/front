// test18.js(정규식)
'use strict';

/*
  /^(?=.*[a-zA-Z_]).{3,15}$/  : 긍정형 전방 탐색(positive lookahead)으로, ^(시작)과 $(끝)을 의미함
  ==>> ?=.*은 []안의 문자들을 0번 이상 검사만 수행한고 지나간다. ?=.*[a-zA-Z_]){3,10} 일때는 []안을 3~10회 반복검사한다.(잘못된표현(?)일수았다)
  ==>> 길이는 3~15자로서, 그 안에 최소 1개 이상의 '영문자' 또는 '_' 포함하고 있으면 통과한다.
  .*        → 아무 문자 0개 이상
  [a-zA-Z_] → 문자열 어딘가에 영문자 또는 _ 가 최소 1개는 반드시 포함되어야 한다
  .{3,15}   → 아무 문자든 3~15자로서 전체 길이 제한

  /^(?=.+[a-zA-Z_]).{3,15}$/  : 앞의 내용과 동일하고 []안의 글자가 본문에는 없으면서, 첫글자로 들어올수 없다는것.(첫글자 사용하면서 본문에 또 사용했으면 통과한다)

*/
function regexCheck() {
  const regEx1 = /^[a-zA-Z0-9_]{3,15}$/g;  // 아이디는 '영문 대/소문자와 숫자, '_'만 포함하여 3~15자 이하로만 작성?
  const regEx2 = /^(?=.*[a-zA-Z_]).{3,15}$/;    // 비밀번호는 3~15글자중에서 '영문자'를 포함하거나, 특수문자중 '_'를 포함하면된다.
  //const regEx3 = //g;   // 닉네임은 '영문 대/소문자, 한글, 숫자, _, - 가 올수 있다.
  //const regEx4 = //g;   // 성명은 한글이나, 영문과 '_' 만 사용
  const regEx5 = /^[a-z0-9]([\._-]?[a-z0-9])*@[a-z0-9]([-_]?[a-z0-9])*(\.[a-z]{2,3})+$/i;   // 이메일(소문자) 형식체크(atom@naver.com, atom@naver.co.kr, a.b@naver.com)
  // https://www.naver.com   http://www.naver.com  www.naver.com www.naver.co.kr bLog01.atom.naver.com/
  // const regEx6 = /^(https?:\/\/)?([a-z0-9_-]+)\.([a-z]{2,10})*\/?$/i;   // url 형식에 맞도록 체크
  const regEx6 = /^(https?:\/\/)([\w.-]+)\.([a-zA-Z]{2,})(\/[^\s]*)?$/;   // url 형식에 맞도록 체크(최상위 도메인 2글자 이상), (\/[^\s]*)?는 /로 시작하는 경로가올때 공백 제외 모든 문자가 올수 있는데, 있어도 되고 없어도 됨(0개또는 1개)
  const regEx7 = /\d{6}-[1-4]/g;   // 주민번호 앞쪽 6자리숫자, 7번째는 성별(1~4) 체크(123456-1)
  const regEx8 = /\d{2,3}-\d{3,4}-\d{4}$/g;   // 전화번호는 : 02-123-1234, 010-1234-1234

  const regEx9 = /^[a-zA-Z][a-zA-Z0-9_]{2,14}$/;   // 아이디는 총 3~15글자로 첫글자는 영문자만허용하고, 2번째부터는 '영문자/숫자/밑줄'만을 사용할수 있다.

  let content = document.getElementById("content").value.trim();

  if(content == '') {
    alert("문자열을 입력하세요");
    document.getElementById("content").focus();
    return false;
  }

  // if(!regEx1.test(content)) alert("아이디는 '영문 대/소문자와 숫자, '_'만 포함하여 3~15자 이하로 작성하시오.");
  // if(!regEx2.test(content)) alert("비밀번호는 3~15글자중에서 '영문자'를 포함하거나, 특수문자중 '_'를 포함하면된다.");
  // if(!regEx5.test(content)) alert("이메일 형식을 확인하세요");
  // if(!regEx6.test(content)) alert("URL 형식을 확인하세요");
  // if(!regEx7.test(content)) alert("주민번호 형식을 확인하세요");
  // if(!regEx8.test(content)) alert("전화번호 형식을 확인하세요");
  if(!regEx9.test(content)) alert("아이디는 총 3~15글자로 첫글자는 영문자만허용하고, 2번째부터는 '영문자/숫자/밑줄'만을 사용");


  else {
    alert("자료가 정상 처리 되었습니다. 통과~~~~");
  }
  document.getElementById("content").select();
  document.getElementById("content").focus();
}