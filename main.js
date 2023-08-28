// const input = document.querySelector("input");

// console.log(Object.getPrototypeOf(input));
// //HTMLInputElement => html요소중에 input요소를 표현하는 객체
// console.log(Object.getPrototypeOf(HTMLInputElement));
// //HTMLElement => 웹 문서의 요소중에 html을 표현하는 객체
// console.log(Object.getPrototypeOf(HTMLElement))
// //Element => 브라우저가 렌더링 할수 있는 웹문소요소를 표현하는 객체
// console.log(Object.getPrototypeOf(Element))
// //Node => 트리 자료구조의 노드 객체
// console.log(Object.getPrototypeOf(Node))
// //EventTarget => 이벤트를 발생할수 있는, 발생하도록 할 대상의 객체
// console.log(Object.getPrototypeOf(EventTarget))
// //Object => 객체 그 자체

/*
따라서 DOM은 HTML문서의 계층적 구조와 정보를 표현하는 것은 물론
노드 객체의 종류, 즉 노드 타입에 따라서 필요한 기능을
프로퍼티와 메서드의 집합인 DOM API로 제공한다
이 DOM API를 통해 HTML의 구조나 내용 또는 스타일을 동적으로 조작할
수 있다 <---
개발자는 DOM을 바라볼때 동적으로 구현할 대상으로 바라보고
마크업을 진행하여야 한다

첫번쨰 단계 : 변수선언이 가지는 의미는 요소노드의 취득단계
즉 html의 노드를 js에서 취득하는 단계
*/

// const li = document.getElementsByClassName("red");

// console.log(li); //HTMLCollection
/*
HTMLCollection은
getElementsByClassName , getElementById , getElementsByTagName
이 메서드들로 반환하는 객체로 노드 객체의 상태변화를
"실시간으로 반영"하는 살아있는 DOM컬렉션 객체입니다
*/
// for (let i = 0; i < li.length; i++) {
//     li[i].className = "blue";
// }
// console.log(li);
/*
반복을 돌면서 0인덱스 클래스값을 red-> blue로 변경하고
그와 동시에 li라는 변수에 담은 getElementsByClassName("red");의
내용과 일치하지 않기 때문에 실시간으로 li의 변수안에서 탈락됩니다

1인덱스가 시작될때 0인덱스 li가 탈락되었으므로
li.length는 3이 아니라 2로 인지되며, 따라서 현재 반복도는 1인덱스
까지만 blue로 변경시킵니다 그리고 이 것도 실시간으로
li의 변수안에서 탈락됩니다

2인덱스 시작될때 현재 총 인덱스 li.length는 1입니다
따라서 i < li.length;이조건을 만족시키지 않으므로 반복문이 종료되어
마지막 li는 blue로 변경되지 못합니다

이처럼 html컬렉션 객체는 실시간으로 노드 객체의 상태변경을 반영
하기 때문에 반복문을 적용할때 다른 방법을 사용해야합니다
=> 까다로움
*/
//해결방법1 역방향으로 순회

// for (let i = li.length - 1; i >= 0; i--) {
//     li[i].className = "blue";
// }
// //해결방법2 배열로 변경
// let arrRed = Array.from(li);
// console.log(arrRed);
// arrRed.map((el)=>{el.className = "blue"});

//NodeList
/*
querySelector,querySelectorAll메서드가 반환하는 객체를 의미
// 실시간으로 노드 객체의 상태변경을 하지않습니다
// */

// const lis = document.querySelectorAll("ul li");
// console.log(lis);

// for (let i = 0; i < lis.length; i++) {
//     lis[i].className = "blue";
// }
// console.log(lis);

//주의 사항 childNodes
//childNodes 노드 리스트이지만 html컬렉션처럼 실시간 반영이되므로
//반복문을 돌리는데 주의가 필요하다

//공백텍스트노드
//html문서에서 스페이스, 탭, 엔터를 입력하면 추가되는 공백문자를
// //담고있는 노드
// let list = document.getElementById("list");
// let redChild = list.childNodes;
// console.log(redChild);


