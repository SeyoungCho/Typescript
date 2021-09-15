//let 이름 :string = 'Kim';
//이름이라는 변수에는 string(문자)만 올 수 있습니다~
//string, number, boolean, null, undefined, bigint, [] ,{}등이 타입이 될 수 있다.
let 이름 :string = '조세영';
let age :number = 27;
let placeOfBirth :string = 'Busan';

type SingerInfo = {
  name : string,
  song : string;
}

let myFavSinger :SingerInfo = {
  name : 'JTONG',
  song : '구구가가'
}

type ProjInfo = {
  member : string[],
  days : number,
  started : boolean,
}

let project :ProjInfo = {
  member : ['Kim', 'Park'],
  days : 30,
  started : true,
}

//회원들에는 string이나 number가 들어올 수 있는 배열형이다
let 회원들 : ( string | number )[] = [1, '2', 3];
let 오브젝트 :{a:string | number } = {a : '123'};

let 이름2 : any;
이름2 = 123;
이름2 = [];

let 암거나 : unknown;

let user :string = 'kim';
let age2 :undefined | number = undefined;
let married :boolean = false;
let 철수 :( string | undefined | number | boolean)[]= [user, age2, married];


type 학교정보 = {
  score : (number | boolean)[],
  teacher : string,
  friend : string | string[]
}
let 학교 :학교정보={
  score : [100, 97, 84],
  teacher : 'Phil',
  friend :  'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];

function 함수(x? :string){
  if(typeof x === 'string'){
    console.log(x);
  }else{
    console.log('이름이 없습니다');
  }
}

함수();

function 자릿수세기(x :number){
  let tmp :string = x.toString();
  console.log(tmp.length);
  
}

자릿수세기(12345);

function 결혼가능하냐(income :number, haveHouse :boolean, attractionPt :string) : string | void{
  let total:number = income;
  if(haveHouse) total += 500;
  if(attractionPt === '상') total += 100;

  if(total >= 500) return '결혼가능';
  else{};
}

console.log(결혼가능하냐(300, true, '중'));

type Girlfriend = {
  readonly name : string
}

const 여친 :Girlfriend ={
  name : '엠버'
}

type Animal = {
  name : string,
  age : number
}
type Person = {
  name : string,
  region : string
}

type Life = Animal & Person;

let seyoung :Life = {
  name:'조세영',
  age: 27,
  region: '서울'
}

type NewType = {
  color? :string,
  size: number,
  readonly position: number[]
}

let testObj :NewType = {
  color: 'red',
  size: 256,
  position: [112, 433]
}

type User ={
  name: string,
  phone: number,
  email: string,
};
type Adult = { isMinor: boolean};
type NewUser = User & Adult;
let 회원가입정보 :NewUser = {
  name:'조세딱',
  phone: 84132266,
  email:'wnl383@naver.com',
  isMinor: false
}
console.log(회원가입정보);

function 가위바위보(x:'가위' | '바위' | '보') : ('가위' | '바위' | '보')[]{
  return [x];
}
가위바위보('보');

var 자료 = {
  name: 'kim' as 'kim'
}as const;
function 내함수(a :'kim'){
  return console.log('내함수가 호출되었다' + ' 파라미터값은 ' + a +'이다' );
}
console.log(자료.name);
내함수(자료.name);

type Member = {
  name : string,
  age : number,
  plusOne : ( x :number ) => number,
  changeName : () => void
}
let 회원정보 :Member = {
  name : 'kim',
  age : 34,
  plusOne(a){
    return a + 1;
  },
  changeName : ()=>{}
  
}

const cutZero = (x : string):string =>{
  if(x[0] === '0'){
    return x.substring(1);
  }else{
    return x;
  }
  
}
console.log(cutZero('01123f'));

const removeDash = (x : string):number=>{
  let result = x.replace(/-/g, "");
  return parseFloat(result);
}

console.log(removeDash('sl--rl-ad'));

const integratedFunc = (x: string, y: (a:string)=>string, z: (a:string)=>number) => {
  console.log(z(y(x)));
}
integratedFunc('010-1111-2222', cutZero, removeDash);

let 제목 = document.querySelector('#title');
if(제목 != null){
  제목.innerHTML = '반가워요';
}

let 링크 = document.querySelector('.link');
if(링크 instanceof HTMLAnchorElement){
  링크.href = 'https://kakao.com';
}

let 버튼 = document.querySelector('#button');
버튼?.addEventListener('click', ()=>{
  if(제목 instanceof HTMLHeadingElement){
    제목.style.color = 'red';
  }
});

let 사진 = document.querySelector('#img');
let 이미지변경버튼 = document.querySelector('#imgChange');
이미지변경버튼?.addEventListener('click',()=>{
  if(사진 instanceof HTMLImageElement){
    사진.src = 'test2.jpg';
  }
});

let 링크2 = document.querySelectorAll('.naver');
let 링크변경버튼 = document.querySelector('#linkChange');
링크변경버튼?.addEventListener('click', ()=>{
  링크2.forEach((a)=>{
    if(a instanceof HTMLAnchorElement){
      a.href = 'https://kakao.com';
    }
  })
});

class People {
  name :string;
  constructor(a :string){
    this.name=a;
  }

  함수(a: string){
    console.log('안녕' + a);
  }
}

let human = new People('kim');
console.log(human.name);
console.log(human.함수('기모창'));

class Car {
  model :string;
  price :number;
  constructor(a :string, b :number){
    this.model = a;
    this.price = b;
  }

  tax() :number{
    return this.price / 10;
  }
}

let car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());

