package com.positive.portfolio.positive.controller;

import com.positive.portfolio.positive.mapper.UserMapper;
import com.positive.portfolio.positive.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")

public class HobbyController {
    @Autowired
    public UserMapper userMapper;

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

//    @PostMapping("/login")
//    public String login(@RequestBody UserVO loginVO) {//로그인
//        System.out.println("UserController.login 1) "+loginVO);
//        UserVO u = userMapper.login(loginVO);
//        System.out.println("UserController.login db success  2) "+u);
//        return u != null?"로그인 성공":"로그인 실패";
//    }
}
