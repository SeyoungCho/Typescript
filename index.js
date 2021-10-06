var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//let 이름 :string = 'Kim';
//이름이라는 변수에는 string(문자)만 올 수 있습니다~
//string, number, boolean, null, undefined, bigint, [] ,{}등이 타입이 될 수 있다.
import { 이름1, 나이 } from './a';
var 이름 = '조세영';
var age = 27;
var placeOfBirth = 'Busan';
var myFavSinger = {
    name: 'JTONG',
    song: '구구가가'
};
var project = {
    member: ['Kim', 'Park'],
    days: 30,
    started: true,
};
//회원들에는 string이나 number가 들어올 수 있는 배열형이다
var 회원들 = [1, '2', 3];
var 오브젝트 = { a: '123' };
var 이름2;
이름2 = 123;
이름2 = [];
var 암거나;
var user = 'kim';
var age2 = undefined;
var married = false;
var 철수 = [user, age2, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function 함수(x) {
    if (typeof x === 'string') {
        console.log(x);
    }
    else {
        console.log('이름이 없습니다');
    }
}
함수();
function 자릿수세기(x) {
    var tmp = x.toString();
    console.log(tmp.length);
}
자릿수세기(12345);
function 결혼가능하냐(income, haveHouse, attractionPt) {
    var total = income;
    if (haveHouse)
        total += 500;
    if (attractionPt === '상')
        total += 100;
    if (total >= 500)
        return '결혼가능';
    else { }
    ;
}
console.log(결혼가능하냐(300, true, '중'));
var 여친 = {
    name: '엠버'
};
var seyoung = {
    name: '조세영',
    age: 27,
    region: '서울'
};
var testObj = {
    color: 'red',
    size: 256,
    position: [112, 433]
};
var 회원가입정보 = {
    name: '조세딱',
    phone: 84132266,
    email: 'wnl383@naver.com',
    isMinor: false
};
console.log(회원가입정보);
function 가위바위보(x) {
    return [x];
}
가위바위보('보');
var 자료 = {
    name: 'kim'
};
function 내함수(a) {
    return console.log('내함수가 호출되었다' + ' 파라미터값은 ' + a + '이다');
}
console.log(자료.name);
내함수(자료.name);
var 회원정보 = {
    name: 'kim',
    age: 34,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { }
};
var cutZero = function (x) {
    if (x[0] === '0') {
        return x.substring(1);
    }
    else {
        return x;
    }
};
console.log(cutZero('01123f'));
var removeDash = function (x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
};
console.log(removeDash('sl--rl-ad'));
var integratedFunc = function (x, y, z) {
    console.log(z(y(x)));
};
integratedFunc('010-1111-2222', cutZero, removeDash);
var 제목 = document.querySelector('#title');
if (제목 != null) {
    제목.innerHTML = '반가워요';
}
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
    if (제목 instanceof HTMLHeadingElement) {
        제목.style.color = 'red';
    }
});
var 사진 = document.querySelector('#img');
var 이미지변경버튼 = document.querySelector('#imgChange');
이미지변경버튼 === null || 이미지변경버튼 === void 0 ? void 0 : 이미지변경버튼.addEventListener('click', function () {
    if (사진 instanceof HTMLImageElement) {
        사진.src = 'test2.jpg';
    }
});
var 링크2 = document.querySelectorAll('.naver');
var 링크변경버튼 = document.querySelector('#linkChange');
링크변경버튼 === null || 링크변경버튼 === void 0 ? void 0 : 링크변경버튼.addEventListener('click', function () {
    링크2.forEach(function (a) {
        if (a instanceof HTMLAnchorElement) {
            a.href = 'https://kakao.com';
        }
    });
});
var People = /** @class */ (function () {
    function People(a) {
        this.name = a;
    }
    People.prototype.함수 = function (a) {
        console.log('안녕' + a);
    };
    return People;
}());
var human = new People('kim');
console.log(human.name);
console.log(human.함수('기모창'));
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());
var Word = /** @class */ (function () {
    function Word() {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        var numbers = [];
        var strings = [];
        a.forEach(function (element) {
            if (typeof element === 'number') {
                numbers.push(element);
            }
            else if (typeof element === 'string') {
                strings.push(element);
            }
        });
        this.num = numbers;
        this.str = strings;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);
var 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'Phone'] };
var 장바구니 = [{ product: '청소기', price: 7000, card: true }, { product: '삼다수', price: 800 }];
console.log(장바구니);
var mathObj = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
function 함수2(animal) {
    if ('swim' in animal) {
        return 'Fish';
    }
    else if ('fly' in animal) {
        return 'Bird';
    }
}
var 날짜 = new Date();
if (날짜 instanceof Date) {
    console.log(날짜);
}
function 함수3(x) {
    if (x.wheel === '4개') {
        console.log('x는 Car 타입이에요');
    }
}
function 함수4(parameter) {
    if (typeof parameter === 'string') {
        console.log(parameter);
    }
    else {
        console.log(parameter);
    }
}
var User2 = /** @class */ (function () {
    function User2(a) {
        this.familyName = 'Kim';
        this.name = a + this.familyName;
    }
    User2.prototype.이름변경함수 = function () {
        this.familyName = 'Park';
    };
    return User2;
}());
var 유저1 = new User2('민수'); //user1의 name은 민수킴
console.log(유저1.name);
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    return Person2;
}());
var 자식 = new Person2('Kim');
console.log(자식.name);
var User4 = /** @class */ (function () {
    function User4() {
        this.x = 10;
    }
    return User4;
}());
var NewUser2 = /** @class */ (function (_super) {
    __extends(NewUser2, _super);
    function NewUser2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewUser2;
}(User4));
var a = new NewUser2();
console.log(a);
var User3 = /** @class */ (function () {
    function User3() {
        this.intro = 'js 전문가입니다';
    }
    User3.skill = 'js';
    return User3;
}());
var 철수2 = new User3();
console.log(철수2);
User3.skill = 'ts';
var 철수3 = new User3();
console.log(철수3);
var User5 = /** @class */ (function () {
    function User5() {
    }
    User5.addOne = function (a) {
        User5.x = User5.x + a;
    };
    User5.printX = function () {
        console.log(User5.x);
    };
    User5.x = 10;
    User5.y = 20;
    return User5;
}());
User5.addOne(3);
User5.addOne(4);
User5.printX();
var Square = /** @class */ (function () {
    function Square(a, b, c) {
        this.width = a;
        this.height = b;
        this.color = c;
    }
    Square.prototype.draw = function () {
        var randomBox = document.createElement('div');
        randomBox.style.width = this.width + 'px';
        randomBox.style.height = this.height + 'px';
        randomBox.style.backgroundColor = this.color;
        randomBox.style.left = Math.random() * 300 + 'px';
        randomBox.style.top = Math.random() * 300 + 'px';
        randomBox.style.display = 'block';
        randomBox.style.position = 'relative';
        document.body.appendChild(randomBox);
    };
    return Square;
}());
var 네모 = new Square(30, 30, 'red');
네모.draw();
네모.draw();
네모.draw();
네모.draw();
console.log(이름1, 나이);
function 함수5(x) {
    return x[0];
}
var b = 함수5([4, 2]);
console.log(b);
function 함수6(x) {
    return x[0];
}
var c = 함수6([4, 2]);
function 함수7(x) {
    return x.length;
}
var d = 함수7(['100']);
console.log(d);
