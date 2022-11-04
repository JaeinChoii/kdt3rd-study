-- DDL
-- Data Definiton Language: 데이터베이스/테이블 정의

-- [데이터베이스 관련 명령어]
-- 1. 데이터베이스 생성 (+ 한글 인코딩)
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- 2. 데이터베이스 생성 확인 (목록 조회)
SHOW databases;

-- 3. 데이터베이스 사용 선언
USE kdt;

-- 4. 데이터베이스 삭제
DROP DATABASE kdt;


-- [테이블 관련 명령어]
-- 1. 테이블 생성
/*
CREATE TABLE 테이블명 (
    필드1 값형식,
    필드2 값형식
)
*/
-- 제약조건
-- NOT NULL: NULL 허용 x
-- AUTO_INCREMENT: 자동 숫자 증가
-- PRIMARY KEY: 기본키!
-- DEFAULT: 기본 값
-- UNIQUE: 중복 허용 x
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100) NOT NULL DEFAULT '기본 주소'
);

-- 2. 테이블 목록 확인
SHOW tables;

-- 3. 테이블 구조 확인
DESC user;

-- 4. 테이블 삭제
-- DROP: 다 삭제 (구조 자체를 삭제)
-- TRUNCATE: 초기화 (모든 행 삭제)
DROP TABLE user;
TRUNCATE TABLE user;


-- 5. 테이블 수정 (구조 수정)
-- 5-1. 컬럼 추가 (ADD)
ALTER TABLE user ADD new_column VARCHAR(10);

-- 5-2. 컬럼 수정 (MODIFY)
ALTER TABLE user MODIFY new_column INT;

-- 5-3. 컬럼 삭제 (DROP)
ALTER TABLE user DROP new_column;



-- #####################################################################
-- DML
-- Data Mainpulation Language: 데이터 조작어
-- 내부 데이터를 관리하기 위한 언어

DROP TABLE user;
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);
DESC user; -- 생성한 테이블 구조 확인

