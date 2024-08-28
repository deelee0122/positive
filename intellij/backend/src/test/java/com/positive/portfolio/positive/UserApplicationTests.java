package com.positive.portfolio.positive;

import com.positive.portfolio.positive.mapper.HobbyMapper;
import com.positive.portfolio.positive.mapper.UserMapper;
import com.positive.portfolio.positive.vo.HobbyVO;
import com.positive.portfolio.positive.vo.UserVO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

@SpringBootTest
class UserApplicationTests {


	@Autowired
	private UserMapper mapper;
	@Test
	void contextLoads() {

	}

	@Test
	public void insert(){
		Date date = new Date();
		LocalDateTime localDateTime = date.toInstant() // Date -> Instant
				.atZone(ZoneId.systemDefault()) // Instant -> ZonedDateTime
				.toLocalDateTime(); // ZonedDateTime -> LocalDateTime

		mapper.insertUser(new UserVO(1,"aaa","홍길동","1234","a@naver.com","홍","길동","111",localDateTime,"host"));
	}

	@Test
	public void idcheck(){
		UserVO v = mapper.userByRole("host");
		System.out.println(v);
	}

}
