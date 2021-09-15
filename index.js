//let 이름 :string = 'Kim';
//이름이라는 변수에는 string(문자)만 올 수 있습니다~
//string, number, boolean, null, undefined, bigint, [] ,{}등이 타입이 될 수 있다.
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
