package com.positive.portfolio.positive;

import com.positive.portfolio.positive.mapper.HobbyMapper;
import com.positive.portfolio.positive.vo.HobbyVO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class PositiveApplicationTests {


	@Autowired
	private HobbyMapper mapper;
	@Test
	void contextLoads() {

	}

	@Test
	public void insert(){
		mapper.insertHobby(new HobbyVO());
	}

}