-- [Create - INSERT]
-- : 데이터 추가
-- 참고) AUTO_INCREMENT 컬럼의 값은 굳이 넣지 않으면 알아서 증가
-- NULL 이라고 넣으면 알아서 숫자가 지정되기도 함
-- 주의) AUTO_INCREMENT 컬럼은 반드시 PK(기본키, primary key)여야 함
INSERT INTO user (name, age, address) VALUES ('김민정', 20, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES ('이지수', 30, '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUES ('최솔이', 22, '대구광역시 동구');
INSERT INTO user (name, age, address) VALUES ('한소희', 25, '부산광역시 관악구');
INSERT INTO user (name, age, address) VALUES ('정세희', 19, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES ('이한이', 23, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES ('이지은', 32, '부산광역시 동구 ');
INSERT INTO user (name, age, address) VALUES ('윤세희', 37, '강원도 강릉시');
INSERT INTO user (name, age, address) VALUES ('박수진', 26, '충청남도 공주시');
INSERT INTO user (name, age, address) VALUES ('박찬희', 40, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES ('권희수', 36, '서울특별시 영등포구');

-- [Read - SELECT]
-- 데이터 읽기(조회)
-- * : all 
-- id, name, age, address
SELECT * FROM user; -- 해당 테이블의 "전체 컬럼"을 조회
SELECT name FROM user; -- 이름 컬럼만 조회
SELECT age, name FROM user; -- 나이, 이름 컬럼 조회
SELECT id, address FROM user; -- id, 주소 컬럼 조회

-- WHERE절: 특정 조건을 만족하는 행(record, tuple) 선택
SELECT * FROM user WHERE age >= 25; -- 나이가 25 이상인 사람 
SELECT * FROM user WHERE id = 7; -- id가 7인 사람
SELECT name FROM user WHERE id = 7; -- id가 7인 사람의 이름만 조회
SELECT id, age FROM user WHERE name = '이지은'; -- 이름이 '이지은'인 사람의 id, age 조회

-- ORDER BY절: 데이터 정렬
-- ASC: 오름차순 (기본값)
-- DESC: 내림차순
SELECT * FROM user ORDER BY age DESC; -- age 컬럼 내림차순
SELECT * FROM user WHERE id > 6 ORDER BY age ASC; -- id 6초과인 사람 중에서 age 컬럼 오름차순
SELECT * FROM user ORDER BY name ASC; -- name 컬럼 오름차순 정렬 (가나다순)

-- LIKE: 패턴 조회
-- %: 0개 이상의 문자
-- _: 1개의 단일 문자
SELECT * FROM user WHERE address LIKE '서울%'; -- '서울'로 시작하는 주소인 데이터 
SELECT * FROM user WHERE name LIKE '__희'; -- 이름의 마지막 글자가 '희'인 데이터
-- 질문) 구문에서 이름이 4글자이거나 2글자인 사람은 제외되는 건가요? 네!
SELECT * FROM user WHERE name LIKE '%희%'; -- 이름에 '희'가 있는 데이터
SELECT * FROM user WHERE address LIKE '%광역%'; -- 주소에 '광역'이 포함된 데이터
SELECT * FROM user WHERE name LIKE '__희' ORDER BY age DESC;
-- 이름의 마지막 글자가 '희'인 사람들 나이 기준으로 내림차순

-- LIMIT: 데이터 개수 제한
SELECT * FROM user LIMIT 3;
SELECT * FROM user WHERE address LIKE '서울%' LIMIT 2;

-- BETWEEN a AND b: 사이값 조회
SELECT * FROM user WHERE age BETWEEN 25 AND 30;

-- IN (list): 리스트 있는 것 중에 일치하면 참
SELECT * FROM user WHERE age IN (20, 21, 22, 23);

-- IS NULL
-- IS NOT NULL
INSERT INTO user (name, age) VALUES ('서현승', 28);
SELECT * FROM user;

SELECT * FROM user WHERE address IS NULL;
SELECT * FROM user WHERE address IS NOT NULL;

-- 논리연산자: AND, OR, NOT
SELECT * FROM user WHERE address IS NOT NULL AND age < 25;
SELECT * FROM user WHERE address IS NOT NULL OR age < 25;
SELECT * FROM user WHERE name LIKE '이%' and age = 23; -- 이씨이자 23세인 사람

-- [Update - UPDATE]
-- : 데이터 갱신(수정)
-- 참고) Error Code: 1175.
-- 테이블 데이터를 update/delete하려고 할 때 key 컬럼을 이용해서 수정/삭제하는 것이 바람직
UPDATE user SET address = '서울특별시 강북구' WHERE id = 1;
UPDATE user SET address = '제주특별자치도 제주시', name = '이지현' WHERE id = 2;

-- 주의) update where절 미사용시, 모든 행의 데이터가 변경됨 
-- update에서는 where절이 항상 따라다님

-- [Delete - DELETE]
-- : 데이터 삭제
-- 주의) delete where절 미사용시, 모든 행의 데이터가 삭제됨 
-- delete에서는 where절이 항상 따라다님
DELETE FROM user WHERE id = 11;
DELETE FROM user WHERE id > 8;

CREATE TABLE user (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM( 'F', 'M', '') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);

INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('power70', 'qxur8sd', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('widowmaker', '38ewifh3', '위도우', 'F', '1967-06-27', 47);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('dvadava', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('jungkrat', '4ifha7f', '정크렛', 'M', '1999-11-11', 24);


SELECT * FROM user ORDER BY birthday ASC; 

SELECT * FROM user WHERE gender = 'M' ORDER BY name DESC; 

SELECT id, name FROM user WHERE birthday LIKE '19%%-%%-%%'; 

SELECT * FROM user WHERE birthday LIKE '%%%%-06-%%' ORDER BY birthday ASC;

SELECT * FROM user WHERE gender = 'M' AND birthday LIKE '197%-%%-%%'; 

SELECT * FROM user WHERE age >= 25 AND age <= 50; 

SELECT * FROM user ORDER BY age DESC limit 3;

UPDATE user SET id = 12345678 WHERE id = 'hong1234';

DELETE FROM user WHERE id = 'jungkrat';


-- #############################################################
-- DCL
-- Data Control Language: 데이터 제어어
-- 데이터베이스에 접근해 읽거나 쓰는 것을 제한할 수 있는 권한 부여/박탈

-- GRANT 
-- REVOKE

-- # database 심화
SHOW DATABASES;
USE kdt;
SHOW TABLES;

-- #############################################################
-- [PK, FK 연결하기]
-- 1. 기본 키 제약 조건
-- : 고객 테이블에 기본키를 설정

-- 고객(customer) 테이블 생성
CREATE TABLE customer (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday date NOT NULL
);

-- 고객(customer) 테이블 데이터 추가
INSERT INTO customer (id, name, birthday) VALUES ('AAA', '김이현', '1990-03-17');
INSERT INTO customer (id, name, birthday) VALUES ('bbb', '최한율', '1990-03-17');
INSERT INTO customer (id, name, birthday) VALUES ('ccc', '김이안', '1995-06-13');


-- #############################################################
-- 2. 외래키 제약조건
-- : 두 테이블 사이의 관계를 만들어줌
-- 다른 테이블의 기본키(PK)를 현재 테이블의 외래키로 연결함
-- 기준 테이블: 기본키를 갖는 테이블
-- 참조 테이블: 외래키가 있는 테이블
-- 형식: FOREIGN KEY(열_이름) REFERENCES 기준_테이블(열_이름)

-- ON UPDATE CASCADE: 기존 테이블의 데이터가 변경되면 참조 테이블의 데이터도 변경됨
-- ON DELETE CASCADE: 기존 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제됨

-- 주문목록(orderlist) 테이블 만들기
CREATE TABLE orderlist (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    customer_id VARCHAR(20) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    FOREIGN KEY(customer_id) REFERENCES customer(id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- 주문목록(orderlist) 테이블 데이터 추가
INSERT INTO orderlist (id, customer_id, product_name, quantity) VALUES (1, 'aaa', '맥북m1', 1);
INSERT INTO orderlist (id, customer_id, product_name, quantity) VALUES (2, 'bbb', '빅파이', 31);
INSERT INTO orderlist (id, customer_id, product_name, quantity) VALUES (3, 'ccc', '키보드', 3);
INSERT INTO orderlist (id, customer_id, product_name, quantity) VALUES (4, 'bbb', '초코파이', 5);
INSERT INTO orderlist (id, customer_id, product_name, quantity) VALUES (5, 'ccc', '귀여운텀블러', 1);



-- #############################################################
-- [JOIN, 조인]
-- : 두 테이블을 묶어서 하나의 테이블을 만듦
-- 두 테이블을 엮어서 원하는 형태로 보고싶을 때
-- ex.
-- customer(id, name, birthday) / orderlist(id, customer_id, product_name, quantity)
-- 하나의 큰 테이블(customer_id, product_name, quantity, name, birthday)


-- *일대 다 관계(one to many)
-- (1) A 테이블에는 하나의 값만 존재
-- (2) B 테이블에는 여러개의 값이 존재
-- ex. 한 회원(A)은 여러 개의 주문(B) 정보를 가질 수 있음
--      => 즉, 회원은 한 명(one)이지만 구매를 여러 번(many) 가능!

/*
SELECT 열_목록
FROM tableA
    INNER JOIN tableB
    ON 조인_조건
[WHERE 검색_조건]
*/

SELECT * FROM customer;
SELECT * FROM orderlist;

SELECT *
FROM customer
    INNER JOIN orderlist
    ON customer.id = orderlist.customer_id;
    
SELECT *
FROM customer
    INNER JOIN orderlist
    ON customer.id = orderlist.customer_id
WHERE quantity >= 5;

-- 유저아이디를 기준으로 customer와 orderlist 조인(일부 컬럼 이름에 별명을 붙여 모든 행 보기)
SELECT orderlist.id as order_id, customer.id as user_id, orderlist.product_name, orderlist.quantity
FROM customer
    INNER JOIN orderlist
    ON customer.id = orderlist.customer_id;
    
-- 유저아이디를 기준으로 customer와 orderlist 조인(일부 컬럼 이름에 별명을 붙여 조건을 만족하는 행 보기)
SELECT orderlist.id as order_id, customer.id as user_id, orderlist.product_name, orderlist.quantity
FROM customer
    INNER JOIN orderlist
    ON customer.id = orderlist.customer_id
WHERE orderlist.id = 3;
    

