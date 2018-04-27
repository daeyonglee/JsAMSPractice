-- 기존 테이블 삭제
drop table accounts;

-- 테이블 생성
create table accounts (
  accType number(1) not null,
  accNum varchar2(14) not null,
  accNm varchar2(20) not null,
  accPw number(4) not null,
  restMoney number(8),
  borrowMoney number(8),
  regdate date default sysdate
);

-- 제약 조건 추가
alter table accounts add constraint acc_pk primary key (accNum);
alter table accounts add constraint acc_ck check(accType in (1, 2));

-- 데이터 삽입
insert into accounts
       (
         accType
       , accNum
       , accNm
       , accPw
       , restMoney
       , borrowMoney
       ) values (
         1
       , '1111-2222-3333'
       , '임꺽정'
       , 1234
       , 100000
       , 50000
       );

insert into accounts
       (
         accType
       , accNum
       , accNm
       , accPw
       , restMoney
       , borrowMoney
       ) values (
         1
       , '1112-2223-3334'
       , '홍길동'
       , 4567
       , 120000
       , 5000
       );

insert into accounts
       (
         accType
       , accNum
       , accNm
       , accPw
       , restMoney
       , borrowMoney
       ) values (
         1
       , '2222-3333-4444'
       , '둘리'
       , 5555
       , 400000
       , 110000
       );

commit;
-- 데이터 조회
select *
  from accounts;
  
-- 사용자 전체 조회

  