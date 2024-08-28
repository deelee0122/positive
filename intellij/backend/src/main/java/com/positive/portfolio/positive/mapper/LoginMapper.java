package com.positive.portfolio.positive.mapper;

import com.positive.portfolio.positive.vo.LoginVO;
import org.apache.ibatis.annotations.Mapper;


    @Mapper
    public interface LoginMapper {
        public LoginVO login(LoginVO vo);
        public LoginVO searchPW(LoginVO vo);

    }


