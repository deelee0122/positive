package com.positive.portfolio.positive.controller;

import com.positive.portfolio.positive.mapper.LoginMapper;
import com.positive.portfolio.positive.mapper.UserMapper;
import com.positive.portfolio.positive.vo.LoginVO;
import com.positive.portfolio.positive.vo.UserVO;
import jakarta.servlet.http.HttpSession;
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
    public LoginVO login(@RequestBody LoginVO vo, HttpSession session) {
        System.out.println("controller vo : " + vo);
        LoginVO vo2 = loginMapper.login(vo);
        System.out.println("vo2 db : " + vo2);
        if(vo2!=null)      session.setAttribute("login", vo2);
        return vo2 != null ? vo2 : null;
    }

    @PostMapping("/searchPw")
    public LoginVO SearchPw(@RequestBody LoginVO vo) {
        System.out.println("controller vo : " + vo);
        LoginVO vo2 = loginMapper.searchPW(vo);
        System.out.println("vo2 db : " + vo2);
        return vo2 != null ? vo2 : null;
    }

    @GetMapping("/myInfo")
    public LoginVO MyInfo( HttpSession session){
        System.out.println("뭐가 들어오나? " + session);
//        int uno1 = uno;
        LoginVO login = (LoginVO) session.getAttribute("login");
        //UserVO vo2 =  userMapper.getMyInfo(uno1);
        System.out.println("뭐가 나가나?" +  login);
        return login ;
    }

    @GetMapping("/logout")
    public String logout(HttpSession session){
        System.out.println("여기 들어와야지 로그아웃 ");
        session.invalidate();
        return "로그아웃되었습니다";
    }

    @GetMapping("/loginCheck")
    public LoginVO loginCheck(HttpSession session){
        System.out.println("로그인 체크");
        return (LoginVO)session.getAttribute("login");
    }

    @PostMapping("/updateInfo")
    public LoginVO update(HttpSession session){
        System.out.println("로그인 체크");
        return (LoginVO)session.getAttribute("login");
    }

//    @PostMapping("/Mypage")
}
