package com.positive.portfolio.positive.controller;

import com.positive.portfolio.positive.mapper.LoginMapper;
import com.positive.portfolio.positive.mapper.UserMapper;
import com.positive.portfolio.positive.vo.LoginVO;
import com.positive.portfolio.positive.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")

public class UserController {

    @Autowired
    public UserMapper userMapper;

    @Autowired
    public LoginMapper loginMapper;


    @GetMapping("/list")
    public List<UserVO> userList() {//회원 전체 조회
        System.out.println("user input controller list page");
        return userMapper.userList();
    }

    @PostMapping("/signup")
    public String insert(@RequestBody UserVO vo) { //회원가입
        System.out.println("UserController.insert" + vo);
        int cnt = userMapper.insertUser(vo);
        return cnt != 0 ? "성공" : "실패";
    }


    @PostMapping("/login")
    public String login(@RequestBody LoginVO vo) {
        System.out.println("controller vo : " + vo);
        LoginVO vo2 = loginMapper.login(vo);
        System.out.println("vo2 db : " + vo2);
        return vo2 != null ? "성공" : "실패";
    }

    @PostMapping("/searchPw")
    public LoginVO SearchPw(@RequestBody LoginVO vo) {
        System.out.println("controller vo : " + vo);
        LoginVO vo2 = loginMapper.searchPW(vo);
        System.out.println("vo2 db : " + vo2);
        return vo2 != null ? vo2 : null;
    }

//    @PostMapping("/Mypage")
}
