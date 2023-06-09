## 🤔 우리가 보는 웹, 어떻게 구성되어 있을까?

</br>

### 📌 목차
<br>

>1. [웹](#📌-웹)
>2. [프론트엔드&백엔드](#📌-프론트엔드--백엔드)
>   - [프론트엔드 개념](#프론트엔드-개념)
>   - [프론트엔드 개발 시 사용되는 언어](#프론트엔드-개발시-사용되는-언어는-무엇일까)
>   - [HTML(뼈대)](#html-뼈대)
>   - [CSS(살)](#css-살)
>   - [JavaScript(움직임)](#javascript-움직임)
>3. [백엔드 개념](#백엔드-개념)
>   - [JAVA](#java)
>   - [Python](#python)
>   - [JavaScript](#javascript)
>   - [MySQL](#mysql)
>
> 4. [끝마치며](#📌-끝마치며)

<br/>
<br/>

### 📌 웹

</br>
<p align="center"><img src="/image/홈페이지 이미지.PNG" width = "80%" height = "30%" alt = "webpage-image"></p>

</br>

우리는 컴퓨터를 활용하면서 최소 수십개에서 많게는 수천개의 웹페이지에 직면하게 됩니다. 평소 웹을 이용하면서 이러한 웹들은 어떻게 구성되어 있는지 궁금하지 않으셨나요? 🤔 이러한 웹페이지들은 어떤 프로그래밍이 필요하고, 어떻게 이루어져 있을지 같이한번 살펴보도록 하겠습니다 😀
</br>
</br>

### 📌 프론트엔드 & 백엔드

<p align = "center">
    <img src="/image/프론트엔드&백엔드.jpg" width = "80%" height = "30%" alt = "frontEnd&backEnd">
</p>

 우리가 보는 웹은 크게 보여지는 면인 **프론트(Front)엔드** 개념과 **백(Back)엔드** 개념으로 나누어져 있습니다😮

</br>
</br>

### 프론트엔드 개념
  ___
  
  프론트엔드는 사용자가 웹 사이트를 이용할때, 웹에서 보이는 형식을 갖춘 레이아웃을 보유하고 있는 인터페이스를 마주하게 됩니다. 
  이와 같이 **사용자가 현재 보고 있는 웹의 모습을 기술적 분야에서 프론트엔드**라고 부르게 됩니다.
  시각적인 요소는 **관심의 90%이상**을 차지할 만큼 매우 중요한 요소이기에 프론트엔드요소는 웹개발에 있어 중요하게 개발되어야할 부분입니다.

</br>
</br>

### 프론트엔드 개발시 사용되는 언어는 무엇일까?
___
프론트엔드 개발시 사용되는 언어는 크게 3가지가 존재하는데요. 각각 하나씩 살펴보도록 하겠습니다.

</br>
</br>

### HTML (뼈대)
<p align="center">
    <img src = "/image/HTML구조3.jpg">
</p>

> 왼 : HTML의 기본적인 구조 
> 오 : 홈페이지에 보이는 화면


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebCodingEdu</title>
    <link rel="stylesheet" href="/index.css">
</head>
<body>
    <h1>안녕하세요!</h1>
    <h2>버튼을 클릭할때마다 버튼 색상이 변경되고 있습니다!</h2>
    
    <button id="button" onclick="colorChange()">클릭!</button>
    <script src="/index.js"></script>
</body>
</html>
```

HTML은 **Hyper Text Markup Language** 로써 하이퍼텍스트, 그리고 마크업 언어로 이루어져 있다는 특징이 존재합니다. 여기서 하이퍼텍스트는 페이지들간의 링크를 정의하는 것을 의미하며, 마크업언어는 웹페이지 구조를 정의하기위해 사용되는것을 의미합니다.

</br>
</br>

### CSS (살)
<p align="center">
    <img src = "/image/CSS구조3.jpg">
</p>

> 왼 : CSS의 구조
> 오 : h1태그와 h2태그의 색상, 정렬이 변경

```css
h1 {
    color: red;
    text-align: center;
}

h2 {
    color: skyblue;
    text-align: center;

}
```

CSS는 **Cascading Style Sheet** 의 약자로 종속적인 스타일 시트를 의미합니다. 웹페이지의 **시각적 요소**를 돋보이기 위해 다양한 스타일을 적용할 수 있도록 하는 언어이며, CSS를 통해 웹페이지를 좀 더 예쁘고, 관심을 끌 수 있도록 만들 수 있는 무궁무진한 힘을 가진 언어라고 볼 수 있습니다.

</br>
</br>

### JavaScript (움직임)
<p align="center">
    <img src = "/image/JS구조1.jpg">
</p>

```javascript
function colorChange() {
    const color = ["#FC5C7D", "#6A82FB", "#38ef7d", "#fffbd5", "#b20a2c", "#CAC531"];
  
    let num = Math.floor(Math.random() * color.length);
    let bodyTag = document.getElementById("button");
    bodyTag.style.backgroundColor = color[num];
  }
```

지금까지 HTML은 웹페이지의 뼈대를 의미하고, CSS는 살을 의미한다고 했으면, JS는 **행동, 즉 움직임을 의미**한다고 할 수 있습니다. 정적인 웹이 아닌 **동적인 웹**을 제작하기 위해 사용되는 필수적인 언어로써, 지금까지 HTML과 CSS는 프로그래밍 언어가 아니였었던 반면에 **JavaScript는 프로그래밍 언어중 하나**로 불리고 있습니다. 
웹과 사용자간의 상호작용을 도와주는 역할을 진행하며, 웹사이트의 기능성 향상과 웹 기반 소프트웨어 실행에 큰 도움을 주는 아주 중요한 언어라고 할 수 있습니다.

</br>

<p align="center">
    <img src = "/image/자바스크립트.gif">
</p>

자바스크립트를 이용하여 **버튼을 클릭할때마다 버튼색상이 변경**되는 것을 확인할 수 있습니다.

<br>
</br>

#### 백엔드 개념
___

백엔드는 프론트엔드와는 다르게 **사용자가 웹상에서는 살펴볼 수 없는 데이터를 저장**하고, **관리**하며 **웹사이트의 클라이언트 에서 매끄럽게 작동**할 수 있도록 도움을 줍니다. 

백엔드 같은 경우에는 **사용자가 직접 보고, 상호작용을 진행할 수는 없지만**, 프론트엔드상에 사용자들이 하고자 하는 **요구사항에 대해서 처리하는 업무를 담당**합니다. 

백엔드 개발에는 **시스템 컴포넌트 작업, API작성, 라이브러리 생성, 데이터베이스 통합**등과 같은 **데이터 관리 및 유지보수 업무**를 뜻합니다.

</br>
</br>

#### 백엔드 개발시 사용되는 언어는 무엇일까?
___

### JAVA
<p align="center">
    <img src = "/image/자바이미지.png">
</p>

자바는 **가장 인기있는 프로그래밍 언어**중 하나이며, Stackoverflow 등과 같은 개발자 커뮤니티에서도 매우 널리 사용되어지고 있는 언어입니다. 

자바를 활용한 프레임워크인 **SpringBoot Framework**는 편리한 프레임워크의 특징을 가지고 있어 현업에서도 많이 쓰이는 언어라고 볼 수 있습니다.

</br>

### Python
<p align="center">
    <img src = "/image/파이썬이미지.png">
</p>

파이썬은 **문법이 간결**하여 **초보 개발자 및 개발을 입문하는 사람들에게 매우 추천되는 언어**입니다. 백엔드 개발을 위해 파이썬을 이용한다면 **Flask Framework**를 이용하여 백엔드개발을 진행할 수 있습니다.

</br>

### JavaScript
<p align="center">
    <img src = "/image/자바스크립트이미지.png">
</p>

자바스크립트는 **프론트엔드 개발을 진행할때도 사용**되는 언어입니다. 이를 장점으로 삼아 백엔드개발을 진행할때 자바스크립트를 사용한다면 **프론트와 백엔드 모두 자바스크립트로 개발**을 진행할 수 있다는 큰 장점이 존재합니다. 
자바스크립트 같은 경우에는 **Node.js**와 같은 라이브러리를 이용하여 백엔드 개발이 가능힙니다.

</br>

### MySQL
<p align="center">
    <img src = "/image/mysql이미지.png">
</p>

웹에 존재하는 데이터들을 조직화하여 관리하기 위해 **데이터베이스**라는 개념이 나타나게 되었는데요. 이러한 데이터베이스는 데이터 쿼리들을 효율적으로 관리하고 수행하기 위해 테이블에서 행과 열로 구현되어 있습니다. 이를 통해 데이터에 쉽게 접근하고 **Create, Read, Update, Delete (CRUD)** 구성이 가능한데요. 대부분의 데이터베이스는 SQL를 사용하며, 이 중 하나가 MySQL입니다.

</br>
</br>


### 📌 끝마치며

이번 시간에는 웹에서의 프론트엔드 개념과 백엔드 개념에 대해서 살펴보았는데요. 프론트엔드와 백엔드는 서로 상호작용을 진행하며 백엔드에서는 클라이언트의 요구사항 및 요청을 받아 작업을 진행하고, 전달하여 프론트엔드에서 클라이언트에게 보여주는 역할을 진행한다고 생각하면 쉽게 이해가 가능합니다. 땔래야 땔 수 없는 관계인 프론트와 백, 더 알고 싶어지지 않으신가요? 😊