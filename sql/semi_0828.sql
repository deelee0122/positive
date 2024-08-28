create database hobbydb;
use hobbydb;

show tables;

drop table hobby_tbl;
create table hobby_tbl(
	hobby_id int primary key auto_increment,
    hname varchar(100) not null,
    hcategory varchar(50) not null,
    hprice int not null,
    hreview varchar(1000),
    hplace varchar(100),
    hdate date
);

drop table User_tbl;
create table User_tbl (
	uno  int primary key auto_increment, 
	user_id varchar(50) NOT NULL,
	username varchar(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    date_of_birth DATE NOT NULL,
    role varchar(10)
     CONSTRAINT CHK_Person CHECK (role in(  'user', 'admin', 'host'))
);

select * from user_tbl;

insert into customer values('user_001', '서혜인', 'P@ssw0rd123!', 'hyein@example.com' , '혜인', '서', '010-1234-5678', '1995-05-21', 'admin'); 
insert into customer values('user_002',	'이혜리', 'Secure!2024', 'hyeri@example.com'	, '혜리', '이', '010-2345-6789', '1996-09-20', 'user');
insert into customer values('user_003', '박보근', 'MyP@ssw0rd#1', 'bogeun@example.com', '보근', '박', '010-8465-8453', '1997-05-01', 'moderator');
insert into customer values('user_004', '안성주', '!Qwerty1234', 'seongju@example.com', '성주', '안', '010-8722-1234', '1998-01-08', 'guest');
insert into customer values('user_005', '박지열', 'Admin$2023', 'jiyeol@example.com', '지열', '박', '010-4523-8712', '1999-09-09', 'superadmin');
insert into customer values('user_006', '김영준', 'Pa$$w0rd!@', 'youngjoon@example.com', '영준', '김', '010-9871-8421', '2000-03-08', 'editor');
insert into customer values('user_007', '김혜수', 'StrongPwd#45', 'hyesoo@example.com', '혜수', '김', '010-8715-5135', '2001-09-14', 'contributor');
insert into customer values('user_008', '조무암', 'Passw0rd!@#', 'mooarm@example.com', '무암', '조', '010-1238-8413', '2002-06-15', 'subscriber');
insert into customer values('user_009', '최현재', '1234$ecure!', 'hyunjae@example.com', '현재', '최', '010-5235-9413', '2003-03-02', 'support');
insert into customer values('user_010', '유세현', 'P@$$W0rd987', 'sehyun@example.com', '세현', '유', '010-2487-7132', '2004-02-21', 'manager');


select * from hobby_tbl;

insert into hobby_tbl (hcategory, hname, hprice) values ("fitness", "헬스부터 격투기까지! 독코치의 올인원 프로그램으로 변화를!", 30000);
insert into hobby_tbl (hcategory, hname, hprice) values ("fitness", "다이어트의 필수요소! 식단관리!!(예약가능)", 10000);
insert into hobby_tbl (hcategory, hname, hprice) values ("fitness", "삶의 질을 높여주는 체형교정 필라테스&피티", 22000);
insert into hobby_tbl (hcategory, hname, hprice) values ("fitness", "에너지를 채워주는 요가", 25000);
insert into hobby_tbl (hcategory, hname, hprice) values ("fitness", "홈트 PT 배우고 나만의 인생사진 GO!", 25000);

insert into hobby_tbl (hcategory, hname, hprice) values ("beauty", "[강남/신논현] 작은얼굴 V라인, 종아리 관리 #플로라", 38000);
insert into hobby_tbl (hcategory, hname, hprice) values ("beauty", "청담동미용실)원장님에게 받는 헤어시술 신년 강남 원데이 퍼스널컬러", 44000);
insert into hobby_tbl (hcategory, hname, hprice) values ("beauty", "[에스테틱] 피토메르 스페셜 케어 (예약 가능)", 38000);
insert into hobby_tbl (hcategory, hname, hprice) values ("beauty", "[당일예약 가능] 아픔을 최소화하는 '퀵왁싱' 노하우 시술! (논현점)", 5500);
insert into hobby_tbl (hcategory, hname, hprice) values ("beauty", "현직 패션MD와 함께 하는 속성 패션 코디 & 스타일링", 140000);

insert into hobby_tbl (hcategory, hname, hprice) values ("diy", "도예 공방 원데이 / 도자기 그릇 만들기 (예약가능)", 35000);
insert into hobby_tbl (hcategory, hname, hprice) values ("diy", "완성작 무제한] 영화 속 물레로 나만의 도자기 만들기 [모아스튜디오]", 65000);
insert into hobby_tbl (hcategory, hname, hprice) values ("diy", "내가 원하는 꽃으로 디자인하는 나만의 플라워클래스", 39000);
insert into hobby_tbl (hcategory, hname, hprice) values ("diy", "[한남] 최상급 프랑스 향료로 나만의 향수 만들기", 50000);
insert into hobby_tbl (hcategory, hname, hprice) values ("diy", "가죽공예 카드지갑(3종) 만들기 in 우사단길 (예약 가능)", 40000);

insert into hobby_tbl (hcategory, hname, hprice) values ("cooking", "퇴근하고, 요리하고, 집밥 먹자! (예약 가능)", 79000);
insert into hobby_tbl (hcategory, hname, hprice) values ("cooking", "생일 상차림 요리! 퇴근하고 배워보자! (예약 가능)", 79000);
insert into hobby_tbl (hcategory, hname, hprice) values ("cooking", "한식 제대로 배우기", 60000);
insert into hobby_tbl (hcategory, hname, hprice) values ("cooking", "전통주 시음 & 채주 (술거르기) 체험 클래스", 42000);
insert into hobby_tbl (hcategory, hname, hprice) values ("cooking", "요리사가 되는 첫걸음 (예약 가능)", 40000);