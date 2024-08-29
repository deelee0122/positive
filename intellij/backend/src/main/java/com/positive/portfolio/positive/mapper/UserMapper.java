package com.positive.portfolio.positive.mapper;

import com.positive.portfolio.positive.vo.HobbyVO;
import com.positive.portfolio.positive.vo.UserVO;
import org.apache.catalina.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    public int insertUser(UserVO vo);
    public List<UserVO> userList();
    public UserVO userByRole(String role);
    public UserVO getMyInfo(int no);
}
