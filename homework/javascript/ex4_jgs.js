// ex4_jgs.js(정규식)
'use strict';

function regexCheck() {
  const regEx1 =/^[a-zA-Z0-9_]{3,15}$/g; // 아이디는 '영문 대/소문자와 숫자, '_'만 포함하여 3~15자 이하로만 작성할 수 있다.
  const regEx2 = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*_)[a-zA-Z0-9_]{3,15}$/;  // 비밀번호는 영문대소문자가 1개 이상, 숫자1개 이상, 특수문자(_) 1개, 3~15자까지 올 수 있다.
  const regEx3 = /^[a-zA-Z0-9가-힣_-]{2,20}$/;  // 닉네임은 '영문 대/소문자, 한글, 숫자, _, - 가 올 수 있다.
  const regEx4 = /^[a-zA-Z가-힣_]+$/; // 성명은 한글이나, 영문과 '_' 만 사용할 수 있다.
  const regEx5 = /^[a-z0-9]([\._-]?[a-z0-9])*@[a-z0-9]([-_]?[a-z0-9])*(\.[a-z]{2,3})+$/i; // 이메일(소문자) 형식 체크(atom@naver.com, atom@naver.co.kr)
  const regEx6 = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/.*)?$/i; // url 형식에 맞도록 체크하기
  const regEx7 = /\d{6}-[1-4]/g; // 주민번호 앞쪽 6자리숫자, 7번째는 성별(1~4) 체크하기
  const regEx8 = /\d{2,3}-\d{3,4}-\d{4}$/g; // 전화번호는 : 02-123-1234, 010-1234-1234

  let content = document.getElementById("content").value.trim();

  if(content == '') {
    alert("문자열을 입력하세요");
    document.getElementById("content").focus();
    return false;
  }

  if(!regEx1.test(content)) alert("아이디를 확인하세요.");
  // if(!regEx2.test(content)) alert("비밀번호를 확인하세요.");
  // if(!regEx3.test(content)) alert("닉네임을 입력하세요.");
  // if(!regEx4.test(content)) alert("성명을 입력하세요.");
  // if(regEx5.test(content)) alert("이메일 형식을 확인하세요.");
  // if(regEx6.test(content)) alert("url 형식을 확인하세요.");
  // if(regEx7.test(content)) alert("주민번호를 확인하세요.");
  // if(regEx8.test(content)) alert("전화번호를 확인하세요.");


  else {
    alert("자료가 정상 처리 되었습니다.");
  }
  document.getElementById("content").select();
  document.getElementById("content").focus();
}