/* interface란?
interface는 타입을 정의하는 것이다.
interface는 타입스크립트에서만 사용할 수 있는 문법이다.
interface는 객체의 타입을 정의할 때 사용한다.
interface는 클래스와 비슷하지만 클래스보다 더 많은 기능을 제공한다.
interface는 클래스와 달리 컴파일 후에는 사라진다.
interface는 클래스와 달리 접근 제한자를 사용할 수 없다.
interface는 클래스와 달리 속성에 기본 값을 할당할 수 없다.
interface는 클래스와 달리 속성에 static 키워드를 사용할 수 없다.
interface는 클래스와 달리 extends 키워드를 사용할 수 없다.
interface는 클래스와 달리 implements 키워드를 사용할 수 없다.
interface는 클래스와 달리 생성자를 사용할 수 없다.
interface는 클래스와 달리 new 키워드를 사용할 수 없다. */

export interface IVariables {
  condition: string;
  todo: string;
}