class Word {
  num :number[];
  str :string[];

  constructor(...a: (string | number)[]){
    let numbers :number[] = [];
    let strings :string[] = [];
    a.forEach((element) =>{
      if(typeof element === 'number'){
        numbers.push(element);
      }else if(typeof element === 'string'){
        strings.push(element);
      }
    });

    this.num = numbers;
    this.str = strings;
  }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);

interface Product {
  brand : string,
  serialNumber : number,
  model : string[]
}

let 상품 :Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'Phone'] };

interface CartItem {
  product :string,
  price :number
}
type Cart = (CartItem | CartItemPlus)[];
interface CartItemPlus extends CartItem {
  card : boolean
}
let 장바구니 :Cart= [ { product : '청소기', price : 7000 , card : true}, { product : '삼다수', price : 800 } ] 

console.log(장바구니);

interface MathObj {
  plus(a:number, b:number):number,
  minus(a:number, b:number):number
}

let mathObj :MathObj = {
  plus(a,b){
    return a+b
  },
  minus(a,b){
    return a-b
  }
}

type Fish = {swim : string}
type Bird = {fly : string}

function 함수2(animal : Fish | Bird){
  if('swim' in animal){
    return 'Fish'
  }
  else if('fly' in animal){
    return 'Bird'
  }
}

let 날짜 = new Date();

if(날짜 instanceof Date){
  console.log(날짜);
}

type Car2 = {
  wheel: '4개',
  color: string
}

type Bike = {
  wheel: '2개',
  color: string
}

function 함수3(x: Car2 | Bike){
  if(x.wheel === '4개'){
    console.log('x는 Car 타입이에요');
  }
}

function 함수4(parameter : string){
  if(typeof parameter === 'string'){
    console.log(parameter);
  }else{
    console.log(parameter); 
  }
}

class User2{
  name :string;
  private familyName :string = 'Kim'
  constructor(a:string){
    this.name = a + this.familyName;
  }

  이름변경함수(){
    this.familyName = 'Park'
  }
}

let 유저1 = new User2('민수');  //user1의 name은 민수킴
console.log(유저1.name);

class Person2 {
  constructor(public name :string){

  }
  
}

let 자식 = new Person2('Kim');
console.log(자식.name);