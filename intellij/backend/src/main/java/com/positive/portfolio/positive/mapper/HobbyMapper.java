package com.positive.portfolio.positive.mapper;

import com.positive.portfolio.positive.vo.HobbyVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HobbyMapper {

    List<HobbyVO> hobbyList();

    HobbyVO findHobbyById(Long hobby_id);
}