// for (let i = 0; i < redChild.length; i++) {
//     list.removeChild(redChild[i]);
// }
// console.log(redChild);
//결론 html컬렉션이나 노드리스트모두 반복문을 돌리기 불편합니다
//따라서 위의 방법으로 리스트를 가지고 오더라도
//반복문을 돌리는데 있어서 가장 좋은 방법은 Array.form으로
//배열로 변환하는게 좋다

//노드 탐색

const list = document.querySelector("#list");
console.log(list);
const _list = document.getElementById("list");
console.log(_list);
// console.log(list.childNodes);
// //NodeList(7) [text, li.red, text, li.red, text, li.red, text]
// console.log(_list.children);
// //HTMLCollection(3) [li.red, li.red, li.red]

// console.log(list.firstChild);
// console.log(list.firstElementChild);

// console.log(list.lastChild);
// console.log(list.lastChild.previousSibling);
// console.log(list.lastElementChild.previousElementSibling);

// //노드와 텍스트 조작

// let hello = document.getElementById("text");

// console.log(hello.textContent);
// //textContent는 해당 요소 노드의 시작태그와 종료태그 사이의
// //모든 텍스트를 반환합니다, 이때 마크업의 구조는 무시합니다

// // hello.textContent = "안녕하세요";
// // console.log(hello.textContent);
// // = > textContent을 이용해서 text를 변경하게되면
// //마크업구조 전체를 무시한채로 통쨰로 변경되버려서
// //마키업구조가 변경됩니다
// console.log(hello.firstChild);
// console.log(hello.firstChild.nodeValue);
// console.log(hello.lastChild);
// console.log(hello.lastChild.firstChild);
// console.log(hello.lastChild.firstChild.nodeValue);
// hello.firstChild.nodeValue = "HELLO";
// //nodeValue로 추적해서 변경하면
// //해당 text의 값만 따로 변경할 수 있습니다
// console.log(hello.firstChild.nodeValue);
//nodeValue로 값을 추적해서 가지고오면 각각의 값을 따로
//추적해서 가져올수있고
//textContent는 마크업구조를 무시한채로 모든 텍스트를 구분없이
//싹끌어다 가지고옵니다

//innerHTML
let inHello = document.getElementById("text");
console.log(inHello.innerHTML);
//Hello <span> World</span>
//innerHTML은 마크업이 포함된 텍스트를 그대로 반환합니다
//textcontent는 마크업 무시하고 텍스트만 가져왔었음

inHello.innerHTML = "DOM을 변경해보자";
console.log(inHello.innerHTML);
//존재했던(인식하고있던) span태그를 없애버림
//즉 모든 자식노드가 제거되고 할당한 값이 html마크업으로 변경됨
//단 위치를 지정할 순 없음

//insertAdjacentHTML

// inHello.insertAdjacentHTML("beforebegin", '<scrip>_시작태그이전_</ㄴ>');
// inHello.insertAdjacentHTML("afterbegin", '<span>_시작태그이후_</span>');
// inHello.insertAdjacentHTML("beforeend", '<span>_종료태그이전_</span>');
// inHello.insertAdjacentHTML("afterend", '<span>_종료태그이후_</span>');

// //insertAdjacentHTML메서드는 기존요소에 영향을 주기 않고
// //삽입될 요소만 넣어준다

// //둘다 크로스 사이트 스크립팅 공격에 취약하다

// //대처하는 방법
// //1. DOMPurify 라이브러리를 사용하는 방법
// //2. 템플릿 리터럴을 이용하여 변수처리를 통해서 안정성을 확보하는 방법

// //기본적으로 html5에서는 보안레벨상승으로 script를 주입하는 방식이
// //차단됩니다
// // inHello.innerHTML = `안녕 ${변수}`;
// //이렇게 템플릿 리터럴을 사용함으로써 중요정보는 변수로
// //보호하고 변수를 받아 사용하여, 안정성을 확보할 수 있다


