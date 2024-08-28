package com.positive.portfolio.positive;

import com.positive.portfolio.positive.mapper.HobbyMapper;
import com.positive.portfolio.positive.mapper.UserMapper;
import com.positive.portfolio.positive.vo.HobbyVO;
import com.positive.portfolio.positive.vo.UserVO;
import org.junit.jupiter.api.Test;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

@SpringBootTest
@MapperScan("com.positive.portfolio.positive.mapper")
class UserApplicationTests {


    @Autowired
    private UserMapper userMapper;

    @Autowired
    private HobbyMapper hobbyMapper;

//    int[][] intArr = {{,}};
//
//    String[][] StringArr = {{}};

    @Test
    void contextLoads() {

    }

    @Test
    public void insert() {
        Date date = new Date();
        LocalDateTime localDateTime = date.toInstant() // Date -> Instant
                .atZone(ZoneId.systemDefault()) // Instant -> ZonedDateTime
                .toLocalDateTime(); // ZonedDateTime -> LocalDateTime

        userMapper.insertUser(new UserVO(0, "", "", "", "", "", "", "", localDateTime, "user"));
//        umapper.insertUser(a);
    }

    @Test
    public void getUserList() {
        userMapper.userList().forEach(i -> System.out.println(i));
    }

//    @Test
//    public void idcheck() {
//        UserVO v = userMapper.userByRole("host");
//        System.out.println(v);
//    }

//    @Test
//    public void insertUser() {
//            UserVO a = new UserVO(0, "", "", "",, );
//            a.setAddress();
//            a.setName();
//            a.setPhone();
//            umapper.insertUser(a);
//        }


}
