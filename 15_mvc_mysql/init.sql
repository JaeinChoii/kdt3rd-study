-- 한글 입력 깨짐현상 해결
-- chcp 65001, chcp 949

-- 데이터베이스 목록 보기

SHOW databases;

-- (데이터베이스 생성)
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- 데이터베이스 선택(사용)
USE kdt;

-- 데이터베이스 내 테이블 목록 보기
SHOW tables;

-- #############################
-- DDL
-- 테이블 생성
CREATE TABLE visitor (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    comment MEDIUMTEXT
);

-- 테이블 구조 확인
DESC visitor;

-- DML
-- 테이블 전체 데이터 조회 (READ)
SELECT * FROM visitor; -- all
SELECT * FROM visitor WHERE id=1; -- one


-- 테이블 데이터 추가 (CREATE)
-- id는 AUTO_INCREMENT(자동증가)이므로 입력하지 않아도 됨!
INSERT INTO visitor (name, comment) VALUES ('커피조아', '커피마셔요');
INSERT INTO visitor (name, comment) VALUES ('행복', '사랑합니다');
INSERT INTO visitor (name, comment) VALUES ('최재인', '안냐떼용ㅋ');
INSERT INTO visitor (name, comment) VALUES ('이안', 'ㅎㅎhi');
INSERT INTO visitor (name, comment) VALUES ('JustinBieber', 'Drew');


-- 테이블 데이터 삭제 (delete)
DELETE FROM visitor WHERE id > 2;

-- 테이블 데이터 수정 (update)
UPDATE visitor SET name='누구', comment= '아무말' WHERE id=1;

-- DCL
-- mysql 사용자 추가(권한 부여) user 계정
CREATE USER 'user'@'%' IDENTIFIED BY '0738';
-- user 계정에 db 권한 부여
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

-- 비밀번호 변경하고 싶다면?
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '비밀번호';

ALTER TABLE visitor MODIFY name VARCHAR(10);