// //노드 추가 및 생성하는 방법

// // document.createElement("노드이름");
// //이렇게 문서에 노드를 생성하는것(보통은 요소노드이름이겠죠)
// // let h1 = document.createElement("h1");
// // let aTag = document.createElement("a");
// // let href = document.createAttribute("href"); //href=""
// // let target = document.createAttribute("target");
// // href.nodeValue = 'https://www.naver.com';
// // //href="https://www.naver.com";
// // target.nodeValue = "_blank";
// // //=> 위 두코드는 속성노드를 생성한 곳에 노드밸류를 적용한것
// // aTag.setAttributeNode(href);
// // aTag.setAttributeNode(target);
// // // 노드밸류를 적용시킨 속성노드를 요소노드와 연결시켜주는 코드
// // console.log(aTag);
// // let naver = "네이버";
// // aTag.innerHTML = `${naver}`;
// // console.log(aTag);
// // h1.appendChild(aTag); //위에서 제작한 a태그를 h1태그 안의 노드로
// // //넣어주는것
// // console.log(h1);
// // document.body.appendChild(h1);
// //여기까지가 node를 생성해서 동적DOM을 만드는 방법

// //미션 ul li를 생성 li에는 list라는 클래스를 부여
// //안쪽에는 텍스트 '미션성공'을 넣고
// //출력하세요

// let ul = document.createElement("ul");
// let li = document.createElement("li");
// let cla = document.createAttribute("class");

// cla.nodeValue = "list";

// li.setAttributeNode(cla);
// let txt = "미션성공";
// li.innerHTML = `${txt}`;
// ul.appendChild(li);
// document.body.appendChild(ul);

//2 문자열 조합으로 innerHTML로 넣는방법

let href = "https://www.naver.com";
let target = "_black";
let txt = "네이버";
let tags = '';

tags += "<h1>";
tags += "<a href=" + href + " target=" + target + ">"
    + txt + "</a>";
tags += "</h1>";

document.body.innerHTML += tags;

//3 템플릿 리터럴

let domInfo = {
    href: "https://www.naver.com",
    target: "_black",
    txt: "네이버"
}
let tag = `
    <h1>
        <a href="${domInfo.href}" target="${domInfo.target}">
            ${domInfo.txt}
        </a>
    </h1>
`;
document.body.innerHTML += tag;

let domInfos = [{
    href: "https://www.naver.com",
    target: "_black",
    txt: "네이버"
},{
    href: "https://www.nate.com",
    target: "_black",
    txt: "네이트"
},{
    href: "https://www.google.com",
    target: "_black",
    txt: "구글"
}]

let tages = '';

//a += 3;
// a = a + 3;

domInfos.map((el, index)=>{
    return tages += `
        <h1>
            <a href="${domInfos[index].href}"
             target="${domInfos[index].target}">
                ${domInfos[index].txt}
            </a>
        </h1>
    `;
})

document.body.innerHTML += tages;

/*
실습
1. dominfo 라는 객체배열로
class : "이름",
id : "적당한 아이디",
style : "background-color : pink"
이렇게 3개 이상을 만드세요

2.빈 tag 변수를 생성하고

3. 반복문을 돌면서 DOM을 동적으로 생성하고

4. document.body에 넣으세요 => 출력
*/

let dominfoe = [{
    class : "red",
    id : "color",
    style : "background-color : pink"
},{
    class : "red1",
    id : "color1",
    style : "background-color : blue"
},{
    class : "red2",
    id : "color2",
    style : "background-color : red"
}]

let tagg = '';

dominfoe.map((_, index)=>{
    return tagg += `
        <ul>
            <li class="${dominfoe[index].class}"
             id="${dominfoe[index].id}"
             style ="${dominfoe[index].style}">
                미션성공
            </li>        
        </ul>
    `;
})
document.body.innerHTML += tagg;